function showAlert() {
    var myText = "This can be whatever text you like!";
    alert (myText);
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
  }
  else{
    startBtn.innerText = "RESUME";
  }

}