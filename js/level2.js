
var toggleDiv = function (selector) {
  $(selector).slideToggle();
}

// blowUp Requires jQuery UI
var blowUp = function (selector) {
  $(selector).toggle('explode', {pieces: 16}, 2000, function () {
    // Toggle like many jQuery functions accepts a callback...
    // So I can un-toggle the thing once my toggling of the thing is complete
    $(selector).toggle('explode', {pieces: 9}, 1000);
  })
};

var reduceElement = function (selector) {
  $(selector).animate({
    opacity: '1',
    width: '150px',
    height: '150px'
  }, 'slow');
};

var expandElement = function (selector) {
  var rando = Math.floor((Math.random() * 500) + 100);
  $(selector).animate({
    opacity: '0.75',
    width: rando,
    height: rando
  }, 'fast');
};

$('body').on('click', '#new_button', function () {

})

var buttonListener = function () {
  $('#super_button').on('click', function (event) {
    event.preventDefault();
    toggleDiv('.img_container');
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
      blowUp(this);
    }
  });
};

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




