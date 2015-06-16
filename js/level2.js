
var toggleDiv = function (selector) {
  $(selector).slideToggle();
}

var appendBtn = function () {
  var btn = $('#super_button');
  btn.parent().append('<button id="new_button">Meowsers</button>')
}

// blowUp Requires jQuery UI
var blowUp = function (selector) {
  $(selector).toggle('explode', {pieces: 16}, 2000, function () {
    // Toggle like many jQuery functions accepts a callback...
    // So I can un-toggle the thing once my toggling of the thing is complete
    $(selector).toggle('explode', {pieces: 9}, 1000);
  })
};


// jQuery animate() is jazzy!
// Important Note:
// It is possible to manipulate ALLMOST all
// CSS properties with the animate() method.

// There is one important thing to remember:
// all property names must be camel-cased when used
// with the animate() method:
// You will need to write paddingLeft instead of padding-left,
// marginRight instead of margin-right, and so on.

// Also, color animation is not included in the core jQuery library.

var reduceElement = function (selector) {
  $(selector).animate({
    opacity: '1',
    width: '150px',
    height: '150px'
  }, 'slow');
};

// jQuery Callback Functions
// JavaScript statements are executed line by line.
// However, with effects, the next line of code can be run
// even though the effect is not finished. This can create errors.
// To prevent this, you can create a callback function.
// A callback function is executed after the current effect is finished.
// expandElement() below uses a callback.
// Typical syntax: $(selector).hide(speed,callback);

var expandElement = function (selector) {
  var randoVal = Math.floor((Math.random() * 400) + 100);
  $(selector).animate({
    opacity: '0.75',
    width: randoVal,
    height: randoVal
  }, 'fast', function(){
    console.log("I run after the jQuery function is complete.");
  });
};


var dynamicButtonListener = function () {
  $('body').on('click', '#new_button', function (e) {
    e.preventDefault();
    console.log('new BTN listener');
    var kids = $('.img_container').children()
    blowUp(kids)
  });
};

var buttonListener = function () {
  $('#super_button').on('click', function (event) {
    event.preventDefault();
    toggleDiv('.img_container');
    appendBtn();
  })
};

var picListener = function () {
  $('.gallery').on({
    mouseenter: function () {
      expandElement(this);
    },
    mouseleave: function () {
      reduceElement(this);
    },
    click: function () {
      toggleDiv(this);
    }
  });
};





