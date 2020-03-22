var App: any;

App = Em.Application.create<Em.Application>();

App.president = Em.Object.create({
    name: 'Barack Obama',
});
App.country = Em.Object.create({
    presidentNameBinding: 'MyApp.president.name',
});
App.country.get('presidentName');
App.president = Em.Object.create({
    firstName: 'Barack',
    lastName: 'Obama',
    fullName: function () {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property(),
});
App.president.get('fullName');

declare class MyPerson extends Em.Object {
    static createMan(): MyPerson;
}

var Person1 = Em.Object.extend<typeof MyPerson>({
    say: (thing: string) => {
        alert(thing);
    },
});

declare class MyPerson2 extends Em.Object {
    helloWorld(): void;
}
var tom = Person1.create<MyPerson2>({
    name: 'Tom Dale',
    helloWorld: function () {
        this.say('Hi my name is ' + this.get('name'));
    },
});
tom.helloWorld();

Person1.reopen({ isPerson: true });
Person1.create<Em.Object>().get('isPerson');

Person1.reopenClass({
    createMan: () => {
        return Person1.create({ isMan: true });
    },
});
// ReSharper disable once DuplicatingLocalDeclaration
declare var Person1: typeof MyPerson;
Person1.createMan().get('isMan');

var person = Person1.create<Em.Object>({
    firstName: 'Yehuda',
    lastName: 'Katz',
});
person.addObserver('fullName', null, () => {});
person.set('firstName', 'Brohuda');

App.todosController = Em.Object.create({
    todos: [Em.Object.create({ isDone: false })],
    remaining: function () {
        var todos = this.get('todos');
        return todos.filterProperty('isDone', false).get('length');
    }.property('todos.@each.isDone'),
});

var todos = App.todosController.get('todos');
var todo = todos.objectAt(0);
todo.set('isDone', true);
App.todosController.get('remaining');
todo = Em.Object.create({ isDone: false });
todos.pushObject(todo);
App.todosController.get('remaining');

App.wife = Em.Object.create({
    householdIncome: 80000,
});
App.husband = Em.Object.create({
    householdIncomeBinding: 'App.wife.householdIncome',
});
App.husband.get('householdIncome');
App.husband.set('householdIncome', 90000);
App.wife.get('householdIncome');

App.user = Em.Object.create({
    fullName: 'Kara Gates',
});
App.userView = Em.View.create({
    userNameBinding: Em.Binding.oneWay('App.user.fullName'),
});
App.user.set('fullName', 'Krang Gates');
App.userView.set('userName', 'Truckasaurus Gates');
App.user.get('fullName');

App = Em.Application.create({
    rootElement: '#sidebar',
});

var view = Em.View.create<Em.View>({
    templateName: 'say-hello',
    name: 'Bob',
});
view.appendTo('#container');
view.append();
view.remove();

App.AlertView = Em.View.extend({
    priority: 'p4',
    isUrgent: true,
});

App.ListingView = Em.View.extend({
    templateName: 'listing',
    edit: (event: any) => {
        event.view.set('isEditing', true);
    },
});

App.userController = Em.Object.create({
    content: Em.Object.create({
        firstName: 'Albert',
        lastName: 'Hofmann',
        posts: 25,
        hobbies: 'Riding bicycles',
    }),
});

Handlebars.registerHelper('highlight', function (property: string, options: any) {
    var value = Em.Handlebars.get(this, property, options);
    return new Handlebars.SafeString('<span class="highlight">' + value + '</span>');
});

App.MyText = Em.TextField.extend({
    formBlurredBinding: 'App.adminController.formBlurred',
    change: function () {
        this.set('formBlurred', true);
    },
});

var textArea = Em.TextArea.create({
    valueBinding: 'TestObject.value',
});

App.ClickableView = Em.View.extend({
    click: () => {
        alert('ClickableView was clicked!');
    },
});

var container = Em.ContainerView.create<Em.ContainerView>();
container.append();
var coolView = App.CoolView.create(),
    childViews = container.get('childViews');
childViews.pushObject(coolView);

var Person2 = Em.Object.extend<typeof Em.Object>({
    sayHello: function () {
        console.log('Hello from ' + this.get('name'));
    },
});
var people = [Person2.create({ name: 'Juan' }), Person2.create({ name: 'Charles' }), Person2.create({ name: 'Majd' })];
people.invoke('sayHello');

var arr = [Em.Object.create(), Em.Object.create()];
arr.setEach('name', 'unknown');
arr.getEach('name');

var Person3 = Em.Object.extend<typeof Em.Object>({
    name: null,
    isHappy: false,
});
var people2 = [Person3.create({ name: 'Yehuda', isHappy: true }), Person3.create({ name: 'Majd', isHappy: false })];
people2.every((person: Em.Object) => {
    return !!person.get('isHappy');
});
people2.some((person: Em.Object) => {
    return !!person.get('isHappy');
});
people2.everyProperty('isHappy', true);
people2.someProperty('isHappy', true);

// Examples taken from http://emberjs.com/api/classes/Ember.RSVP.Promise.html
var promise = new Ember.RSVP.Promise(function (resolve: Function, reject: Function) {
    // on success
    resolve('ok!');

    // on failure
    reject('no-k!');
});

promise.then(
    function (value: any) {
        // on fulfillment
    },
    function (reason: any) {
        // on rejection
    },
);
