const options = ['rock', 'paper', 'scissor'];
const playerLossFaces = ['&#128539;', '&#128540;', '&#128527;', '&#128526;', '&#128514;'];
const playerWinFaces = ['&#128561;', '&#128556;', '&#128555;', '&#128548;', '&#128544;', '&#128542;', '&#128531;', '&#128534;', '&#129301;'];
const evilNames = ['Zyler Razor', 'Sephiran Ash', 'Arc Maleficum', 'Karayan Vossen', 'Viscardi Lobo', 'Orfeo Chainsaw', 'Carmin Shadowend', 'Xander Zul', 'Zander Bloodworth', 'Emma Magnus', 'Fatima Stone', 'Klyn Hallewell', 'Diamanda Umbra', 'Norrix Lestat', 'Fane Storm', 'Gnash Grim', 'Athena Sephiran', 'Zola Fang', 'Tabitha Shadowend'];
const thinkFace = '&#129300;';
const meanFace = '&#128520;';
const tieFace = '&#128562;';
let oppName;
let oppChoice;
let playerChoice;
let oppFace = $(".opp-face")

$("img").click(function() {
    playerChoice = $(this).attr("data-type");
    console.log({playerChoice});
    randomizeOpponentChoice();
    decideWinner();
});

$('.test').click(function() {
    oppFace.html(thinkFace);
    oppFace.addClass('think-face');
})

oppName = evilNames[Math.floor(Math.random()*evilNames.length)];
console.log(oppName);
$(".opp-name").html(oppName);

function randomizeOpponentChoice() {
    oppChoice = options[Math.floor(Math.random()*options.length)];
    console.log({oppChoice});
}

function decideWinner() {
    if (playerChoice == oppChoice) {
        $(".result").html("Tie!");
        oppFace.html(tieFace);
        oppFace.removeClass('think-face');
    } else if ((playerChoice == "rock" && oppChoice == "scissor") || (playerChoice == "paper" && oppChoice == "rock") || (playerChoice == "scissor" && oppChoice == "paper")) {
        $(".result").html("You Win!");
        let currentFace = playerWinFaces[Math.floor(Math.random()*playerWinFaces.length)];
        oppFace.html(currentFace);
        oppFace.removeClass('think-face');
    } else {
        $(".result").html("You Lose!");
        let currentFace = playerLossFaces[Math.floor(Math.random()*playerLossFaces.length)];
        oppFace.html(currentFace);
        oppFace.removeClass('think-face');
    }
}

$(window).on('load', function() {
    setTimeout(function () {
        $(".one").removeClass("hidden");
    }, 1000);
    setTimeout(function () {
        $(".two").removeClass("hidden");
    }, 1500);
    setTimeout(function () {
        $(".three").removeClass("hidden");
    }, 2000);
    setTimeout(function () {
        $(".four").removeClass("hidden");
    }, 2500);
    setTimeout(function () {
        $(".five").removeClass("hidden");
    }, 3000);
    setTimeout(function () {
        $(".six").removeClass("hidden");
    }, 3250);
    setTimeout(function () {
        $(".seven").removeClass("hidden");
    }, 3500);
    setTimeout(function () {
        $(".intro").addClass("hidden");
    }, 4000);
    setTimeout(function () {
        $(".ro").removeClass("hidden");
    }, 4000);
    setTimeout(function () {
        $(".sham").removeClass("hidden");
    }, 4250);
    setTimeout(function () {
        $(".bo").removeClass("hidden");
    }, 4500);
    setTimeout(function () {
        $(".ro").addClass("bob1");
        $(".sham").addClass("bob3");
        $(".bo").addClass("bob1");
        $(".test2").slideToggle();
    }, 4750);
})

