const options = ['rock', 'paper', 'scissor'];
let oppChoice;
let playerChoice;

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
    } else if ((playerChoice == "rock" && oppChoice == "scissor") || (playerChoice == "paper" && oppChoice == "rock") || (playerChoice == "scissor" && oppChoice == "paper")) {
        $(".result").html("You Win!");
    } else {
        $(".result").html("You Lose!");
    }
}