
import Handlebars = require('handlebars');


var context = {
    author: { firstName: 'Alan', lastName: 'Johnson' },
    body: 'I Love Handlebars',
    comments: [{
        author: { firstName: 'Yehuda', lastName: 'Katz' },
        body: 'Me too!'
    }]
};
Handlebars.registerHelper('fullName', (person: typeof context.author) => {
    return person.firstName + ' ' + person.lastName;
});

Handlebars.registerHelper('agree_button', function() {
    return new Handlebars.SafeString(
      '<button>I agree. I ' + this.emotion + ' ' + this.name + '</button>'
    );
});

var source1 = '<p>Hello, my name is {{name}}. I am from {{hometown}}. I have ' +
             '{{kids.length}} kids:</p>' +
             '<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>';
var template1 = Handlebars.compile(source1);
template1({ name: "Alan", hometown: "Somewhere, TX", kids: [{name: "Jimmy", age: 12}, {name: "Sally", age: 4}]});

Handlebars.registerHelper('link_to', (context: typeof post) => {
    return '<a href="' + context.url + '">' + context.body + '</a>';
});
let post = { url: "/hello-world", body: "Hello World!" };
let context2 = { posts: [post] };
let source2 = '<ul>{{#posts}}<li>{{{link_to this}}}</li>{{/posts}}</ul>';
var template2: HandlebarsTemplateDelegate<{ posts: { url: string, body: string }[] }> = Handlebars.compile(source2);
template2(context2);

Handlebars.registerHelper('link_to', (title: string, context: typeof post) => {
    return '<a href="/posts' + context.url + '">' + title + '!</a>';
});
var context3 = { posts: [{url: '/hello-world', body: 'Hello World!'}] };
var source3 = '<ul>{{#posts}}<li>{{{link_to "Post" this}}}</li>{{/posts}}</ul>';
var template3 = Handlebars.compile<typeof context3>(source3);
template3(context3);

var source4 = '<ul>{{#people}}<li>{{#link}}{{name}}{{/link}}</li>{{/people}}</ul>';
Handlebars.registerHelper('link', function(context: any) {
    return '<a href="/people/' + this.id + '">' + context.fn(this) + '</a>';
});
var template4 = Handlebars.compile<{ people: { name: string, id: number }[] }>(source4);
var data2 = { 'people': [
    { 'name': 'Alan', 'id': 1 },
    { 'name': 'Yehuda', 'id': 2 }
]};
template4(data2);

var source5 = '<ul>{{#people}}<li>{{> link}}</li>{{/people}}</ul>';
Handlebars.registerPartial('link', '<a href="/people/{{id}}">{{name}}</a>');
var template5 = Handlebars.compile(source5);
var data3 = { 'people': [
    { 'name': 'Alan', 'id': 1 },
    { 'name': 'Yehuda', 'id': 2 }
]};
template5(data3);

let source6 = '{{#list nav}}<a href="{{url}}">{{title}}</a>{{/list}}';
let template6 = Handlebars.compile(source6);
Handlebars.registerHelper('list', (context, options: Handlebars.HelperOptions) => {
  var ret = "<ul>";
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + "<li>" + options.fn(context[i]) + "</li>";
  }
  return ret + "</ul>";
});
template6([{url:"", title:""}])


var escapedExpression = Handlebars.Utils.escapeExpression('<script>alert(\'xss\');</script>');

Handlebars.helpers !== undefined;
