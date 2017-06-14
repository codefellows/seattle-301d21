// grab elements
$('li');

// grab elements with a specific class
$('.some-class');

// grab element with an id
$('#some-id');

// parent child selection
$('ul li');

// direct child selection
$('.container > p');

// select elements with certain attribute
$('input[type="password"]');

// get text from an element
$('.el').text();

// set text on an element
$('.el').text('some new text for my element');

// access data attribute on an element
$('.el').data('category');

// set data attribute on an element
$('.el').data('category', 'shoes');

// append an element to the DOM
$('ul').append('<li>new item</li>');

// remove an item from the DOM
$('.el').remove();

// copy the HTML of another element
$('.el').clone();

$(document).ready(function() {
  // do stuff here
});
