console.log("ready in AJAX land");

// This function appends the form for searching Giphy.com to the DOM.
var appendGifSearch = function(){
  var formMarkup = `<form id="gif_search_form">
                      <input type="text" name="search_term" placeholder="Enter search terms here."></input>
                      <input type="submit" value="Find GIFs"></input>
                    </form>`
  // console.log(`${formMarkup}`);
  $('#ajax_land').append(formMarkup);
}

// These are my helper methods, things that assist in getting the
// job done while giving my code a cleaner more single responsibility feel.

var buildImageElement = function(img_url){
  return `<img class="col-md-3 ajax-gallery" src="${img_url}">`
}

var appendGifs = function(response_data) {
  var img_container = '<div id="ajax_image_container"></div>'
  $('#ajax_image_container').remove();
  $('#ajax_land').append(img_container);

  for (var i = 0; i < 3; i++) {
    var image_element = buildImageElement(response_data.data[i].images.fixed_height_small.url);
    $('#ajax_image_container').append(image_element);
  }
}

// This is the core AJAX function which consumes the helper functions
var gifButtonListener = function(){
  $('#ajax_land').on('submit', '#gif_search_form', function(event){

    event.preventDefault();

    var baseUrl = "http://api.giphy.com/v1/gifs/"
    var apiKey = "&api_key=dc6zaTOxFJmzC"
    var formInput = $('#gif_search_form input').val()
    var search = `search?q=${formInput}`

    var giphyRequest = $.ajax({
      url: baseUrl+search+apiKey
    })

    // Cool we made out AJAX request and now it's done.
    // in the .done function we will use the data we got back
    // to update the DOM with new information/functionality.
    giphyRequest.done(function(response_data){
      appendGifs(response_data);
      console.log(response_data);
    })

    // Always write a .fail, just good practice. Silent errors == non-happy campers
    giphyRequest.fail(function(response_data){
      console.log(response_data);
      console.log('Ohh nooo');
    })

  })
}
