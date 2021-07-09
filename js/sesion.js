function addCharacters() {
  fetch('https://kt2ul4cwza.execute-api.us-east-2.amazonaws.com/public/artists')
    .then((response) => response.json())
    .then((data) => {

    const characterList = document.getElementById('character-list');

    const item = document.createElement('li');
    characterList.appendChild(item);

    const picture = document.createElement('img');
    picture.setAttribute('src', `${data.image}`);
    item.appendChild(picture);

    const artistName = document.createElement('p');
    artistName.setAttribute('src', `${data.name}`);
    item.appendChild(artistName);

  });

}
addCharacters();
