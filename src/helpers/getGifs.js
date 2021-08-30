

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=KZrEGXCNHhb6rzmGO2bCQGUDHRxYZwdx&q=${ encodeURI( category ) }&limit=10`; // encodeURI( ): para enviar la categoría a la API (carga inicial en POSTMAN)
    const resp = await fetch( url );
    const { data } = await resp.json();
    // para traer la data mediante la Api, en formato json 
    // desestructuramos { data } para ir directo a la data, que es lo que necesitamos

    const gifs = data.map( img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        } // retornarmos el objeto que necesitamos 
    }) //el arreglo tiene mucha información, por ello extraemos solo la información que necesitamos

    // console.log(gifs);
    // setImages( gifs ); // mi nuevo estado van a ser los gifs que estamos recibiendo con la Api // nota: esta función se utilizó cuando teníamos este código dentro del componente GifGrid.js

    return gifs;
}