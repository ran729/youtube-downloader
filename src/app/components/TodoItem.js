import React, {Component, PropTypes} from 'react';

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {todo} = this.props;

    return (
      <li>
        <div className="view">
        <img className="video-image" src={todo.snippet.thumbnails.default.url}></img>
          <div className="todo-details-container">
            <label>
              {todo.snippet.title}
            </label>
            <div class="buttons-container">
                <a download href={'http://localhost:8080/video/'+todo.id.videoId}>Download</a>
                <a target="_blank" href={'http://www.youtube.com/watch?v='+todo.id.videoId}>Watch</a>
            </div>
            </div>
        </div>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
