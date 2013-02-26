/// <reference path="mustache.d.ts" />

var view = { title: "Joe", calc: function () { return 2 + 4; } };
var output = Mustache.render("{{title}} spends {{calc}}", view);

var person;
var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
var html = Mustache.to_html(template, person);

var writer = Mustache.compile(template);
var writerOutput = writer(view);
