// select elements by id
const body = document.getElementById("body")
const container = document.getElementById("container")
const title = document.getElementById("title")
const buttons = document.getElementById("buttons")
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

const math = [
  {
    question: "Hasil dari 1 + 1 x 0 adalah....",
    choiceA: "0",
    choiceB: "1",
    choiceC: "2",
    choiceD: "3",
    correct: "B",
  },
  {
    question: "Sebuah persegi memiliki panjang sisi yaitu 20cm. Luas dan keliling persegi tersebut yaitu....",
    choiceA: "300cm2 dan 60cm2",
    choiceB: "200cm2 dan 200cm2",
    choiceC: "400cm2 dan 80 cm2",
    choiceD: "Tidak ada jawaban benar",
    correct: "C",
  },
  {
    question: "Hasil dari (-7) 3 adalah....",
    choiceA: "-343",
    choiceB: "-21",
    choiceC: "21",
    choiceD: "343",
    correct: "B",
  },
  {
    question: "Akar-akar persamaan kuadrat : x2 + 7x + 6 = 0 adalah ....",
    choiceA: "1 dan 6",
    choiceB: "1 dan -6",
    choiceC: "-1 dan 6",
    choiceD: "-1 dan -6",
    correct: "D",
  },
  {
    question: "Nilai minimum dari fungsi y = x2 + 8x + 15 adalah....",
    choiceA: "y = 2",
    choiceB: "y = 1",
    choiceC: "y = -2",
    choiceD: "y = -1",
    correct: "D",
  },
  {
    question: "Pembuat nol fungsi kuadrat y = x2 – 2x – 8 adalah....",
    choiceA: "-2 dan 4",
    choiceB: "2 dan 4",
    choiceC: "2 dan -4",
    choiceD: "-2 dan -4",
    correct: "A",
  },
  {
    question: "Sumbu simetri dari grafik fungsi y = x2 – 6x + 8 adalah",
    choiceA: "x = 4",
    choiceB: "x = 3",
    choiceC: "x = 2",
    choiceD: "x = 1",
    correct: "B",
  },
  {
    question: "Sebuah segitiga mempunyai panjang alas 6 cm dan tinggi 8 cm. Luas segitiga tersebut adalah....cm²",
    choiceA: "96",
    choiceB: "24",
    choiceC: "48",
    choiceD: "12",
    correct: "B",
  },
  {
    question: "Luas lingkaran yang berjari-jari 14 cm adalah .... cm²",
    choiceA: "154",
    choiceB: "308",
    choiceC: "616",
    choiceD: "1024",
    correct: "C",
  },
  {
    question: "Sebuah kolam ikan berbentuk lingkaran yang luasnya 38,5 m2. Di sekeliling kolam akan dipasangi pagar. Panjang pagar tersebut adalah",
    choiceA: "22m",
    choiceB: "12m",
    choiceC: "38,5m",
    choiceD: "24m",
    correct: "A",
  },
  {
    question: "Faktor persekutuan terbesar (FPB) dari 72 dan 96 adalah .....",
    choiceA: "3",
    choiceB: "24",
    choiceC: "16",
    choiceD: "20",
    correct: "B",
  },
  {
    question: "Kelipatan persekutuan kecil (KPK) dari 18 dan 24 adalah",
    choiceA: "24",
    choiceB: "6",
    choiceC: "72",
    choiceD: "74",
    correct: "C",
  },
  {
    question: "Hasil dari 0,25 × 2,5 : 25% adalah....",
    choiceA: "2,75",
    choiceB: "2,25",
    choiceC: "2,65",
    choiceD: "2,5",
    correct: "D",
  },
  {
    question: "Pak Arif membeli motor dengan harga Rp15.000.000,00 dan dijual lagi dengan harga Rp16.500.000,00. Berapa perentase keuntungan yang diperoleh....",
    choiceA: "1%",
    choiceB: "10%",
    choiceC: "15%",
    choiceD: "1,5%",
    correct: "B",
  },
  {
    question: "Hasil dari 872 + 63 x (-9) - 927 : (-9) =",
    choiceA: "480",
    choiceB: "408",
    choiceC: "840",
    choiceD: "448",
    correct: "B",
  },
  {
    question: "Hasil dari 50 : 5 (5 - 3) + 5 : (1/5) =",
    choiceA: "54",
    choiceB: "45",
    choiceC: "35",
    choiceD: "53",
    correct: "B",
  },
  {
    question: "Sebuah kubus memiliki panjang rusuk 10 cm dan dibelah-belah menjadi 8 kubus kecil yang besarnya sama. Maka, berapakah panjang rusuk ke 8 kubus kecil tersebut....",
    choiceA: "360",
    choiceB: "400",
    choiceC: "480",
    choiceD: "444",
    correct: "C",
  },
  {
    question: "Sebuah taman berbentuk lingkaran dengan jari-jari 35 meter dan terdapat pintu masuk taman selebar 3 meter. Di sekeliling taman dipasang lampu berjumlah 63 buah. Jarak antar lampu taman adalah ....",
    choiceA: "3,50 meter",
    choiceB: "3,44 meter",
    choiceC: "1,75 meter",
    choiceD: "1,73 meter",
    correct: "B",
  },
  {
    question: "Jika 660 +225 : (-15) = n, maka n adalah....",
    choiceA: "645",
    choiceB: "675",
    choiceC: "-59",
    choiceD: "-675",
    correct: "A",
  },
  {
    question: "Anita membeli seutas tali sepanjang 8,25 m . Sebelumnya sudah memiliki 6 3/4 m. Tali tersebut digunakan 1 1/5 m. Sisa tali yang terpakai adalah....",
    choiceA: "13,80 m",
    choiceB: "14,80 m",
    choiceC: "13,20 m",
    choiceD: "14,20 m",
    correct: "A",
  },
];

