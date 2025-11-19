console.log("Script loaded");
let numbers = document.getElementById("numbers");
let buttons = document.getElementById("buttons");
let result = document.getElementById("display");
//created with ai
let displayValue = "";

function display(num) {
    displayValue += num;  // Add the clicked number to displayValue
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
}

function showResult() {
    console.log("Show result function called");
    // Evaluate the expression in displayValue
    displayValue.replace("x", "*");
    displayValue.replace("÷", "//");
    let operation = "+";
    
    if (displayValue.indexOf("+") > -1){
        let parts = displayValue.split("+");
        //used ai for variables num 1 and num 2
        let num1 = parseFloat(parts[0])
        let num2 = parseFloat(parts[1])
        result.innerText = num1 + num2;
    }

        if (displayValue.indexOf("-") > -1){
        let parts = displayValue.split("-");
        //used ai for variables num 1 and num 2
        let num1 = parseFloat(parts[0])
        let num2 = parseFloat(parts[1])
        result.innerText = num1 - num2;
    }
    

}

