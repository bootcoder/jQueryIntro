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


var changeList = function () {
  var items = $('li');
  console.log(items);
  items.replaceWith('<li> List Item </li>');
};


var addNums = function () {
  // Work with data from each element in a collection.
  var i = 0;
  for (i = 0; i < $('.awesome_list').children().length; i += 1) {
    var item = $('.awesome_list').children()[i];
    var text = item.innerHTML;
    item.innerHTML = text + (i + 1) + ":";
    // debugger
  }
};

var nthChild = function () {
  var list = $('.awesome_list');
  var list_item = list.find(':nth-child(4)');
  // Important to note here that nth-child is a 1 base index.
  console.log(list_item);
};
