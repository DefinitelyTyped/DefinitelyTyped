

import hooker = require('hooker');

// Type definitions for JavaScript Hooker v0.2.3
// Project: https://github.com/cowboy/javascript-hooker
// Definitions by: Michael Zabka <https://github.com/misak113/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
function tests() {
    var objectToHook: any = {
        hello: 'world'
    };
    hooker.hook(objectToHook, 'hello', () => { });
    hooker.hook(objectToHook, 'hello', (): any => {
        return null;
    });
    hooker.hook(objectToHook, ['hello', 'foo'], () => { });
    hooker.hook(objectToHook, ['hello', 'bar'], (): any => {
        return null;
    });
    hooker.hook(objectToHook, 'bar', () => {
        return hooker.filter(this, ['foo', 'bar']);
    });
    hooker.hook(objectToHook, 'bar', () => {
        return hooker.override('good');
    });
    hooker.hook(objectToHook, 'bar', () => {
        return hooker.preempt('good');
    });
    hooker.orig(objectToHook, 'hello');
    hooker.orig(objectToHook, ['hello', 'foo']);
    hooker.hook(objectToHook, 'foo', {
        pre: () => { }
    });
    hooker.hook(objectToHook, 'foo', {
        pre: () => {
            return hooker.preempt(1);
        }
    });
    hooker.hook(objectToHook, 'foo', {
        pre: () => {
            return hooker.override(1);
        }
    });
    hooker.hook(objectToHook, 'foo', {
        pre: () => {
            return hooker.filter(1, ['abc']);
        }
    });
    hooker.hook(objectToHook, 'foo', {
        post: () => { }
    });
    hooker.hook(objectToHook, 'foo', {
        post: () => {
            return hooker.filter(1, ['abc']);
        }
    });
    hooker.hook(objectToHook, 'foo', {
        once: false
    });
    hooker.hook(objectToHook, 'foo', {
        passName: true
    });
    hooker.hook(objectToHook, 'foo', {
        pre: () => { },
        post: () => {
            return hooker.filter(this, []);
        },
        once: true,
        passName: false
    });
}
