console.log("Script started");
let numbers = document.getElementById("numbers");
let buttons = document.getElementById("buttons");
let result = document.getElementById("result");
let displayHistory = document.getElementById("history");
let history = [];
//created with ai
let displayValue = "";

function display(num) {
    displayValue += num;  // Add the clicked number to displayValue
    result.innerText = "Result:" + displayValue;  // Show it on screen
    //end of ai
   
}

function clearText() {
   console.log("cleared");
   displayValue = ("")
   result.innerText = ("Result:")

}


function showResult() {
   console.log("Show result function called");
   // Evaluate the expression in displayValue
   let operation = "+";

   if (displayValue.indexOf("+") > -1){
     let parts = displayValue.split("+");
     //used ai for variables num 1 and num 2
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 + num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if (displayValue.indexOf("-") > -1){
     let parts = displayValue.split("-");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 - num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if (displayValue.indexOf("x") > -1){
     let parts = displayValue.split("x");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 * num2;
     history.push(displayValue + "=" + result.innerText);
     
   }

   if (displayValue.indexOf("÷") > -1){
     let parts = displayValue.split("÷");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 / num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if(displayValue != ""){
     displayValue = ("")
   }
   showHistory();
}


function showHistory() {
   console.log("History button clicked");
   for(let i = 0; i < displayHistory.children.length; i++){
      displayHistory.children[i].remove();
      i--;
   }

   for(let i = 0; i < history.length; i++){
      // Get current history item text
      let curr = history[i];

      // Create a p element
      let historyParagraph = document.createElement("p");

      // Set innerText to curr
      historyParagraph.innerText = curr;

      // Set some styles (maybe a CSS class)
      
      // Append p element to the history div
      displayHistory.appendChild(historyParagraph);
      console.log(displayHistory.children);

   }

}

//used ai for this function
// A pure calculation function that does not modify UI or globals.
// - Takes one parameter: a string like "12+3" or "4x2"
// - Iterates an array of operations and uses if-statements to select the operation
// - Returns a number result, or null if the expression is invalid
// Usage: calculateExpression("12+3")  -> 15
function calculateExpression(input) {
   const operations = ["+", "-", "x", "÷"];

   for (let i = 0; i < operations.length; i++) {
      const op = operations[i];
      if (input.indexOf(op) > -1) {
         const parts = input.split(op);
         const num1 = parseFloat(parts[0]);
         const num2 = parseFloat(parts[1]);

      if (isNaN(num1) || isNaN(num2)) return null;

      if (op === "+") return num1 + num2;
      if (op === "-") return num1 - num2;
      if (op === "x") return num1 * num2;
      if (op === "÷") return num2 === 0 ? null : num1 / num2;
      }
   }

   return null;
}


