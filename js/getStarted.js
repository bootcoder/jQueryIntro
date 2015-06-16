


var basicSelection = function () {

  // jQuery === $
  // $ takes standard CSS selectors, ex: .klass && #eyed && <h1>
  // http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
  // http://www.w3schools.com/jquery/jquery_selectors.asp

  // Basic syntax is: $(selector).action()

  // $('.klass');

  // console.log($('.klass'));
  // console.log($('#eyed'));
  // console.log($('h1'));

  // $ Can be set to a variable

  var domKlass = $('.klass');
  console.log(domKlass);

  // Consoling domKlass yields what appears to be an array of elements.
  // This is not an array it is a NodeList.
  // NodeLists do not have the same functionality as Arrays.
  // http://toddmotto.com/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom/
};











var chainingCalls = function () {

  // $ Calls can be chained together to get where you're going.

  // **SideNote: Placement JS tag within HTML matters.**
  // **Too high and these document elements would not be available.**

  var jBody = $( 'body' ).children();

  // console.log('***********');
  // console.log(jBody);
  // console.log('***********');


  // $ Can be used to modify objects
  // We can easily manipulate the selection.
  jBody.css('font-style', 'italic');

  // Traversing up the tree in the same manner.
  var parentDiv = $('ul').parents('div');
  parentDiv.addClass('list_container');

};












var manipulateDivs = function () {

  // As a student, good to signal when you hit a function.
  // Strip or at least comment code like this before you commit.
  console.log("Hit: Document Ready");

  // Assign a selection to manipulate later.
  var h1Variable = $('h1');
  h1Variable.css('font-size', '2.5em');

  // Or manipulate selections straight up.
  $('h1').css('color', 'white');
  $('.klass').css('background-color', 'green');
  $('#eyed').css('background-color', 'brown');
  $('#eyed').after($('<h3>').text('Insert sibling directly under #eyed'));
  $('#eyed').before($('<h3>').text('Insert sibling directly before #eyed'));

};












var iterationAndConditionals = function () {

  // Iterate over collections
  $('div').each(function(index, element){
    // console.log(index);
    console.log(arguments);
    // console.log(this);
    $(element).addClass('moreKlass');
  })

  // A note about conditionals:

  if ($('#nonexistent')) {
    // No Bueno, This code will always run.
    // Want to know more baout Truthy VS Falsy in JS
    // http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html
    // jQuery always returns an object, no matter whether the selector matched or not.
    console.log("This shouldn't be here...");
  }

  // Test objects with the following:
  // Both if statements below function the same.
  if ($('#existent').length) {
  // if ($('#existent').length > 0) {
    // This code will only run if the thing actually exists.
    console.log("Object found in DOM");
  } else {
    console.log("ERRRRROR:");
  }
};
