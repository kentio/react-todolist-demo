import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes'

export const defaultListData = [
  '明天11点开小组会议.',
];

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM,
  value
});


export const getDeleteItemAction = (value) => ({
  type: DELETE_TODO_ITEM,
  value
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    const action = initListAction(defaultListData);
    dispatch(action);
  }
};

export const getInitList = () => ({
  type: GET_INIT_LIST,
});