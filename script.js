// ----- Animal Functions -----
function playAnimalSound(animal) {
  let sound = new Audio(`sounds/${animal}.mp3`);
  sound.play();
}

function changeAnimal(animal) {
  document.getElementById("animalImage").src = `images/${animal}.png`;
  document.getElementById("animalName").innerText =
    animal.charAt(0).toUpperCase() + animal.slice(1);
}

// ----- Letter Functions -----
function playLetterSound(letter) {
  let sound = new Audio(`sounds/${letter}.mp3`);
  sound.play();
}

function changeLetter(letter) {
  document.getElementById("letterImage").src = `images/${letter}.png`;
  document.getElementById("letterName").innerText = letter.toUpperCase();
}

// ----- Number Functions -----
function playNumberSound(number) {
  let sound = new Audio(`sounds/${number}.mp3`);
  sound.play();
}

function changeNumber(number) {
  document.getElementById("numberImage").src = `images/${number}.png`;
  document.getElementById("numberName").innerText = number;
}
