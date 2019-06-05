// Do I need this here?
// $(document).ready(function)
// <!-- Use key events to listen for the letters that your players will type. -->

var hiddenWord = ["F", "R", "A", "N", "K"];
var currentStatus = hiddenWord.slice();
var timesAnswered = 0; // do timesAnswered++ on every answer and check alert if  greater than max allowed answere=s

//Shows word with hyphens instead of letters.
for (i = 0; i < hiddenWord.length; i++) {
    currentStatus[i] = "_"
}
// when a key is pressed start the game
document.onkeypress = function (e) {
    if (isAlpha(e.key) && e.key.toUpperCase()){
        checkForLetter(e.key)
    }
    else{
        //change to uppercase
    }
}



document.getElementById("displayText").innerText = currentStatus;

function submitAnswer() {
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

    document.getElementById("displayText").innerText = currentStatus;
    if (!found) {
        window.alert("Not found!")
    }
}

