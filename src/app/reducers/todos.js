import {UPDATE_SEARCH_RESULTS} from '../constants/ActionTypes';
import {addTodo} from '../actions/index'
const initialState = [
  
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ];

    
    case UPDATE_SEARCH_RESULTS:
      return action.results;

    default:
      return state;
  }
}
