//
// With Arguments
//

import { after, debounce, memoize, curry } from 'lodash-decorators';

class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @after(3)
    @debounce(100)
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @curry(2)
    @memoize()
    doSomeHeavyProcessing(arg1: any, arg2: any) {
    }
}

//
// Without Arguments
//

import { tap } from 'lodash-decorators';

class Person2 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @once
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @tap
    popIt(list: number[]): void {
        list.pop();
    }
}

const person2 = new Person2();

person2.popIt([1, 2, 3]); // => [1, 2]

//
// Partials
//

import { partial, wrap } from 'lodash-decorators';

class Person3 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(type: string) {
        return type === 'firstName' ? this.firstName : this.lastName;
    }

    @partial('getName', 'firstName')
    getFirstName(): string { return null; }

    @partial('getName', null)
    getLastName(): string { return null; }

    @wrap('getName')
    getUpperCaseName(fn: () => string): string {
        return fn().toUpperCase();
    }
}

// by .d.ts author: a workaround to ensure type
interface Person3Ex extends Person3 {
    getUpperCaseName(): string;
}

const person3 = new Person3('Joe', 'Smith') as Person3Ex;

person3.getFirstName(); // 'Joe'
person3.getLastName(); // 'Smith'
person3.getUpperCaseName(); // JOE SMITH

//
// Composition
//
import * as _ from 'lodash';

class Person4 {
    firstName: string;
    lastName: string;
    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @flow(_.kebabCase, 'getName')
    logName(name: string): void {
        console.log(name);
    }
}

// by .d.ts author: a workaround to ensure type
interface Person4Ex extends Person4 {
    logName(): void;
}

const person4 = new Person4('Joe', 'Smith') as Person4Ex;

person4.logName(); // joe-smith

//
// Instance Decorators
//

class Person5 {
    @curry(2) // <= prototype decorator
    @debounce(100) // <= instance decorator
    getName() { } // => Throws an error. (╯°□°）╯︵ ┻━┻

    @debounce(100) // <= instance decorator
    @curry(2) // <= prototype decorator
    getName2() { } // => All is well :)
}

//
// Getters and Setters
//

import { once, flow } from 'lodash-decorators';

function alwaysArray(value: string | string[]): string[] {
    return Array.isArray(value) ? value : _.isUndefined(value) ? [] : [value];
}

class Person6 {
    constructor() { }
    private nameList: string[];

    // TODO: So far, TypeScript doesn't allow to put multiple decoratoes on set/get accessors.
    // see https://github.com/Microsoft/TypeScript/issues/2249#issuecomment-141684146
    // @once.get
    get names(): string[] {
        // MEMO: Resolve type inconsistency
        return [this.nameList.join(' ')];
        // MEMO: Original expression in repo
        // return this.nameList.join(' ');
    }

    @flow.set(alwaysArray)
    set names(names: string[]) {
        this.nameList = names;
    }
}

// by .d.ts author: a workaround to ensure type
interface Person6Alt {
    names: string[] | string;
}

const person6 = new Person6();

// nameList will always be an array.
person6.names = undefined; // => []
(person6 as Person6Alt).names = 'Joe'; // => ['Joe']
person6.names = ['Jim']; // => ['Jim']

//
// Bind
//

import { bind } from 'lodash-decorators';

class Person7 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @bind()
    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // It can also function as a partial
    @bind('Joe')
    getUpperCaseName(name: string): string {
        return name.toUpperCase();
    }
}

// by .d.ts author: a workaround to ensure type
interface Person7Ex extends Person7 {
    getUpperCaseName(): string;
}

const person7 = new Person7('Joe', 'Smith') as Person7Ex;

person7.getName.call(null); // Joe Smith
person7.getUpperCaseName(); // JOE

import { bindAll } from 'lodash-decorators';

@bindAll()
class Person8 {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person8 = new Person8('Joe', 'Smith');

person8.getName.call(null); // Joe Smith

//
// Forcing Decorator on Prototype
//

import { throttle } from 'lodash-decorators';

class Person9 {
    @throttle(1000)
    doStuff() { }

    @throttle.proto(1000)
    doStuffMore() { }
}

const person9_1 = new Person9();
const person9_2 = new Person9();

person9_1.doStuff(); // => Both are called
person9_2.doStuff();

person9_1.doStuffMore();
person9_2.doStuffMore();

// Only one of these methods is actual invoked because throttle is applied to the prototype method
// and not the instance method.

//
// Extensions
//

import { deprecated } from 'lodash-decorators/extensions';

// This is applied globally.
deprecated.methodAction = fn => console.log(`Don't use ${fn.name}!`);

@deprecated
class Person10 {
    constructor() { }
}

class OtherPerson {
    @deprecated
    fn() { }
}

const person10 = new Person10(); // => Warning!

const otherPerson = new OtherPerson();
otherPerson.fn(); // => Don't use fn!

//
// https://github.com/steelsojka/lodash-decorators/tree/master/src/extensions
//

import { Writable, ReturnsArg } from 'lodash-decorators/extensions';

class Person11 {
    constructor() { }

    @Writable(false)
    getName() { }

    @ReturnsArg(1)
    doSomething(x: any, y: any, z: any) {
        // Do something here
    }
}

//
// https://github.com/steelsojka/lodash-decorators/tree/master/src/validate
//

import { Validate } from 'lodash-decorators/validate';

class Person12 {
    name: string;
    constructor() { }

    @Validate(_.isString)
    setName(name: any) {
        this.name = name as string;
    }
}

class Person13 {
    name: string;
    age: number;
    constructor() { }

    @Validate(
        _.isString,
        [_.isNumber, _.partial(_.lt, 10) as ((_: any) => boolean)]
    )
    setData(name: any, age: any) {
        this.name = name as string;
        this.age = age as number;
    }
}

const person13 = new Person13();

person13.setData('test', 5); // => TypeError
person13.setData('test', 12); // => Valid

//
// Additional typings
//

import { validateReturn } from 'lodash-decorators/validate';

class Calc {
    @validateReturn((c: number) => c > 0)
    add(a: number, b: number): number {
        return a + b;
    }

    @validateReturn<number>([c => c > 0])
    mul(a: number, b: number): number {
        return a + b;
    }
}
