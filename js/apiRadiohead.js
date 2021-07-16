import Audio from './player.js';

function radiohead(){
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/songs/radiohead')
  .then((response) => response.json())
  .then((data) => {
    const apiRadiohead = new Audio(data);
    apiRadiohead.audio();
  });
}
export {radiohead}
