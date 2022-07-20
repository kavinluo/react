import React, { Component } from 'react'
import { nanoid } from 'nanoid'
export default class Header extends Component {
  handlerKeyUp = (event) => {
    const { addTodo } = this.props
    const {target, keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      alert('请输入内容')
      return
    }
    addTodo({name: target.value, id: nanoid(), isDone: false})
    target.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handlerKeyUp} style={{width: '220px', height: '30px', border: '1px solid #ccc'}} />
      </div>
    )
  }
}
