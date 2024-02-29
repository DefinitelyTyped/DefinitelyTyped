/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";
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
    constructor(context: EventContext | object);
    stageContext(topics: string | readonly string[]): StageContext;
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
    constructor(topic: string, emitter: EventEmitter);
    push(data: any): boolean;
}

export class Flow {
    constructor(baseFlow?: Flow);
    consume(topic: string | readonly string[], callback: ConsumerCallback): this;
    consume(topic: string): Promise<any>;
    consume(
        topics: readonly string[],
    ): Promise<{
        [key: string]: string;
    }>;
    consumeStream(
        topic: string,
        callback: (stream: ReadableStream) => void,
    ): this;
    consumeStream(topic: string): ReadableStream;
    getReader(
        topic: string,
    ): {
        next(): Promise<any>;
    };
    define(topics: string | readonly string[]): StageContext;
    define(
        topic: string,
        data: Promise<Primitive> | DefinitionFunction | object | Primitive,
    ): this;
    catch(callback: (err: any) => void): this;
    timeout(topics: string | readonly string[], ms: number): this;
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
