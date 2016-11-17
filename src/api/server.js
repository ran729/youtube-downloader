var restify = require('restify');
var cmd=require('node-cmd');
var fs = require('fs');

function respond(req, res, next) {
  cmd.get("youtube-dl -o '"+ __dirname + "/%(title)s.mp4' --extract-audio --audio-format mp3 http://youtube.com/watch?v=" + req.params.id,
  	function(data) {
  			console.log(data);
	  		var videoname = data
	  						.match(/(?=Destination:)(.+?)(?=.mp4)/g)[0]
	  						.replace('Destination: ', '')
	  						.replace(__dirname+'/', '')
	  						 + '.mp3';
  			console.log('video name :' + videoname);	
	  		res.header('Content-disposition', 'attachment; filename=' + videoname);

	  		var filestream = fs.readFile(__dirname + '/' + videoname, function (err,data){
		  		try {

			            res.header('Content-Type', 'audio/mpeg3');
			            console.log(err);
			            console.log(data);
			            res.send(data);
			            fs.unlinkSync(__dirname + '/' + videoname);
						next();
					}
		  		catch(error) {
		  			res.send(error.message || error.text);
					next();
		  		}
			});
  	});

}

var server = restify.createServer();
server.get('/video/:id', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});