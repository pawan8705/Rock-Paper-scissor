let myScore = document.getElementById("myscore").innerHTML;
let comScore = document.getElementById("compscore").innerHTML;

function myFun1() {
  let a = Math.random();
  let b = a * 3;
  let c = Math.floor(b);
  let rocks = document.getElementById("userimage").src = "/Rock Paper scissor/Assests/Rock.png";
  if (c == 0) {
    let rock = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Rock.png";
    if (rocks && rock) {
      document.getElementById("result").innerHTML = "Match Draw"
    }
  }
  if (c == 1) {
    let paper = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Paper.png";
    if (rocks && paper) {
      document.getElementById("result").innerHTML = "You Lose"
      comScore++;
      document.getElementById("compscore").innerHTML = comScore;
    }
  }
  if (c == 2) {
    let Scissor = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Scissors.png";
    if (rocks && Scissor) {
      document.getElementById("result").innerHTML = "You Won"
      myScore++;
      document.getElementById("myscore").innerHTML = myScore;
    }
  }
}
function myFun2() {
  let a = Math.random();
  let b = a * 3;
  let c = Math.floor(b);
  let papers = document.getElementById("userimage").src = "/Rock Paper scissor/Assests/Paper.png";
  if (c == 0) {
    let rock = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Rock.png";
    if (papers && rock) {
      document.getElementById("result").innerHTML = "You won";
      myScore++;
      document.getElementById("myscore").innerHTML = myScore;
    }
  }
  if (c == 1) {
    let paper = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Paper.png";
    if (papers && paper) {
      document.getElementById("result").innerHTML = "Match Draw"
    }
  }
  if (c == 2) {
    let Scissor = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Scissors.png";
    if (papers && Scissor) {
      document.getElementById("result").innerHTML = "You lose";
      comScore++;
      document.getElementById("compscore").innerHTML = comScore;
    }
  }
}
function myFun3() {
  let a = Math.random();
  let b = a * 3;
  let c = Math.floor(b);
  let Scissors = document.getElementById("userimage").src = "/Rock Paper scissor/Assests/Scissors.png";
  if (c == 0) {
    let rock = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Rock.png";
    if (Scissors && rock) {
      document.getElementById("result").innerHTML = "you lose"
      comScore++;
      document.getElementById("compscore").innerHTML = comScore;
    }
  }
  if (c == 1) {
    let paper = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Paper.png";
    if (Scissors && paper) {
      document.getElementById("result").innerHTML = "You Won"
      myScore++;
      document.getElementById("myscore").innerHTML = myScore;
    }
  }
  if (c == 2) {
    let Scissor = document.getElementById("compimage").src = "/Rock Paper scissor/Assests/Scissors.png";
    if (Scissors && Scissor) {
      document.getElementById("result").innerHTML = "Match Draw";
    }
  }
}