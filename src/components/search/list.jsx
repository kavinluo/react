import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const { total, items, isLoading } = this.props
    return (
      <div>
      {
        total === 0 ? <h2>请输入搜索的内容</h2> : isLoading ? 'Lading....' :
        items.map(item => {
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
