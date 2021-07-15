import Audio from './player.js';
function apiGorillas(){
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead')
  .then((response) => response.json())
  .then((data) => {
    const pruebaAudio = new Audio(data);
    pruebaAudio.audio();
  });
}
export {apiGorillas}
