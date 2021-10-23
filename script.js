const options = ['Rock', 'Paper', 'Scissors'];
const playerLossFaces = ['&#128539;', '&#128540;', '&#128527;', '&#128526;', '&#128514;'];
const playerWinFaces = ['&#128561;', '&#128556;', '&#128555;', '&#128548;', '&#128544;', '&#128542;', '&#128531;', '&#128534;', '&#129301;'];
const evilNames = ['Zyler Razor', 'Sephiran Ash', 'Arc Maleficum', 'Karayan Vossen', 'Viscardi Lobo', 'Orfeo Chainsaw', 'Carmin Shadowend', 'Xander Zul', 'Zander Bloodworth', 'Emma Magnus', 'Fatima Stone', 'Klyn Hallewell', 'Diamanda Umbra', 'Norrix Lestat', 'Fane Storm', 'Gnash Grim', 'Athena Sephiran', 'Zola Fang', 'Tabitha Shadowend'];
const thinkFace = '&#129300;';
const meanFace = '&#128520;';
const tieFace = '&#128562;';
let status = "";
let oppName = "Bobby Beefcake";
let oppChoice = "";
let playerChoice = "";
let oppFace = $(".opp-face");
let round = 1;
let wins = 0;
let losses = 0;
let ties = 0;

$(".opp-select").change(function() {
    oppName = this.value;
    $(".opp-name").html(oppName);
    wins = 0;
    losses = 0;
    ties = 0;
    round = 1;
    $(".wins").html(wins);
    $(".ties").html(ties);
    $(".losses").html(losses);
    $(".round").html(round);
})

$("img").click(function() {
    $(".choices-container").addClass("hidden");
    decideOpponentChoice();
    playerChoice = $(this).attr("data-type");
    decideWinner();
    battleAnimation();
});

function battleAnimation() {
    console.log(playerChoice);
    console.log(oppChoice);
    $(".player-battle").addClass("fight1");
    $(".player-battle").html(playerChoice);
    $(".opp-battle").addClass("fight2");
    $(".opp-battle").html(oppChoice);
    if (status == "tie") {
        setTimeout(function () {
            $(".player-battle").removeClass("fight1");
            $(".player-battle").addClass("fly-away1");
            $(".opp-battle").removeClass("fight2");
            $(".opp-battle").addClass("fly-away2");
            setTimeout(function () {
                $(".player-battle").html("");
                $(".opp-battle").html("");
                $(".result").html("Tie!");
                ties++;
                $(".ties").html(ties);
                oppFace.html(tieFace);
            }, 1000);
        }, 2000);
    }
    if (status == "win") {
        setTimeout(function () {
            $(".opp-battle").removeClass("fight2");
            $(".opp-battle").addClass("fly-away2");
            setTimeout(function () {
                $(".opp-battle").html("");
                $(".result").html("You Win!");
                wins++;
                $(".wins").html(wins);
                let currentFace = playerWinFaces[Math.floor(Math.random()*playerWinFaces.length)];
                oppFace.html(currentFace);
            }, 1000);
        }, 2000);
    }
    if (status == "loss") {
        setTimeout(function () {
            $(".player-battle").removeClass("fight1");
            $(".player-battle").addClass("fly-away1");
            setTimeout(function () {
                $(".player-battle").html("");
                $(".result").html("You Lose!");
                losses++;
                $(".losses").html(losses);
                let currentFace = playerLossFaces[Math.floor(Math.random()*playerLossFaces.length)];
                oppFace.html(currentFace);
            }, 1000);
        }, 2000);
    }
}

function decideOpponentChoice() {
    if ($(".opp-name").html() == "Bobby Beefcake") {
        oppChoice = "Rock";
    }
    if (($(".opp-name").html() == "Sarah Switch")) {
        if (!playerChoice) {
            oppChoice = options[Math.floor(Math.random()*options.length)];
        } else {
            oppChoice = playerChoice;
        }
    }
    
    // else {
    //     oppChoice = options[Math.floor(Math.random()*options.length)];
    // }
}

function decideWinner() {
    if (playerChoice == oppChoice) {
        status = "tie";
    } else if ((playerChoice == "Rock" && oppChoice == "Scissors") || (playerChoice == "Paper" && oppChoice == "Rock") || (playerChoice == "Scissors" && oppChoice == "Paper")) {
        status = "win";
    } else {
        status = "loss";
    }
    $(".begin-btn").removeClass("hidden");
    $(".round").html(round);
}

$(window).on('load', function() {
    // oppName = evilNames[Math.floor(Math.random()*evilNames.length)];
    $(".opp-name").html(oppName);
    $(".round").html(round);
    $(".wins").html(wins);
    $(".ties").html(ties);
    $(".losses").html(losses);
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
        // $("main").slideToggle();
    }, 4750);
});

function opponentMakeChoice() {
    oppFace.html(thinkFace);
    oppFace.addClass('think-face');
    $(".thinking").removeClass("hidden");
    setTimeout(function () {
        oppFace.html(meanFace);
        oppFace.removeClass('think-face');
        $(".choices-container").removeClass("hidden");
        $(".thinking").addClass("hidden");
    }, 1500);
}

$(".begin-btn").click(function () {
    opponentMakeChoice();
    $(".begin-btn").addClass("hidden");
    round++;
    $(".round").html(round);
    $(".result").html("");
    $(".opp-battle").html("");
    $(".player-battle").html("");
    $(".opp-battle").removeClass("fight2");
    $(".player-battle").removeClass("fight1");
})

