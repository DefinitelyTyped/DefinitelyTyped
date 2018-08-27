import Ember from 'ember';
import { assertType } from './lib/assert';

declare global {
    interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
}

class Person extends Ember.Object {
    name: string;
}

const person = Person.create({ name: 'Joe' });
const array = [person];

assertType<number>(array.get('length'));
// This test must be disabled due to a breaking change in TS 3.1
// see: https://github.com/Microsoft/TypeScript/issues/26120
//      https://github.com/typed-ember/ember-cli-typescript/issues/246
//      https://github.com/Microsoft/TypeScript/pull/26063
//
// assertType<Person | undefined>(array.get('firstObject'));
assertType<string[]>(array.mapBy('name'));
assertType<string[]>(array.map(p => p.get('name')));
assertType<Person[]>(array.sortBy('name'));
assertType<Person[]>(array.uniq());
assertType<Person[]>(array.uniqBy('name'));
