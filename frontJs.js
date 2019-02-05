console.log("test");

// Create a button with "Click Me". Once it's clicked,
// ask the user if they want to continue being asked to quit.
// If they enter 'n', stop asking. If they enter anything else, ask again.



// Once the user enters 'n' to quit, print the total number of times they didn't enter 'n'.


function quitFunction()
{


    do {
        askUser = prompt("Would you like to quit? Press 'n' to Quit.");
        thisArray.push(askUser);
    }
    while(askUser !== quitNow);

    for(var i=0; i<=thisArray.length; i++)
        console.log(i)

}



var askUser = "";
var thisArray = [];
var quitNow = "n";
var quitButton = document.querySelector("button");

quitButton.onclick = quitFunction;
