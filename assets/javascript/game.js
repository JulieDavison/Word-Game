// <!-- Use key events to listen for the letters that your players will type. -->

// Variables

var possibleWords = ["Earth", "galaxy", "asteroid", "comet", "constellations", "Neptune", "nebula", "Saturn", "Jupiter"];

var maxGuess = 10
// var pauseGame = false

var guessingWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var guessedLetters = [];
var currentStatus = [];
// var wordToMatch
var numGuess
var wins = 0

//reset game.
// resetGame();

//Shows word with underscores instead of letters.
for (i = 0; i < guessingWord.length; i++) {
    currentStatus[i] = "_";
}
console.log(guessingWord);
// document.getElementById("currentWord").innerHTML = guessingWord.join("");

console.log(currentStatus.join(" "));
// document.getElementById("currentWord").innerHTML = currentStatus.join("");

var currentWordEl = document.getElementById('currentWord');
currentWordEl.innerText = currentStatus.join(' ');
//currentWordE1 is the currentword now.

var isAlpha = function (ch) {
    return /^[A-Z]$/i.test(ch);
}

// A key is pressed start the game if the key is an uppercase alphabet character.
document.onkeypress = function (e) {
    var keyValue = e.key;
    console.log(keyValue);
    console.log(isAlpha(e.key));
    if (isAlpha(e.key)) {
        var letterInWord = checkForLetter(e.key);
        console.log(typeof letterInWord);

        if (letterInWord === true) {
            // letterInWord.push(e.key);


            // document.getElementById("currentWord").innerText = letterInWord.join(" ");
            //Inside this b;lock we know the gues was in the word
            //we need to update teh underscores on screen
            console.log(currentStatus)
            document.getElementById("currentWord").innerHTML = currentStatus.join("" + " ");

        }
        else {
            //Guess was not in the word
            //add the letter to letters guessed array (push method)
            maxGuess--;
            console.log(maxGuess);
            document.getElementById("remainingGuesses").innerText = maxGuess;


            guessedLetters.push(keyValue);
            console.log(guessedLetters);
            document.getElementById("guessedLetters").innerText = guessedLetters.join(" ");
        }

        //Is teh game completed
        if (currentStatus.indexOf('_') < 0) {
            //User has completed the word
            alert('you win');
            wins++;
            document.getElementById("totalWins").innerText = wins;
            console.log(wins);
        }
    }
    else {
        //You didnt give us good input
        alert("Need an actual letter!")
    }



}
//Check if letter is in the word and then process 
function checkForLetter(keyPressed) {
    //var guess = document.getElementById("guess").value;
    var found = false;

    for (i = 0; i < guessingWord.length; i++) {
        if (guessingWord[i].toLowerCase() === keyPressed.toLowerCase()) {
            // if the guess donst exist set a flag and check later
            // 
            currentStatus[i] = guessingWord[i];
            found = true;


        }

    }

    return found;
}


// function resetGame() {
// numGuess = maxGuess
// pauseGame = false

// Get a new word
// wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].tolowerCase()
// console.log(wordToMatch)

// Reset word arrays
// guessedLetters = []
// guessingWord = []

// Reset the guessed word
// for (var i = 0, j = wordToMatch.length; i < j; i++) {
// Put a space instead of an underscore between multi word "words"
// if (wordToMatch[i] === " ") {
// guessingWord.push(" ")
// } else {
// guessingWord.push("_")
// }
// }
// updateDisplay();
// }
//Need function to update display.
function updateDisplay() {
    // document.getElementById("totalWins").innerText = wins;
    // document.getElementById("currentWord").innerText = guessingWord;
    // document.getElementById("remainingGuesses").innerText = numGuess;
    // document.getElementById("guessedLetters").innerText = guessedLetters.join(" ");
}
updateDisplay();
