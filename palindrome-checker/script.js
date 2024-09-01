/* You should have an input element with an id of "text-input"
You should have a button element with an id of "check-btn"
You should have a div, span or p element with an id of "result"
When you click on the #check-btn element without entering a value into the #text-input element, an alert should appear with the text "Please input a value" */

const entry = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const answer = document.getElementById("result");

function checkPalindrome (input) {
    if (input === '') {
        alert("Please input a value");
        return;
    };
    
    let workingArray = [input.];
  //remove spaces, punctuation with regex and make all lowercase - put this in a new array?
  //create an array that is the same thing backward
  //loop through both arrays to see if they are the same
  //if so, return isPalindrome true; if not, return isPalindrome false
  
  answer.innerHTML = ;
};

check.addEventListener("click", () => {
  checkPalindrome(entry.value);
  
});


