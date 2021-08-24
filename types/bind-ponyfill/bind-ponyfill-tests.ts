import ponyBind = require('bind-ponyfill');

let boundFn: Function;

boundFn = ponyBind(() => { console.log(this); }, 'Hello world!');
boundFn = ponyBind((...args: Array<string>) => { console.log(this, ...args); }, 'Hello world!', 'arg1');
boundFn = ponyBind((...args: Array<string>) => { console.log(this, ...args); }, 'Hello world!', 'arg1', 'arg2');
boundFn = ponyBind((arg1: string, arg2: number) => { console.log(this, arg1, arg2); }, 'Hello world!', 'arg1', 2);
