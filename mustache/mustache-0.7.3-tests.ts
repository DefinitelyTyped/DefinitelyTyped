/// <reference path="mustache-0.7.3.d.ts" />

var view = { title: "Joe", calc: function () { return 2 + 4; } };
var output = Mustache.render("{{title}} spends {{calc}}", view);

var person = { firstName: "John", lastName: "Smith", blogURL: "http://testblog.com" };
var template = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
var html = Mustache.to_html(template, person);

var writer = Mustache.compile(template);
var writerOutput = writer(view);
