import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { handleDeleteAll, handleChangAll, todos } = this.props
    let all = todos.reduce((pre,curr) => pre + (curr.isDone ? 1 : 0), 0)
    console.log('all', all)
    return (
      <div>
        <label><input type="checkbox" checked={ todos.length === all && all !== 0 ? true : false } onChange={ handleChangAll } /> 全部选择</label>
        <span>{all}已完成 / 全部{ todos.length}</span>
        <button onClick={ handleDeleteAll }>删除全部选择</button>
      </div>
    )
  }
}
