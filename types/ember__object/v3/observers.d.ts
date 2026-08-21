import { ObserverMethod } from "@ember/object/-private/types";

/**
 * Adds an observer on a property.
 */
export function addObserver<Context, Target>(
    obj: Context,
    key: keyof Context,
    target: Target,
    method: ObserverMethod<Target, Context>,
): void;
export function addObserver<Context>(
    obj: Context,
    key: keyof Context,
    method: ObserverMethod<Context, Context>,
): void;
/**
 * Remove an observer you have previously registered on this object. Pass
 * the same key, target, and method you passed to `addObserver()` and your
 * target will no longer receive notifications.
 */
export function removeObserver<Context, Target>(
    obj: Context,
    key: keyof Context,
    target: Target,
    method: ObserverMethod<Target, Context>,
): any;
export function removeObserver<Context>(
    obj: Context,
    key: keyof Context,
    method: ObserverMethod<Context, Context>,
): any;
