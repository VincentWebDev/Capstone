import React from "react"
import './index.css'

export default function About() {
    return (
        <>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <img src={require("./about1.jpg")} alt="chef"/>
        <img src={require("./about2.jpg")} alt="chef 2"/>

        </>
    )
}