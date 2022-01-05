// Type definitions for sweet-pubsub 1.1
// Project: https://github.com/oldboyxx/sweet-pubsub
// Definitions by: Emilio Escobar <https://github.com/emilioivan12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function on<CBFn extends (...args: any[]) => unknown>(
    topic: string,
    unsubscribeLabel: string,
    callback: CBFn,
    priority?: number,
): CBFn;
export function on<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;

export function sub<CBFn extends (...args: any[]) => unknown>(
    topic: string,
    unsubscribeLabel: string,
    callback: CBFn,
    priority?: number,
): CBFn;
export function sub<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;

export function once<CBFn extends (...args: any[]) => unknown>(
    topic: string,
    unsubscribeLabel: string,
    callback: CBFn,
    priority?: number,
): CBFn;
export function once<CBFn extends (...args: any[]) => unknown>(topic: string, callback: CBFn, priority?: number): CBFn;

export function subOnce<CBFn extends (...args: any[]) => unknown>(
    topic: string,
    unsubscribeLabel: string,
    callback: CBFn,
    priority?: number,
): CBFn;
export function subOnce<CBFn extends (...args: any[]) => unknown>(
    topic: string,
    callback: CBFn,
    priority?: number,
): CBFn;

export function emit(topic: string, ...arguments: any[]): unknown;
export function pub(topic: string, ...arguments: any[]): unknown;

export function emits(topic: string, ...arguments: any[]): unknown;
export function pubs(topic: string, ...arguments: any[]): unknown;

export function off(callback: (...args: any[]) => unknown): unknown[];
export function off(topicOrUnsubscribeLabel: string, callback?: (...args: any[]) => unknown): unknown[];
export function off(topic: string, unsubscribeLabel: string): unknown[];

export function unsub(callback: (...args: any[]) => unknown): unknown[];
export function unsub(topicOrUnsubscribeLabel: string, callback?: (...args: any[]) => unknown): unknown[];
export function unsub(topic: string, unsubscribeLabel: string): unknown[];
