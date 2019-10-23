// Type definitions for are-we-there-yet 1.1
// Project: https://github.com/iarna/are-we-there-yet
// Definitions by: Brian J Brennan <https://github.com/brianloveswords>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";
import { Transform, TransformOptions } from "stream";

export type TrackerObject = Tracker | TrackerGroup | TrackerStream;
export type TrackerEventListener = (name: string, completed: number, tracker: TrackerObject) => void;
export type GenericEventListener = (...args: any[]) => void;

export class TrackerBase extends EventEmitter {
    constructor(name?: string);
    addListener(event: "change", listener: TrackerEventListener): this;
    addListener(event: string, listener: GenericEventListener): this;
    on(event: "change", listener: TrackerEventListener): this;
    on(event: string, listener: GenericEventListener): this;
    once(event: "change", listener: TrackerEventListener): this;
    once(event: string, listener: GenericEventListener): this;
    prependListener(event: "change", listener: TrackerEventListener): this;
    prependListener(event: string, listener: GenericEventListener): this;
    prependOnceListener(event: "change", listener: TrackerEventListener): this;
    prependOnceListener(event: string, listener: GenericEventListener): this;
    removeListener(event: "change", listener: TrackerEventListener): this;
    removeListener(event: string, listener: GenericEventListener): this;
}

export class Tracker extends TrackerBase {
    constructor(name?: string, todo?: number);
    addWork(work: number): void;
    completeWork(completed: number): void;
    completed(): number;
    finish(): void;
}

export class TrackerGroup extends TrackerBase {
    constructor(name?: string);
    addUnit(tracker: TrackerBase, weight?: number): TrackerObject;
    completed(): number;
    debug(): string;
    finish(): void;
    newGroup(name?: string, weight?: number): TrackerGroup;
    newItem(name?: string, todo?: number, weight?: number): Tracker;
    newStream(name?: string, todo?: number, weight?: number): TrackerStream;
}

export class TrackerStream extends Transform {
    constructor(name?: string, size?: number, options?: TransformOptions);
    addWork(work: number): void;
    completed(): number;

    addListener(event: "change", listener: TrackerEventListener): this;
    addListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    addListener(event: "readable" | "end" | "close", listener: () => void): this;
    addListener(event: "error", listener: (err: Error) => void): this;
    addListener(event: string, listener: GenericEventListener): this;

    on(event: "change", listener: TrackerEventListener): this;
    on(event: "data", listener: (chunk: Buffer | string) => void): this;
    on(event: "readable" | "end" | "close", listener: () => void): this;
    on(event: "error", listener: (err: Error) => void): this;
    on(event: string, listener: GenericEventListener): this;

    once(event: "change", listener: TrackerEventListener): this;
    once(event: "data", listener: (chunk: Buffer | string) => void): this;
    once(event: "readable" | "end" | "close", listener: () => void): this;
    once(event: "error", listener: (err: Error) => void): this;
    once(event: string, listener: GenericEventListener): this;

    prependListener(event: "change", listener: TrackerEventListener): this;
    prependListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependListener(event: "readable" | "end" | "close", listener: () => void): this;
    prependListener(event: "error", listener: (err: Error) => void): this;
    prependListener(event: string, listener: GenericEventListener): this;

    prependOnceListener(event: "change", listener: TrackerEventListener): this;
    prependOnceListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    prependOnceListener(event: "readable" | "end" | "close", listener: () => void): this;
    prependOnceListener(event: "error", listener: (err: Error) => void): this;
    prependOnceListener(event: string, listener: GenericEventListener): this;

    removeListener(event: "change", listener: TrackerEventListener): this;
    removeListener(event: "data", listener: (chunk: Buffer | string) => void): this;
    removeListener(event: "readable" | "end" | "close", listener: () => void): this;
    removeListener(event: "error", listener: (err: Error) => void): this;
    removeListener(event: string, listener: GenericEventListener): this;
}
