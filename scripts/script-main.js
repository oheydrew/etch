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

function getGridSize() { // get grid size variables FROM CSS Variables + put into js variables
    stylesHtml = window.getComputedStyle(querySelect("html")); // uses "querySelect" function above to dump the stlyes from HTML element "html" (ie all styles) into "stylesValue"
    rowCount = parseInt(stylesHtml.getPropertyValue("--rowCount")); // searches "stylesHtml" (all html styles) for the CSS var "--rowCount" and sets it to js var "rowCount"
    colCount = parseInt(stylesHtml.getPropertyValue("--colCount"));
}

function setGridSize() { // set CSS variables for grid size (set from JS variables)
    document.documentElement.style.setProperty("--rowCount", rowCount);
    document.documentElement.style.setProperty("--colCount", colCount);
}

function buildGrid() {
    var cellTotalCount = rowCount * colCount;
    for (let i = 1; i <= cellTotalCount; i++) {
      var cellDiv = document.createElement('div');
      cellDiv.className = 'cell';
      querySelect('.masterGrid').appendChild(cellDiv);
      }
}

function killGrid() {
    querySelect('.masterGrid').innerHTML = '';
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

//

function randomNum(i) {
  return Math.floor(Math.random() * i);
};

function randomRainbow() {
    var rainbow = ['red', 'yellow', 'fuchsia', 'lime', 'blueviolet', 'orange', 'aqua'];
    return rainbow[randomNum(7)];
};

function randomRGB() {
	return 'rgb('+randomNum(255)+','+randomNum(255)+','+randomNum(255)+')';
};

function colourCells(e) { // Cell colour function - called from mouseOver etc
    if (e.target.className == 'cell') { //Makes sure we only colour 'cell' divs
        if (getId('whiteRadio').checked) { // simple white colour
          e.target.style.backgroundColor = 'white';
        } else if (getId('rgbRadio').checked) { // Random RGB values
          e.target.style.backgroundColor = randomRGB();
        } else if (getId('rainbowRadio').checked) { // Rainbow Array values
          e.target.style.backgroundColor = randomRainbow();
        }
      }
};

getId('master').addEventListener('mouseover', colourCells); //Calls the colourCells function when mouseover occurs

getId('master').addEventListener('touchenter', colourCells); //Touchscreen support

getGridSize();
buildGrid();
