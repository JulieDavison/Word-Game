// <!-- Use key events to listen for the letters that your players will type. -->

// Variables

var possibleWords = ["list", "words", "here"];


//Empty variables
var guessingWord = [];
var guessedLetters = [];
var currentStatus = guessingWord.slice();
var wordToMatch
var numGuess
var wins = 0

// resetGame(); need function to reset game.


//Shows word with underscores instead of letters.
for (i = 0; i < guessingWord.length; i++) {
    currentStatus[i] = "_"
    console.log(currentStatus[i]);
}


//onkeypress event goes here.  "KEY EVENT"
// when a key is pressed start the game if the key is an uppercase alphabet character.
document.onkeypress = function (e) {
    if (isAlpha(e.key) && e.key.toUpperCase()){
        checkForLetter(e.key)
    }
    else
        //change to uppercase
        checkForLetter(e.key);
    

}
//Check if letter is in the word and then process 
function checkForLetter(){
    var guess = document.getElementById("guess").value;
    var found = false;
    for (i = 0; i < hiddenWord.length; i++) {
        if (hiddenWord[i] == guess) {
            // if the guess donst exist set a flag and check later
            // 
            currentStatus[i] = guess;
            found = true;
        }
    }
}



//Need function to update display.
// function updateDisplay() {
    // document.getElementById("currentWord").innerText = guessingWord.join("");
// }
