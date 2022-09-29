var startTimer = false;
var startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");


setInterval(updateCountdown, 1000);


function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < startingMinutes ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}



function showRight() {
  var rightWindow = document.getElementById("rightWindow");
  var leftWindow = document.getElementById("leftWindow");
  //fix bug where fist click is double click because the hident rightWindow counts as seen
  if (rightWindow.style.display === "none") {
    rightWindow.style.display = "block";
    leftWindow.style.width = "67%";
  } else {
    rightWindow.style.display = "none";
    leftWindow.style.width = "100%";
  }
}

function startPause() {
  var startBtn = document.getElementById("startBtn");

  if(startBtn.innerText === "START" ||  startBtn.innerText === "RESUME"){
    startBtn.innerText = "PAUSE";
    startTimer = true;
  }
  else{
    startBtn.innerText = "RESUME";
    startTimer = false;
  }

}

function cancelTimer(){
  startBtn.innerText = "START";
  startTimer = false;

}