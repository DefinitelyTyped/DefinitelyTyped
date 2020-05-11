import first = require('ee-first');
import { EventEmitter } from 'events';

class Foo extends EventEmitter {
    foo: 'foo';
}

class Bar extends EventEmitter {
    bar: 'bar';
}

const ee1 = new Foo();
const ee2 = new Bar();

const thunk = first<Foo | Bar>(
    [[ee1, 'close', 'end', 'error'], [ee2, 'error']],
    (err, ee, event, args) => {
        err; // $ExpectType any
        ee; // $ExpectType Foo | Bar
        event; // $ExpectType string[]
        args; // $ExpectType any[]
    }
);

thunk((err, ee, event, args) => {
    err; // $ExpectType any
    ee; // $ExpectType Foo | Bar
    event; // $ExpectType string[]
    args; // $ExpectType any[]
});

thunk.cancel();
