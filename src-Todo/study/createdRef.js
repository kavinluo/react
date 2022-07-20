import React from "react";
export default class CreatedRef extends React.Component {
  myRef = React.createRef()
  handles = () => {
    console.log(this.myRef.current.value)
  }
  userBlur = (e) => {
    console.log(e.target.value)
  }
  render () {
    return (
      <div>
        <input ref={this.myRef}></input>
        <button onClick={this.handles}>提交</button>
        <br/>
        <br/>
        {/* 当操作就在他自身上时，避免再次使用ref */}
        <input onBlur={this.userBlur}/>
      </div>
    )
  }
}