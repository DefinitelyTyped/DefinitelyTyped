/// <reference types="node" />

import EventEmitter = require("node:events");

interface ErrorObject {
    name: string;
    message: string;
}

interface Metric<T> {
    val: () => T;
    set: (data: T) => void;
}

interface MetricOptions<T> {
    name: string;
    value: T;
    unit?: string;
}

interface Counter {
    val: () => number;
    inc: (amount: number) => void;
    dec: (amount: number) => void;
    reset: () => void;
}

interface CounterOptions {
    name: string;
    unit: string;
}

declare class TX2 extends EventEmitter {
    event(name: string, data: object): void;

    action(action_name: string, callback: (cb: (data: any) => void) => void): void;
    action<T extends object>(
        action_name: string,
        options: T,
        callback: (options: T, cb: (data: any) => void) => void,
    ): void;

    issue(err: string): string;
    issue(err: Error): ErrorObject;

    metric<T>(name: string, cb: () => T): Metric<T>;
    metric(name: string, cb: number): Metric<number>;
    metric<T>(name: string, unit: string, cb: () => T): Metric<T>;
    metric(name: string, unit: string, cb: number): Metric<number>;
    metric<T>(options: MetricOptions<T>): Metric<T>;

    counter(name: string | CounterOptions): Counter;
}

declare const tx2: TX2;

export = tx2;
