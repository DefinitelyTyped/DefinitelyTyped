import { ObserverMethod } from "@ember/object/-private/types";

/**
 * Add an event listener
 */
export function addListener<Context, Target>(
    obj: Context,
    key: keyof Context,
    target: Target,
    method: ObserverMethod<Target, Context>,
    once?: boolean,
): void;
export function addListener<Context>(
    obj: Context,
    key: keyof Context,
    method: ObserverMethod<Context, Context>,
): void;
/**
 * Remove an event listener
 */
export function removeListener<Context, Target>(
    obj: Context,
    key: keyof Context,
    target: Target,
    method: ObserverMethod<Target, Context>,
): any;
export function removeListener<Context>(
    obj: Context,
    key: keyof Context,
    method: ObserverMethod<Context, Context>,
): any;
/**
 * Send an event. The execution of suspended listeners
 * is skipped, and once listeners are removed. A listener without
 * a target is executed on the passed object. If an array of actions
 * is not passed, the actions stored on the passed object are invoked.
 */
export function sendEvent(
    obj: any,
    eventName: string,
    params?: any[],
    actions?: any[],
): boolean;
