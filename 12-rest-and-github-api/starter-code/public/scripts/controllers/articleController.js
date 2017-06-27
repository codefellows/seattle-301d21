'use strict';
var app = app || {};

(function(module) {
  const articleController = {};
  articleController.index = () => {
    app.Article.fetchAll(app.articleView.initIndexPage);

    $('main > section').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(app);
