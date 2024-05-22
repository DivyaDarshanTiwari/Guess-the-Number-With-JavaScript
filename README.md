Guess the Number Game:

This is a simple guessing game written in JavaScript. The program generates a random number between 1 and 100 (inclusive), and the player tries to guess the number within 100 attempts.

Features:

Play again: After each game, the program asks the player if they want to play again.

Guesses remaining: The player is informed of the remaining attempts before each guess.

Feedback: The program provides feedback after each guess, indicating whether the guess is higher or lower than the actual number (though this functionality is currently not implemented).

How to Play:

Install Node.js and the run it on Node.js Enviornment 
Clone or download the repository.
Install the required dependency: prompt-sync using npm install prompt-sync in your terminal.


Run the program using node index.js (assuming your main script is named index.js).

Example Gameplay:

Will you like to play a game?
Enter 1 for yes and 0 for no: 1

The Game is called Guess the Number

The random number has generated

Enter your Number between 1 to 100: 75
The no gussed is wrong. Guess again

The no. is Higher than the number you have gussed

Enter your Number between 1 to 100: 90
The no gussed is wrong. Guess again

The no. is Lower than the number you have gussed

Enter your Number between 1 to 100: 85
The no gussed is wrong. Guess again

The no. is Lower than the number you have gussed

... (continues until the number is guessed or attempts are exhausted)

Do you want to play the game again?
Enter the 1 if want to else enter 0 
