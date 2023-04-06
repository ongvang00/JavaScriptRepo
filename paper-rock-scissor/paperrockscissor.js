//Define a hands array with the values 'rock', 'paper', and 'scissors';

const Hand= ['rock', 'paper', 'scissors'];


//Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
//Define two objects for two players. Each player has name and getHand() properties.
//Define a function called playRound() that
//Takes two player objects as arguments
//Gets hands from each


const PlayerOne= {Name:"Nick" , getHandmethod: getHand}
const PlayerTwo = {Name:"Molly", getHandmethod: getHand}

function getHand(){
    return Hand[parseInt(Math.random()*10)%3];
}
console.log(getHand)



function playRound(PlayerOne,PlayerTwo){
    let player1 = PlayerOne.getHandmethod();
    let player2 = PlayerTwo.getHandmethod();

    console.log(PlayerOne.Name,player1 );
    console.log(PlayerTwo.Name,player2);

    if (player1 === player2) {
        console.log("it's a tie");
        return null;
    }else if (player1 === "rock" && player2 === "scissors") {
        console.log( "Rock wins!");
        return PlayerOne;
    }else if (player1 === "scissors" && player2 === "paper"){
        console.log("Scissor wins!");
        return PlayerOne;
    }else if (player1 === "paper" && player2 === "rock"){
        console.log("Paper wins!");
        return PlayerOne;
    }else if (player1 === "scissors" && player2 === "rock"){
        console.log("Scissors wins!");
        return PlayerTwo;
    }else if (player1 === "paper" && player2 === "scissors"){
        console.log("Paper wins");
        return PlayerTwo;
    }else if (player1 === "rock" && player2 === "paper"){
        console.log("Rock wins!");
        return PlayerTwo;
    }
}

//Determines the winner
//Logs the hands played and name of the winner.
//If its a tie, log the hands played and "it's a tie".
//Returns the winner object (null if no winner)/

const playUntill=5;
let player1Wins= 0;
let player2Wins= 0;

function playGame(PlayerOne, PlayerTwo,playUntill=5){
    let game = playRound(PlayerOne, PlayerTwo)
    if(game === PlayerOne){
        player1Wins+=1;
        console.log('Nick:'+player1Wins)
        console.log('Molly:'+player2Wins)
    }else if (game == PlayerTwo){
        player2Wins+=1;
        console.log('Nick:'+player1Wins)
        console.log('Molly:'+player2Wins)
    }
    if (player1Wins == playUntill || player2Wins == playUntill){
    return [game]

    }
    return playGame(PlayerOne,PlayerTwo)
}



console.log(playGame(PlayerOne, PlayerTwo,playUntill))