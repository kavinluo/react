import React from "react";
export default class Myfrom extends React.Component {
  handlesSubmit = (e) =>{
    e.preventDefault();
    console.log(e)
    const { userName, password } = this
    alert(`用户名：${userName.value},密码：${password.value}`)
  }
  render() {
    return (
      <>
      <form action="https://www.baidu.com" onSubmit={ this.handlesSubmit }>
        用户名：<input placeholder="请输入用户名" ref={(e) => this.userName = e} name="userName"/><br></br>
        密码： <input placeholder="请输入密码" ref={(e) => this.password = e} type='password' name="password"></input> <br></br>
        <button>提交</button>

      </form>
      </>
    )
  }
}