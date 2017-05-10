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

//var el = document.getElementByClassName("display");
//el.innerHTML = '<p>' + randomNum + '</p>';
//nothing has been done here yet -- please see page 134 for more information

var min = 1;
var max = 100;



//Functions
//Clear field
function clearField () {
    displayMessage.textContent = (" ");
    randomGuess.value = (null);
    //DISABLE BUTTONS...
    //clearGuessButton.disabled = true;
    //resetButton.disabled = true;
    return;
}

//Generate a random number
function generateRandomNum () {
  return Math.floor((Math.random() * 100) +1);
}

//Reset field
function resetField () {
  displayMessage.textContent = (" ");
  displayNumber.textContent = (" ");
  displayLastGuess.textContent = ("Play again?");
  return;
}

//Events
//Clicking "Guess" - user's guess is displayed on the screen, as well as a message on whether the guessed number is too high or too low
submitGuessButton.addEventListener('click', function() {
  validateNumber();
  displayLastGuess.textContent = ("Your last guess was");
  displayNumber.textContent = randomGuess.value;
  if (parseInt(randomGuess.value) > randomNum) {
    return displayMessage.innerText = ("Your guess is too high!");
  } else if (parseInt(randomGuess.value) < randomNum) {
    return displayMessage.innerText = ("Your guess is too low!");
  } else if (parseInt(randomGuess.value) === randomNum){
    return displayMessage.innerText = ("BOOM!");
  } else {
  displayLastGuess.innerText = (" ");
  return displayMessage.innerText = ("That's not a number, dude...");
}
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
The input field should only accept numerical entries, within the defined min and max range
The application should display an error message if the guess is not a number (e.g. parseInt() returns NaN) - (alert maybe??)
The application should display an error if the guess is outside of the range of possible answers.
The clear button should be disabled if there is nothing to clear. -- in CSS?
The reset button should be disabled if there is nothing to reset.*/


/*AT PHASE 3:
Add additional inputs that allow the user to specify the minimum/maximum range.
Upon successful win, user’s range is updated:
---Every time the user wins a round increase the maximum number by 10.
---Every time the user wins a round decrease the minimum number by 10.
Appropriate UI is incorporated such that user understands what is happening.*/
