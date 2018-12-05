import Ember from 'ember';

let App: any;

App = Ember.Application.create();
App.president = Ember.Object.create({
    name: 'Barack Obama',
});
App.country = Ember.Object.create({
    presidentNameBinding: 'MyApp.president.name',
});
App.country.get('presidentName');
App.president = Ember.Object.create({
    firstName: 'Barack',
    lastName: 'Obama',
    fullName: Ember.computed(function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
});
App.president.get('fullName');

declare class MyPerson extends Ember.Object {
    static createMan(): MyPerson;
}
MyPerson.createMan();

const Person1 = Ember.Object.extend({
    say: (thing: string) => {
        alert(thing);
    },
});

declare class MyPerson2 extends Ember.Object {
    helloWorld(): void;
}
MyPerson2.create().helloWorld();

const tom = Person1.create({
    name: 'Tom Dale',
    helloWorld() {
        this.say('Hi my name is ' + this.get('name'));
    },
});
tom.helloWorld();

const PersonReopened = Person1.reopen({ isPerson: true });
PersonReopened.create().get('isPerson');

App.todosController = Ember.Object.create({
    todos: [Ember.Object.create({ isDone: false })],
    remaining: Ember.computed('todos.@each.isDone', function() {
        const todos = this.get('todos');
        return todos.filterProperty('isDone', false).get('length');
    }),
});

const todos = App.todosController.get('todos');
let todo = todos.objectAt(0);
todo.set('isDone', true);
App.todosController.get('remaining');
todo = Ember.Object.create({ isDone: false });
todos.pushObject(todo);
App.todosController.get('remaining');

App.wife = Ember.Object.create({
    householdIncome: 80000,
});
App.husband = Ember.Object.create({
    householdIncomeBinding: 'App.wife.householdIncome',
});
App.husband.get('householdIncome');
App.husband.set('householdIncome', 90000);
App.wife.get('householdIncome');

App.user = Ember.Object.create({
    fullName: 'Kara Gates',
});
App.user.set('fullName', 'Krang Gates');
App.userView.set('userName', 'Truckasaurus Gates');
App.user.get('fullName');

App = Ember.Application.create({
    rootElement: '#sidebar',
});

App.userController = Ember.Object.create({
    content: Ember.Object.create({
        firstName: 'Albert',
        lastName: 'Hofmann',
        posts: 25,
        hobbies: 'Riding bicycles',
    }),
});

Handlebars.registerHelper(
    'highlight',
    (property: string, options: any) =>
        new Handlebars.SafeString('<span class="highlight">' + 'some value' + '</span>')
);

const coolView = App.CoolView.create();

const Person2 = Ember.Object.extend({
    name: '',
    sayHello() {
        console.log('Hello from ' + this.get('name'));
    },
});
const people = Ember.A([
    Person2.create({ name: 'Juan' }),
    Person2.create({ name: 'Charles' }),
    Person2.create({ name: 'Majd' }),
]);
people.invoke('sayHello');

const arr = Ember.A([Ember.Object.create(), Ember.Object.create()]);
arr.setEach('name', 'unknown');
arr.getEach('name');

const Person3 = Ember.Object.extend({
    name: '',
    isHappy: false,
});
const people2 = Ember.A([
    Person3.create({ name: 'Yehuda', isHappy: true }),
    Person3.create({ name: 'Majd', isHappy: false }),
]);
const isHappy = (person: typeof Person3.prototype): boolean => {
    return !!person.get('isHappy');
};
people2.every(isHappy);
people2.any(isHappy);
people2.isEvery('isHappy');
people2.isEvery('isHappy', true);
people2.isAny('isHappy', 'true');
people2.isAny('isHappy');

// Examples taken from http://emberjs.com/api/classes/Em.RSVP.Promise.html
const promise = new Ember.RSVP.Promise<string>((resolve: (...args: any[]) => any, reject: (...args: any[]) => any) => {
    // on success
    resolve('ok!');

    // on failure
    reject('no-k!');
});

promise.then(
    (value: any) => {
        // on fulfillment
    },
    (reason: any) => {
        // on rejection
    }
);

// make sure Ember.RSVP.Promise can be reference as a type
declare function promiseReturningFunction(urn: string): Ember.RSVP.Promise<string>;

const mix1 = Ember.Mixin.create({
    foo: 1,
});

const mix2 = Ember.Mixin.create({
    bar: 2,
});

const component1 = Ember.Component.extend(mix1, mix2, {
    lyft: Ember.inject.service(),
    cars: Ember.computed.readOnly('lyft.cars'),
});

// make sure htmlSafe returns a SafeString
Ember.String.htmlSafe("hello"); // $ExpectType SafeString
