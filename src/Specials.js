import React from 'react'
import SpecialItems from './SpecialItems'
import './index.css'
// import GreekSalad from "./greek_salad.jpg"


export default function Specials(){

    return (
        <>
            <div className = "specials">
                <h1>This Week's Specials</h1>
                <button>Online Menu</button>
            </div>
            <div className ="card--row">
                <SpecialItems
                img={require("./greek_salad.jpg")}
                name="Greek Salad"
                price="$12.99"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."

                />
                <SpecialItems
                img={require("./greek_salad.jpg")}
                name="Bruchetta"
                price="$5.99"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                />
                 <SpecialItems
                img={require("./greek_salad.jpg")}
                name="Lemon Dessert"
                price="$5.00"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                />
            </div>
        </>
    )
    }