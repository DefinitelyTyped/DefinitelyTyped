// Type definitions for @xmpp/events 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/events
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as events from 'events';

export const EventEmitter: typeof events.EventEmitter;
export type EventEmitter = events.EventEmitter;

export class TimeoutError extends Error {
    readonly name: 'TimeoutError';
}

export function delay(ms: number): Promise<void> & { timeout: NodeJS.Timeout | number };
export function timeout<TPromise extends PromiseLike<unknown>>(
    promise: TPromise,
    ms: number,
): TPromise extends PromiseLike<infer TValue> ? Promise<TValue> : never;
export function promise(
    emitter: EventEmitter,
    event: string | symbol,
    rejectEvent?: string | symbol | null,
    timeout?: number | null,
): Promise<unknown>;

export class Deferred<TValue> {
    readonly promise: Promise<TValue>;
    resolve(value: TValue | PromiseLike<TValue>): void;
    reject(reason?: any): void;
}
