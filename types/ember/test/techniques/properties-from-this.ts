/**
 * These tests validate that the method of pulling property types off of this
 * continues to work. We use this technique in the critical Observable interface
 * that serves to implement a lot of Ember.CoreObject's functionality
 */

class BoxedProperty<Get, Set = Get> {
    __getType: Get;
    __setType: Set;
}

type UnboxGetProperty<T> = T extends BoxedProperty<infer V, any> ? V : T;
type UnboxSetProperty<T> = T extends BoxedProperty<any, infer V> ? V : T;

class GetAndSet {
    get<K extends keyof this>(key: K): UnboxGetProperty<this[K]> {
        return this[key] as any;
    }
    set<K extends keyof this>(key: K, newVal: UnboxSetProperty<this[K]>): UnboxSetProperty<this[K]> {
        const rawVal: UnboxSetProperty<this[K]> = this[key] as any;
        if (rawVal instanceof BoxedProperty) {
            rawVal.__setType = newVal;
        }
        this[key] = newVal as any;
        return newVal;
    }
}

class Foo123 extends GetAndSet {
    // tslint:disable-next-line:no-inferrable-types
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
f.set('a'); // $ExpectError
f.set('a', '1'); // $ExpectError
f.set('a', 1); // $ExpectType number

f.get('b'); // $ExpectType [boolean, boolean]
f.set('b', 1); // $ExpectError
f.set('b', []); // $ExpectError
f.set('b', [true]); // $ExpectError
f.set('b', [false, true]); // $ExpectType [boolean, boolean]
f.set('b', [false, true, false]); // $ExpectError

f.get('c'); // $ExpectType string
f.set('c', '1'); // $ExpectType string

f.get('cpA'); // $ExpectType string
f.set('cpA', ['newValue']); // $ExpectError
f.set('cpA', 'newValue'); // $ExpectType string
