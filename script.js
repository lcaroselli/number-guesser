//Global Variables
//Buttons
var clearGuessButton = document.querySelector("#clear-your-guess")
var resetButton = document.querySelector("#reset-field")
var submitGuessButton = document.querySelector("#submit-your-guess");

//Messages
var displayLastGuess = document.querySelector("#top-message");
var displayMessage = document.querySelector(".user-message");
var displayNumber = document.querySelector(".display");

//Numbers
var randomGuess = document.querySelector("#your-guess");
var randomNum = generateRandomNum();


//Functions
//Clear field
function clearField () {
  displayMessage.textContent = (" ");
  randomGuess.value = (null);
}

//Evaluate user guesses and return a message
function evaluateGuess() {
  if (parseInt(randomGuess.value) > randomNum) {
    resetButton.disabled = true;
    return displayMessage.innerText = ("Your guess is too high!");
  } else if (parseInt(randomGuess.value) < randomNum) {
      resetButton.disabled = true;
      return displayMessage.innerText = ("Your guess is too low!");
  } else if (parseInt(randomGuess.value) === randomNum){
      clearGuessButton.disabled = true;
      submitGuessButton.disabled = true;
      resetButton.disabled = false;
      return displayMessage.innerText = ("BOOM!");
  }
}

//Generate a random number
function generateRandomNum () {
  return Math.floor((Math.random() * 100) +1);
}

//Reset field
function resetField () {
  displayMessage.textContent = (" ");
  displayNumber.textContent = (" ");
  displayLastGuess.textContent = ("Guess a new number to play again!");
  submitGuessButton.disabled = false;
  clearGuessButton.disabled = false;
  resetButton.disabled = true;
  randomGuess.value = (null);
}

//Validate that the input is a number & is in range
function validateNum () {
  var userGuess = parseInt(randomGuess.value);
    if (isNaN(userGuess)) {
      displayMessage.textContent = (" ");
      displayNumber.textContent = (" ");
      displayLastGuess.textContent = ("That is not a number!");
    } else if (userGuess < 1 || userGuess > 100) {
        displayMessage.textContent = (" ");
        displayNumber.textContent = (" ");
        displayLastGuess.textContent = ("Please pick a number between 1 and 100.");
    } else {
        evaluateGuess();
  }
}


//Events
clearGuessButton.addEventListener ('click', function () {
  clearField();
  });

resetButton.addEventListener ('click', function() {
  resetField();
  randomNum = generateRandomNum();
});

submitGuessButton.addEventListener('click', function() {
  displayLastGuess.textContent = ("Your last guess was");
  displayNumber.textContent = randomGuess.value;
  validateNum();
});



/*AT PHASE 3:
Add additional inputs that allow the user to specify the minimum/maximum range.
Upon successful win, user’s range is updated:
---Every time the user wins a round increase the maximum number by 10.
---Every time the user wins a round decrease the minimum number by 10.
Appropriate UI is incorporated such that user understands what is happening.*/
