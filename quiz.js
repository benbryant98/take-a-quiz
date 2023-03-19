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
    text: "Question 2 Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "A",
  }),
  (question3 = {
    text: "Question 3 Placeholder",
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    correct: "D",
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

var counter = 60;
timeDisplay.append("" + counter);
// setting global variable
qIndex = 0;

function askQuestion() {
  text = $("<h2>");
  text.addClass("questionText");

  question = questionBank[qIndex];
  console.log(question);

  // defines parameters of function with properties of selected question property
  text = question["text"];
  a = question["a"];
  b = question["b"];
  c = question["c"];
  d = question["d"];
  rightAns = question.correct;

  // placeholder array to make creating questions more efficient with for loop
  let x = [a, b, c, d];
  questionBox.append(text);

  // enumerates through placeholder array to create answer buttons for each possible answer
  for (i = 0; i < x.length; i++) {
    let ansBtn = $("<button>");
    ansBtn.text(x[i]);
    // styling class
    ansBtn.addClass("ansBtn");
    // ansBtn.attr("data-answer", x[i]);
    questionBox.append(ansBtn);
  }

  qIndex++;
  // return values for use in events
  return rightAns, qIndex;
}

// remvoes previous question and prompts new one with clickable buttons
function nextQuestion() {
  $("#questionBox").empty();
  askQuestion();
  $(questionBox).removeClass("unclickable");
}

startBtn.addEventListener("click", function () {
  home.style.display = "none";
  askQuestion();

  // counts timer down by one every second
  var gameTimer = setInterval(function () {
    counter--;
    timeDisplay.text("Time Left: " + counter);
    if (counter <= 0) {
      clearInterval(gameTimer);
      // sets counter back to zero when below zero
      counter = 0;
      timeDisplay.text("Time Left: " + counter);
    }
  }, 1000);
});

// event handler for clicks on answer buttons
questionBox.on("click", ".ansBtn", function (event) {
  var response = event.target.textContent;

  // prevents user from clicking multiple times to get time boost
  if ($(questionBox).hasClass("unclickable")) {
    event.preventDefault();
  } else {
    $(questionBox).addClass("unclickable");

    // adds class for correct/incorrect styling and changes time
    if (response === rightAns) {
      $(event.target).addClass("correct");
      counter += 5;
      console.log("Correct!");
    } else {
      $(event.target).addClass("incorrect");
      counter -= 10;
      console.log("Incorrect!");
    }

    setTimeout(nextQuestion, 2000);
  }
});
