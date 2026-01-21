let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetArray = Array.from(alphabet);

let lettersContainer = document.querySelector(".letters");
console.log(lettersContainer);

alphabetArray.forEach((char) => {
  let letterSpan = document.createElement("span"); 
  letterSpan.innerHTML = char;
  letterSpan.classList.add("letter-box");
  lettersContainer.appendChild(letterSpan);
});

// التصنيفات
let categories = ["programming", "egyptians", "cars"];

// مواد البرمجة
let programmingWords = [
  "JavaScript",
  "Python",
  "Java",
  "PHP",
  "Ruby",
  "Go",
  "Kotlin",
  "Swift"
];

// أسماء مصريين
let egyptianNames = [
  "Ahmed",
  "Mohamed",
  "Yasser",
  "Hassan",
  "Omar",
  "Mostafa",
  "Mahmoud",
  "Khaled",
  "Amr",
  "Tamer"
];

// أنواع عربيات
let carBrands = [
  "Toyota",
  "Hyundai",
  "Kia",
  "BMW",
  "Mercedes",
  "Nissan",
  "Chevrolet",
  "Peugeot",
  "Renault",
  "Mitsubishi"
];

// اختيار تصنيف عشوائي
let randomCategory = categories[Math.floor(Math.random() * categories.length)];
let categoryElement = document.querySelector(".category span");
console.log(categoryElement);
categoryElement.innerHTML = randomCategory;

// اختيار كلمة عشوائية من التصنيف
let chosenWord;
if (randomCategory === "programming") {
  chosenWord = programmingWords[Math.floor(Math.random() * programmingWords.length)];
} else if (randomCategory === "egyptians") {
  chosenWord = egyptianNames[Math.floor(Math.random() * egyptianNames.length)];
} else {
  chosenWord = carBrands[Math.floor(Math.random() * carBrands.length)];
}

let finalWord = chosenWord.toUpperCase();
console.log(finalWord);

// الحروف اللي في اللعبة
let letterBoxes = document.querySelectorAll(".letter-box");

// مكان تخمين الحروف
let guessContainer = document.querySelector(".letters-guess");
Array.from(finalWord).forEach(() => {
  let guessSpan = document.createElement("span");
  guessContainer.appendChild(guessSpan);
});

// عداد أخطاء وصح
let errors = 0;
let correctGuesses = 0;

for (let i = 0; i < letterBoxes.length; i++) {
  letterBoxes[i].addEventListener("click", () => {
    let isCorrectGuess = false;
    letterBoxes[i].classList.add("clicked");

    for (let j = 0; j < finalWord.length; j++) {
      if (finalWord[j] === letterBoxes[i].textContent.toUpperCase()) {
        guessContainer.children[j].innerHTML = letterBoxes[i].textContent.toUpperCase();
        isCorrectGuess = true;
        correctGuesses++;
        playwin()
      }
    }

    if (!isCorrectGuess) {
      let hangmanParts = [
        document.querySelector(".hangman-draw .the-draw"),
        document.querySelector(".hangman-draw .the-stand"),
        document.querySelector(".hangman-draw .the-hang"),
        document.querySelector(".hangman-draw .the-rope"),
        document.querySelector(".hangman-draw .the-man .head"),
        document.querySelector(".hangman-draw .the-man .body"),
        document.querySelector(".hangman-draw .the-man .hands"),
        document.querySelector(".hangman-draw .the-man .legs")
      ];

      if (errors < hangmanParts.length) {
        hangmanParts[errors].style.display = "block";
        errors++;
        playEffect();
      }
      if (errors === hangmanParts.length) {
        letterBoxes.forEach((box) => {
          box.style.pointerEvents = "none";
        });
      let winMessage = document.createElement("div");
      winMessage.classList.add("winDiv");
      winMessage.innerHTML = `Oops! You just hanged the poor guy 🤦‍♂️:<span> ${finalWord} </span>`;
      document.body.appendChild(winMessage);
      block()

      }
    }

    if (correctGuesses === finalWord.length) {
      letterBoxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });
      let hangmanContainer = document.querySelector(".hangman-draw");
      let winVideo = document.createElement("video");
      winVideo.classList.add("video");

      // مسار الفيديو
      winVideo.src = "sound/stick.mp4";

      // إعدادات الفيديو
      winVideo.autoplay = true;
      winVideo.loop = true;
      winVideo.muted = true;
      winVideo.controls = false;
      winVideo.playbackRate = 4;

      hangmanContainer.appendChild(winVideo);

      let winMessage = document.createElement("div");
      winMessage.classList.add("winDiv");
      winMessage.innerHTML = `You saved him! 🦸 Hero of the day!:<span> ${finalWord} </span>`;
      document.body.appendChild(winMessage);
      Applause()
    }
  });
}

function playEffect() {
  let sound = document.getElementById("effect-sound");
  console.log(sound)
  sound.currentTime = 0; // يبدأ من الأول كل مرة
  sound.play();
}
function playwin() {
  let sound = document.getElementById("effect-win");
  console.log(sound)
  sound.currentTime = 0; // يبدأ من الأول كل مرة
  sound.play();
}
function block() {
  let sound = document.getElementById("effect-block");
  console.log(sound)
  sound.currentTime = 0; // يبدأ من الأول كل مرة
  sound.play();
}
function Applause() {
  let sound = document.getElementById("effect-Applause");
  console.log(sound)
  sound.currentTime = 0; // يبدأ من الأول كل مرة
  sound.play();
}
