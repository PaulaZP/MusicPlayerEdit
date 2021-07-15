import GeneralPlayer from './sesion.js';

function apiArtist(){
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
  .then((response) => response.json())
  .then((data) => {
    const prueba2 = new GeneralPlayer(data);
    prueba2.artist();
  });
}

export {apiArtist}
