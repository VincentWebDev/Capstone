import React from "react";
import './index.css'

export default function TestimonialCard(props){
    return (
        <div className="testimonial--card">
            <p>{props.rating}</p>
            <img src={props.img} alt="user" className="user--image"/>
            <p>{props.name}</p>
            <p>{props.review}</p>
        </div>
    )
}