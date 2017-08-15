# jQuery intro notes:

#### Before you start:

Be sure you have a solid understanding of [this](https://zellwk.com/blog/this/).

### General Notes

---

#### What is it?
jQuery is a JavaScript **Library** built to make traversing and manipulating DOM elements a breeze.

| jQuery | === | Library |
|---:|---:|---:|
| JavaScript | === | Language |
| Angular | === | Framework |

---

#### Why you give a shit?
jQuery can dramatically increase your efficiency as a Developer.

It allows you to quickly move from basic selection to crazy advanced DOM manipulation.

---

#### Why so awesome?

- Plugins - Plugins - Plugins!
  - [Awesome Javascript:](https://github.com/sorrycc/awesome-javascript) Here's a fantastic JS link. To the point on plugins, go ahead, search for ```jQuery```... Tip of the iceberg buddy.
- Super easy to pick up.
- Quickly grab those pesky lil divs tucked away in your DOM.
- Looks great on the ol' resume.
- Cross-browser Compatibility
  - Chrome
  - Internet Explorer
  - Safari
  - Firefox
  - Opera

---

#### I want to be awesome too!

_What can you do to level up your jQuery quickly?_

Get REALLY comfortable with CSS selectors. They are the heart of the library and will greatly increase your ability to traverse the DOM easily. After that treat this just as you would any other DSL. Dive in, look at the docs or another great resource (see cheat sheet below) and start playing with individual functions to broaden your horizons. Find something ultra cool... Share it with a peer!

[30 Great CSS Selectors](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)

[jQuery Selectors](http://www.w3schools.com/jquery/jquery_selectors.asp)

[THE jQuery CheatSheet](http://oscarotero.com/jquery/)

---

#### Basic functions:
  - ```$()``` -- This is the jQuery selector
  - ```$(document).ready()``` -- Get your scripts ready to run.
  - ```$.on()``` -- This way to binding event delegation glory.
  - ```$.ajax()``` - Want more Internet than your JS script has to offer...? Just AJAX and you're there.

---

#### Basic jQUery Workflow:

**Find** *a* ```thing```

**Do** *something with the* ```thing```

---

### Sample Code
Have a solid look through the code included in this repo. It gives a 1000ft overview of basic jQuery functionality. Open up the index.html and toggle functions in ```0_main.js``` to see their effects.

---

### Event Delegation
Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.

```javascript

var static = $('some-static-parent-element');

var delegatedEventListener = function(){
  $(static).on('click', '.some_dynamic_class', function(event){
    event.preventDefault();
    console.log(event);
    console.log(this);
    doSomethingFunction();
  })
};

```

**Translation** - Make this your DEFAULT pattern. Using this pattern for building event listeners allows you on listen to DOM elements which will be dynamically placed on the page after the initial load.

---

### The DOM:

DOM === Document Object Model

Harnessing the power of jQuery will give you unprecedented control over the DOM with the kick ass benefit of writing way less code along the way.

jQuery DOM features include:
  - HTML/DOM manipulation
  - CSS manipulation
  - HTML event methods
  - Effects and animations
  - AJAX
  - Various utilities

---

### AJAX:

AJAX is my **FAVORITE** part of Javascript, it's the part that talks to Ruby!

![AJAX](ajax.png)

_Pro Tip:_ Being good with jQuery selectors is 3/4 of the battle when writing AJAX.

#### Sample Workflow in AJAX

1. Use jQuery to set up an event listener for some user action in the DOM.
2. Use jQuery to grab specific attributes from DOM elements and set them to a variable within whatever function is handling the event.
3. Construct the actual AJAX call, passing the variables above as arguments.
4. _At this point we leave JS land and go back to Ruby land._
5. Server side route should see that the request is from AJAX,
6. Format data appropriately and return valid data.
7. _Now leave the server and come back to JS land._
8. Write a ```.done``` method to go along with your request. Use this to consume the response data you received and update the DOM accordingly. You should also write a ```.fail``` function always and forever. See the note below the code for a good reason.

```js
// STEP: 1
var thingListener = funciton () {
  $('.someClassWithThatThing').on('click', function (event) {
    event.preventDefault();
    console.log('inThingListener');

// STEP: 2
    // I would usually name something like thingTarget, but that's me
    var $currentContext = $(this);
    var url_variable = $('#thing').attr('href');
    var action_variable = $('#thing').attr('action');
    var data_variable = $('#thing').serialize();

// STEP: 3
    var request = $.ajax({
      url: url_variable,
      type: action_variable,
      data: data_variable
    })

// STEP: 4 Request Sent: Head off to Ruby Land!

// STEP: 7 Response Received: Back from Ruby Land!

// STEP: 8
    request.done(function(response_data){
      console.log(response_data);
      $('#thing2').append(response_data);
    })

    request.fail(function(response_data){
      console.log(response_data);
      console.log("Ohhhh Noooo");
    })

  })
}
```

```ruby
get '/dogs/new' do
  # STEP: 5
  if request.xhr?
    # STEP: 6
    erb: :'dogs/new', layout: false
  else
    erb :'dogs/new'
  end
end

post '/dogs' do
  @dog = Dog.new(params[:dog])
  if @dog.save
    # STEP: 5
    if request.xhr?
      # STEP: 6
      @dog.to_json
    else
      redirect '/dogs'
    end
  end
end
```

In the ```GET``` route above we are sending a partial back to AJAX. In the ```POST``` route we are sending back the @dog object as JSON. Same rules as always applies here. _Be VERY aware of what_ your methods are returning. If you are expecting a partial and get JSON your AJAX will fail. :-(

---

### ProTip:
Chrome defines ```$()``` as well. This is not jQuery. Always be sure you have **_actually_** loaded jQuery into your project. If you can select an element with $ but cannot run various jQuery methods on it this is most likely the culprit (Laugh now... Its happened to better Devs than you friend ;-)

---

### Final Thought

*Chrome Dev Tools* __From this point forward they should never be closed when you are developing.__

What's the first 2 rules of debugging?!? __READ THE ERROR MESSAGE__. Where do we find JS error messages...? In the Dev Tools Console!

---

## More Nice Links:

[Great jQUery tutorial](http://learn.shayhowe.com/advanced-html-css/jquery/)

[Learn jQuery with StreetFighter](https://www.thinkful.com/learn/intro-to-jquery)

[Various jQuery resources](http://www.1stwebdesigner.com/53-jquery-tutorials-resources-tips-and-tricks-ultimate-collection/)

[Style Guide](http://learn.jquery.com/style-guide/)

[Quick look at Twenty Great jQuery methods](http://code.tutsplus.com/tutorials/20-helpful-jquery-methods-you-should-be-using--net-10521)

[Truthy VS: Falsey](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)

[jsfiddle - jquery show and tell with your friends](http://jsfiddle.net)

[Another jQuery Cheatsheet (PDF)](http://www.cheat-sheets.org/saved-copy/jQuery-1.5-Visual-Cheat-Sheet.pdf)

