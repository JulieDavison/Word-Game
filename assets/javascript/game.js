// <!-- Use key events to listen for the letters that your players will type. -->

// Variables

var possibleWords = ["Earth", "galaxy", "asteroid", "comet", "constellations", "Neptune", "nebula", "Saturn", "Jupiter"];

var maxGuess = 10

var guessingWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var guessedLetters = [];
var currentStatus = [];

var wins = 0;
var losses = 0;

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

// A key is pressed start the game if the key is an alphabet character.
document.onkeypress = function (e) {
    var keyValue = e.key;
    console.log(keyValue);
    console.log(isAlpha(e.key));
    if (isAlpha(e.key)) {
        var letterInWord = checkForLetter(e.key);
        console.log(typeof letterInWord);

        if (letterInWord === true) {
            //Inside this block we know the gues was in the word
            //Update the underscores on screen
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
            
            if (maxGuess <= 0) {
                alert("Game Over");
                reset();
            }
        }

        //Is the game completed
        if (currentStatus.indexOf('_') < 0) {
            //User has completed the word

            wins++;
            document.getElementById("totalWins").innerText = wins;
            console.log(wins);
            alert("you win");
            reset();

        } else {
            losses++;
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
            currentStatus[i] = guessingWord[i];
            found = true;
        }
    }
    return found;
}

function reset() {
    var possibleWords = ["Earth", "galaxy", "asteroid", "comet", "constellations", "Neptune", "nebula", "Saturn", "Jupiter"];
    maxGuess = 10;
    numGuess = maxGuess;
    guessingWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    guessedLetters = [];
    currentStatus = [];
    console.log(guessingWord);
    document.getElementById("currentWord").innerHTML = currentStatus.join("" + " ");
    for (i = 0; i < guessingWord.length; i++) {
        currentStatus[i] = "_";
    }
    document.getElementById("remainingGuesses").innerText = maxGuess;
    currentWordEl = document.getElementById('currentWord');
    currentWordEl.innerText = currentStatus.join(' ');

}
