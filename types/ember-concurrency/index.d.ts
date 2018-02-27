// Type definitions for ember-concurrency 0.8
// Project: https://github.com/machty/ember-concurrency#readme
// Definitions by: Arnav Gupta <https://github.com/championswimmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import Evented from '@ember/object/evented';
import RSVP from 'rsvp';
import { Task, TaskProperty, TaskInstance } from './Task';

export { Task, TaskProperty, TaskInstance };
export const all: typeof RSVP.all;
export const allSettled: typeof RSVP.allSettled;
export const hash: typeof RSVP.hash;
export const race: typeof RSVP.race;

/**
 * Returns true if the object passed to it is a
 * TaskCancelation error. If you call someTask.perform().catch(...)
 * or otherwise treat a TaskInstance like a promise, you may need
 * to handle the cancelation of a TaskInstance differently from
 * other kinds of errors it might throw, and you can use this
 * convenience function to distinguish cancelation from errors.
 *
 * @param {Error} error
 * @returns {boolean}
 */
export function didCancel(error?: Error): boolean;
export function task(generatorFunction: (...args: any[]) => Generator): TaskProperty;
export function taskGroup(...args: any[]): any;
export function timeout(ms: number): any;
export function waitForEvent(object: Evented | RSVP.EventTarget | EventTarget, eventName: string): any;
export function waitForProperty(object: any, key: string, callback: (...args: any[]) => any): any;
export function waitForQueue(queueName: string): any;
