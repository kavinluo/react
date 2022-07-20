import React from "react";

export default class Refs extends React.Component {
  handlers = () => {
    const { input1 } = this
    alert(input1.value)
  }
  handlersBlue = () => {
    const { input2, dom } = this
    console.log(dom.innerHTML = `<div>${input2.value}</div>`)
  }
  myFn = (e) => {
    this.input3 = e
  }
  handlerB = () => {
    console.log(this.input3.value)
  }
  render () {
    return (
      <div>
        <input ref={(c)=> this.input1 = c}></input>
        <button onClick={this.handlers}>按钮</button>
        <input ref={(c) => this.input2 = c} onBlur={ this.handlersBlue}></input>
        <div ref={ (e) => this.dom = e}>我是一个div</div>
        {/* 这是一个不是回调的函数 */}
        <input ref={this.myFn} onBlur={this.handlerB}/>
      </div>
    )
  }
}