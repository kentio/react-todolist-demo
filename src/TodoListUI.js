import React from "react";
import {Input, List, Row, Col} from "antd";

const { Search } = Input;

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '20px', marginLeft: '10px'}}>
      <div>
        <Row>
          <Col span={12} offset={6}>

            <Search
              placeholder="todo info"
              enterButton="Search"
              size="large"
              value={props.inputValue}
              onChange={props.handleInputChange}
              onSearch={(value,event) => props.handleBtnClick(value, event)}
            />
          </Col>
        </Row>

      </div>
      <Row>
        <Col span={12} offset={6}>
          <List
            style={{marginTop: '10px'}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item onClick={
                () => {
                  props.handleItemDelete(index)
                }
              }>{item}
              </List.Item>)}
          />
        </Col>
      </Row>

    </div>
  )
};

export default TodoListUI
