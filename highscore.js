var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var highScores = document.getElementById('sortedScores');

backBtn.addEventListener ("click", function () {
    location.href = "quiz.html";
});

clearBtn.on ('click', function () {
    localStorage.clear();
});

const li = $('<li>');
const data = JSON.parse(localStorage.getItem('savedData'));
data.forEach((item) => {
    
})