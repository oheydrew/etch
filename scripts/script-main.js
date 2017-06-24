// "document.querySelector returns the first element with the selector "a"
function querySelect(i) {
  return document.querySelector(i);
}

var stylesHtml;
var rowCount;
var colCount;
var cellTotalCount;

function setGridSize() {
  stylesHtml = window.getComputedStyle(querySelect("html")); // uses "querySelect" function above to dump the stlyes from HTML element "html" (ie all styles) into "stylesValue"
  rowCount = parseInt(stylesHtml.getPropertyValue("--rowCount")); // searches "stylesHtml" (all html styles) for the CSS var "--rowCount" and sets it to js var "rowCount"
  colCount = parseInt(stylesHtml.getPropertyValue("--colCount"));
  cellTotalCount = rowCount * colCount;
}

function buildGrid() {
  for (let i = 1; i <= cellTotalCount; i++) {
    querySelect(".masterGrid").innerHTML += "<div class='cell'>" + i + "</div>";  }
}

setGridSize();
