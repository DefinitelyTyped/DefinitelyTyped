import { assertType } from './lib/assert';
import EmberObject from '@ember/object';
import EmberArray, { A } from '@ember/array';
import MutableArray from '@ember/array/mutable';

type Person = typeof Person.prototype;
const Person = EmberObject.extend({
    name: '',
    isHappy: false
});

const people = A([
    Person.create({ name: 'Yehuda', isHappy: true }),
    Person.create({ name: 'Majd', isHappy: false }),
]);

assertType<number>(people.get('length'));
assertType<Person>(people.get('lastObject'));
assertType<Person>(people.get('firstObject'));
assertType<boolean>(people.isAny('isHappy'));
assertType<boolean>(people.isAny('isHappy', 'false'));

const persons1: Person[] = people.filterBy('isHappy');
const persons2: MutableArray<Person> = people.filterBy('isHappy');
const persons3: Person[] = people.rejectBy('isHappy');
const persons4: MutableArray<Person> = people.rejectBy('isHappy');
const persons5: Person[] = people.filter((person) => person.get('name') === 'Yehuda');
const persons6: MutableArray<Person> = people.filter((person) => person.get('name') === 'Yehuda');

assertType<typeof people>(people.get('[]'));
assertType<Person>(people.get('[]').get('firstObject')); // $ExpectType any

assertType<boolean[]>(people.mapBy('isHappy')); // $ExpectType boolean[]
assertType<any[]>(people.mapBy('name.length'));

const last = people.get('lastObject');  // $ExpectType ({ name: string; isHappy: boolean; } & EmberObject & { name: string; isHappy: boolean; }) | undefined
if (last) {
    assertType<string>(last.get('name'));
}

const first = people.get('lastObject');
if (first) {
    assertType<boolean>(first.get('isHappy'));
}

const letters: EmberArray<string> = A(['a', 'b', 'c']);
const codes: number[] = letters.map((item, index, enumerable) => {
    assertType<string>(item);
    assertType<number>(index);
    return item.charCodeAt(0);
});

const value = '1,2,3';
const filters = A(value.split(','));
filters.push('4');
filters.sort();
