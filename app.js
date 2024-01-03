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

// create questions
let questions = [
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "A",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "D",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "A",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "A",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "D",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "A",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "D",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "B",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    imgSrc: "Assets/img/dog.gif",
    choiceA: "Lorem",
    choiceB: "ipsum",
    choiceC: "dolor",
    choiceD: "sit",
    correct: "C",
  },
];

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 20s

let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  // qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

// start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  // var music = new Audio();
  // music.src = "Assets/music/Easy song.mp3";
  // music.play();
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
  if (answer == questions[runningQuestion].correct) {
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
  // var music = new Audio();
  // music.src = "Assets/music/yeah.mp3";
  // music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  // var music = new Audio();
  // music.src = "Assets/music/Huh.mp3";
  // music.play();
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
  // var music = new Audio();
  // music.src = "Assets/music/GameOver.mp3";
  // music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

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
  body.removeAttribute("onload")
  body.innerHTML = `<body id="body" class="white-bg">
  	<div id="container" class="gray-card">
  		<h2 id="title" class="title-quiz block">Choose Your Quiz</h2>
  		<div id="buttons" class="subjects-button-container block">
  			<button id="start" class="block start-button" onclick="startQuiz()">Algorithm</button>
  			<button id="english" class="block start-button">English</button>
  			<button id="math" class="block start-button">Math</button>
  		</div>
  		<div id="quiz" class="none">
  			<div id="question"></div>
  			<div id="qImg"></div>
  			<div id="choices">
  				<button class="choice" id="A" onclick="checkAnswer('A')"></button>
  				<button class="choice" id="B" onclick="checkAnswer('B')"></button>
  				<button class="choice" id="C" onclick="checkAnswer('C')"></button>
  				<button class="choice" id="D" onclick="checkAnswer('D')"></button>
  			</div>
  			<div id="timer">
  				<div id="counter"></div>
  			</div>
  			<div id="progress"></div>
  		</div>
  	</div>
  	<div id="scoreContainer" class="none"></div>
  	<footer>
      Copyright © 2024 - Designed by Dnsy
    </footer>
  	<script src="app.js"></script>
  </body>`
}

//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
