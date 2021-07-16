import {radiohead} from './apiRadiohead.js';

radiohead();

class Audio{
  constructor(data){
    this.data = data;
  }
  audio(){
    for (let i = 0; i < this.data.length; i++) {
      const btnAudio = document.createElement('audio');
      btnAudio.setAttribute('id', 'audiomil');
      btnAudio.setAttribute('src', `${this.data[i].audio}`);
      console.log(btnAudio)
    }
    let playing = false;
    const btnPlay = document.querySelector('#play');

    btnPlay.addEventListener('onclick', () =>{
      const btnPrueba = document.querySelector('audio');
      btnPrueba.play();
      playing = true;
    });
  }
}
export default Audio;

function next(){
  const btnNext = document.querySelector('#next');
  btnNext.addEventListener('click', () =>{
    console.log('soy next');
  });
}
function previous(){
  const btnPrevious = document.querySelector('#previous');
  btnPrevious.addEventListener('click', () =>{
    console.log('soy previous');
  });
}
next();
previous();
