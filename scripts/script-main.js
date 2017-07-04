// "document.querySelector returns the first element with the selector "a"
function querySelect(i) {
  return document.querySelector(i);
}

var stylesHtml; //querySelect grabs the entire HTML style
var rowCount; //js var for row number
var colCount; //js var for col number
var cellTotalCount; //use for adding the total number of divs/cells
var inputPrompt;

// get grid size variables FROM CSS variables
function getGridSize() {
    stylesHtml = window.getComputedStyle(querySelect("html")); // uses "querySelect" function above to dump the stlyes from HTML element "html" (ie all styles) into "stylesValue"
    rowCount = parseInt(stylesHtml.getPropertyValue("--rowCount")); // searches "stylesHtml" (all html styles) for the CSS var "--rowCount" and sets it to js var "rowCount"
    colCount = parseInt(stylesHtml.getPropertyValue("--colCount"));
}

function setGridSize() {
    document.documentElement.style.setProperty("--rowCount", rowCount);
    document.documentElement.style.setProperty("--colCount", colCount);
}

function buildGrid() {
    cellTotalCount = rowCount * colCount;
    for (let i = 1; i <= cellTotalCount; i++) {
      querySelect(".masterGrid").innerHTML += "<div class='cell'></div>";  }
}

function killGrid() {
    querySelect(".masterGrid").innerHTML = "";
}

function inputGridSize() {
    inputPrompt = prompt("Please enter your grid size:", "16");
    if (inputPrompt == null || inputPrompt == "") {
        alert("Oops! Cancelled.");
    } else {
        rowCount = inputPrompt;
        colCount = inputPrompt;
        setGridSize();
        getGridSize();
        killGrid();
        buildGrid();
        alert("Woo! Grid set to " + rowCount + "x" + colCount + " size.");
    }
}

getGridSize();
