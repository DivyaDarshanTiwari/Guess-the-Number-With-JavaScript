let pr =  require("prompt-sync"); // Import the prompt-sync library for taking user input
let input = pr();

console.log("Will you like to play a game")

let decision = parseInt(input("Enter 1 for yes and 0 for no"));// Get the user's decision (1 for yes, 0 for no)
let y =0;

function greater_or_lesser(real_no,gussed_no)// This function is not currently used in the program, but it could be used to provide feedback on guesses (higher or lower)
{
    if(real_no-gussed_no > 0)
        return "Greater"
    else
        return "Lower"
}
while(decision != 1 && decision != 0)
    {
        console.log("The value enter is wrong. Write the correct value");
        decision = input("Enter the no. again");
    }

while(decision == 1){

    if(y > 0)// Keep track of the number of games played
        {
        console.log("Do you want to play the game again");  // Ask if the user wants to play again after a game
        decision = input("Enter the 1 if want to else enter 0 \n");
        }
        let count =100;
if(decision == 1)
    {
        console.log("The Game is called Guess the Number \n");
        let real_no = Math.floor(Math.random()*100); // Generate a random number between 1 and 100 (inclusive)
        console.log("The random number has generated \n");
        // Loop for guessing the number (maximum 100 attempts)
        while(count>0){
        let number = parseInt(input("Enter your Number between 1 to 100"));// Give the user instructions and maximum attempts
        if(number  === real_no) // Check if the guess is correct
            {
                console.log("You guessed the answer and you score is "+ count);
                y++;
                break;// Exit the guessing loop if correct
            }
            else // Help the user by indicating if their guess is higher or lower
            {
                count--;
                console.log("The no gussed is wrong. Guess again \n")
                console.log("The no. is " + greater_or_lesser(real_no,number) + " than the number you have gussed \n");
            }
        }
    }
else{
    console.log("Have a greate day");
    break;
   }

}
