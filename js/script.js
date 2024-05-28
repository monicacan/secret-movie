/* Monica Can, 03/25/2024 */
/* Adapted from https://javascript30.com/ Key Sequence Detection */
/* 
New addition:  
- Add a function to check the user's guess and display the corresponding messages
- Add an event listener to the submit button
*/

/* 
Original code from https://javascript30.com/ Key Sequence Detection:
const pressed = [];
    const secretCode = "dune";

    window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(
        -secretCode.length - 1,
        pressed.length - secretCode.length
    );
    if (pressed.join("").includes(secretCode)) {
        console.log("DING DING!");
        cornify_add();
    }
    console.log(pressed);
}); 
*/


/*NEW CODE*/
const pressed = [];
const secretCode = "dune";

//Function to check the user's input and display messages
function checkGuess() {
    if (pressed.join("").includes(secretCode)) {
        document.querySelector('.result-message').innerHTML = "<h2>Correct! The secret movie is dune.</h2>";
        document.body.style.backgroundImage = "url('assets/dune.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";
    } else {
        document.querySelector('.result-message').innerHTML = "<h2>Sorry, please try again :(</h2>";
    }
}

window.addEventListener("keyup", (e) => {
console.log(e.key);
pressed.push(e.key);
pressed.splice(
    -secretCode.length - 1,
    pressed.length - secretCode.length)
});

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    checkGuess();
});