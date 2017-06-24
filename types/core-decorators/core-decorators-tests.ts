//
// @autobind
//

import { autobind } from 'core-decorators';

@autobind
class Person {
    @autobind
    getPerson() {
        return this;
    }

    getPersonAgain() {
        return this;
    }
}

const person = new Person();
const { getPerson, getPersonAgain } = person;

getPerson() === person;

getPersonAgain() === person;

//
// @readonly
//

import { readonly } from 'core-decorators';

class Meal {
    @readonly
    entree: string = 'steak';
}

const dinner = new Meal();
dinner.entree = 'salmon';

//
// @override
//

import { override } from 'core-decorators';

class Parent {
    speak(first: string, second: string) {}
}

class Child extends Parent {
    @override
    speak() {}
    // SyntaxError: Child#speak() does not properly override Parent#speak(first, second)
}

// or

class Child2 extends Parent {
    @override
    speaks() {}
    // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.
    //
    //   Did you mean "speak"?
}

//
// @deprecate (alias: @deprecated)
//

import { deprecate, deprecated } from 'core-decorators';

class Person2 {
    @deprecate
    facepalm() {}

    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @deprecate('We stopped facepalming', { url: 'http://knowyourmeme.com/memes/facepalm' })
    facepalmHarder() {}
}

const person2 = new Person2();

person2.facepalm();
// DEPRECATION Person#facepalm: This function will be removed in future versions.

person2.facepalmHard();
// DEPRECATION Person#facepalmHard: We stopped facepalming

person2.facepalmHarder();
// DEPRECATION Person#facepalmHarder: We stopped facepalming
//
//     See http://knowyourmeme.com/memes/facepalm for more details.
//

//
// @debounce
//

import { debounce } from 'core-decorators';

class Editor {
    content = '';

    @debounce(500)
    updateContent(content: string) {
        this.content = content;
    }
}

//
// @throttle
//

import { throttle } from 'core-decorators';

class Editor2 {
    content = '';

    @throttle(500, {leading: false})
    updateContent(content: string) {
        this.content = content;
    }
}

//
// @suppressWarnings
//

import { suppressWarnings } from 'core-decorators';

class Person3 {
    @deprecated
    facepalm() {}

    @suppressWarnings
    facepalmWithoutWarning() {
        this.facepalm();
    }
}

const person3 = new Person3();

person3.facepalmWithoutWarning();
// no warning is logged

//
// @nonenumerable
//

import { nonenumerable } from 'core-decorators';

class Meal2 {
    entree = 'steak';

    @nonenumerable
    cost: number = 4.44;
}

const dinner2 = new Meal2();
for (const key in dinner2) {
    key;
    // "entree" only, not "cost"
}

Object.keys(dinner2);
// ["entree"]

//
// @nonconfigurable
//

import { nonconfigurable } from 'core-decorators';

class Meal3 {
    @nonconfigurable
    entree: string = 'steak';
}

const dinner3 = new Meal3();

Object.defineProperty(dinner3, 'entree', {
    enumerable: false
});
// Cannot redefine property: entree

//
// @decorate
//

declare function memoize<T extends Function>(func: T): T;
import { decorate } from 'core-decorators';

let count = 0;

class Task {
    @decorate(memoize)
    doSomethingExpensive(data: any) {
        count++;
        // something expensive;
        return data;
    }
}

const task = new Task();
const data = [1, 2, 3];

task.doSomethingExpensive(data);
task.doSomethingExpensive(data);

count === 1;
// true

//
// @lazyInitialize
//

import { lazyInitialize } from 'core-decorators';

function createHugeBuffer() {
    console.log('huge buffer created');
    return new Array(1000000);
}

class Editor3 {
    @lazyInitialize
    hugeBuffer = createHugeBuffer();
}

const editor = new Editor3();
// createHugeBuffer() has not been called yet

editor.hugeBuffer;
// logs 'huge buffer created', now it has been called

editor.hugeBuffer;
// already initialized and equals our buffer, so
// createHugeBuffer() is not called again

// TODO: For @mixin, I don't know how we can make it work for TypeScript...
//
// @mixin (alias: @mixins)
//

import { mixin } from 'core-decorators';

const SingerMixin = {
    sing(sound: string) {
        alert(sound);
    }
};

const FlyMixin = {
    // All types of property descriptors are supported
    get speed(): number { return 42; },
    fly() {},
    land() {}
};

@mixin(SingerMixin, FlyMixin)
class Bird {
    singMatingCall() {
        // TODO: For @mixin, I don't know how we can make it work for TypeScript...
        // this.sing('tweet tweet');
    }
}

const bird = new Bird();
bird.singMatingCall();
// alerts "tweet tweet"

//
// @time
//

import { time } from 'core-decorators';

const myConsole = {
    time(label: string) { /* custom time() method */ },
    timeEnd(label: string) { /* custom timeEnd method */ },
    log(str: any) { /* custom log method */ }
};

class Bird2 {
    @time('sing')
    sing() {}

    @time('sing2', myConsole)
    sing2() {}
}

const bird2 = new Bird2();
bird2.sing(); // console.time label will be 'sing-0'
bird2.sing(); // console.time label will be 'sing-1'
