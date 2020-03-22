import React, {Component} from 'react';
// import axios from 'axios'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import store from "./store"; // default index.js
import {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction,
  getInitList,
} from './store/actionCreators'
import TodolistUI from './TodoListUI'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange) // 订阅更新， 数据发生变化就调用这个函数
  }

  render() {
    return (
      <TodolistUI        // UI组件
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
      )
  }
  //重置处理
  resetHandle = () => {
    this.searchBar.input.state.value='';
  };

  // 生命周期函数
  componentDidMount() {
    const action = getInitList();
    store.dispatch(action)
  }

  // delete item
  handleItemDelete(index){
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // };
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  // btn click
  handleBtnClick(text, event) {
    // const  action = {
    //   type: ADD_TODO_ITEM,
    // };
    const action = getAddItemAction(text);
    store.dispatch(action);
  }

  // input change
  handleInputChange(e){
    // action
    // const action = {
    //   type:CHANGE_INPUT_VALUE,
    //   value: e.target.value,
    // };
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action)
  }

  // page load data
  // store 数据发生变化
  handleStoreChange(){
    this.setState(store.getState()); // sync data
  }
}

export default TodoList