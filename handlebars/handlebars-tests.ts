/// <reference path="handlebars.d.ts" />

var context = {
    author: { firstName: "Alan", lastName: "Johnson" },
    body: "I Love Handlebars",
    comments: [{
        author: { firstName: "Yehuda", lastName: "Katz" },
        body: "Me too!"
    }]
};
Handlebars.registerHelper('fullName', (person) => {
    return person.firstName + " " + person.lastName;
});

Handlebars.registerHelper('agree_button', () => {
    return new Handlebars.SafeString(
      "<button>I agree. I " + this.emotion + " " + this.name + "</button>"
    );
});

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);
var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

Handlebars.registerHelper('link_to', (context) => {
    return "<a href='" + context.url + "'>" + context.body + "</a>";
});

var context2 = { posts: [{url: "/hello-world", body: "Hello World!"}] };
var source2 = "<ul>{{#posts}}<li>{{{link_to this}}}</li>{{/posts}}</ul>"

var template2 = Handlebars.compile(source2);
template2(context2);

Handlebars.registerHelper('link_to', (title, context) => {
    return "<a href='/posts" + context.url + "'>" + title + "!</a>"
});

var context3 = { posts: [{url: "/hello-world", body: "Hello World!"}] };
var source3 = '<ul>{{#posts}}<li>{{{link_to "Post" this}}}</li>{{/posts}}</ul>'
var template3 = Handlebars.compile(source3);
template3(context3);

var source4 = "<ul>{{#people}}<li>{{#link}}{{name}}{{/link}}</li>{{/people}}</ul>";
Handlebars.registerHelper('link', (context, options) => {
    return '<a href="/people/' + this.id + '">' + context.fn(this) + '</a>';
});
var template4 = Handlebars.compile(source4);
var data2 = { "people": [
    { "name": "Alan", "id": 1 },
    { "name": "Yehuda", "id": 2 }
]};
template4(data2);

var source5 = "<ul>{{#people}}<li>{{> link}}</li>{{/people}}</ul>";
Handlebars.registerPartial('link', '<a href="/people/{{id}}">{{name}}</a>')
var template5 = Handlebars.compile(source5);
var data3 = { "people": [
    { "name": "Alan", "id": 1 },
    { "name": "Yehuda", "id": 2 }
]};
template5(data3);

Handlebars.registerHelper('list', (items, fn) => {
    var out = "<ul>";
    for(var i=0, l=items.length; i<l; i++) {
        out = out + "<li>" + fn(items[i]) + "</li>";
    }
    return out + "</ul>";
});
Handlebars.registerHelper('fullName', (person) => {
    return person.firstName + " " + person.lastName;
});