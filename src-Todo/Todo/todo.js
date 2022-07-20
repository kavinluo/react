
import React from 'react';
 class MyTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      val: '',
      name: ''
    }
    this.handlerChager = this.handlerChager.bind(this);
    console.log(props)
  }
  static userNane = 'kevin'
  add = (val) => {
    // this.setState= {
    //   name: this.state.val
    // }
    console.log(this.state)
  }
  handlerChager = (e) => {

    console.log(e)
    // this.setState= {
    //   val: e.target.value
    // }
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.handlerChager} value={this.state.val}></input>
        <button onClick={this.add}>提交</button>
      </div>
    )
  }
}

  export default MyTest