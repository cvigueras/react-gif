//LEER:
//https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76
//https://es.reactjs.org/docs/faq-structure.html
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => 
{
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () =>
    // {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories= { setCategories }/>
            <hr />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map(category => 
                    (
                        <GifGrid 
                            key = { category }
                            category = { category } 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;