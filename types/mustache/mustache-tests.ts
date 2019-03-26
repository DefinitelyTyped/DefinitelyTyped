

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

var view4 = new class extends Mustache.Context
{
    constructor()
    {
        super({});
    }

    public lookup(name: string)
    {
        return name.toUpperCase();
    }
};
var template4 = "Hello, {{firstName}} {{lastName}}";
var html4 = Mustache.render(template4, view4);

var view5 = { title: "Joe", calc: function () { return 2 + 4; } };
var template5 = "[[title]] spends [[calc]]";
var output5 = Mustache.render(template5, view5, {}, ["[[", "]]"]);