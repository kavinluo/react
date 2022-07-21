import React, { Component } from 'react'
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
export default class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/home">首页</Link> <br />
          <Link to="/about">关于</Link> <br />
          <Routes>
            <Route path="/home" element={<Home/>}>首页的内容</Route>
            <Route path="/about" element={<About/>}>about的内容</Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
