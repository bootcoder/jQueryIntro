
var toggleDiv = function (selector) {
  $(selector).fadeToggle();
}

// blowUp Requires jQuery UI
var blowUp = function (selector) {
  $(selector).toggle('explode', {pieces: 16}, 2000, function () {
    $(selector).toggle('explode', {peices: 9}, 1000);
  })
};

var reduceElement = function (selector) {
  $(selector).animate({
    opacity: '1',
    width: '150px'
  }, 'slow');
};

var expandElement = function (selector) {
  $(selector).animate({
    opacity: '0.5',
    width: '500px'
  }, 'fast');
};

// listListener demonstrates event delegation for selecting
// dynamically generated DOM elements. This function is called before other <li>
// elements are appended to the DOM.

var listListener = function () {
  $('ul').on({
    mouseenter: function () {
      $(this).css('background-color', 'red');
    },
    mouseleave: function () {
      $(this).css('background-color', "gray");
    }
  }, 'li');
};

// Take note of the difference with picListener.
// This event handler does not utilize event delegation.

var picListener = function () {
  $('.gallery').on({
    mouseenter: function () {
      expandElement(this);
    },
    mouseleave: function () {
      reduceElement(this);
    },
    click: function () {
      blowUp(this);
    }
  });
};

var buttonListener = function () {
  $('#super_button').on('click', function (event) {
    event.preventDefault();
    console.log('click')
    toggleDiv('.img_container');
  })
};


