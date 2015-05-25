// jQuery is a Javascript Library build to make traversing and manipulating DOM elements a breeze.


var chainingCalls = function () {
  // $ Calls can be chained together to get where you're going.

  // **SideNote: Placement JS tag within HTML matters.**
  // **Too high and these document elements would not be available.**


  // Chain method calls to traverse down the DOM elements tree.
  // var jBody = $(document);
  // var jBody = $(document.body);
  // var jBody = $(document.body.children);
  var jBody = $(document.body.children[0]);

  // **Same result with js loaded in head.**

  // var jBody = $( 'body' ).children();

  console.log('***********');
  console.log(jBody);
  console.log('***********');


  // $ Can be used to modify objects
  // We can easily manipulate the selection.
  jBody.css('font-style', 'italic');

  // Traversing up the tree in the same manner.
  var parentDiv = $('ul').parents('div');
  parentDiv.addClass('list_container');

};

var selctionExample = function () {
  // jQuery === $
  // $ Use standard CSS selectors, ex: .klass && #eyed && <h1>
  // $('.klass');

  console.log($('.klass')[0]);
  console.log($('#eyed'));
  console.log($('h1'));

  // $ Can be set to a variable

  var domKlass = $('.klass');
  console.log(domKlass);

};


var addListItems = function () {
  // Traversal
  // $ is a great way to traverse the DOM

  // Look down to sub-elements
  var list = $('.awesome_list');

  var listItems = $('.awesome_list').children();
  // debugger
  // Append or remove elements
  var i = 0;
  for (i = 0; i < 5; i += 1) {
    list.append(listItems.clone());
  }
};


var addNums = function () {
  // Work with data from each element in a collection.
  var i = 0;
  for (i = 0; i < $('.awesome_list').children().length; i += 1) {
    var item = $('.awesome_list').children()[i];
    item.innerHTML = "Item " + (i + 1) + ":";
    // debugger
  }
};


var conditionalNote = function () {

  // A note about conditionals:

  if ($('#nonexistent')) {
    // No Bueno, This code will always run.
    console.log("This shouldn't be here...");

  }

  if ($('#existent').length > 0) {
    // This code will only run if the thing actually exists.
    console.log("I found the one to rule them all!");
  } else {
    console.log("ERRRRROR:");
  }
};

var manipulateDivs = function () {

  // As a student, good to signal when you hit a function
  console.log("Hit: Document Ready");

  // Assign a selection to manipulate later.
  var h1 = $('h1');
  h1.css('font-size', '2.5em');

  // Or manipulate selections straight up.
  $('h1').css('color', 'white');
  $('.klass').css('background-color', 'green');
  $('#eyed').css('background-color', 'brown');

};

$(document).ready(function () {

  manipulateDivs();
  addListItems();
  addNums();
  conditionalNote();
  chainingCalls();

});
