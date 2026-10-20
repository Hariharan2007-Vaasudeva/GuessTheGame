var num = document.getElementById("guess");
var result = document.getElementById("result");
var random = Math.floor(Math.random() * 100+1);
var score = document.getElementById("score");
var totalscore = 10;

function check() {
  var enternum = num.value;
  if (random == enternum) {
    console.log("Right");
    result.textContent = "Right";
    alert("You Won!🎉");
    alert("You are Lucky Person🎊");
  } else {
    result.textContent = "Wrong";
    totalscore = totalscore - 1;
    score.textContent = "Your available Score : " + totalscore;
  }
}
