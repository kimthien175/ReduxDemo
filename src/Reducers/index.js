import { combineReducers, createStore } from 'redux';

import counterReducer from './Counter'
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    //Counter: counterReducer,
    todos,
    visibilityFilter,
});



let store = createStore(rootReducer);

export default store;