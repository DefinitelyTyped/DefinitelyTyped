/// <reference types="node" />

import { EventEmitter } from "events";

/**
 * Returns the number of listeners for a given event on an EventEmitter.
 * Backwards-compatible polyfill for EventEmitter.listenerCount.
 *
 * @param emitter - The EventEmitter instance
 * @param event - The event name
 * @returns The number of listeners for the event
 *
 * @example
 * ```javascript
 * var listenerCount = require('listenercount');
 * var EventEmitter = require('events').EventEmitter;
 *
 * var ee = new EventEmitter();
 * ee.on('foo', function() {});
 * ee.on('foo', function() {});
 *
 * listenerCount(ee, 'foo'); // => 2
 * ```
 */
declare function listenerCount(emitter: EventEmitter, event: string | symbol): number;

export = listenerCount;
