
import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState( 'Hola Mundo' ); // también podeos dejar ''

    const handleInputChange = ( e ) => {
        // console.log(e.target.value);
        setInputValue(e.target.value); // e.target.value: dispara un evento cuyo objetivo(target) es cambiar el valor inicial -> no olvidar que esta función está vinculada al atributo del <input/>, específicamente "onChange"
    }

    const handleSubmit = ( e ) => {
        e.preventDefault(); // vinculado a la propiedad del "form" mediante handleSubmit
        
        if (inputValue.trim().length > 2){
            
            setCategories( cats => [inputValue, ...cats ] ); // para agregar catergoria a la lista mediante formulario -> usar setCategories
            setInputValue('');
        } // if de validación: para evitar categorías vacias y 2 o más elementos con el mismo Key (o nombre)

    }

    return (

        <form onSubmit={ handleSubmit }> {/* e.preventDefault(): Para prevenir el comportamiento por defecto asociado a la renderización completa del formulario en el navegador*/}

            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            /> {/* input: genera una caja para poder escribir */}

        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} // recordar que setCategoría es una función del useState