import Ember from 'ember';
import { assertType } from './lib/assert';

/** Newable tests */
const co1 = new Ember.CoreObject();

// TODO: Enable in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
// co1.concatenatedProperties; // $ExpectType string[]
co1.isDestroyed; // $ExpectType boolean
co1.isDestroying; // $ExpectType boolean
co1.destroy(); // $ExpectType CoreObject
co1.toString(); // $ExpectType string

/** .create tests */
const co2 = Ember.CoreObject.create();
// TODO: Enable in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
// co2.concatenatedProperties; // $ExpectType string[]
co2.isDestroyed; // $ExpectType boolean
co2.isDestroying; // $ExpectType boolean
co2.destroy(); // $ExpectType CoreObject
co2.toString(); // $ExpectType string

/** .create tests w/ initial instance data passed in */
const co3 = Ember.CoreObject.create({ foo: '123', bar: 456 });

co3.foo; // $ExpectType string
co3.bar; // $ExpectType number

/** .extend with a zero-argument .create()  */
const co4 = Ember.CoreObject.extend({
    foo: '123',
    bar: 456,
    baz(): [string, number] {
        return [this.foo, this.bar];
    },
}).create();

co4.foo; // $ExpectType string
co4.bar; // $ExpectType number
co4.baz; // $ExpectType () => [string, number]

/** .extend with inconsistent arguments passed into .create()  */
const class05 = Ember.CoreObject.extend({
    foo: '123' as string | boolean,
    bar: 456,
    baz() {
        return [this.foo, this.bar];
    },
});
// @ts-expect-error
const c05 = class05.create({ foo: 99 });
const c05b = class05.create({ foo: true });
const c05c = class05.create({ foo: 'abc' });
// @ts-expect-error
assertType<string>(c05b.foo);
// @ts-expect-error
assertType<boolean>(c05c.foo);

/** two .extend arguments with a zero-argument .create() */
const co6 = Ember.CoreObject.extend(
    {
        foo: '123',
        bar: 456,
        baz() {
            return [this.foo, this.bar];
        },
        func1() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.foo; // $ExpectType string
            // this does not include stuff from later extend args
            // @ts-expect-error
            this.bee;
        },
    },
    {
        foo: 99,
        bee: 'honey',
        func2() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            // TODO: switch to "$ExpectType number" in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
            this.foo;
            // this includes stuff from earlier extend-args
            this.bar; // $ExpectType number
        },
    },
).create();

// TODO: enable in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
// assertType<string>(co6.foo); // @ts-expect-error
assertType<number>(co6.bar); // $ExpectType number
assertType<() => Array<string | number>>(co6.baz); // $ExpectType () => (string | number)[]

/** three .extend arguments with a zero-argument .create() */
const co7 = Ember.CoreObject.extend(
    {
        foo: '123',
        bar: 456,
        baz() {
            return [this.foo, this.bar];
        },
        func1() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.foo; // $ExpectType string
            // this does not include stuff from later extend args
            // @ts-expect-error
            this.bee;
        },
    },
    {
        foo: 99,
        bee: 'honey',
        func2() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            // TODO: switch to "$ExpectType number" in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
            this.foo;
            // this includes stuff from earlier extend-args
            this.bar; // $ExpectType number
        },
    },
    {
        foo: '99',
        money: 'in the banana stand',
        func3() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.money; // $ExpectType string
            // this includes stuff from earlier extend-args
            this.bee; // $ExpectType string
            this.bar; // $ExpectType number
        },
    },
).create();
// TODO: enable in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
// assertType<number>(co7.foo); // @ts-expect-error
assertType<number>(co7.bar); // $ExpectType number
assertType<string>(co7.money); // $ExpectType string
assertType<() => Array<string | number>>(co7.baz); // $ExpectType () => (string | number)[]

/** four .extend arguments with a zero-argument .create() */
const co8 = Ember.CoreObject.extend(
    {
        foo: '123',
        bar: 456,
        baz() {
            return [this.foo, this.bar];
        },
        func1() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.foo; // $ExpectType string
            // this does not include stuff from later extend args
            // @ts-expect-error
            this.bee;
        },
    },
    {
        foo: 99,
        bee: 'honey',
        func2() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            // TODO: switch to "$ExpectType number" in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
            this.foo;
            // this includes stuff from earlier extend-args
            this.bar; // $ExpectType number
            // this does not include stuff from later extend args
            // @ts-expect-error
            this.money;
        },
    },
    {
        foo: '99',
        money: 'in the banana stand',
        func3() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.money; // $ExpectType string
            // this includes stuff from earlier extend-args
            this.bee; // $ExpectType string
            this.bar; // $ExpectType number
            // this does not include stuff from later extend args
            // @ts-expect-error
            this.neighborhood;
        },
    },
    {
        foo: '99',
        neighborhood: 'sudden valley',
        func4() {
            // this includes stuff from CoreObject
            this.init; // $ExpectType () => void
            // this includes stuff from this extend-arg
            this.neighborhood; // $ExpectType string
            // this includes stuff from earlier extend-args
            this.bee; // $ExpectType string
            this.bar; // $ExpectType number
            this.money; // $ExpectType string
        },
    },
).create();

// TODO: enable in TS 3.0  see: https://github.com/typed-ember/ember-cli-typescript/issues/291
// assertType<number>(co8.foo); // @ts-expect-error
assertType<number>(co8.bar); // $ExpectType number
assertType<string>(co8.money); // $ExpectType string
assertType<() => Array<string | number>>(co8.baz); // $ExpectType () => (string | number)[]
