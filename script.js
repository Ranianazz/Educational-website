let currentLetterIndex = 0;
let currentNumberIndex = 0;
let currentAnimalIndex = 0;
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
const animals = [
  // Pets
  "cat",
  "dog",
  "bird",
  "fish",
  "rabbit",
  "hamster",
  "guinea pig",
  "ferret",
  "turtle",
  "snake",
  "lizard",
  "parrot",
  "mouse",
  "rat",
  // Farm Animals
  "horse",
  "cow",
  "pig",
  "sheep",
  "goat",
  "chicken",
  "duck",
  "turkey",
  "goose",
  "donkey",
  "llama",
  "alpaca",
];

// ----- Animal Functions -----
function playAnimalSound(animal) {
  let sound = new Audio(`sounds/${animal}.mp3`);
  sound.play();
}

function changeAnimal(animal) {
  document.getElementById("animalImage").src = `images/${animal}.png`;
  document.getElementById("animalName").innerText =
    animal.charAt(0).toUpperCase() + animal.slice(1);
  currentAnimalIndex = animals.indexOf(animal);
}

function nextAnimal() {
  currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
  let nextAnimal = animals[currentAnimalIndex];
  changeAnimal(nextAnimal);
}

// ----- Letter Functions -----
function playLetterSound(letter) {
  let sound = new Audio(`sounds/${letter}.mp3`);
  sound.play();
}

function changeLetter(letter) {
  document.getElementById("letterImage").src = `images/${letter}.png`;
  document.getElementById("letterName").innerText = letter.toUpperCase();
  currentLetterIndex = letters.indexOf(letter);
}

function nextLetter() {
  currentLetterIndex = (currentLetterIndex + 1) % letters.length;
  let nextLetter = letters[currentLetterIndex];
  changeLetter(nextLetter);
}

// ----- Number Functions -----
function playNumberSound(number) {
  let sound = new Audio(`sounds/${number}.mp3`);
  sound.play();
}

function changeNumber(number) {
  document.getElementById("numberImage").src = `images/${number}.png`;
  document.getElementById("numberName").innerText = number;
  currentNumberIndex = numbers.indexOf(number);
}

function nextNumber() {
  currentNumberIndex = (currentNumberIndex + 1) % numbers.length;
  let nextNumber = numbers[currentNumberIndex];
  changeNumber(nextNumber);
}
