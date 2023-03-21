var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var highScores = document.getElementById("sortedScores");

backBtn.addEventListener("click", function () {
  location.href = "../index.html";
});

$(clearBtn).on("click", function () {
  localStorage.clear();
  $(highScores).empty();
});

savedData = JSON.parse(localStorage.getItem("savedData"));

for (i = 0; i < savedData.length; i++) {
  let initials = savedData[i][0];
  let score = savedData[i][1];
  let liItem = $("<li>");
  liItem.html(initials + " | " + score);
  $(highScores).append(liItem);
}
