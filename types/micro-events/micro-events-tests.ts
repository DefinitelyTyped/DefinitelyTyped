import * as EventEmitter from "micro-events";

const myEventEmitter = new EventEmitter();

myEventEmitter.maxListeners; // $ExpectType number

const listener = (first: string) => {};

myEventEmitter.on('foo', listener); // $ExpectType MicroEventEmitter

myEventEmitter.emit('foo', 'bar'); // $ExpectType MicroEventEmitter

myEventEmitter.off('foo', listener); // $ExpectType MicroEventEmitter
