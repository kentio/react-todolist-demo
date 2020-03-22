import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
};


// state    整个DOM的数据库
// action
// reducer 可以接收state，但是不可以在修改state
export default (state = defaultState, action) => {

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state)); //深拷贝
    newState.inputValue = action.value;
    return newState // 返回数据， 固定写法
  }

  if (action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    if (action.value === "") {return newState}
    newState.list.push(action.value);
    newState.inputValue = '';
    return newState;
  }

  // 删除list的数据使用的是 splice
  if (action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  // redux ajax
  if (action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}