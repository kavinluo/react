import React, { Component } from 'react'

import Header from './Header'
import List from './List'
import Footer from './Footer'
import './index.css'
export default class TodoIndex extends Component {
  state = {
    todos: [
      {id: '1', name:'吃饭',  isDone: true },
      {id: '2', name:'睡觉',  isDone: true },
      {id: '3', name:'敲代码',  isDone: false },],
      isDoneAll: false
  }
  addTodo = (data) => {
    const { todos } = this.state
    const newTodo = [data,...todos]
    this.setState({ todos: newTodo })
  }
  changerStatus = (id, flage) => {
    const { todos } = this.state
    let newTodo = todos.map(todo => {
      if(todo.id === id) {
        return { ...todo, isDone: flage}
      } else return todo
    })
    let list = newTodo.filter(item => {
      return item.isDone
    })

    if (list.length === newTodo.length) {
      this.setState({ isDoneAll: true })
    } else {
      this.setState({ isDoneAll: false })
    }
    this.setState ({todos: newTodo})
  }
  removeDate = (id) => {
    const { todos } = this.state
    let newTodo = todos.filter(item => item.id !== id)
    this.setState({ todos: newTodo })
  }
  handleDeleteAll =() => {
    const { todos } = this.state
    let newTodo = todos.filter(item => !item.isDone)
    this.setState({ todos: newTodo })
  }
  // 全选
  handleChangAll = (event) => {
    const { todos } = this.state
    let newTodo = todos.map(item =>{
      return {...item, isDone: event.target.checked}
    })
    this.setState({todos: newTodo })
  }

  render() {
    const { todos } = this.state
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos}  changerStatus={ this.changerStatus} removeDate={ this.removeDate }/>
        <Footer handleDeleteAll={ this.handleDeleteAll } todos={ todos } handleChangAll={ this.handleChangAll } />
      </div>
    )
  }
}
