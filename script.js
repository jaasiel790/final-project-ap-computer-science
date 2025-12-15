console.log("script started");
let numbers = document.getElementById("numbers");
let buttons = document.getElementById("buttons");
let displayHistory = document.getElementById("history");
let history = [];
let result = document.getElementById("display");
//created with ai
let displayValue = "";

function display(num) {
   displayValue += num;  // Add the clicked number to displayValue
   result.innerText = displayValue;  // Show it on screen
   //end of ai
   
}

function clearText() {
   displayValue = ("");
   result.innerText = ("");
}



function showResult() {
   // Evaluate the expression in displayValue

   if (displayValue.indexOf("+") > -1){
     let parts = displayValue.split("+");
     //used ai for variables num 1 and num 2
     let num1 = parseFloat(parts[0]);
     let num2 = parseFloat(parts[1]);
     result.innerText = num1 + num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if (displayValue.indexOf("-") > -1){
     let parts = displayValue.split("-");
     let num1 = parseFloat(parts[0]);
     let num2 = parseFloat(parts[1]);
     result.innerText = num1 - num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if (displayValue.indexOf("x") > -1){
     let parts = displayValue.split("x");
     let num1 = parseFloat(parts[0]);
     let num2 = parseFloat(parts[1]);
     result.innerText = num1 * num2;
     history.push(displayValue + "=" + result.innerText);
     
   }

   if (displayValue.indexOf("÷") > -1){
     let parts = displayValue.split("÷");
     let num1 = parseFloat(parts[0]);
     let num2 = parseFloat(parts[1]);
     result.innerText = num1 / num2;
     history.push(displayValue + "=" + result.innerText);
   }

   if(displayValue != ""){
     displayValue = ("");
   }
   showHistory();
}



function showHistory() {
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

      //add event listener
      historyParagraph.addEventListener("click", historyEquation);

      // Set some styles (maybe a CSS class)
      
      // Append p element to the history div
      displayHistory.appendChild(historyParagraph);
   }

}

function historyEquation(event) {
   let equation = event.target.innerText.split("=");
   let part = equation[0];
   result.innerText = part;
   displayValue = part;
}



