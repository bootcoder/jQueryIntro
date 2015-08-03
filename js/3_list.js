
var addListItems = function () {

  // Traversal
  // $ is a great way to traverse the DOM

  // Look down to sub-elements
  var list = $('.awesome_list');

  var listItems = $('.awesome_list li:first-child');
  // Append or remove elements
  for (var i = 0; i < 5; i += 1) {
    list.append(listItems.clone());
  }

};


// Useful methods for retrieving DOM content when no argument is passed

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields

// Also great for writing to DOM content when passing an argument

var modListText = function () {
  var items = $('li');
  items.html('List Item');
};


var addNums = function () {
  // Work with data from each element in a collection.
  var i = 0;
  var listLength = $('.awesome_list').children().length;

  for (i = 0; i < listLength; i += 1) {
    var item = $('.awesome_list').children()[i];
    var text = item.innerHTML;
    item.innerHTML = text + " " + (i + 1) + ":";
    // debugger
  }
};


var nthChild = function () {
  var list = $('.awesome_list');
  var list_item = list.find(':nth-child(4)');
  // Important to note here that nth-child is a 1 base index.
  console.log('##############################');
  console.log(list_item);
  console.log('##############################');
};


// jQuery is super great for event handling.
// Common events are
// - click
// - dblclick
// - mouseenter
// - mouseleave
// - mousedown
// - mouseup
// - hover
// - focus




var listListener = function () {
  $('ul').on({
    mouseenter: function () {
      $(this).css('background-color', 'red');
    },
    mouseleave: function () {
      $(this).css('background-color', "gray");
    },
    click: function () {
      $(this).css('background-color', 'white');
    }
  }, 'li');
};
