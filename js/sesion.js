class GeneralPlayer{
  constructor(data){
    this.data = data;
  }
  artist(){
    for (let i = 0; i < this.data.length; i++) {

      const characterList = document.getElementById('character-list');

      const item = document.createElement('li');
      item.setAttribute('class', 'item-artist');
      characterList.appendChild(item);

      const picture = document.createElement('img');
      picture.setAttribute('src', `${this.data[i].image}`);
      picture.setAttribute('class', 'picture-artist');
      item.appendChild(picture);

      const artistName = document.createElement('p');
      artistName.setAttribute('class', 'name-artist');
      item.appendChild(artistName);
      artistName.innerHTML = `${this.data[i].name}`;
    }
  }
}

fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
.then((response) => response.json())
.then((data) => {
  const prueba2 = new GeneralPlayer(data);
  prueba2.artist();
});