// Extra variables
let subjects;
let questionTime = Number; // second

function selectSubject(selectedSubject) {
  if (selectedSubject === "math") {
    subjects = math
    questionTime = 90
  } else if (selectedSubject === "english") {
    subjects = english
    questionTime = 60
  } else {
    subjects = algorithm
    questionTime = 90
  }

  startQuiz()
}

const lastQuestion = 20 - 1;
let runningQuestion = 0;
let count = 0;

let TIMER;
let score = 0;

// start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  const infoBtn = document.getElementById("info-btn")
  infoBtn.style.display = "none"

  var music = new Audio();
  music.src = "Assets/music/Easy song.mp3";
  music.play();
  title.classList.replace("block", "none");
  buttons.classList.replace("subjects-button-container", "none");
  start.classList.replace("block", "none");
  body.classList.replace("white-bg", "gray-bg")
  container.classList.replace("gray-card", "white-card")
  renderQuestion();
  quiz.classList.replace("none", "block");
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s

}

// render a question
function renderQuestion() {
  let q = subjects[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  // qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == subjects[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Assets/music/yeah.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Assets/music/Huh.mp3";
  music.play();
}

// score render
function scoreRender() {
  title.classList.replace("none", "block");
  buttons.classList.replace("none", "subjects-button-container");
  start.classList.replace("none", "block");
  body.classList.replace("gray-bg", "white-bg")
  container.classList.replace("white-card", "gray-card")
  quiz.classList.replace("block", "none");

  scoreDiv.classList.remove("none");
  var music = new Audio();
  music.src = "Assets/music/GameOver.mp3";
  music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / subjects.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Assets/img/5.png"
      : scorePerCent >= 60
        ? "Assets/img/4.png"
        : scorePerCent >= 40
          ? "Assets/img/3.png"
          : scorePerCent >= 20
            ? "Assets/img/2.png"
            : "Assets/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += `<p>${scorePerCent}%</p>`;
  scoreDiv.innerHTML += `<button class="reload-quiz" onclick="reloadQuiz()">Try Again</button>`
}

function reloadQuiz() {
  window.location.reload()
}

// //////////////////////////////////////////////////////
// var myVar;

// function myLoader() {
//   myVar = setTimeout(showPage, 5000);
// }

function showHideInfo() {
  const loader = document.getElementById("loader")
  const infoBtn = document.getElementById("info-btn")
  const icon = document.getElementById("icon")

  console.log("Click");
  if (loader.style.display === 'none') {
    loader.style.display = 'block';
    icon.innerHTML = `<svg
				id="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-x-octagon"
				viewBox="0 0 16 16"
			>
				<path
					d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"
				/>
				<path
					d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
				/>
			</svg>`;
    infoBtn.style.color = "yellow";
  } else {
    infoBtn.style.color = "black"
    icon.innerHTML = `<svg
				id="icon"
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-info-lg"
				viewBox="0 0 16 16"
			>
				<path
					d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"
				/>
			</svg>`;

    infoBtn.addEventListener("mouseover", function () {
      infoBtn.style.color = "white";
    });
    infoBtn.addEventListener("mouseleave", function () {
      infoBtn.style.color = "black";
    });
    loader.style.display = 'none';
  }
}

