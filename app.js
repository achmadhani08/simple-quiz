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

const english = [
  {
    question: "Aldebaran: Where is Mom? I need to talk to her now. <br> Andin: She is making an important call right now .... not to disturb her at the moment",
    choiceA: "It is necessary.",
    choiceB: "It is better to.",
    choiceC: "You have.",
    choiceD: "You must.",
    correct: "A",
  },
  {
    question: "This new service will be available to all users .... for paid membership",
    choiceA: "that signed up",
    choiceB: "that signed them up",
    choiceC: "sign up",
    choiceD: "signed",
    correct: "A",
  },
  {
    question: "...., a fort should be built on an elevation and with some sort of natural feature of the lanndscape to obstruct direct access to the fort",
    choiceA: "protecting better its are of defense",
    choiceB: "for the better of its area of defense",
    choiceC: "it is better for its area of defense",
    choiceD: "to better protect its area of defense",
    correct: "D",
  },
  {
    question: "Numerous performances of Mozart's operas ... in Austria long before the beginning of the 19th century.",
    choiceA: "perform",
    choiceB: "had been performed",
    choiceC: "had performed",
    choiceD: "were performing",
    correct: "B",
  },
  {
    question: "...., they are valued in many countries",
    choiceA: "Because sheep produce both meat and wool",
    choiceB: "that sheep produce both meat and wool",
    choiceC: "why sheep produce both meat and wool",
    choiceD: "sheep produce both meat and wool",
    correct: "A",
  },
  {
    question: ".... a 3,121 mile shoreline is believed the reason why it claims to be a Water Wonderland on its license plates.",
    choiceA: "The State of Michigan has",
    choiceB: "That the state of Michigan has",
    choiceC: "how that the state of michigan has",
    choiceD: "The state of Mican",
    correct: "B",
  },
  {
    question: "Below are expressions of offering help, except...",
    choiceA: "Can I give you a hand",
    choiceB: "May I offer my assistance?",
    choiceC: "Do you need any help?",
    choiceD: "Could you help me please?",
  },
  {
    question: "Rendy’s mother : What was your sister doing when you arrived home last night? <br> Rendy : She...",
    choiceA: "cooks",
    choiceB: "has cooked",
    choiceC: "is cooking",
    choiceD: "was coocked",
    correct: "D",
  },
  {
    question: "Mary introduced me to her former lecturer .... <br> She married after she had graduated.",
    choiceA: "whos",
    choiceB: "of which",
    choiceC: "whom",
    choiceD: "who",
    correct: "C",
  },
  {
    question: "Febby : When will your sister finish her study? <br> Mirna : I hope she .... by July next year.",
    choiceA: "will have graduated",
    choiceB: "has graduated",
    choiceC: "will graduated",
    choiceD: "is going to graduated",
    correct: "A",
  },
  {
    question: "A : What a beautiful voice! She is a talented singer. <br> B : She…. since she was a child.",
    choiceA: "sang",
    choiceB: "is singing",
    choiceC: "has been singing",
    choiceD: "had been singing",
    correct: "C",
  },
  {
    question: "The manager always comes early to the office. I wonder where he lives. I often see him driving his car to Jalan Pakubuwono Kebayoran Baru. So he leaves not far from the office then. What is the text about?",
    choiceA: "The manager’s car",
    choiceB: "The manager’s house",
    choiceC: "The manager’s office",
    choiceD: "The manager’s address",
    correct: "D",
  },
  {
    question: "Mr. Anwar : Are you pleased that your son wants to be a dentist? <br> Mr. Rahman : No, not really. I wish my son became a manager of my shoe store. <br> The italicized expression means that....",
    choiceA: "Mr. Rahman’s son is a manager",
    choiceB: "Mr. Rahman’s son is running a shoe store business",
    choiceC: "Mr. Rahman wants his son to be a manager",
    choiceD: "Mr. Rahman’s son was not a dentist",
    correct: "C",
  },
  {
    question: "Eric has ... to the office for 2 hours",
    choiceA: "went",
    choiceB: "go",
    choiceC: "going",
    choiceD: "gone",
    correct: "D",
  },
  {
    question: "Student 1 : Dion is late again. <br> Student 2 : He is never on time. I think he ... earlier.",
    choiceA: "could have woken",
    choiceB: "ought to wake",
    choiceC: "should have woken",
    choiceD: "might have woken",
  },
  {
    question: "The Liberal Democrats and the Green party .... a coalition before the committee count the ballot paper.",
    choiceA: "Have formed",
    choiceB: "Had formed",
    choiceC: "Have been formed",
    choiceD: "Formed",
  },
  {
    question: "Should you answer interview questions in complete sentences or give a one word answer?",
    choiceA: "complete sentences",
    choiceB: "one word answer",
    choiceC: "both",
    choiceD: "neither",
    correct: "A",
  },
  {
    question: "Two tents for our camping would .... by my mother",
    choiceA: "Being bought",
    choiceB: "Be bought",
    choiceC: "Been bought",
    choiceD: "Bought",
    correct: "B",
  },
  {
    question: "Sinta has ... to the school for 3 hours",
    choiceA: "gone",
    choiceB: "go",
    choiceC: "going",
    choiceD: "went",
    correct: "A",
  },
  {
    question: "Jamilah: I think our city is saved from the virus, so we can go around. <br> Ellisa: But I don’t think so,… Our city is not saved. We must stay at home at least in lockdown time.",
    choiceA: "In my opinion",
    choiceB: "You know it",
    choiceC: "I am thinking of the virus",
    choiceD: "She forgets it",
    correct: "A",
  },
];

