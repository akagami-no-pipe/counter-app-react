
export const getImagen = async() => {

    try{
        const apiKey = '';
        const resp  = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        return url
    } catch(e){
        console.log(e);
        return 'No se encontro la imagen';
    }

}