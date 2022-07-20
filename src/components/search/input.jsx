import React, { Component } from 'react'

export default class Input extends Component {
  handleSearch = () => {
    const { inputWrod: { value } } = this
    console.log(value)
    this.props.getKeyWrod(value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={(c) => this.inputWrod = c} placeholder='请输入关键字搜索' /> <button onClick={this.handleSearch}>搜索</button>
      </div>
    )
  }
}