const algorithm = [
  {
    question: "Sebuah instruksi atau kalimat perintah dalam bahasa pemrograman yang akan dieksekusi oleh komputer disebut....",
    choiceA: "Statement",
    choiceB: "Program",
    choiceC: "Syntaks",
    choiceD: "String",
    correct: "A",
  },
  {
    question: "Jika kita ingin menulis lebih dari satu statement dalam satu baris pada bahasa Python, maka kita harus memisahkan antar statementnya dengan menggunakan tanda....",
    choiceA: "Pagar",
    choiceB: "Koma",
    choiceC: "Titik Koma",
    choiceD: "Titik dua",
    correct: "C",
  },
  {
    question: "Deretan karakter pada bahasa Python yang dapat berupa huruf, digit angka, atau simbol, yang penulisannya diawali dan diakhiri dengan tanda petik disebut....",
    choiceA: "String",
    choiceB: "Boolean",
    choiceC: "Integer",
    choiceD: "Float",
    correct: "A",
  },
  {
    question: "Blok program adalah kumpulan dari beberapa statement yang digabungkan dalam satu blok. Penulisan blok program sebaiknya ditambahkan jarak pengaturan posisi tiap statement dengan menekan tombol .... pada keyboard",
    choiceA: "Enter",
    choiceB: "Tab",
    choiceC: "Delete",
    choiceD: "Spasi",
    correct: "B",
  },
  {
    question: "Penulisan komentar pada python yang tidak akan tercetak saat di RUN adalah menggunakan tanda....",
    choiceA: "Spasi",
    choiceB: "Koma",
    choiceC: "Petik",
    choiceD: "Pagar",
    correct: "D",
  },
  {
    question: "Ekstension file yang dibuat menggunakan bahasa Python adalah...",
    choiceA: ".js",
    choiceB: ".cpp",
    choiceC: ".py",
    choiceD: ".html",
    correct: "C",
  },
  {
    question: "Struktur percabangan pada bahasa Python menggunakan fungsi...",
    choiceA: "Loop",
    choiceB: "LookUp",
    choiceC: "If Else",
    choiceD: "Aritmatika",
    correct: "C",
  },
  {
    question: "Struktur percabangan yang memiliki 2 (dua) kondisi dapat menggunakan perintah....",
    choiceA: "For While",
    choiceB: "If-Elif-Else",
    choiceC: "If Else",
    choiceD: "Elif",
    correct: "C",
  },
  {
    question: "Struktur percabangan yang memiliki lebih dari 2 (dua) kondisi dapat menggunakan perintah....",
    choiceA: "For While",
    choiceB: "If-Elif-Else",
    choiceC: "If Else",
    choiceD: "Elif",
    correct: "B",
  },
  {
    question: "Manakah di bawah ini yang BUKAN struktur pengulangan pada Python?",
    choiceA: "For Loop",
    choiceB: "While Loop",
    choiceC: "Nested Loop",
    choiceD: "If Loop",
    correct: "D",
  },
  {
    question: "Apa tipe data dari data yang dibaca dari file?",
    choiceA: "String",
    choiceB: "Integer",
    choiceC: "Boolean",
    choiceD: "Float",
    correct: "A",
  },
  {
    question: "Struktur percabangan pada bahasa Python menggunakan fungsi...",
    choiceA: "For While",
    choiceB: "LookUp",
    choiceC: "If Else",
    choiceD: "Aritmatika",
    correct: "A",
  },
  {
    question: "Pembagian dengan nol adalah contoh jenis kesalahan apa?",
    choiceA: "Syntak Error",
    choiceB: "Run-Time Error",
    choiceC: "Semantic Error",
    choiceD: "Code Error",
    correct: "B",
  },
  {
    question: "prnt(Hello World). Code tersebut adalah contoh jenis kesalahan apa?",
    choiceA: "Syntak Error",
    choiceB: "Run-Time Error",
    choiceC: "Semantic Error",
    choiceD: "Code Error",
    correct: "A",
  },
  {
    question: "Salah satu function/method berikut yang tidak digunakan pada Python String...",
    choiceA: "print",
    choiceB: "replace",
    choiceC: "append",
    choiceD: "remove",
    correct: "D",
  },
  {
    question: "Pilih kode berikut yang benar untuk mencetak 10 bintang dalam satu baris menggunakan operasi pengulangan....",
    choiceA: "print(" * ")",
    choiceB: "print(" * "*10)",
    choiceC: "print(" * "^10)",
    choiceD: "print(" * "+10)",
    correct: "B",
  },
  {
    question: "Sintak yang benar untuk mengubah string myname menjadi huruf kecil :",
    choiceA: "myNAME.lower[]",
    choiceB: "myname.lower()",
    choiceC: "myname.upper()",
    choiceD: "myname_lower(12)",
    correct: "B",
  },
  {
    question: "Operator pada python yang digunakan untuk operasi penambahan, pengurangan, perkalian, pembagian dan lain-lain disebut...",
    choiceA: "Aritmatika",
    choiceB: "Pembanding",
    choiceC: "String",
    choiceD: "Logika",
    correct: "A",
  },
  {
    question: "Operator ini digunakan untuk membandingkan dua buah nilai. Operator ini juga dikenal dengan operator relasi dan sering digunakan untuk membuat sebuah logika atau kondisi, disebut...",
    choiceA: "Aritmatika",
    choiceB: "Pembanding",
    choiceC: "String",
    choiceD: "Logika",
    correct: "B",
  },
  {
    question: "Operator ini menggunakan simbol =, +=, -=, *= dan lain-lain disebut...",
    choiceA: "Aritmatika",
    choiceB: "Pembanding",
    choiceC: "Logika",
    choiceD: "Penugasan",
    correct: "D",
  },
  {
    question: "Manakah statement yang tepat untuk menutup sebuah file stream yang bernama myfile?",
    choiceA: "myfile.terminate()",
    choiceB: "myfile.end()",
    choiceC: "myfile.close()",
    choiceD: "myfile.remove()",
    correct: "C",
  },
];

