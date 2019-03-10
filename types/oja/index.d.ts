// Type definitions for oja 1.1
// Project: https://github.com/dimichgh/oja#readme
// Definitions by: Laurens Stötzel <https://github.com/buffcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { Readable } from "stream";
import { EventEmitter } from "events";
export type ConsumerCallback = (payload: any, runtime: Flow) => void;

export type Primitive =
    | boolean
    | number
    | string
    | symbol
    | null
    | undefined;

export interface State {
    queue: string[];
    pending: string[];
}

export type DefinitionFunction = (publisher: StageContext, runtime: Flow) => any;

export type AddableFunction = (runtime: Flow) => void;
export type AddableToAction = Action | AddableFunction;

export class EventContext {
    new(context: EventContext | object): this;
    stageContext(topics: string | ReadonlyArray<string>): StageContext;
    state(): State;
    repub(type: string, handler: (event: any) => void): void;
    on(type: string, handler: (event: any) => void): this;
    once(type: string, handler: (event: any) => void): this;
    emit(name: string, value: any): this;
    get(name: string): any;
}

export class StageContext extends EventContext {
    pub(data: any): void;
}

export class ReadableStream extends Readable {
    new(topic: string, emitter: EventEmitter): this;
    push(data: any): boolean;
}

export class Flow {
    constructor(baseFlow?: Flow);
    consume(topic: string | ReadonlyArray<string>, callback: ConsumerCallback): this;
    consume(topic: string): Promise<any>;
    consume(
        topics: ReadonlyArray<string>
    ): Promise<{
        [key: string]: string;
    }>;
    consumeStream(
        topic: string,
        callback: (stream: ReadableStream) => void
    ): this;
    consumeStream(topic: string): ReadableStream;
    getReader(
        topic: string
    ): {
        next(): Promise<any>;
    };
    define(topics: string | ReadonlyArray<string>): StageContext;
    define(
        topic: string,
        data: Promise<Primitive> | DefinitionFunction | object | Primitive
      ): this;
    catch(callback: (err: any) => void): this;
    timeout(topics: string |  ReadonlyArray<string>, ms: number): this;
    state(): State;
}

export class Action extends Flow {
    constructor();
    activate(): this;
    execute(): void;
    add(...child: AddableToAction[]): this;
}

export class FunctionAction extends Action {
    constructor(callback: (runtime: FunctionAction) => any);
    execute(): any;
}
