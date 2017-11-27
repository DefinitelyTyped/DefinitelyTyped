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
const listener3 = (arg1: string, arg2: string, arg3: number) => {
  console.log('listener3');
};

emitter.setMaxListeners(100);

emitter.addListener('send', listener1);

emitter.on('send', listener2);

emitter.on('send', listener3);

emitter.once('send', listener);

emitter.listeners('send');
emitter.listenerCount('send');

EventEmitter.defaultMaxListeners = 100;
console.log(`count(static): ${EventEmitter.listenerCount(emitter, 'send')}`);

setTimeout(() => {
  console.log(`\ncount: ${emitter.listenerCount('send')}`);
  emitter.emit('send');
}, 1000);

setTimeout(() => {
  console.log(`\ncount: ${emitter.listenerCount('send')}`);
  emitter.emit('send');
  emitter.removeListener('send', listener2);
}, 2000);

setTimeout(() => {
  console.log(`\ncount: ${emitter.listenerCount('send')}`);
  emitter.emit('send');
  emitter.removeAllListeners('send');
}, 3000);

setTimeout(() => {
  console.log(`\ncount: ${emitter.listenerCount('send')}`);
  emitter.emit('send');
}, 3000);
