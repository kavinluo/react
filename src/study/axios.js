import React from "react";

import axios from 'axios'

export default class Axios extends React.Component {
  componentDidMount () {
    axios({
      method: 'get',
      url: 'http://bit.ly/2mTM3nY',
      responseType: 'stream'
    }).then(res => {
      console.log(res)
    })
  }
  render () {
    return (
      <div>
        <div>Axios</div>
      </div>
    )
  }
}