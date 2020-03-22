import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducer from "./reducer";
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

// https://github.com/zalmoxisus/redux-devtools-extension/#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer // redux 中间件
);

// then run the saga
sagaMiddleware.run(todoSagas);

export default store;