
let score = 
JSON.parse(localStorage.getItem('score'))|| {
  wins: 0,
  loses: 0,
  ties: 0
};



updateScoreElement();


/*
if (!score ) {
score = {
  wins: 0,
  loses: 0,
  ties: 0
};

}

*/


function updateScoreElement() {
  document.querySelector('.js-score').innerHTML=` wins: ${score.wins} , looses: ${score.loses} , Ties: ${score.ties}
`;
}

function compMove() {
const randomNumber = Math.random();

let computerMove = "";

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove = "Rock";
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove = "Paper";
} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
computerMove = "Scissors";
}
return computerMove;
}

function result(playerMove) {
const computerMove = compMove();

let result = "";

if (playerMove === "Scissors") {
if (computerMove === "Scissors") {
  result = "Tie.";
} else if (computerMove === "Rock") {
  result = "You loose.";
} else if (computerMove === "Paper") {
  result = "You Win.";
}
} else if (playerMove === "Rock") {
if (computerMove === "Rock") {
  result = "Tie.";
} else if (computerMove === "Paper") {
  result = "You loose.";
} else if (computerMove === "Scissors") {
  result = "You Win.";
}
} else if (playerMove === "Paper") {
if (computerMove === "Paper") {
  result = "Tie.";
} else if (computerMove === "Scissors") {
  result = "You loose.";
} else if (computerMove === "Rock") {
  result = "You Win.";
}
}

if (result === 'You Win.') {
  score.wins += 1;
} else if (result === 'You loose.') {
  score.loses +=1;
} else if (result === 'Tie.') {
  score.ties +=1;
}

document.querySelector('.js-result').innerHTML = result ;


document.querySelector('.js-moves').innerHTML = `you
<img src="images/${playerMove}-emoji.png"  class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`;


localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();


}
