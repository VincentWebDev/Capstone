import React from 'react'
import TestimonialCard from './TestimonialCard.js'
import './index.css'

export default function Testimonials () {
    return (
        <>
                        <h1>Testimonials</h1>
                        <div className = "review--box">
                            <TestimonialCard
                                rating = "4.5"
                                img={require("./user1.jpg")}
                                name = "John"
                                review = "Review text"
                            />
                            <TestimonialCard
                                rating = "4.5"
                                img={require("./user1.jpg")}
                                name = "John"
                                review = "Review text"
                            />
                            <TestimonialCard
                                rating = "4.5"
                                img={require("./user1.jpg")}
                                name = "John"
                                review = "Review text"
                            />
                            <TestimonialCard
                                rating = "4.5"
                                img={require("./user1.jpg")}
                                name = "John"
                                review = "Review text"
                            />
                        </div>
        </>
    )
}