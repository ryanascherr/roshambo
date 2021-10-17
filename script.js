const options = ['rock', 'paper', 'scissor'];
const playerLossFaces = ['&#128539;', '&#128540;', '&#128527;', '&#128526;', '&#128514;'];
const playerWinFaces = ['&#128561;', '&#128556;', '&#128555;', '&#128548;', '&#128544;', '&#128542;', '&#128531;', '&#128534;', '&#129301;'];
const thinkFace = '&#129300;';
const meanFace = '&#128520;';
const tieFace = '&#128562;';
let oppChoice;
let playerChoice;
let oppFace = $(".opp-face")

$("img").click(function() {
    playerChoice = $(this).attr("data-type");
    console.log({playerChoice});
    randomizeOpponentChoice();
    decideWinner();
});

function randomizeOpponentChoice() {
    oppChoice = options[Math.floor(Math.random()*options.length)];
    console.log({oppChoice});
}

function decideWinner() {
    if (playerChoice == oppChoice) {
        $(".result").html("Tie!");
        oppFace.html(tieFace);
    } else if ((playerChoice == "rock" && oppChoice == "scissor") || (playerChoice == "paper" && oppChoice == "rock") || (playerChoice == "scissor" && oppChoice == "paper")) {
        $(".result").html("You Win!");
        let currentFace = playerWinFaces[Math.floor(Math.random()*playerWinFaces.length)];
        oppFace.html(currentFace);
    } else {
        $(".result").html("You Lose!");
        let currentFace = playerLossFaces[Math.floor(Math.random()*playerLossFaces.length)];
        oppFace.html(currentFace);
    }
}