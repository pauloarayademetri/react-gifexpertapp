//Tarea: Crear un Componente "GifExpertApp"
// GifExpertApp: Componente base que crea listas

import React, { useState } from 'react'; // se puede usar snippets "rafc+Enter" 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']; 
    // no nos sirve si queremos incluir nuevos elementos en el arreglo y renderizar. Por lo anterior debemos usar UseState
    
    const [categories, setCategories] = useState(['One Punch']);
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
        // Para agregar elementos a la lista de categorías (arreglo)...
        // setCategories( [...categories, 'HunterXHunter'] ); // 1era solución
        // setCategories( cats => [...cats, 'HunterXHunter' ] ); // 2da solución
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd } >Agregar</button> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
                {/* {
                    categories.map( (category) => {
                        return <li key={ category }> { category } </li>
                    }) // map(): método (que se usan en los arreglos) para barrer y retornar los elementos de los arreglos. La función considera 2 argumentos por defectos: elementos del arreglo + idx (key o i -> id único de la base de datos, no del indice visible).
                } */}
            </ol>

        </>
    );
    
}