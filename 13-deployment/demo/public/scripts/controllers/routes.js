'use strict';
var app = app || {};

page('/', app.articleController.index);
page('/about', app.aboutController.index);
page();
