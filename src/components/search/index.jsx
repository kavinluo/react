import React, { Component } from 'react'
import axios from 'axios'
import Input from './input'
import List from './list'
const instance = axios.create({
  timeout: 1000,
  baseURL: '/api',
  headers: {
    token: '16780239E4FF1B4B'
  }
});
export default class Index extends Component {
  state = { 
    keyWrod: '',
    items: [],
    total: '',
    isLoading: false,
    error: ''
  }
  
  getKeyWrod = (value) => {
    this.setState({isLoading: true})
    instance({
      method: 'get',
      url: `/account/listPage?pageSize=10&curPage=1&userType=2&organization=${value}`
    }).then((res, error) => {
      const {data: { data: { list, total } } } = res
      this.setState({items: list, total,isLoading: false})
    }).catch ((e) => {
      console.log('000',e)
      this.setState({isLoading: false, error: '输入错误'})
    })
  }
  render() {
    return (
      <div>
        <Input getKeyWrod={this.getKeyWrod} />
        <List {...this.state} />
      </div>
    )
  }
}
