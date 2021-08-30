import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ( { category } ) => {

    const { data, loading } = useFetchGifs( category ); // custom hooks (con el objeto {} del estado desestructurado - recuperando solo el "loading")

    return (
        <>
        <h3 className="animate__animated animate__fadeIn"> { category } </h3>

        { loading && <p>Loading</p> } 
        {/* { loading ? 'Cargando...' : 'Data cargada' } */}
        
        <div className="card-grid">
            {
                data.map( img => (
                    <GifGriditem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        </div>
        </>
    )
}
