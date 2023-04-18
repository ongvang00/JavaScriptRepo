const Hand = ['rock', 'paper', 'scissors'];

const PlayerOne = {
  Name: "Nick",
  getHandmethod: getHand
}

const PlayerTwo = {
  Name: "Molly",
  getHandmethod: getHand
}

function getHand() {
  return Hand[parseInt(Math.random() * 10) % 3];
}

function playRound(PlayerOne, PlayerTwo) {
  let player1 = PlayerOne.getHandmethod();
  let player2 = PlayerTwo.getHandmethod();

  document.getElementById("player-one-hand").textContent = `${PlayerOne.Name}: ${player1}`;
  document.getElementById("player-two-hand").textContent = `${PlayerTwo.Name}: ${player2}`;

  if (player1 === player2) {
    document.getElementById("round-result").textContent = "It's a tie";
    return null;
  } else if (player1 === "rock" && player2 === "scissors") {
    document.getElementById("round-result").textContent = "Rock wins!";
    return PlayerOne;
  } else if (player1 === "scissors" && player2 === "paper") {
    document.getElementById("round-result").textContent = "Scissor wins!";
    return PlayerOne;
  } else if (player1 === "paper" && player2 === "rock") {
    document.getElementById("round-result").textContent = "Paper wins!";
    return PlayerOne;
  } else if (player1 === "scissors" && player2 === "rock") {
    document.getElementById("round-result").textContent = "Scissors wins!";
    return PlayerTwo;
  } else if (player1 === "paper" && player2 === "scissors") {
    document.getElementById("round-result").textContent = "Paper wins!";
    return PlayerTwo;
  }
}

function playGame(PlayerOne, PlayerTwo, playUntil = 5) {
  let player1Wins = 0;
  let player2Wins = 0;
  
  while (player1Wins < playUntil && player2Wins < playUntil) {
    let roundWinner = playRound(PlayerOne, PlayerTwo);
    if (roundWinner === PlayerOne) {
      player1Wins++;
    } else if (roundWinner === PlayerTwo) {
      player2Wins++;
    }
  }
  
  if (player1Wins > player2Wins) {
    return PlayerOne;
  } else if (player2Wins > player1Wins) {
    return PlayerTwo;
  } else {
    return null;
  }
}

document.getElementById("play-round-button").addEventListener("click", function() {
  let gameWinner = playGame(PlayerOne, PlayerTwo);
  if (gameWinner === PlayerOne) {
    document.getElementById("round-result").textContent = `${PlayerOne.Name} wins the game!`;
  } else if (gameWinner === PlayerTwo) {
    document.getElementById("round-result").textContent = `${PlayerTwo.Name} wins the game!`;
  } else {
    document.getElementById("round-result").textContent = "It's a tie game!";
  }
});