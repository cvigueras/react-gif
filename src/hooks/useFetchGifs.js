import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

//El use al principio del nombre indica que es un use.
export const useFetchGifs = ( category ) =>
{
    //El estado inicial es un objeto vacío.
    const [state, setstate] = useState(
        {
            data: [],
            loading: true
        });

        //El segundo parámetro son las dependencias. 
        //si se deja vacío, le indica que solo se ejecute la primera vez
        //Al ponerle category, vuelve a disparar la petición http, cuando la categoría cambia. 
        //Llamando a la API de nuevo al cambiar la categoría.
        //Los efectos no pueden ser async
        useEffect( ()=> 
        {
            console.log(category);
            getGifs(category)
            .then( imgs=>
                {
                    setTimeout(function(){
                        setstate({
                            data: imgs,
                            loading: false,
                        });
                    },3000);
                    
                });

        }, [category]);

        //{ data: [], loading: true;}
        return state;
}