import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGriditem } from './GifGriditem';
// useEffect: nos va a permitir poder ejecutar cierto código asociado al compponente de manera condicional Ej. 1, 2 o 3 veces (para no renderizar siempre cuando cambie el estado de un componente)

export const GifGridInicial = ( { category } ) => {

    
    const [images, setImages] = useState([]);

    // const [count, setCount] = useState(0); // Para prueba de useEffect

    useEffect( () => {
        getGifs( category )
            .then( setImages ); // .then( imgs => setImages( imgs ) ) -> también sirve
    }, [ category ] )
    // Retornamos la promesa getGifs() para obtener los Gifs o traer el arreglo de objetos {id, title, url}, por tanto podemos usar ".then" para determinar que queremos que se dispare (cambiar las imagenes)
    // []: Arreglo de dependencia (2do argumento de la función (()=>{},[]) -> cuando es vacio, se dispara solo 1 vez la petición getGifs (o la instrucción que se considere)
    // [ category ], arreglo de dependencia para volver a ejecutar el Hook useEffect si la categoría cambia

    return (
        <>
        <h3> { category } </h3>

        <div className="card-grid">
            {
                images.map( img => (
                    <GifGriditem 
                        key={ img.id }
                        { ...img } // spread para desestructurar las props referidas
                        // img={ img }
                    />
                ))
            }

            {/* <ol>
                {
                    images.map( ({ id, title }) => {
                        return <li key={ id }> { title } </li>
                    })
                }
            </ol> // esto ya no lo vamos hacer */}

            {/* <h3> { count } </h3> */}
            {/* <button onClick={ () => setCount( count + 1) }></button> */}
            
        </div>
        </> // Ocupamos fragment para poder retornar 2 objetos (h3 y div)
    )
}
