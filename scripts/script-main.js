// shorthands
function querySelect(i) {
  return document.querySelector(i);
}

function getClass(i) {
  return document.getElementsByClassName(i);
}

function getId(i) {
  return document.getElementById(i);
}

// init vairables
var stylesHtml; //querySelect grabs the entire HTML style
var rowCount; //js var for row number
var colCount; //js var for col number
//var cellTotalCount; //use for adding the total number of divs/cells


function getGridSize() { // get grid size variables FROM CSS Variables + put into js variables
    stylesHtml = window.getComputedStyle(querySelect("html")); // uses "querySelect" function above to dump the stlyes from HTML element "html" (ie all styles) into "stylesValue"
    rowCount = parseInt(stylesHtml.getPropertyValue("--rowCount")); // searches "stylesHtml" (all html styles) for the CSS var "--rowCount" and sets it to js var "rowCount"
    colCount = parseInt(stylesHtml.getPropertyValue("--colCount"));
}

function setGridSize() { // set CSS variables for grid size (set from JS variables)
    document.documentElement.style.setProperty("--rowCount", rowCount);
    document.documentElement.style.setProperty("--colCount", colCount);
}



/*function buildGrid() {
    var cellTotalCount = rowCount * colCount;
    for (let i = 1; i <= cellTotalCount; i++) {
      querySelect(".masterGrid").innerHTML += "<div class='cell'></div>";  }
}*/

var cellDiv = document.createElement("div");
cellDiv.className = 'cell';


function buildGrid() {
    var cellTotalCount = rowCount * colCount;
    for (let i = 1; i <= cellTotalCount; i++) {
      var cellDiv = document.createElement("div");
      cellDiv.className = 'cell';
      querySelect(".masterGrid").appendChild(cellDiv);
      }
}

function killGrid() {
    querySelect(".masterGrid").innerHTML = "";
}

function rebuildGrid() {
    killGrid();
    buildGrid();
}

function setGridSizeButton() {
  rowCount = getId('inputGridSize').value;
  colCount = getId('inputGridSize').value;
  setGridSize();
  getGridSize();
  killGrid();
  buildGrid();
}

// Mouse Hover stuff

var cellColour = ' cellBlack';

getId('master').addEventListener('mouseover', function(e){
    console.log(e.target);
    if (e.target.className == 'cell') {
      e.target.className += cellColour;
    }
});

getGridSize();
buildGrid();
