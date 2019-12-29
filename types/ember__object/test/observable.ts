import { assertType } from './lib/assert';
import EmberObject, { computed, getWithDefault, getProperties, get, setProperties, set } from '@ember/object';
import { removeObserver, addObserver } from '@ember/object/observers';

class MyComponent extends EmberObject {
    foo = 'bar';

    init() {
        this._super.apply(this, arguments);
        this.addObserver('foo', this, 'fooDidChange');
        this.addObserver('foo', this, this.fooDidChange);
        addObserver(this, 'foo', this, 'fooDidChange');
        addObserver(this, 'foo', this, this.fooDidChange);
        this.removeObserver('foo', this, 'fooDidChange');
        this.removeObserver('foo', this, this.fooDidChange);
        removeObserver(this, 'foo', this, 'fooDidChange');
        removeObserver(this, 'foo', this, this.fooDidChange);
        const lambda = () => {
            this.fooDidChange(this, 'foo');
        };
        this.addObserver('foo', lambda);
        this.removeObserver('foo', lambda);
        addObserver(this, 'foo', lambda);
        removeObserver(this, 'foo', lambda);
    }

    fooDidChange(sender: this, key: string) {
        // your code
    }
}

const myComponent = MyComponent.create();
myComponent.addObserver('foo', null, () => {});
myComponent.set('foo', 'baz');

const person = EmberObject.create({
    name: 'Fred',
    age: 29,
    capitalized: computed<string>(function() {
        return this.get('name').toUpperCase();
    })
});

const pojo = { name: 'Fred', age: 29 };

function testGet() {
    assertType<string>(get(person, 'name'));
    assertType<number>(get(person, 'age'));
    assertType<string>(get(person, 'capitalized'));
    assertType<string>(person.get('name'));
    assertType<number>(person.get('age'));
    assertType<string>(person.get('capitalized'));
    assertType<string>(get(pojo, 'name'));
}

function testGetProperties() {
    assertType<{ name: string }>(getProperties(person, 'name'));
    assertType<{ name: string, age: number }>(getProperties(person, 'name', 'age'));
    assertType<{ name: string, age: number }>(getProperties(person, [ 'name', 'age' ]));
    assertType<{ name: string, age: number, capitalized: string }>(getProperties(person, 'name', 'age', 'capitalized'));
    assertType<{ name: string }>(person.getProperties('name'));
    assertType<{ name: string, age: number }>(person.getProperties('name', 'age'));
    assertType<{ name: string, age: number }>(person.getProperties([ 'name', 'age' ]));
    assertType<{ name: string, age: number, capitalized: string }>(person.getProperties('name', 'age', 'capitalized'));
    assertType<{ name: string, age: number }>(getProperties(pojo, 'name', 'age'));
}

function testGetWithDefault() {
    assertType<string>(getWithDefault(person, 'name', 'Joe'));
    assertType<number>(getWithDefault(person, 'age', 20));
    assertType<string>(getWithDefault(person, 'capitalized', 'JOE'));
    assertType<string>(person.getWithDefault('name', 'Joe'));
    assertType<number>(person.getWithDefault('age', 20));
    assertType<string>(person.getWithDefault('capitalized', 'JOE'));
    assertType<string>(getWithDefault(pojo, 'name', 'JOE'));
}

function testSet() {
    assertType<string>(set(person, 'name', 'Joe'));
    assertType<number>(set(person, 'age', 35));
    assertType<string>(set(person, 'capitalized', 'JOE'));
    assertType<string>(person.set('name', 'Joe'));
    assertType<number>(person.set('age', 35));
    assertType<string>(person.set('capitalized', 'JOE'));
    assertType<string>(set(pojo, 'name', 'Joe'));
}

function testSetProperties() {
    assertType<{ name: string }>(setProperties(person, { name: 'Joe' }));
    assertType<{ name: string, age: number }>(setProperties(person, { name: 'Joe', age: 35 }));
    assertType<{ name: string, capitalized: string }>(setProperties(person, { name: 'Joe', capitalized: 'JOE' }));
    assertType<{ name: string }>(person.setProperties({ name: 'Joe' }));
    assertType<{ name: string, age: number }>(person.setProperties({ name: 'Joe', age: 35 }));
    assertType<{ name: string, capitalized: string }>(person.setProperties({ name: 'Joe', capitalized: 'JOE' }));
    assertType<{ name: string, age: number }>(setProperties(pojo, { name: 'Joe', age: 35 }));
}

function testDynamic() {
    const obj: any = {};
    const dynamicKey: string = 'dummy'; // tslint:disable-line:no-inferrable-types

    assertType<any>(get(obj, 'dummy'));
    assertType<any>(get(obj, dynamicKey));
    assertType<string>(getWithDefault(obj, 'dummy', 'default'));
    assertType<string>(getWithDefault(obj, dynamicKey, 'default'));
    assertType<{ dummy: any }>(getProperties(obj, 'dummy'));
    assertType<{ dummy: any }>(getProperties(obj, [ 'dummy' ]));
    assertType<object>(getProperties(obj, dynamicKey));
    assertType<object>(getProperties(obj, [ dynamicKey ]));
    assertType<string>(set(obj, 'dummy', 'value'));
    assertType<string>(set(obj, dynamicKey, 'value'));
    assertType<{ dummy: string }>(setProperties(obj, { dummy: 'value '}));
    assertType<object>(setProperties(obj, { [dynamicKey]: 'value' }));
}
