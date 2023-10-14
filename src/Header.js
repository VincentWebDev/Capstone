import React from 'react'
import logo from  './Logo.png'
import Nav from './Nav'


export default function Header(){
    return (
        <>
        <img src={logo} alt="logo"/>
        <Nav />
        </>
        )
}

