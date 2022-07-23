// Credit : Kubow Ania JS Code

const textDisplay = document.getElementById("text");
const phrases = [
  "Bonjour mes sacripants.",
  "Qui veut une tartelette ?",
  "MÉÉCRÉÉAAAAAAAAANTS !",
  "IL semblerait que le grall",
  " Ne soit ni un vase...",
  "Ni une coupe...",
  "Mais un récipient.",
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.textContent = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.textContent = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.textContent = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
