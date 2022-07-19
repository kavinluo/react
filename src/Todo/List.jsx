import React, { Component } from "react";

import Item from "./Item";
export default class List extends Component {
  remove = (id) => {
    console.log(id)
  }
  render () {
    const { todos, changerStatus, removeDate } = this.props
    return (
      <>
        <ul>
          {
            todos.map(todo => {
              return <Item key={todo.id} {...todo} changerStatus={ changerStatus } removeDate={ removeDate } />
            })
          }
        </ul>
      </>
    )
  }
  
}