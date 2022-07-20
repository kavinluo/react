import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {

  state = {
    total: 0,
    list: [],
    isLoading: false
  }


  // list 页面订阅消息
  componentDidMount () {
    const token = PubSub.subscribe('test', (msg, data) => {
       console.log(msg,'999', data)
       this.setState(data)
     })
  }
  render() {
  const { total, list, isLoading } = this.state
    return (
      <div>
      {
        total === 0 ? <h2>请输入搜索的内容</h2> : isLoading ? 'Lading....' :
        list.map(item => {
          return (
          <li key={item.id}>
            { item.name }
          </li>)
        })
      }
        
      </div>
    )
  }
}
