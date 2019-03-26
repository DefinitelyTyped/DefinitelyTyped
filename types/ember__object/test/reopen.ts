import { assertType } from "./lib/assert";
import EmberObject from "@ember/object";
import Mixin from "@ember/object/mixin";

type Person = typeof Person.prototype;
const Person = EmberObject.extend({
    name: '',
    sayHello() {
        alert(`Hello. My name is ${this.get('name')}`);
    }
});

assertType<Person>(Person.reopen());

assertType<string>(Person.create().name);
// tslint:disable-next-line no-void-expression
assertType<void>(Person.create().sayHello());

const Person2 = Person.reopenClass({
    species: 'Homo sapiens',

    createPerson(name: string): Person {
        return Person.create({ name });
    }
});

assertType<string>(Person2.create().name);
// tslint:disable-next-line no-void-expression
assertType<void>(Person2.create().sayHello());
assertType<string>(Person2.species);

const tom = Person2.create({
    name: 'Tom Dale'
});

const badTom = Person2.create({ name: 99 }); // $ExpectError

const yehuda = Person2.createPerson('Yehuda Katz');

tom.sayHello(); // "Hello. My name is Tom Dale"
yehuda.sayHello(); // "Hello. My name is Yehuda Katz"
alert(Person2.species); // "Homo sapiens"

const Person3 = Person2.reopen({
    goodbyeMessage: 'goodbye',

    sayGoodbye() {
        alert(`${this.get('goodbyeMessage')}, ${this.get('name')}`);
    }
});

const person3 = Person3.create();
person3.get('name');
person3.get('goodbyeMessage');
person3.sayHello();
person3.sayGoodbye();

interface AutoResizeMixin { resizable: true; }
declare const AutoResizeMixin: Mixin<AutoResizeMixin>;

const ResizableTextArea = EmberObject.reopen(AutoResizeMixin, {
    scaling: 1.0
});
const text = ResizableTextArea.create();
// TODO fix upstream
// assertType<boolean>(text.resizable);
assertType<number>(text.scaling);

const Reopened = EmberObject.reopenClass({ a: 1 }, { b: 2 }, { c: 3 });
assertType<number>(Reopened.a);
assertType<number>(Reopened.b);
assertType<number>(Reopened.c);
