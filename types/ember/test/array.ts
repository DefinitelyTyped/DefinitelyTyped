import Ember from 'ember';
import { assertType } from './lib/assert';

type Person = typeof Person.prototype;
const Person = Ember.Object.extend({
    name: '',
    isHappy: false
});

const people = Ember.A([
    Person.create({ name: 'Yehuda', isHappy: true }),
    Person.create({ name: 'Majd', isHappy: false }),
]);

assertType<number>(people.get('length'));
assertType<Person>(people.get('lastObject'));
assertType<boolean>(people.isAny('isHappy'));
assertType<boolean>(people.isAny('isHappy', 'false'));
assertType<Ember.Enumerable<Person>>(people.filterBy('isHappy'));
assertType<Ember.Enumerable<Person>>(people.rejectBy('isHappy'));
assertType<Ember.Enumerable<Person>>(people.filter((person) => person.get('name') === 'Yehuda'));
assertType<typeof people>(people.get('[]'));
assertType<Person>(people.get('[]').get('firstObject'));

assertType<Ember.Array<boolean>>(people.mapBy('isHappy'));
assertType<any[]>(people.mapBy('name.length'));

const last = people.get('lastObject');
if (last) {
    assertType<string>(last.get('name'));
}

const first = people.get('lastObject');
if (first) {
    assertType<boolean>(first.get('isHappy'));
}

const letters: Ember.Enumerable<string> = Ember.A(['a', 'b', 'c']);
const codes: number[] = letters.map((item, index, enumerable) => {
    assertType<string>(item);
    assertType<number>(index);
    return item.charCodeAt(0);
});

const value = '1,2,3';
const filters = Ember.A(value.split(','));
filters.push('4');
filters.sort();
