
import './App.css'
import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import './index.css'


function App() {
  return (
    <div className = "main--container">
      <div className = "grid--item grid--item--1"><Header /></div>
      <div className = "grid--item grid--item--2"><Nav /></div>
      <div className = "grid--item grid--item--3"><Main /></div>
      <div className = "grid--item grid--item--4"><Footer /></div>
    </div>
  )
}

export default App;
