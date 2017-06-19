// default jQuery AJAX GET request
$.ajax({
  url: 'http://pokeapi.co/api/v2/pokemon/44',
  type: 'GET',
  success: function(data, message, xhr) {
    // where we handle the data
    console.log('my data:', data);
  },
  fail: function(err) {
    console.error(err);
  }
});

// Shorthand jQuery AJAX GET request
$.get('http://pokeapi.co/api/v2/pokemon/33')
.done(function(data) {
  console.log('my poke data:', data);
})
.fail(function(err) {
  console.error('this broke because', err);
})
.always(function() {
  console.log('this is going to log no matter what');
});

// JSON specific AJAX request
$.getJSON('http://pokeapi.co/api/v2/pokemon/21')
.then(function(data) {
  console.log('my pokemon data:', data)
}, function(err) {
  console.err('my stuff broke:', err);
})
