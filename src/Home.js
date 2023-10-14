
import './App.css'
import React from 'react'
import Header from './Header'
import Main from './Main'
import Specials from './Specials'
import Testimonials from './Testimonials'
import About from "./About"
import Footer from './Footer'
import './index.css'
// import {Routes, Route} from 'react-router-dom'

export default function Home() {
  return (
    <div className = "main--container">
      <div className = "grid--item grid--item--1"><Header /></div>
      <div className = "grid--item grid--item--2"><Main /></div>
      <div className = "grid--item grid--item--3"><Specials /></div>
      <div className = "grid--item grid--item--4"><Testimonials /></div>
      <div className = "grid--item grid--item--5"><About /></div>
      <div className = "grid--item grid--item--6"><Footer /></div>
    </div>
  )
}
