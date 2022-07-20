import React from "react";
export default class Myfrom extends React.Component {
  // 需要初始化 state
  state = {
    userName: '',
    password: ''
  }
  handleUsername = (e) =>{
    this.setState({userName: e.target.value})
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }
  userCheckbox = (e) => {
    console.log(e.target.checked)
  }
  // 统一使用一个方法
  handle = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  handlesSubmit = (e) =>{
    e.preventDefault();
    const { userName, password } = this.state
    console.log(`用户名：${userName},密码：${password}`)
  }
  render() {
    return (
      <>
      <form action="https://www.baidu.com" onSubmit={ this.handlesSubmit }>
        {/* 用户名：<input placeholder="请输入用户名" onChange={ this.handleUsername} name="userName"/><br></br>
        密码： <input placeholder="请输入密码" onChange={ this.handlePassword} type='password' name="password"></input> <br></br> */}
        用户名：<input placeholder="请输入用户名" onChange={ this.handle} name="userName"/><br></br>
        密码： <input placeholder="请输入密码" onChange={ this.handle} type='password' name="password"></input> <br></br>
        选择： <input type="checkbox" onChange={this.userCheckbox}/>
        <button>提交</button>
      </form>
      </>
    )
  }
}