/// <reference path="ember.d.ts" />
/// <reference path="../handlebars/handlebars.d.ts" />

var App;

App = Em.Application.create();

App.president = Ember.Object.create({
    name: "Barack Obama"
});
App.country = Ember.Object.create({
    presidentNameBinding: 'MyApp.president.name'
});
App.country.get('presidentName');

App.president = Ember.Object.create({
    firstName: "Barack",
    lastName: "Obama",
    fullName: () => {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property()
});
App.president.get('fullName');

var Person = Ember.Object.extend({
    say: (thing) => {
        alert(thing);
    }
});
var tom = Person.create({
    name: "Tom Dale",
    helloWorld: () => {
        this.say("Hi my name is " + this.get('name'));
    }
});
tom.helloWorld();

Person.reopen({ isPerson: true });
Person.create().get('isPerson');

Person.reopenClass({
    createMan: () => {
        return Person.create({ isMan: true })
    }
});
Person.createMan().get('isMan');

var person = Person.create({
    firstName: "Yehuda",
    lastName: "Katz"
});
person.addObserver('fullName', () => { });
person.set('firstName', "Brohuda");

App.todosController = Ember.Object.create({
    todos: [
        Ember.Object.create({ isDone: false })
    ],
    remaining: () => {
        var todos = this.get('todos');
        return todos.filterProperty('isDone', false).get('length');
    }.property('todos.@each.isDone')
});

var todos = App.todosController.get('todos');
var todo = todos.objectAt(0);
todo.set('isDone', true);
App.todosController.get('remaining');
todo = Ember.Object.create({ isDone: false });
todos.pushObject(todo);
App.todosController.get('remaining');

App.wife = Ember.Object.create({
    householdIncome: 80000
});
App.husband = Ember.Object.create({
    householdIncomeBinding: 'App.wife.householdIncome'
});
App.husband.get('householdIncome');
App.husband.set('householdIncome', 90000);
App.wife.get('householdIncome');

App.user = Ember.Object.create({
    fullName: "Kara Gates"
});
App.userView = Ember.View.create({
    userNameBinding: Ember.Binding.oneWay('App.user.fullName')
});
App.user.set('fullName', "Krang Gates");
App.userView.set('userName', "Truckasaurus Gates");
App.user.get('fullName');

App = Ember.Application.create({
    rootElement: '#sidebar'
});

var view = Ember.View.create({
    templateName: 'say-hello',
    name: "Bob"
});
view.appendTo('#container');
view.append();
view.remove();

App.AlertView = Ember.View.extend({
    priority: "p4",
    isUrgent: true
});

App.ListingView = Ember.View.extend({
    templateName: 'listing',
    edit: (event) => {
        event.view.set('isEditing', true);
    }
});

App.userController = Ember.Object.create({
    content: Ember.Object.create({
        firstName: "Albert",
        lastName: "Hofmann",
        posts: 25,
        hobbies: "Riding bicycles"
    })
});

Handlebars.registerHelper('highlight', (property, options) => {
    var value = Ember.Handlebars.getPath(this, property, options);
    return new Handlebars.SafeString('<span class="highlight">' + value + '</span>');
});

App.MyText = Ember.TextField.extend({
    formBlurredBinding: 'App.adminController.formBlurred',
    change: (evt) => {
        this.set('formBlurred', true);
    }
});

var textArea = Ember.TextArea.create({
    valueBinding: 'TestObject.value'
});

App.ClickableView = Ember.View.extend({
    click: (evt) => {
        alert("ClickableView was clicked!");
    }
});

var container = Ember.ContainerView.create();
container.append();
var coolView = App.CoolView.create(),
    childViews = container.get('childViews');
childViews.pushObject(coolView);

Person = Ember.Object.extend({
    sayHello: () => {
        console.log("Hello from " + this.get('name'));
    }
});
var people = [
  Person.create({ name: "Juan" }),
  Person.create({ name: "Charles" }),
  Person.create({ name: "Majd" })
]
people.invoke('sayHello');

var arr = [Ember.Object.create(), Ember.Object.create()];
arr.setEach('name', 'unknown');
arr.getEach('name');

Person = Ember.Object.extend({
    name: null,
    isHappy: false
});
var people2 = [
    Person.create({ name: 'Yehuda', isHappy: true }),
    Person.create({ name: 'Majd', isHappy: false })
];
people2.every((person, index, self) => {
    if (person.get('isHappy')) { return true; }
});
people2.some((person, index, self) => {
    if (person.get('isHappy')) { return true; }
});
people2.everyProperty('isHappy', true);
people2.someProperty('isHappy', true);