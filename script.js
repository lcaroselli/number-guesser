//Global Variables

var submitGuessButton = document.querySelector("#submit-your-guess");
//make a variable called submitGuessButton and assign it to the element in the document with the id of submit-your-guess (input for the "Guess" button)

var clearGuessButton = document.querySelector("#clear-your-guess")
//make a variable called clearGuessButton and assign it to the element in the document with the id of clear-your-guess (input for the "Clear" button)

var resetButton = document.querySelector("#reset-field")
//make a variable called resetButton and assign it to the element in the document with the id of reset-field

var randomGuess = document.querySelector("#your-guess");
//make a variable called randomGuess and assign it to the element in the document with the id of your-guess (input for the field you enter a number)

var randomNum = Math.floor((Math.random() * 100) +1);
//make a variable called randomNum and assign it to a Math object which will create & store random numbers between 1 and 100
//MAXIMUM AND MINIMUM NOT WORKING

var displayNumber = document.querySelector(".display");
//make a variable called displayNumber and assign it to the element(s) in the document with the class of "display" (this is the <p> tag displaying the number)

var displayMessage = document.querySelector(".user-message");
//make a variable called displayMessage and assign it to the element(s) in the document with the class of "user-message" (this is the <p> tag displaying the message to be given back to the user) -- NEED TO WRITE CONDITIONAL TO CHANGE THE TEXT OF THIS MESSAGE...

var displayLastGuess = document.querySelector("#top-message");

//var el = document.getElementByClassName("display");
//el.innerHTML = '<p>' + randomNum + '</p>';
//nothing has been done here yet -- please see page 134 for more information


//Functions
//Upon clicking "Guess", the user's guess is displayed on the screen, as well as a message on whether the guessed number is too high or too low
submitGuessButton.addEventListener('click', function() {
  displayLastGuess.textContent = ("Your last guess was");
  displayNumber.textContent = randomGuess.value;
  if (parseInt(randomGuess.value) > randomNum) {
    return displayMessage.innerText = ("Your guess is too high!");
  } else if (parseInt(randomGuess.value) < randomNum) {
    return displayMessage.innerText = ("Your guess is too low!");
  } else if (parseInt(randomGuess.value) === randomNum){
    return displayMessage.innerText = ("BOOM!");
  } else {
    return displayMessage.innerText = ("...");
  }
});

//Upon clicking "Clear", the input field is cleared and the text content is cleared
clearGuessButton.addEventListener ('click', function() {
  displayNumber.textContent = " ";
  displayMessage.textContent = " ";
  displayLastGuess.textContent = " "; //MAKE IT SO LAST GUESS STICKS AROUND EVEN AFTER CLEARING
  randomGuess.value = " ";
  });

//Reset button to reset field
resetButton.addEventListener ('click', function() {
  
});

//PHASE 1 REMAINING:
//Function to reset the game - ZERO PHASE !!! IMPORTANT
//Keep last guess around while clearing input field? Until reset


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
