import Ember from 'ember';
import Component from '@ember/component';
import { or } from '@ember/object/computed';
import { assertType } from './lib/assert';

const Person = Ember.Object.extend({
    firstName: '',
    lastName: '',
    age: 0,

    noArgs: Ember.computed<string>(() => 'test'),

    fullName: Ember.computed<string>('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),

    fullNameReadonly: Ember.computed<string>('fullName', function() {
        return this.get('fullName');
    }).readOnly(),

    fullNameWritable: Ember.computed<string>('firstName', 'lastName', {
        get() {
            return this.get('fullName');
        },
        set(key, value) {
            let [first, last] = value.split(' ');
            this.set('firstName', first);
            this.set('lastName', last);
            return value;
        }
    }),

    fullNameGetOnly: Ember.computed<string>('fullName', {
        get() {
            return this.get('fullName');
        }
    }),

    fullNameSetOnly: Ember.computed<string>('firstName', 'lastName', {
        set(key, value) {
            let [first, last] = value.split(' ');
            this.set('firstName', first);
            this.set('lastName', last);
            return value;
        }
    }),

    combinators: Ember.computed<string>(function() {
        return this.get('firstName');
    }).property('firstName')
      .meta({ foo: 'bar' })
      .volatile()
      .readOnly()
});

const person = Person.create({
    firstName: 'Fred',
    lastName: 'Smith',
    age: 29,
});

assertType<string>(person.firstName);
assertType<number>(person.age);
assertType<Ember.ComputedProperty<string>>(person.noArgs);
assertType<Ember.ComputedProperty<string>>(person.fullName);
assertType<Ember.ComputedProperty<string>>(person.fullNameReadonly);
assertType<Ember.ComputedProperty<string>>(person.fullNameWritable);
assertType<Ember.ComputedProperty<string>>(person.fullNameGetOnly);
assertType<Ember.ComputedProperty<string>>(person.fullNameSetOnly);
assertType<Ember.ComputedProperty<string>>(person.combinators);

assertType<string>(person.get('firstName'));
assertType<number>(person.get('age'));
assertType<string>(person.get('noArgs'));
assertType<string>(person.get('fullName'));
assertType<string>(person.get('fullNameReadonly'));
assertType<string>(person.get('fullNameWritable'));
assertType<string>(person.get('fullNameGetOnly'));
assertType<string>(person.get('fullNameSetOnly'));
assertType<string>(person.get('combinators'));

assertType<{ firstName: string, fullName: string, age: number }>(person.getProperties('firstName', 'fullName', 'age'));

const person2 = Person.create({
    fullName: 'Fred Smith'
});

assertType<string>(person2.get('firstName'));
assertType<string>(person2.get('fullName'));

const person3 = Person.extend({
    firstName: 'Fred',
    fullName: 'Fred Smith'
}).create();

assertType<string>(person3.get('firstName'));
assertType<string>(person3.get('fullName'));

const person4 = Person.extend({
    firstName: Ember.computed(() => 'Fred'),
    fullName: Ember.computed(() => 'Fred Smith')
}).create();

assertType<string>(person4.get('firstName'));
assertType<string>(person4.get('fullName'));

// computed property macros
const objectWithComputedProperties = Ember.Object.extend({
    alias: Ember.computed.alias('foo'),
    and: Ember.computed.and('foo', 'bar', 'baz', 'qux'),
    bool: Ember.computed.bool('foo'),
    collect: Ember.computed.collect('foo', 'bar', 'baz', 'qux'),
    deprecatingAlias: Ember.computed.deprecatingAlias('foo', {
        id: 'hamster.deprecate-banana',
        until: '3.0.0'
    }),
    empty: Ember.computed.empty('foo'),
    equalNumber: Ember.computed.equal('foo', 1),
    equalString: Ember.computed.equal('foo', 'bar'),
    equalObject: Ember.computed.equal('foo', {}),
    filter: Ember.computed.filter('foo', (item) => item === 'bar'),
    filterBy1: Ember.computed.filterBy('foo', 'bar'),
    filterBy2: Ember.computed.filterBy('foo', 'bar', false),
    gt: Ember.computed.gt('foo', 3),
    gte: Ember.computed.gte('foo', 3),
    intersect: Ember.computed.intersect('foo', 'bar', 'baz', 'qux'),
    lt: Ember.computed.lt('foo', 3),
    lte: Ember.computed.lte('foo', 3),
    map: Ember.computed.map('foo', (item, index) => item.bar),
    mapBy: Ember.computed.mapBy('foo', 'bar'),
    match: Ember.computed.match('foo', /^tom.ter$/),
    max: Ember.computed.max('foo'),
    min: Ember.computed.min('foo'),
    none: Ember.computed.none('foo'),
    not: Ember.computed.not('foo'),
    notEmpty: Ember.computed.notEmpty('foo'),
    oneWay: Ember.computed.oneWay('foo'),
    or: Ember.computed.or('foo', 'bar', 'baz', 'qux'),
    readOnly: Ember.computed.readOnly('foo'),
    reads: Ember.computed.reads('foo'),
    setDiff: Ember.computed.setDiff('foo', 'bar'),
    sort1: Ember.computed.sort('foo', 'bar'),
    sort2: Ember.computed.sort('foo', (itemA, itemB) => {
        if (itemA < itemB) {
            return -1;
        } else if (itemA > itemB) {
            return 1;
        } else {
            return 0;
        }
    }),
    sum: Ember.computed.sum('foo'),
    union: Ember.computed.union('foo', 'bar', 'baz', 'qux'),
    uniq: Ember.computed.uniq('foo'),
    uniqBy: Ember.computed.uniqBy('foo', 'bar')
});

const component2 = Component.extend({
    isAnimal: or('isDog', 'isCat')
}).create();

assertType<boolean>(component2.get('isAnimal'));
