import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
const instance = axios.create({
  timeout: 1000,
  baseURL: '/api',
  headers: {
    token: '297C58022D6ABEB9'
  }
});
export default class Input extends Component {

  // getKeyWrod = (value) => {
  //   // this.setState({isLoading: true})
  //   instance({
  //     method: 'get',
  //     url: `/account/listPage?pageSize=10&curPage=1&userType=2&organization=${value}`
  //   }).then((res, error) => {
  //     const {data: { data: { list, total } } } = res
  //     this.setState({items: list, total,isLoading: false})
  //   }).catch ((e) => {
  //     console.log('000',e)
  //     this.setState({isLoading: false, error: '输入错误'})
  //   })
  // }
  handleSearch = () => {
    const { inputWrod: { value } } = this
    PubSub.publish('test', {isLoading: true })
    instance({
      method: 'get',
      url: `/account/listPage?pageSize=10&curPage=1&userType=2&organization=${value}`
    }).then((res, error) => {
      const {data: { data: { list, total } } } = res
      console.log( list, total)
      // 发布消息
      PubSub.publish('test', {list, total,isLoading: false})
    }).catch ((e) => {
      console.log('000',e)
      this.setState({isLoading: false, error: '输入错误'})
    })
    // this.props.getKeyWrod(value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={(c) => this.inputWrod = c} placeholder='请输入关键字搜索' /> <button onClick={this.handleSearch}>搜索</button>
      </div>
    )
  }
}