// Extra variables
let subjects;
let questionTime = Number; // second
let count = 0;
let TIMER;

const introMusic = document.getElementById("intro-music")

window.onload = function () {
  introMusic.play()
}

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

  introMusic.pause()

  startQuiz()
}

const lastQuestion = 20 - 1;
let runningQuestion = 0;
let score = 0;

let gameMusic = new Audio();
// start quiz
function startQuiz() {
  const infoBtn = document.getElementById("info-btn")
  infoBtn.style.display = "none"

  gameMusic.src = "Assets/music/warkop-song.mp3";
  gameMusic.play();
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
  if (questionTime > count) {
    counter.innerHTML = questionTime;
    questionTime--;
  } else {
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

    questionTime =
      subjects === math
        ? 90
        : subjects === english
          ? 60
          : 90
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
    questionTime =
      subjects === math
        ? 90
        : subjects === english
          ? 60
          : 90
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
  music.src = "Assets/music/kerja-bagus.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Assets/music/wrong.mp3";
  music.play();
}

// score render
function scoreRender() {
  gameMusic.pause()

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
  let scorePerCent = Math.round((100 * score) / subjects.length);

  // choose the image based on the scorePerCent
  let img = ""
  if (scorePerCent >= 80) {
    img = "Assets/img/win.jpeg"

    var music = new Audio();
    music.src = "Assets/music/win.mp3";
    music.play();
  } else if (scorePerCent >= 60) {
    img = "Assets/img/second.jpeg"

    var music = new Audio();
    music.src = "Assets/music/second-place.mp3";
    music.play();

  } else if (scorePerCent >= 40) {
    img = "Assets/img/third.jpeg"
    var music = new Audio();
    music.src = "Assets/music/third-place.mp3";
    music.play();

  } else if (scorePerCent >= 20) {
    img = "Assets/img/fourth.jpeg"

    var music = new Audio();
    music.src = "Assets/music/fourth-place.mp3";
    music.play();

  } else {
    img = "Assets/img/lose.jpeg";

    var music = new Audio();
    music.src = "Assets/music/lose.mp3";
    music.play();
  }

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += `<p>${scorePerCent}%</p>`;
  scoreDiv.innerHTML += `<button class="reload-quiz" onclick="reloadQuiz()">Try Again</button>`
}

function reloadQuiz() {
  window.location.reload()
}

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

