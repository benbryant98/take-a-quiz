var startBtn = document.getElementById("startBtn");
var home = document.getElementById("home");
var questionBox = $("#questionBox");
var timeDisplay = $("#timer");

var questionBank = [
  (question1 = {
    text: "Question 1 Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question2 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question3 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question4 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question5 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question6 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question7 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question8 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question9 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
  (question10 = {
    text: "Question  Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "C",
  }),
];
// creates random constant for use to pick a random question
const random = Math.floor(Math.random() * questionBank.length);

// defines question variable as random question from bank
var question = questionBank[random];

var rightAns = "";
console.log(rightAns);

var counter = 60;
timeDisplay.append("" + counter);

function askQuestion(text, a, b, c, d, correct) {
  text = $("<h2>");

  // defines parameters of function with properties of selected question property
  text = question["text"];
  a = question["a"];
  b = question["b"];
  c = question["c"];
  d = question["d"];
  rightAns = question["correct"];

  // placeholder array to make creating questions more efficient with for loop
  let x = [a, b, c, d];
  questionBox.append(text);

  // enumerates through placeholder array to create answer buttons for each possible answer
  for (i = 0; i < x.length; i++) {
    let ansBtn = $("<button>");
    ansBtn.text(x[i]);
    ansBtn.addClass("ansBtn");
    ansBtn.attr("data-answer", x[i]);
    questionBox.append(ansBtn);
  }

  // counts timer down by one every second
  var gameTimer = setInterval(function () {
    counter--;
    timeDisplay.text("Time Left: " + counter);
    if (counter <= 0) {
      clearInterval(gameTimer);
      counter = 0;
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  home.style.display = "none";
  askQuestion();
});

questionBox.on("click", ".ansBtn", function (event) {
  var response = event.target;
  if (response === rightAns) {
    $(event.target).addClass("correct");
    counter += 5;
  } else {
    $(event.target).addClass("incorrect");
    counter -= 10;
  }
});
