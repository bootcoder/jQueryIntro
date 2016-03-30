

// Use document ready to wrap all your jQuery code.
// This ensures your code will not run until the page is fully loaded.


$(document).ready(function () {
  js1();
  js2();
  js3();
  js4();
});


// js/1_getStarted.js
var js1 = function(){
  basicSelection();
  chainingCalls();
  manipulateDivs();
  iterationAndConditionals();
}




// // js/2_list.js
var js2 = function(){
  delegatedListener();
  standardListener();
  addListItems();
  modListText();
  addNums();
  nthChild();
  listListener();
}




// js/3_advanced.js
var js3 = function(){
  picListener();
  picReturnListener();
  buttonListener();
  dynamicButtonListener();
}

var js4 = function(){
  appendGifSearch();
  gifButtonListener();
}
