// Variables

const RoundResult = document.querySelector(".Round");
const GameResult = document.querySelector(".Game");
const playerScore = document.querySelector(".Score1");
const computerScore = document.querySelector(".Score2");

// Text Area



// score

let PlayerScore = 0;
let ComputerScore = 0;

// Images with EventListeners

const choices = ["Rock", "Paper", "Scissor"]
let AllImg = document.querySelectorAll('img');

AllImg[0].addEventListener('click', function(){
    if (ComputerScore !== 5 && PlayerScore !== 5) {
        return Game("Rock");
    }
});
AllImg[1].addEventListener('click', function(){
    if (ComputerScore !== 5 && PlayerScore !== 5) {
        return Game("Paper");
    }
});
AllImg[2].addEventListener('click', function(){
    if (ComputerScore !== 5 && PlayerScore !== 5) {
        return Game("Scissor");
    }
});

// Game Code

function Game(PlayerSelection){   
               const Computer = choices[Math.floor(Math.random()*3)];

                if (Computer === PlayerSelection){
                    RoundResult.innerHTML = "It's a draw: " + Computer + " vs " + PlayerSelection;
                    RoundResult.style.color = "wheat";
                }
                else if (PlayerSelection !== Computer){

                    if (PlayerSelection === 'Rock' && Computer === 'Paper') {
                        ComputerScore++;
                        Result = "los";
                        RoundResult.innerHTML = "You have Lost: Rock vs Paper";
                    }
                    // --------------------------------------------------------------------
                    else if (PlayerSelection === 'Rock' && Computer === 'Scissor') {
                        PlayerScore++;
                        Result = "win";
                        RoundResult.innerHTML = "You have Won: Rock vs Scissor";
                    }
                    // --------------------------------------------------------------------
                    else if (PlayerSelection === 'Paper' && Computer === 'Rock') {
                        PlayerScore++;
                        Result = "win";
                        RoundResult.innerHTML = "You have Won: Paper vs Rock";
                    }
                    // --------------------------------------------------------------------
                    else if (PlayerSelection === 'Paper' && Computer === 'Scissor') {
                        ComputerScore++;
                        Result = "los";
                        RoundResult.innerHTML = "You have Lost: Paper vs Scissor";
                    }
                    // --------------------------------------------------------------------
                    else if (PlayerSelection === 'Scissor' && Computer === 'Rock') {
                        ComputerScore++;
                        Result = "los";
                        RoundResult.innerHTML = "You have Lost: Scissor vs Rock";
                    }
                    // --------------------------------------------------------------------
                    else if (PlayerSelection === 'Scissor' && Computer === 'Paper') {
                        PlayerScore++;
                        Result = "win";
                        RoundResult.innerHTML = "You have Won: Scissor vs Paper";
                    }
                    // --------------------------------------------------------------------
                    // --------------------------------------------------------------------
                    if(Result === "win") {
                        RoundResult.style.color = "green";
                    }
                    else if (Result === "los") {
                        RoundResult.style.color = "red";
                    }

                    // score count

                        computerScore.innerHTML = ComputerScore;
                        computerScore.style.color = "red";
                        playerScore.innerHTML = PlayerScore;
                        playerScore.style.color = "green";

                // end score/result + restart  

                }
                if(PlayerScore === 5 || ComputerScore === 5) {
                    score();
                }
            }

// GameScore

function score() {
    if(PlayerScore === ComputerScore){
            GameResult.innerHTML = "It's a draw"; 
        }    
    else if(PlayerScore > ComputerScore){
            GameResult.innerHTML = "You are the Winner!"; 
            GameResult.style.color = "green";
        }
                    
    else if(PlayerScore < ComputerScore){ 
            GameResult.innerHTML = "You are the loser!";
            GameResult.style.color = "red";                   
        }
}

//Restart Game

function restart() {
    PlayerScore = 0;
    ComputerScore = 0;
    computerScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    GameResult.innerHTML = "Game Result: ";
    RoundResult.innerHTML = "Round Result: ";
    GameResult.style.color = "";
    RoundResult.style.color = "";
}
