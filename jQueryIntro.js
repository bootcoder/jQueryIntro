// jQuery === $
// $ Use standard CSS selectors, ex: .klass && #eyed && <h1>

console.log($('.klass'));
console.log($('#eyed'));
console.log($('h1'));

// $ Can be set to a variable
var domKlass = $('.klass');
console.log(domKlass);


// $ Calls can be chained together to get where you're going.

console.log($('body'));
// Placement JS tag within HTML matters.
// Too high and these document elements would not be available.
var jBody = $(document.body.children[0]);
// Same result with js loaded in head.
// var jBody = $( 'body' ).children();

// $ Can be used to modify objects

console.log('***********');
console.log(jBody);
console.log('***********');

jBody.css('font-style', 'italic');


$(document).ready(function () {

  // As a student, good to signal when you hit a function
  console.log("Hit: Document Ready");

  // Assign a selection to manipulate later.
  var h1 = $('h1');
  h1.css('font-size', '2.5em');

  // Or manipulate selections straight up.
  $('.h1_text').css('color', 'cyan');
  $('.klass').css('background-color', 'white');
  $('#eyed').css('background-color', 'white');

});
