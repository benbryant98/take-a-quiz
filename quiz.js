var startBtn = document.getElementById("startBtn");
var home = document.getElementById("home");
var questionBox = $("#questionBox");
var timeDisplay = $("#timer");

var questionBank = [
  (question1 = {
    text: "Which of the following terms is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both A and B",
    d: "def",
    correct: "Both A and B",
  }),
  (question2 = {
    text: "How do you declare a constant in Javascript?",
    a: "for",
    b: "if",
    c: "const",
    d: "constant",
    correct: "const",
  }),
  (question3 = {
    text: "What function serializes an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "convert()",
    c: "parse()",
    d: "wordify()",
    correct: "stringify()",
  }),
  (question4 = {
    text: "What stops an interval timer in Javascript?",
    a: "stopTimer",
    b: "endInterval",
    c: "clearInterval",
    d: "clearTimer",
    correct: "clearInterval",
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
