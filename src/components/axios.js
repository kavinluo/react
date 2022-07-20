import React, { Component } from "react";
import axios from 'axios'
export default class Axios extends Component{
  componentDidMount () {
    console.log('componentDidMount')
    this.getData()
  }
  getData = () => {
    axios({
      method: 'get',
      url: '/api/envs'
      // responseType: 'stream'
    }).then(res => {
      console.log(res)
    })
  }
  render () {
    return (
      <div>
        <div><button onClick={ this.getData }>获取数据</button></div>
      </div>
    )
  }
}