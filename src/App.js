
import './App.css'
import React from 'react'
import Home from './Home'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import './index.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (<>
  <Routes>
    <Route path="/" element={<Home />}></Route>
  </Routes>
  </>)
}

export default App;
