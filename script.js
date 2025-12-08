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
   displayValue = ("")
   result.innerText = ("Result:")

}


function showResult() {
   // Evaluate the expression in displayValue
   let operation = "+";

   if (displayValue.indexOf("+") > -1){
     let parts = displayValue.split("+");
     //used ai for variables num 1 and num 2
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 + num2;
       if (!highlightExistingEquation(displayValue)) {
          history.push(displayValue + "=" + result.innerText);
       }
   }

   if (displayValue.indexOf("-") > -1){
     let parts = displayValue.split("-");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 - num2;
       if (!highlightExistingEquation(displayValue)) {
          history.push(displayValue + "=" + result.innerText);
       }
   }

   if (displayValue.indexOf("x") > -1){
     let parts = displayValue.split("x");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 * num2;
       if (!highlightExistingEquation(displayValue)) {
          history.push(displayValue + "=" + result.innerText);
       }
     
   }

   if (displayValue.indexOf("÷") > -1){
     let parts = displayValue.split("÷");
     let num1 = parseFloat(parts[0])
     let num2 = parseFloat(parts[1])
     result.innerText = num1 / num2;
     //used ai for this if statement
       if (!highlightExistingEquation(displayValue)) {
          history.push(displayValue + "=" + result.innerText);
       }
   }

   if(displayValue != ""){
     displayValue = ("")
   }
   showHistory();
}

//used ai for this function
// Searches the `history` array for an existing equation (parameter `eq`).
// If found, highlights the corresponding entry in the DOM and shows an alert.
// Returns true when a match was found (and highlighted), otherwise false.
function highlightExistingEquation(eq) {
   if (!eq) return false;

   // Remove any existing inline highlights first
   for (let k = 0; k < displayHistory.children.length; k++) {
      displayHistory.children[k].style.backgroundColor = "";
   }

   // Iterate through the history array and use if-blocks to find a match
   for (let i = 0; i < history.length; i++) {
      let item = history[i];

      // Each history entry is stored as "equation=result". Split to get equation part.
      let parts = item.split("=");
      let eqPart = parts[0];

      if (eqPart === eq) {
         // If the corresponding DOM node exists, highlight it
         if (displayHistory.children[i]) {
            displayHistory.children[i].style.backgroundColor = "yellow";
            displayHistory.children[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
         }

         alert("Equation already exists in history: " + eq);
         return true;
      }
      // additional if-block example: support trimmed match
      if (eqPart.trim() === eq.trim()) {
         if (displayHistory.children[i]) {
            displayHistory.children[i].style.backgroundColor = "yellow";
         }
         alert("Equation already exists in history: " + eq);
         return true;
      }
   }

   return false;
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
   console.log(event.target.innerText);
   let equation = event.target.innerText.split("=");
   let part = equation[0];
   result.innerText = part;
   displayValue = part;
   

}




