import React, { Component } from 'react'

export default class Item extends Component {
  state = {
    isOver: false
  }
  handleDelete = (id) => {
    const { removeDate } = this.props
    return (event) => {
      removeDate(id)
    }
  }
  handleLeave = (flage) => {
    return () => {
      this.setState({isOver: flage})
    }
  }
  changerStatus = (id) => {
    const { changerStatus } = this.props
    return (event) => {
      console.log(id)
      changerStatus(id, event.target.checked)
    }
  }

  render() {
    const { name, isDone, id} = this.props
    const { isOver } = this.state
    return (
      <>
        <li style={{ background: isOver ? 'skyblue' : '#fff'}} onMouseLeave={ this.handleLeave(false)} onMouseEnter= {this.handleLeave(true)}>
          <label><input onChange={this.changerStatus(id)} type="checkbox" name={ name } checked={ isDone } /> <span>{ name }</span></label>
          <button style={{ float: 'right', display: isOver ? 'inline' : 'none'}} onClick={this.handleDelete(id) }>删除</button>
        </li>
      </>
    )
  }
}
