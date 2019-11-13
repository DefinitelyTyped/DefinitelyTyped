import assert = require('assert');
import { EventEmitter } from 'promise-events';

const testPromiseEvent = new EventEmitter();

assert.equal(typeof testPromiseEvent.on, 'function');
assert.equal(typeof testPromiseEvent.emit, 'function');
