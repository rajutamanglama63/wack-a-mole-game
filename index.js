let score = 0;
let holes = document.querySelectorAll(".hole");

let scoreDispley = document.getElementById("score");

let prevVal = -1;

setInterval(function () {
  let randomNum = Math.floor(Math.random() * holes.length);
  holes[randomNum].classList.toggle("mole");
}, 1000);

const game = document.getElementById("whack-a-mole");

game.addEventListener("click", function (e) {
  if (e.target.matches(".mole")) {
    score++;
    e.target.classList.toggle("mole");

    scoreDispley.innerHTML = score;
  }
});
