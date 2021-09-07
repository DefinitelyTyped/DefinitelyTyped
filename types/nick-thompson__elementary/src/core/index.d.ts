import * as core from './core';
import { Core } from './api';

/**
 * The elementary.core object is an instance of Node.js' events.EventEmitter.
 * The events below will be dispatched from the native module and
 * can be subscribed to following the EventEmitter API.
 */
export { core, Core };
