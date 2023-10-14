import React from 'react'
import App from './App'
import './index.css'
import {Routes, Route, Link} from 'react-router-dom'

export default function Nav(){

    return(
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Menu</a></li>
            <li><a href="/#">Reservations</a></li>
            <li><a href="/#">Order Online</a></li>
            <li><a href="/#">Login</a></li>
        </ul>
    </nav>
    </>)
    }