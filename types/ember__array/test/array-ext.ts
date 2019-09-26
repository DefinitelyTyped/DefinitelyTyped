import { assertType } from './lib/assert';
import EmberObject from '@ember/object';
import ArrayPrototypeExtensions from '@ember/array/types/prototype-extensions';

declare global {
    interface Array<T> extends ArrayPrototypeExtensions<T> {}
}

class Person extends EmberObject {
    name: string;
}

const person = Person.create({ name: 'Joe' });
const array = [person];

assertType<number>(array.get('length'));
assertType<Person | undefined>(array.get('firstObject'));
assertType<string[]>(array.mapBy('name'));
assertType<string[]>(array.map(p => p.get('name')));
assertType<Person[]>(array.sortBy('name'));
assertType<Person[]>(array.uniq());
assertType<Person[]>(array.uniqBy('name'));
