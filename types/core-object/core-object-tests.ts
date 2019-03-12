import { Mix, MethodNames } from 'core-object/-private/utils';
import CoreObject = require('core-object');

//////////// Mix ////////////

declare const mix1: Mix<{ a: number }, { b: string }>;
mix1.a; // $ExpectType number
mix1.b; // $ExpectType string

declare const mix2: Mix<{ a: number }, { a: string }>;
mix2.a; // $ExpectType string
mix2.b; // $ExpectError

//////////// MethodNames ////////////

declare const names1: MethodNames<{ a: string }>;
names1; // $ExpectType never

declare const names2: MethodNames<{ a: () => number; b(arg: number): void }>;
names2; // $ExpectType "a" | "b"

declare const names3: MethodNames<{ a: () => 'hi'; b: null }>;
names3; // $ExpectType "a"

//////////// ExtendOptions ////////////

const extendOptions1: CoreObject.ExtendOptions<{}> = { a: 1, b: 'hi' };
const extendOptions2: CoreObject.ExtendOptions<{ a: number }> = { b: 'hi' };
const extendOptions3: CoreObject.ExtendOptions<{ a: number }> = { a: 5 };
const extendOptions4: CoreObject.ExtendOptions<{ a: number }> = { a: 'hi' }; // $ExpectError

//////////// ExtendThisType ////////////

declare function extendThisType1<T>(options: T & CoreObject.ExtendThisType<{ prop: string; method: () => number }, T>): void;
extendThisType1({
    otherMethod() {
        this.prop; // $ExpectType string
        this.random; // $ExpectError

        this._super.method.call(this); // $ExpectType number
        this._super.random; // $ExpectError
    }
});

//////////// CoreObject ////////////

const A = CoreObject.extend({
    foo: 'hello',

    method(): string {
        return this.foo;
    }
});

const a = new A();
a.foo; // $ExpectType string
a.bar; // $ExpectError
a.method(); // $ExpectType string

const B = A.extend({
    bar: 123,

    other(): string {
        return this._super.method.call(this) + this.foo;
    }
});

const b = new B();
b.foo; // $ExpectType string
b.bar; // $ExpectType number
b.method(); // $ExpectType string
b.other(); // $ExpectType string

class ClassWithMethods extends CoreObject.extend({
    extendMethod(arg: number): string {
        return 'ok';
    }
}) {
    esMethod(arg: string): number {
        return 123;
    }
}

const ExtendSubclass = ClassWithMethods.extend({
    anotherMethod() {
        this._super.extendMethod(1); // $ExpectError
        this._super.esMethod('hi'); // $ExpectError

        this._super.extendMethod.call(this, 1); // $ExpectType string
        this._super.extendMethod.apply(this, [1]); // $ExpectType string

        this._super.esMethod.call(this, 'hi'); // $ExpectType number
        this._super.esMethod.apply(this, ['hi']); // $ExpectType number
    }
});

class ESSubclass extends ClassWithMethods {
    anotherMethod() {
        this._super; // $ExpectError

        super.extendMethod(1); // $ExpectType string
        super.esMethod('hi'); // $ExpectType number
    }
}

ClassWithMethods.extend({ extendMethod: null }); // $ExpectError
ClassWithMethods.extend({ extendMethod() {} }); // $ExpectError
ClassWithMethods.extend({ esMethod: null }); // $ExpectError
ClassWithMethods.extend({ esMethod() {} }); // $ExpectError

ClassWithMethods.extend({
    extendMethod(arg: number): string {
        const result = this._super.extendMethod.call(this, arg);
        result; // $ExpectType string
        return result;
    },

    esMethod(arg: string): number {
        const result = this._super.esMethod.call(this, arg);
        result; // $ExpectType number
        return result;
    }
});

declare class ClassWithManyMethods extends CoreObject {
    method0(): 0;
    method1(a: 'a'): 1;
    method2(a: 'a', b: 'b'): 2;
    method3(a: 'a', b: 'b', c: 'c'): 3;
    method4(a: 'a', b: 'b', c: 'c', d: 'd'): 4;
    method5(a: 'a', b: 'b', c: 'c', d: 'd', e: 'e'): 5;
}

ClassWithManyMethods.extend({
    child(): void {
        this._super.method0.call(this); // $ExpectType 0
        this._super.method0.apply(this, []); // $ExpectType 0

        this._super.method1.call(this, 'a'); // $ExpectType 1
        this._super.method1.apply(this, ['a']); // $ExpectType 1
        this._super.method1.call(this, 'x'); // $ExpectError
        this._super.method1.apply(this, ['x']); // $ExpectError

        this._super.method2.call(this, 'a', 'b'); // $ExpectType 2
        this._super.method2.apply(this, ['a', 'b']); // $ExpectType 2
        this._super.method2.call(this, 'a', 'x'); // $ExpectError
        this._super.method2.apply(this, ['a', 'x']); // $ExpectError

        this._super.method3.call(this, 'a', 'b', 'c'); // $ExpectType 3
        this._super.method3.apply(this, ['a', 'b', 'c']); // $ExpectType 3
        this._super.method3.call(this, 'a', 'b', 'x'); // $ExpectError
        this._super.method3.apply(this, ['a', 'b', 'x']); // $ExpectError

        this._super.method4.call(this, 'a', 'b', 'c', 'd'); // $ExpectType 4
        this._super.method4.apply(this, ['a', 'b', 'c', 'd']); // $ExpectType 4
        this._super.method4.call(this, 'a', 'b', 'c', 'x'); // $ExpectError
        this._super.method4.apply(this, ['a', 'b', 'c', 'x']); // $ExpectError

        // Arity 4 is as high as we go for arg checking
        this._super.method5.call(this, 'foo', 'bar', 'baz'); // $ExpectType 5
        this._super.method5.apply(this, ['foo', 'bar', 'baz']); // $ExpectType 5
    }
});
