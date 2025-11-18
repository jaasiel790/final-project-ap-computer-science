console.log("Script loaded");
let numbers = document.getElementById("numbers");
let buttons = document.getElementById("buttons");
//created with ai
let displayValue = "";

function display(num) {
    displayValue += num;  // Add the clicked number to displayValue
    let result = document.getElementById("display");
    result.innerText = "Result: " + displayValue;  // Show it on screen
    //end of ai
}

function clear() {
    console.log("ds");
    displayValue = "";
}



function showHistory() {
   console.log("History button clicked");
   let history = []
   for(let i = 0; i < localStorage.length; i++) {
   
    
   }
}

function showResult() {
    console.log("Show result function called");
    // Evaluate the expression in displayValue
    displayValue.replace("x", "*");
    displayValue.replace("÷", "//");
    let operation = "+";

    for(let i = 0; i < displayValue.length; i++){
        let cur = i;

        if (displayValue.indexOf("+") > -1 && curr == "+"){
        // add the numbers
        console.log("numbers added");
        let add = displayValue.slice(curr);
        let result = 
        
        
    }
    }
    
    

}

