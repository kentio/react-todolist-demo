import {takeEvery, put} from 'redux-saga/effects'
import {defaultListData} from './actionCreators'
// import axios from 'axios'

import {initListAction} from './actionCreators'
import {GET_INIT_LIST} from "./actionTypes";

function* getInitList() {
  const action = initListAction(defaultListData);
  yield put(action);
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga;