import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

// Reducers
import CounterReducer from './reducers/counter';
import TodosReducer from './reducers/todo';

import thunk from 'redux-thunk';

import createSagaMidleware from 'redux-saga';
// import watchIncByUSer from './sagas/index'
const rootReducers = combineReducers({
    counter: CounterReducer,
    todo: TodosReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state', store.getState());
            return result;
        }
    }
};

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const sagaMiddelware = createSagaMidleware();

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddelware)));

// sagaMiddelware.run(watchIncByUSer);

export default store;