import React from 'react'
import "./recipe.css"

const Recipe = ({title,calories,img,ingrediants}) => {
  return (
    <div className="recepie">
        <h1 className='head'>{title}</h1>
        <p className='para'>calories = {calories}</p>
        <ol className='ingred'>
            {ingrediants.map(ingrediant =>(
                <li>{ingrediant.text}</li>))
            }
        </ol>
        <img className='img-section' src={img} alt="" />
    </div>
  )
}

export default Recipe