//Global Variables

var submitGuessButton = document.querySelector("#submit-your-guess");
//"Guess" Button (variable submitGuessButton assigned to the element with id of submit-your-guess)

var clearGuessButton = document.querySelector("#clear-your-guess")
//"Clear" Button (variable clearGuessButton assigned to the element with id of clear-your-guess)

var resetButton = document.querySelector("#reset-field")
//"Reset" Button (variable resetButton assigned to the element with the id of reset-field)

var randomGuess = document.querySelector("#your-guess");
//Enter your guess (variable randomGuess assigned to the element with the id of your-guess)

var randomNum = generateRandomNum();
//Random number generated (variable randomNum assigned to a Math object which will generate a random number between 1 and 100)
//MAXIMUM AND MINIMUM NOT WORKING

var displayNumber = document.querySelector(".display");
//Displayed number (variable displayNumber assigned to the element with the class of "display" - this is the <p> tag displaying the guessed number on the page)

var displayMessage = document.querySelector(".user-message");
//Displayed user message (variable displayMessage assigned to the element with the class of "user-message" - this is the <p> tag displaying the message to be given back to the user upon guessing a number)

var displayLastGuess = document.querySelector("#top-message");
//"Your last guess was"

//disable
//resetButton.disabled = true;

//Functions
//Clear field
function clearField () {
    displayMessage.textContent = (" ");
    randomGuess.value = (null);
    return;
}

//Generate a random number
function generateRandomNum () {
  return Math.floor((Math.random() * 100) +1);
}

//Validate that the input is a number & is in range
function validateNum () {
  var userGuess = parseInt(randomGuess.value);
    if (isNaN(userGuess)) {
      displayMessage.textContent = (" ");
      displayNumber.textContent = (" ");
      displayLastGuess.textContent = ("That is not a number!");
      return;
  } else if (userGuess < 1 || userGuess > 100) {
      displayMessage.textContent = (" ");
      displayNumber.textContent = (" ");
      displayLastGuess.textContent = ("Please pick a number between 1 and 100.");
      return;
  } else {
      evaluateGuess();
  }
}

//Validate user guesses and return a message
function evaluateGuess() {
  if (parseInt(randomGuess.value) > randomNum) {
      return displayMessage.innerText = ("Your guess is too high!");
  } else if (parseInt(randomGuess.value) < randomNum) {
      return displayMessage.innerText = ("Your guess is too low!");
  } else if (parseInt(randomGuess.value) === randomNum){
      return displayMessage.innerText = ("BOOM!");
  }
}

//Reset field
function resetField () {
  displayMessage.textContent = (" ");
  displayNumber.textContent = (" ");
  clearGuessButton.disabled = true;
  displayLastGuess.textContent = ("Play again?");
  return;
}


//Events
//Clicking "Guess" - user's guess is displayed on the screen, as well as a message on whether the guessed number is too high or too low
submitGuessButton.addEventListener('click', function() {
  displayLastGuess.textContent = ("Your last guess was");
  displayNumber.textContent = randomGuess.value;
  validateNum();
  clearGuessButton.disabled = false;
});

//Clicking "Clear" - function clearField is ran
clearGuessButton.addEventListener ('click', function () {
  clearField();
  });

//Clicking "Reset" - function resetField is ran and a new random number is generated
resetButton.addEventListener ('click', function() {
  resetField();
  randomNum = generateRandomNum();
});


/*AT PHASE 2:
The clear button should be disabled if there is nothing to clear. -- in CSS?
The reset button should be disabled if there is nothing to reset.*/


/*AT PHASE 3:
Add additional inputs that allow the user to specify the minimum/maximum range.
Upon successful win, user’s range is updated:
---Every time the user wins a round increase the maximum number by 10.
---Every time the user wins a round decrease the minimum number by 10.
Appropriate UI is incorporated such that user understands what is happening.*/
