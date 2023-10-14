import React from 'react'
import './index.css'
import delivery from  './delivery.png'


export default function SpecialItems (props) {
    return (
        <div className="card">
            <img src={props.img} alt="food" className="food--image"/>
            <div className="name--price">
            <p>{props.name}</p>
            <p>{props.price}</p>
            </div>
            <p>{props.description}</p>
            <div className = "delivery">
                <p>Order a delivery</p>
                <img src={delivery} alt="cart" className="cart"/>
            </div>


        </div>
    )
}