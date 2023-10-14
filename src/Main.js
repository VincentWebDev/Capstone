import React from 'react'
import img from  './main.jpg'


export default function Main(){

    return (
        <>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Reserve a Table</button>
        </div>
        <img src={img} className = "main--img" alt="food"/>
        </>
    )
    }