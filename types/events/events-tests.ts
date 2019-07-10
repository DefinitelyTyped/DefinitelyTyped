import { EventEmitter } from 'events';

const emitter = new EventEmitter();
const listener = () => {
  console.log('once');
};
const listener1 = () => {
  console.log('listener1');
};
const listener2 = () => {
  console.log('listener2');
};
const listener3 = (arg1: string) => {
  console.log('listener3', arg1);
};
const listener4 = () => {
  console.log('type of number');
};
const listener5 = () => {
  console.log('prepend listener');
};
const listener6 = () => {
  console.log('prepend once listener');
};

emitter.setMaxListeners(100);

emitter.addListener('send', listener1);

emitter.on('send', listener2);

emitter.on('send', listener3);

emitter.once('send', listener);

emitter.once(1, listener4);

emitter.prependListener('send', listener5);

emitter.prependOnceListener('send', listener6);

emitter.listeners('send');
emitter.listenerCount('send');
emitter.rawListeners('send');

EventEmitter.defaultMaxListeners = 100;
console.log(`count(static): ${EventEmitter.listenerCount(emitter, 'send')}`);
console.log(`ncount: ${emitter.listenerCount('send')}`);
console.log(`maxListeners: ${emitter.getMaxListeners()}`);
console.log(`eventNames: ${emitter.eventNames().join(', ')}`);
console.log(`rawListeners count: ${emitter.rawListeners('send').length}`);

setTimeout(() => {
  console.log('\n');
  emitter.emit('send');
}, 1000);

setTimeout(() => {
  console.log('\n');
  emitter.emit('send');
  emitter.removeListener('send', listener2);
}, 2000);

setTimeout(() => {
  console.log('\n');
  emitter.emit('send');
  emitter.off('send', listener3);
}, 2000);

setTimeout(() => {
  console.log('\n');
  emitter.emit('send', 'params1');
  emitter.removeAllListeners('send');
}, 3000);

setTimeout(() => {
  console.log('\n');
  emitter.emit('send', 'params1');
  emitter.removeAllListeners();
}, 3000);

setTimeout(() => {
  console.log('\n');
  emitter.emit(1);
  emitter.emit('send');
}, 3000);
