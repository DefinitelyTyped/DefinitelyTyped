import Ember from 'ember';
import { assertType } from './lib/assert';

class MyComponent extends Ember.Component {
    foo = 'bar';

    init() {
        this._super.apply(this, arguments);
        this.addObserver('foo', this, 'fooDidChange');
        this.addObserver('foo', this, this.fooDidChange);
        Ember.addObserver(this, 'foo', this, 'fooDidChange');
        Ember.addObserver(this, 'foo', this, this.fooDidChange);
        this.removeObserver('foo', this, 'fooDidChange');
        this.removeObserver('foo', this, this.fooDidChange);
        Ember.removeObserver(this, 'foo', this, 'fooDidChange');
        Ember.removeObserver(this, 'foo', this, this.fooDidChange);
        const lambda = () => {
            this.fooDidChange(this, 'foo');
        };
        this.addObserver('foo', lambda);
        this.removeObserver('foo', lambda);
        Ember.addObserver(this, 'foo', lambda);
        Ember.removeObserver(this, 'foo', lambda);
    }

    fooDidChange(sender: MyComponent, key: string) {
        // your code
    }
}

const myComponent = MyComponent.create();
myComponent.addObserver('foo', null, () => {});
myComponent.set('foo', 'baz');

const person = Ember.Object.create({
    name: 'Fred',
    age: 29,
    capitalized: Ember.computed<string>(function () {
        return this.get('name').toUpperCase();
    }),
});

const pojo = { name: 'Fred', age: 29 };

function testGet() {
    assertType<string>(Ember.get(person, 'name'));
    assertType<number>(Ember.get(person, 'age'));
    assertType<string>(Ember.get(person, 'capitalized'));
    assertType<string>(person.get('name'));
    assertType<number>(person.get('age'));
    assertType<string>(person.get('capitalized'));
    assertType<string>(Ember.get(pojo, 'name'));
}

function testGetProperties() {
    assertType<{ name: string }>(Ember.getProperties(person, 'name'));
    assertType<{ name: string; age: number }>(Ember.getProperties(person, 'name', 'age'));
    assertType<{ name: string; age: number }>(Ember.getProperties(person, ['name', 'age']));
    assertType<{ name: string; age: number; capitalized: string }>(
        Ember.getProperties(person, 'name', 'age', 'capitalized'),
    );
    assertType<{ name: string }>(person.getProperties('name'));
    assertType<{ name: string; age: number }>(person.getProperties('name', 'age'));
    assertType<{ name: string; age: number }>(person.getProperties(['name', 'age']));
    assertType<{ name: string; age: number; capitalized: string }>(person.getProperties('name', 'age', 'capitalized'));
    assertType<{ name: string; age: number }>(Ember.getProperties(pojo, 'name', 'age'));
}

function testGetWithDefault() {
    assertType<string>(Ember.getWithDefault(person, 'name', 'Joe'));
    assertType<number>(Ember.getWithDefault(person, 'age', 20));
    assertType<string>(Ember.getWithDefault(person, 'capitalized', 'JOE'));
    assertType<string>(person.getWithDefault('name', 'Joe'));
    assertType<number>(person.getWithDefault('age', 20));
    assertType<string>(person.getWithDefault('capitalized', 'JOE'));
    assertType<string>(Ember.getWithDefault(pojo, 'name', 'JOE'));
}

function testSet() {
    assertType<string>(Ember.set(person, 'name', 'Joe'));
    assertType<number>(Ember.set(person, 'age', 35));
    assertType<string>(Ember.set(person, 'capitalized', 'JOE'));
    assertType<string>(person.set('name', 'Joe'));
    assertType<number>(person.set('age', 35));
    assertType<string>(person.set('capitalized', 'JOE'));
    assertType<string>(Ember.set(pojo, 'name', 'Joe'));
}

function testSetProperties() {
    assertType<{ name: string }>(Ember.setProperties(person, { name: 'Joe' }));
    assertType<{ name: string; age: number }>(Ember.setProperties(person, { name: 'Joe', age: 35 }));
    assertType<{ name: string; capitalized: string }>(Ember.setProperties(person, { name: 'Joe', capitalized: 'JOE' }));
    assertType<{ name: string }>(person.setProperties({ name: 'Joe' }));
    assertType<{ name: string; age: number }>(person.setProperties({ name: 'Joe', age: 35 }));
    assertType<{ name: string; capitalized: string }>(person.setProperties({ name: 'Joe', capitalized: 'JOE' }));
    assertType<{ name: string; age: number }>(Ember.setProperties(pojo, { name: 'Joe', age: 35 }));
}

function testDynamic() {
    const obj: any = {};
    const dynamicKey: string = 'dummy'; // tslint:disable-line:no-inferrable-types

    assertType<any>(Ember.get(obj, 'dummy'));
    assertType<any>(Ember.get(obj, dynamicKey));
    assertType<string>(Ember.getWithDefault(obj, 'dummy', 'default'));
    assertType<string>(Ember.getWithDefault(obj, dynamicKey, 'default'));
    assertType<{ dummy: any }>(Ember.getProperties(obj, 'dummy'));
    assertType<{ dummy: any }>(Ember.getProperties(obj, ['dummy']));
    assertType<object>(Ember.getProperties(obj, dynamicKey));
    assertType<object>(Ember.getProperties(obj, [dynamicKey]));
    assertType<string>(Ember.set(obj, 'dummy', 'value'));
    assertType<string>(Ember.set(obj, dynamicKey, 'value'));
    assertType<{ dummy: string }>(Ember.setProperties(obj, { dummy: 'value ' }));
    assertType<object>(Ember.setProperties(obj, { [dynamicKey]: 'value' }));
}
