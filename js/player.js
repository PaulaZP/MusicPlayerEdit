import {apiGorillas} from './api2.js';
apiGorillas();
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

    const btnPlay = document.querySelector('#play');

    btnPlay.addEventListener('click', () =>{
      const btnAudio = document.querySelector('#audiomil');
      btnAudio.play();
      console.log('hola');
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
