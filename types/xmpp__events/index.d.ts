/// <reference types="node" />

import Connection from "@xmpp/connection";
import { Element } from "@xmpp/xml";
import * as events from "events";

export const EventEmitter: typeof events.EventEmitter;
export type EventEmitter = events.EventEmitter;

export class TimeoutError extends Error {
    readonly name: "TimeoutError";
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

export function procedure<T>(
    entity: Connection,
    stanza: Element | null | undefined,
    handler: (element: Element, done: (args: T) => void) => Promise<void>,
): Promise<T>;

export function tick(): Promise<void>;
