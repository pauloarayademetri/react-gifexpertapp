import React from 'react'

export const GifGriditem = ( { id, title, url } ) => {

    // console.log( id, title, url );

    return (
        <div className="card animate__animated animate__fadeIn"> {/* Efecto de animación */}
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    ) // className: en lenguaje JS
}
