
console.log("The Crystal Game");

// declare global variables
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var randomNumber;
var wins = 0;
var losses = 0;

function resetRandom() {
// create function for random number 19-120
function setRandom() {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}
// create function to make crystal values 1-12
function setRandomCrystal() {
   return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
}

// use random functions to define vars


crystal1 = setRandomCrystal(); crystal2 = setRandomCrystal();crystal3 = setRandomCrystal();crystal4 = setRandomCrystal();
randomNumber = setRandom();

console.log("random num " + randomNumber);
console.log("random crystal1 " + crystal1);
console.log("random crystal2 " + crystal2);
console.log("random crystal3 " + crystal3);
console.log("random crystal4 " + crystal4);
};

 // create reset function for game end

 function resetGame(){
    resetRandom();
    userTotal = 0;
    $("#total_score").html(userTotal);
    // display random number
    $("#cpu_score").html("Random Number: <h2>" + randomNumber + "</h2>");
 };

 resetGame();

 // print scoreboard
 function printScore() {
    $('#wins').html("Wins: " + wins)
    $('#losses').html("Losses: " + losses)
};
printScore();

// conditional statements for win\lose
function winLose() {
    if (userTotal === randomNumber)  {
       wins++;
       resetGame();
       printScore();
   
    } else if (userTotal > randomNumber) {
        losses++;
        resetGame();
        printScore();
    }
   };


//increase userTotal with each crystal click
var userTotal = 0;

$("#crystal1_div").click(function(){
    userTotal = userTotal + crystal1;
    $("#total_score").html(userTotal);
    winLose();
});
$("#crystal2_div").click(function(){
    userTotal = userTotal + crystal2;
    $("#total_score").html(userTotal);
    winLose();
});
$("#crystal3_div").click(function(){
    userTotal = userTotal + crystal3;
    $("#total_score").html(userTotal);
    winLose();
});
$("#crystal4_div").click(function(){
    userTotal = userTotal + crystal4;
    $("#total_score").html(userTotal);
    winLose();

});

// // display userTotal to total_score div

// $("#total_score").html(userTotal);


