/**
 * These tests validate that the method of pulling property types off of this
 * continues to work. We use this technique in the critical Observable interface
 * that serves to implement a lot of Ember.CoreObject's functionality
 */

class BoxedProperty<Get, Set = Get> {
    declare private [GetType]: Get;
    declare private [SetType]: Set;
}

declare const GetType: unique symbol;
declare const SetType: unique symbol;

type UnboxGetProperty<T> = T extends BoxedProperty<infer V, unknown> ? V : T;
type UnboxSetProperty<T> = T extends BoxedProperty<unknown, infer V> ? V : T;

class GetAndSet {
    get<K extends keyof this>(key: K): UnboxGetProperty<this[K]> {
        return this[key] as UnboxGetProperty<this[K]>;
    }
    set<K extends keyof this>(key: K, newVal: UnboxSetProperty<this[K]>): UnboxSetProperty<this[K]> {
        const rawVal = this[key];
        if (rawVal instanceof BoxedProperty) {
            rawVal[SetType] = newVal;
        }
        this[key] = newVal as this[K];
        return newVal;
    }
}

class Foo123 extends GetAndSet {
    a: number;
    b: [boolean, boolean];
    c: string;
    cpA!: BoxedProperty<string>;
    constructor() {
        super();
        this.a = 1;
        this.b = [true, false];
        this.c = 'hello';
    }
}

let f = new Foo123();

f.get('a'); // $ExpectType number
// @ts-expect-error
f.set('a');
// @ts-expect-error
f.set('a', '1');
f.set('a', 1); // $ExpectType number

f.get('b'); // $ExpectType [boolean, boolean]
// @ts-expect-error
f.set('b', 1);
// @ts-expect-error
f.set('b', []);
// @ts-expect-error
f.set('b', [true]);
f.set('b', [false, true]); // $ExpectType [boolean, boolean]
// @ts-expect-error
f.set('b', [false, true, false]);

f.get('c'); // $ExpectType string
f.set('c', '1'); // $ExpectType string

f.get('cpA'); // $ExpectType string
// @ts-expect-error
f.set('cpA', ['newValue']);
f.set('cpA', 'newValue'); // $ExpectType string
