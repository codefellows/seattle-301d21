var neighborhoods = [];

function Neighborhood(rawDataObject) {
  for (key in rawDataObject) {
    console.log('key:', key);
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // 1 - get the template's html
  var template = $('#neighborhood-template').html();

  // 2 - compile the template
  var templateRender = Handlebars.compile(template);

  // 3 - return the compiled template
  return templateRender(this);
}

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject) {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});
