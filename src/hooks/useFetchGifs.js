// Custom Hooks: son funciones creadas -> Ej export const useFetchGifts = () => {}
// Los Hooks pueden tener un estado (useState)

import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect( () => {

        getGifs( category )
            .then( imgs =>{
                setTimeout( () =>{
                    // console.log(imgs); // para imprimir las imagenes del getGifs (arreglo de objetos)
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 3000 );
            })
    
    }, [category])

    return state; // { data: [], loading: true };
    
}


// En prueba inicial (sin considerar los getGifs)

// setTimeout( () => {
//     setstate({
//         data: [1,2,3,4,5,6,7],
//         loading: false
//     });
// }, 3000 );