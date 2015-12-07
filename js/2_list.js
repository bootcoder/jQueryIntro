
var addListItems = function () {

  // Look down to sub-elements
  var list = $('.awesome_list');

  var listItem = $('.awesome_list li:first-child');
  // Append or remove elements
  for (var i = 0; i < 5; i += 1) {
    list.append(listItem.clone());
  }

};











// Useful methods for READING DOM content when no argument is passed

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields

// Also great for WRITING to the DOM, just pass an argument to convert these into setter methods.

var modListText = function () {
  var items = $('li');
  items.html('List Item');
};















var addNums = function () {
  // Work with data from each element in a collection.
  var listLength = $('.awesome_list').children().length;

  for (var i = 0; i < listLength; i += 1) {
    var item = $('.awesome_list').children()[i];
    var text = item.innerHTML;
    item.innerHTML = text + " " + (i + 1) + ":";
    // debugger
  }
};


var nthChild = function () {
  var list = $('.awesome_list');
  var list_item = list.find(':nth-child(4)');
  // Important to note: nth-child is 1 base index.

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




////////////////////////////////////////
////////////////////////////////////////
//////////// EVENT BINDING /////////////
////////////////////////////////////////
////////////////////////////////////////
//////////// READ MORE here. ///////////
////////////////////////////////////////
// http://learn.jquery.com/events/event-delegation/
////////////////////////////////////////


// This standard listener will only work for static content.
var standardListener = function(){
//  Target    Event
//   ↓↓       ↓↓↓↓↓
  $('li').on('click', function(event){
    console.log(this);
    console.log(event);
  })
};



/////////////////////////////////////
// ***** RECOMENDED PATTERN ****** //
// ***   For Event Handlers    *** //
/////////////////////////////////////

var delegatedListener = function(event){
// Parent     Event  Target
//   ↓↓       ↓↓↓↓↓    ↓↓
  $('ul').on('click', 'li a', function(){
    console.log(this);
    console.log(event);
  })
};


// Terrible Example.... for now

// This listener uses both event delegation
// and an object to handle events on an element.

// A strong argument could be made to split
// this out to three separate functions.

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
