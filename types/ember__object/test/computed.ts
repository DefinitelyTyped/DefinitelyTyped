import EmberObject, { computed } from '@ember/object';
import ComputedProperty, {
    alias,
    or,
    and,
    filter,
    equal,
    empty,
    filterBy,
    notEmpty,
    none,
    not,
    min,
    max,
    gt,
    gte,
    lt,
    lte,
    readOnly,
    reads,
    setDiff,
    sort,
    intersect,
    mapBy,
    match,
    map,
    oneWay,
    sum,
    union,
    uniqBy,
    uniq,
    deprecatingAlias,
    bool,
    collect,
} from '@ember/object/computed';
import { assertType } from './lib/assert';

const Person = EmberObject.extend({
    firstName: '',
    lastName: '',
    age: 0,

    noArgs: computed<string>(() => 'test'),

    fullName: computed<string>('firstName', 'lastName', function () {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),

    fullNameReadonly: computed<string>('fullName', function () {
        return this.get('fullName');
    }).readOnly(),

    fullNameWritable: computed<string>('firstName', 'lastName', {
        get() {
            return this.get('fullName');
        },
        set(key, value) {
            const [first, last] = value.split(' ');
            this.set('firstName', first);
            this.set('lastName', last);
            return value;
        },
    }),

    fullNameGetOnly: computed<string>('fullName', {
        get() {
            return this.get('fullName');
        },
    }),

    fullNameSetOnly: computed<string>('firstName', 'lastName', {
        set(key, value) {
            const [first, last] = value.split(' ');
            this.set('firstName', first);
            this.set('lastName', last);
            return value;
        },
    }),

    combinators: computed<string>(function () {
        return this.get('firstName');
    })
        .property('firstName')
        .meta({ foo: 'bar' })
        .volatile()
        .readOnly(),

    explicitlyDeclared: alias('fullName') as ComputedProperty<string>,
});

const person = Person.create({
    firstName: 'Fred',
    lastName: 'Smith',
    age: 29,
});

assertType<string>(person.firstName);
assertType<number>(person.age);
assertType<ComputedProperty<string>>(person.noArgs);
assertType<ComputedProperty<string>>(person.fullName);
assertType<ComputedProperty<string>>(person.fullNameReadonly);
assertType<ComputedProperty<string>>(person.fullNameWritable);
assertType<ComputedProperty<string>>(person.fullNameGetOnly);
assertType<ComputedProperty<string>>(person.fullNameSetOnly);
assertType<ComputedProperty<string>>(person.combinators);
assertType<ComputedProperty<string>>(person.explicitlyDeclared);

assertType<string>(person.get('firstName'));
assertType<number>(person.get('age'));
assertType<string>(person.get('noArgs'));
assertType<string>(person.get('fullName'));
assertType<string>(person.get('fullNameReadonly'));
assertType<string>(person.get('fullNameWritable'));
assertType<string>(person.get('fullNameGetOnly'));
assertType<string>(person.get('fullNameSetOnly'));
assertType<string>(person.get('combinators'));
assertType<string>(person.get('explicitlyDeclared'));

assertType<{ firstName: string; fullName: string; age: number }>(person.getProperties('firstName', 'fullName', 'age'));

const person2 = Person.create({
    fullName: 'Fred Smith',
});

assertType<string>(person2.get('firstName'));
assertType<string>(person2.get('fullName'));

const person3 = Person.extend({
    firstName: 'Fred',
    fullName: 'Fred Smith',
}).create();

assertType<string>(person3.get('firstName'));
assertType<string>(person3.get('fullName'));

const person4 = Person.extend({
    firstName: computed(() => 'Fred'),
    fullName: computed(() => 'Fred Smith'),
}).create();

assertType<string>(person4.get('firstName'));
assertType<string>(person4.get('fullName'));

// computed property macros
const objectWithComputedProperties = EmberObject.extend({
    alias: alias('foo'),
    and: and('foo', 'bar', 'baz', 'qux'),
    bool: bool('foo'),
    collect: collect('foo', 'bar', 'baz', 'qux'),
    deprecatingAlias: deprecatingAlias('foo', {
        id: 'hamster.deprecate-banana',
        until: '3.0.0',
    }),
    empty: empty('foo'),
    equalNumber: equal('foo', 1),
    equalString: equal('foo', 'bar'),
    equalObject: equal('foo', {}),
    filter1: filter('foo', item => item === 'bar'),
    filter2: filter('foo', ['bar', 'baz'], item => item === 'bar'),
    filterBy1: filterBy('foo', 'bar'),
    filterBy2: filterBy('foo', 'bar', false),
    gt: gt('foo', 3),
    gte: gte('foo', 3),
    intersect: intersect('foo', 'bar', 'baz', 'qux'),
    lt: lt('foo', 3),
    lte: lte('foo', 3),
    map: map('foo', (item, index) => item),
    mapBy: mapBy('foo', 'bar'),
    match: match('foo', /^tom.ter$/),
    max: max('foo'),
    min: min('foo'),
    none: none('foo'),
    not: not('foo'),
    notEmpty: notEmpty('foo'),
    oneWay: oneWay('foo'),
    or: or('foo', 'bar', 'baz', 'qux'),
    readOnly: readOnly('foo'),
    reads: reads('foo'),
    setDiff: setDiff('foo', 'bar'),
    sort1: sort('foo', 'bar'),
    sort2: sort('foo', (itemA, itemB) => {
      return `${itemA}`.length - `${itemB}`.length;
    }),
    sort3: sort('foo', ['bar', 'baz'], (itemA, itemB) => {
      return `${itemA}`.length - `${itemB}`.length;
    }),

    sum: sum('foo'),
    union: union('foo', 'bar', 'baz', 'qux'),
    uniq: uniq('foo'),
    uniqBy: uniqBy('foo', 'bar'),
}).create();

assertType<unknown>(objectWithComputedProperties.get('alias'));
assertType<unknown>(objectWithComputedProperties.get('and'));
assertType<boolean>(objectWithComputedProperties.get('bool'));
assertType<unknown[]>(objectWithComputedProperties.get('collect'));
assertType<unknown>(objectWithComputedProperties.get('deprecatingAlias'));
assertType<boolean>(objectWithComputedProperties.get('empty'));
assertType<boolean>(objectWithComputedProperties.get('equalNumber'));
assertType<boolean>(objectWithComputedProperties.get('equalString'));
assertType<boolean>(objectWithComputedProperties.get('equalObject'));
assertType<unknown[]>(objectWithComputedProperties.get('filter1'));
assertType<unknown[]>(objectWithComputedProperties.get('filter2'));
assertType<unknown[]>(objectWithComputedProperties.get('filterBy1'));
assertType<unknown[]>(objectWithComputedProperties.get('filterBy2'));
assertType<boolean>(objectWithComputedProperties.get('gt'));
assertType<boolean>(objectWithComputedProperties.get('gte'));
assertType<unknown[]>(objectWithComputedProperties.get('intersect'));
assertType<boolean>(objectWithComputedProperties.get('lt'));
assertType<boolean>(objectWithComputedProperties.get('lte'));
assertType<unknown[]>(objectWithComputedProperties.get('map'));
assertType<unknown[]>(objectWithComputedProperties.get('mapBy'));
assertType<boolean>(objectWithComputedProperties.get('match'));
assertType<number>(objectWithComputedProperties.get('max'));
assertType<number>(objectWithComputedProperties.get('min'));
assertType<boolean>(objectWithComputedProperties.get('none'));
assertType<boolean>(objectWithComputedProperties.get('not'));
assertType<boolean>(objectWithComputedProperties.get('notEmpty'));
assertType<unknown>(objectWithComputedProperties.get('oneWay'));
assertType<unknown>(objectWithComputedProperties.get('or'));
assertType<unknown>(objectWithComputedProperties.get('readOnly'));
assertType<unknown>(objectWithComputedProperties.get('reads'));
assertType<unknown[]>(objectWithComputedProperties.get('setDiff'));
assertType<unknown[]>(objectWithComputedProperties.get('sort1'));
assertType<unknown[]>(objectWithComputedProperties.get('sort2'));
assertType<unknown[]>(objectWithComputedProperties.get('sort3'));
assertType<number>(objectWithComputedProperties.get('sum'));
assertType<unknown[]>(objectWithComputedProperties.get('union'));
assertType<unknown[]>(objectWithComputedProperties.get('uniq'));
assertType<unknown[]>(objectWithComputedProperties.get('uniqBy'));
