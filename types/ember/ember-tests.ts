let App: any;

App = Em.Application.create<Em.Application>();

App.president = Em.Object.create({
    name: 'Barack Obama'
});
App.country = Em.Object.create({
    presidentNameBinding: 'MyApp.president.name'
});
App.country.get('presidentName');
App.president = Em.Object.create({
    firstName: 'Barack',
    lastName: 'Obama',
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property()
});
App.president.get('fullName');

declare class MyPerson extends Em.Object {
    static createMan(): MyPerson;
}

const Person1 = Em.Object.extend<typeof MyPerson>({
    say: (thing: string) => {
        alert(thing);
    }
});

declare class MyPerson2 extends Em.Object {
    helloWorld(): void;
}
const tom = Person1.create<MyPerson2>({
    name: 'Tom Dale',
    helloWorld() {
        this.say('Hi my name is ' + this.get('name'));
    }
});
tom.helloWorld();

Person1.reopen({ isPerson: true });
Person1.create<Em.Object>().get('isPerson');

Person1.reopenClass({
    createMan: () => {
        return Person1.create({ isMan: true });
    }
});
// ReSharper disable once DuplicatingLocalDeclaration
Person1.createMan().get('isMan');

const person = Person1.create<Em.Object>({
    firstName: 'Yehuda',
    lastName: 'Katz'
});
person.addObserver('fullName', null, () => { });
person.set('firstName', 'Brohuda');

App.todosController = Em.Object.create({
    todos: [
        Em.Object.create({ isDone: false })
    ],
    remaining: (function() {
        const todos = this.get('todos');
        return todos.filterProperty('isDone', false).get('length');
    }).property('todos.@each.isDone')
});

const todos = App.todosController.get('todos');
let todo = todos.objectAt(0);
todo.set('isDone', true);
App.todosController.get('remaining');
todo = Em.Object.create({ isDone: false });
todos.pushObject(todo);
App.todosController.get('remaining');

App.wife = Em.Object.create({
    householdIncome: 80000
});
App.husband = Em.Object.create({
    householdIncomeBinding: 'App.wife.householdIncome'
});
App.husband.get('householdIncome');
App.husband.set('householdIncome', 90000);
App.wife.get('householdIncome');

App.user = Em.Object.create({
    fullName: 'Kara Gates'
});
App.user.set('fullName', 'Krang Gates');
App.userView.set('userName', 'Truckasaurus Gates');
App.user.get('fullName');

App = Em.Application.create({
    rootElement: '#sidebar'
});

App.userController = Em.Object.create({
    content: Em.Object.create({
        firstName: 'Albert',
        lastName: 'Hofmann',
        posts: 25,
        hobbies: 'Riding bicycles'
    })
});

Ember.Helper.helper((params) => {
  let cents = params[0];
  return `${cents * 0.01}`;
});

Ember.Helper.helper((params, hash) => {
  let cents = params[0];
  let currency = hash.currency;
  return `${currency}${cents * 0.01}`;
});

Handlebars.registerHelper('highlight', (property: string, options: any) =>
    new Handlebars.SafeString('<span class="highlight">' + "some value" + '</span>'));

const coolView = App.CoolView.create();

const Person2 = Em.Object.extend<typeof Em.Object>({
    sayHello() {
        console.log('Hello from ' + this.get('name'));
    }
});
const people = [
    Person2.create({ name: 'Juan' }),
    Person2.create({ name: 'Charles' }),
    Person2.create({ name: 'Majd' })
];
people.invoke('sayHello');

const arr = [Em.Object.create(), Em.Object.create()];
arr.setEach('name', 'unknown');
arr.getEach('name');

const Person3 = Em.Object.extend<typeof Em.Object>({
    name: null,
    isHappy: false
});
const people2 = [
    Person3.create({ name: 'Yehuda', isHappy: true }),
    Person3.create({ name: 'Majd', isHappy: false })
];
people2.every((person: Em.Object) => {
    return !!person.get('isHappy');
});
people2.some((person: Em.Object) => {
    return !!person.get('isHappy');
});
people2.everyProperty('isHappy', true);
people2.someProperty('isHappy', true);

// Examples taken from http://emberjs.com/api/classes/Em.RSVP.Promise.html
const promise = new Em.RSVP.Promise<string, string>((resolve: Function, reject: Function) => {
  // on success
  resolve('ok!');

  // on failure
  reject('no-k!');
});

promise.then((value: any) => {
  // on fulfillment
}, (reason: any) => {
  // on rejection
});

const mix1 = Ember.Mixin.create({
  foo: 1
});

const mix2 = Ember.Mixin.create({
  bar: 2
});

const component1 = Ember.Component.extend( mix1, mix2, {
  lyft: Ember.inject.service(),
  cars: Ember.computed.readOnly('lyft.cars')
});
