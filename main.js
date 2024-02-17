const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const message = document.getElementById("message");

const playerCount = document.getElementById("player-count");
const computerCount = document.getElementById("computer-count");


const playerInputs = [rock, paper, scissors];

let player = 0;
let computer = 0;

const initGame = () => {
    playerCount.innerHTML = player;
    computerCount.innerHTML = computer;
    message.innerHTML = "";
}

initGame();

const waitAnimation = () =>{
    message.classList.remove("isPlaying");
    playerInputs.forEach((button) => (
        button.disabled = false))
}

const randomComputerChoice = () => {

    let random = Math.floor(Math.random() * (3)) + 1;

    if (random === 1){
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else return "scissors";
}

const getRoundWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice){
        message.innerHTML = "tie";
        message.classList.add("isPlaying");
        message.addEventListener("animationend", () => {
            waitAnimation();
        });
        return;

    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
        
        player += 1;
        playerCount.innerHTML = player;
        message.innerHTML = "You win!";
        message.classList.add("isPlaying");
        message.addEventListener("animationend", () => {
            waitAnimation();
        });
        return;

    } else {

        computer += 1;
        computerCount.innerHTML = computer;
        message.innerHTML = "You lost";
        message.classList.add("isPlaying");
        message.addEventListener("animationend", () => {
            waitAnimation();
        });
        return;

    }
}



let playerChoice = "";

playerInputs.forEach((item) => (item.addEventListener("click", () => {
    playerInputs.forEach((button) => (
        button.disabled = true))
    playerChoice = item.id;
    let computerChoice = randomComputerChoice();

    console.log(playerChoice + " " + computerChoice);

    getRoundWinner(playerChoice, computerChoice);

})))


