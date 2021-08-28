import React from "react"

function CardCountries({name, capital, flag}) {



    return (
        <div>
            <h1 >{name}</h1>
            <p>{capital}</p>
            <img src={flag} width="30" alt="" />
        </div>
    )
}

export default CardCountries