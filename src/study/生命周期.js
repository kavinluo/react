import React from "react";

export default class Mycom extends React.Component {

  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render () {
    console.log('render 这里是render')
    return (
      <div>
        <h2>生命周期组件</h2>
      </div>
    )

  }
} 