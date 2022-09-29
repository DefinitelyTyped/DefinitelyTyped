import Ember from 'ember';
import { assertType } from './lib/assert';

const Person = Ember.Object.extend({
    firstName: '',
    lastName: '',

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    getFullName2(): string {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    },
});

assertType<string>(Person.prototype.firstName);
assertType<() => string>(Person.prototype.getFullName);

const person = Person.create({
    firstName: 'Joe',
    lastName: 'Blow',
    extra: 42,
});

assertType<string>(person.getFullName());
assertType<number>(person.extra);

class ES6Person extends Ember.Object {
    declare firstName: string;
    declare lastName: string;

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get fullName2(): string {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }
}

assertType<string>(ES6Person.prototype.firstName);
assertType<string>(ES6Person.prototype.fullName);

const es6Person = ES6Person.create({
    firstName: 'Joe',
    lastName: 'Blow',
    extra: 42,
});

assertType<string>(es6Person.fullName);
assertType<number>(es6Person.extra);

class PersonWithStatics extends Ember.Object {
    static isPerson = true;
}
const PersonWithStatics2 = PersonWithStatics.extend({});
class PersonWithStatics3 extends PersonWithStatics {}
class PersonWithStatics4 extends PersonWithStatics2 {}
assertType<boolean>(PersonWithStatics.isPerson);
assertType<boolean>(PersonWithStatics2.isPerson);
assertType<boolean>(PersonWithStatics3.isPerson);
assertType<boolean>(PersonWithStatics4.isPerson);
