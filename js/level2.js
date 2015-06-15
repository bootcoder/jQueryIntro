
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

var reduceElement = function (selector) {
  $(selector).animate({
    opacity: '1',
    width: '150px',
    height: '150px'
  }, 'slow');
};

var expandElement = function (selector) {
  var randoVal = Math.floor((Math.random() * 400) + 100);
  $(selector).animate({
    opacity: '0.75',
    width: randoVal,
    height: randoVal
  }, 'fast');
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
      blowUp(this);
    }
  });
};





