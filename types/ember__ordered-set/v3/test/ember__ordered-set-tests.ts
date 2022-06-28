// Note -- these tests are derived from the actual tests used to test the Ember
// addon package: https://github.com/emberjs/ember-ordered-set/blob/master/addon/index.js
// They have been tweaked as necessary, but that starting point means they
// *should* cover the expected API.

import OrderedSet from '@ember/ordered-set';
import { assertType } from './lib/assert';

interface Dict<T> {
    [key: string]: T | undefined;
}

// new OrderedSet() creates an empty new instance
new OrderedSet(); // $ExpectType OrderedSet<unknown>
// @ts-expect-error
new OrderedSet(1234);

// create() creates an empty new instance
OrderedSet.create(); // $ExpectType OrderedSet<unknown>
// @ts-expect-error
OrderedSet.create(1234);

// clear() removes any existing entries
OrderedSet.create().clear(); // $ExpectType void

// add() adds an entry
// add() returns the set
OrderedSet.create<string>().add('foo'); // $ExpectType OrderedSet<string>

// add() can handle non-string objects
const setForDict = OrderedSet.create<Dict<string>>(); // $ExpectType OrderedSet<Dict<string>>
setForDict.add({ bar: 'baz' });

// delete() deletes an entry
// delete() returns whether object was part of the set
OrderedSet.create<string>().delete('foo'); // $ExpectType boolean

// delete() can handle non-string objects
setForDict.delete({ bar: 'baz' }); // $ExpectType boolean

// isEmpty() returns whether the set has any entries
OrderedSet.create().isEmpty(); // $ExpectType boolean

// has() returns whether an object is part of the set
OrderedSet.create().has('foo'); // $ExpectType boolean

// has() supports non-string objects
OrderedSet.create<Dict<string>>().has({ bar: 'baz' });

// forEach() iterates over all entries
const stringEntries: string[] = [];
OrderedSet.create<string>().forEach(entry => stringEntries.push(entry));

// forEach() is called with no context by default
const sansContext = OrderedSet.create<string>();

sansContext.add('foo');

sansContext.forEach(function (entry) {
    assertType<string>(entry);
    assertType<void>(this);
});

// forEach() context can be set as second argument
const withContext = OrderedSet.create<string>();
const context = { bar: 'baz' };
withContext.forEach(function (entry) {
    assertType<string>(entry);
    assertType<Dict<string>>(this);
}, context);

// toArray() returns an array of all entries
OrderedSet.create<number>().toArray(); // $ExpectType number[]

// copy() copies all entries into a new set
OrderedSet.create<number>().copy(); // $ExpectType OrderedSet<number>

// sets by default accept anything
const anythingGoesYo = OrderedSet.create(); // $ExpectType OrderedSet<unknown>
anythingGoesYo.add('strings'); // $ExpectType OrderedSet<unknown>
anythingGoesYo.add(123); // $ExpectType OrderedSet<unknown>

// sets can be constrained
const constrained = OrderedSet.create<string>(); // $ExpectType OrderedSet<string>
constrained.add('strings are fine'); // $ExpectType OrderedSet<string>
// @ts-expect-error
constrained.add({ otherStuff: 'not so much' });
