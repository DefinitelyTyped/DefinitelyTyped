import { AnyFunction } from '@ember/object/-private/types';

/**
 * Add an event listener
 */
export function addListener<Context>(
    obj: Context,
    eventName: string,
    target: unknown,
    method: keyof Context | AnyFunction,
    once?: boolean
): void;
export function addListener<Context>(
    obj: Context,
    eventName: string,
    method: keyof Context | AnyFunction,
    once?: boolean
): void;

/**
 * Remove an event listener
 */
export function removeListener<Context>(
    obj: Context,
    eventName: string,
    target: unknown,
    method: keyof Context | AnyFunction
): void;
export function removeListener<Context>(
    obj: Context,
    eventName: string,
    method: keyof Context | AnyFunction
): void;

/**
 * Send an event. The execution of suspended listeners
 * is skipped, and once listeners are removed. A listener without
 * a target is executed on the passed object. If an array of actions
 * is not passed, the actions stored on the passed object are invoked.
 *
 * @param eventName
 * @param params Optional parameters for each listener.
 * @returns if the event was delivered to one or more actions
 */
export function sendEvent(
    obj: unknown,
    eventName: string,
    params?: unknown[],
): boolean;
