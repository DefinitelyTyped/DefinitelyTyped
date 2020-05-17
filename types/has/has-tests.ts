/// <reference types="node"/>
import assert = require('assert');
import hasOwnProperty = require('has');

assert.strictEqual(hasOwnProperty(Object.prototype, 'hasOwnProperty'), true);
assert.strictEqual(hasOwnProperty({}, 'hasOwnProperty'), false);
