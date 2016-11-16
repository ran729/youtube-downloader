import * as types from '../constants/ActionTypes';

export function search(text) {
  return dispatch => {
  	 const request = window.gapi.client.youtube.search.list({
          part: 'snippet',
          maxResults: 10,
          q: text,
          type:'video'
        });

    request.execute(results => dispatch(update_search_results(results.items)));
  };
}

export function update_search_results(results) {
  return {type: types.UPDATE_SEARCH_RESULTS, results};
}
