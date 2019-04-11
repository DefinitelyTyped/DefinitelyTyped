import NanoEvents = require('nanoevents');
import unbindAll = require('nanoevents/unbind-all');

const emitter = new NanoEvents<{foo: {foo: string}, bar: {bar: string}}>();
const unbind = emitter.on('foo', action => action.foo);
emitter.emit('bar', {bar: 'test'});
unbind();
unbindAll(emitter);
