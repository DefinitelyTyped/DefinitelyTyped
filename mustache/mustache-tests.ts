/// <reference path="mustache.d.ts" />

var view1 = { title: "Joe", calc: function () { return 2 + 4; } };
var template1 = "{{title}} spends {{calc}}";
var output = Mustache.render(template1, view1);

var view2 = { forename: "Jane", calc: function () { return 10 + 5; } };
var template2 = "{{forename}} spends {{calc}}";
Mustache.parse(template2, null);
var output2 = Mustache.render(template2, view2);

var view3 = { firstName: "John", lastName: "Smith", blogURL: "http://testblog.com" };
var template3 = "<h1>{{firstName}} {{lastName}}</h1>Blog: {{blogURL}}";
var html = Mustache.to_html(template3, view3);
