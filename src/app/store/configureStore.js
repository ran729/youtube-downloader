import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import { addTodo } from '../actions/index';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  
  if (false && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
