/// <reference types="node" />
import { EventEmitter } from "events";
import { Express } from "express";
import { Server } from "http";
import { Options as HttpOptions, ScopedClient } from "scoped-http-client";

export class Adapter extends EventEmitter {
    robot: Robot;
    constructor(robot: Robot);

    send(envelope: Envelope, ...strings: string[]): Promise<any>;
    emote(envelope: Envelope, ...strings: string[]): Promise<any>;
    reply(envelope: Envelope, ...strings: string[]): Promise<any>;
    topic(envelope: Envelope, ...strings: string[]): Promise<any>;
    play(envelope: Envelope, ...strings: string[]): Promise<any>;

    run(): Promise<void>;

    receive(message: Message): Promise<any>;
    http(url: string): ScopedClient;

    /**
     * @deprecated Use @robot.brain
     * @returns an object containing all the users with property names
     * that are the user id and with the value set as the `User`.
     * You can iterate over them all with `for (const id in users())`
     */
    users(): User[];

    /* @deprecated Use @robot.brain */
    userForId(id: string, options?: {}): User;

    /* @deprecated Use @robot.brain */
    userForName(name: string): User | null;

    /* @deprecated Use @robot.brain */
    usersForRawFuzzyName(fuzzyName: string): User[];

    /* @deprecated Use @robot.brain */
    usersForFuzzyName(fuzzyName: string): User[];
}

export class DataStore {
    constructor(robot: Robot);
    set(key: string, value: any): Promise<void>;
    setObject(key: string, objectKey: string, value: any): Promise<void>;
    setArray(key: string, value: any): Promise<void>;
    get(key: string): Promise<any>;
    getObject(key: string, objectKey: string): Promise<any>;
}

export class DataStoreUnavailable extends Error {
    /* needed to please typescript */
    private _?: string;
}

export class Middleware<A extends Adapter = Adapter> {
    stack: Array<MiddlewareHandler<A>>;
    constructor(robot: Robot<A>);
    execute(context: MiddlewareContext<A>): Promise<boolean>;
    register(middleware: MiddlewareHandler<A>): void;
}

export class Brain<A extends Adapter> extends EventEmitter {
    constructor(robot: Robot<A>);
    set(key: string, value: any): this;
    get(key: string): any;
    remove(key: string): this;
    save(): void;
    close(): void;
    setAutoSave(enabled: boolean): void;
    resetSaveInterval(seconds: number): void;
    mergeData(data: {}): void;
    /**
     * @returns an object containing all the users with property names
     * that are the user id and with the value set as the `User`.
     * You can iterate over them all with `for (const id in users())`
     */
    users(): User[];
    userForId(id: string, options?: {}): User;
    userForName(name: string): User | null;
    usersForRawFuzzyName(fuzzyName: string): User[];
    usersForFuzzyName(fuzzyName: string): User[];
}

export class User {
    constructor(id: string, options?: {});
    id: string;
    name: string;
    set(key: string, value: any): this;
    get(key: string): any;
    [property: string]: unknown;
}

export class Message {
    constructor(user: User, done?: boolean);
    id: string;
    user: User;
    room: string;
    done: boolean;
    text?: string;
    finish(): void;
}

export class TextMessage extends Message {
    constructor(user: User, text: string, id: string);

    match(regex: RegExp): RegExpMatchArray;
    toString(): string;
}

export class EnterMessage extends Message {
    /* needed to please typescript */
    private _?: string;
}

export class LeaveMessage extends Message {
    /* needed to please typescript */
    private _?: string;
}

export class TopicMessage extends TextMessage {
    /* needed to please typescript */
    private _?: string;
}

export class CatchAllMessage extends Message {
    message: Message;

    constructor(message: Message);
}

export interface Envelope {
    room: string;
    user: User;
    message: Message;
}

export class Response<
    A extends Adapter = Adapter,
    M extends Message = Message,
    R extends RegExpMatchArray | { [key: string]: string } = RegExpMatchArray,
> {
    robot: Robot<A>;
    match: R;
    message: M;
    envelope: Envelope;

    constructor(robot: Robot<A>, message: M, match: R);
    send(...strings: string[]): Promise<any>;
    emote(...strings: string[]): Promise<any>;
    reply(...strings: string[]): Promise<any>;
    topic(...strings: string[]): Promise<any>;
    play(...strings: string[]): Promise<any>;
    locked(...strings: string[]): Promise<any>;
    random<T>(items: T[]): T;
    finish(): void;
    http(url: string, options?: HttpOptions): ScopedClient;
}

export type ListenerCallback<A extends Adapter = Adapter, M extends Message = Message> = (
    response: Response<A, M>,
) => Promise<void>;

export type ListenerMatcher = (message: Message) => boolean;

export class Listener<A extends Adapter = Adapter> {
    options: {};
    robot: Robot<A>;
    matcher: ListenerMatcher;

    constructor(robot: Robot<A>, matcher: ListenerMatcher, options: {} | null, callback: ListenerCallback<A, Message>);

    call(message: Message, middleware: Middleware<A>): Promise<any>;
}

export class TextListener<A extends Adapter> extends Listener<A> {
    constructor(robot: Robot<A>, regex: RegExp, options: {} | null, callback: ListenerCallback<A, TextMessage>);
}

export interface MiddlewareContext<A extends Adapter = Adapter, M extends Message = Message> {
    response: Response<A, M>;
    listener?: Listener<A>;
    method?: string;
    plaintext?: boolean;
    [key: string]: unknown;
}

export type MiddlewareHandler<A extends Adapter = Adapter, M extends Message = Message> = (
    context: MiddlewareContext<A, M>,
) => Promise<boolean>;

export interface LogLevel {
    (...messages: any[]): void;
    disable(): void;
    enable(): void;
}

export interface Log {
    (...messages: any[]): void;
    get(namespace: string): Log;
    debug: LogLevel;
    info: LogLevel;
    notice: LogLevel;
    warn: LogLevel;
    error: LogLevel;
}

export class Robot<A extends Adapter = Adapter> {
    readonly name: string;
    readonly events: EventEmitter;
    readonly brain: Brain<A>;
    readonly alias: string;
    readonly adapterName: string;
    readonly adapter: A;
    readonly errorHandlers: [];
    readonly datastore: null | DataStore;
    readonly commands: string[];
    readonly listeners: Listener<A>[];
    readonly middleware: {
        listener: Middleware<A>;
        response: Middleware<A>;
        receive: Middleware<A>;
    };
    readonly logger: Log;
    readonly pingIntervalId: null | NodeJS.Timeout;
    readonly globalHttpOptions: HttpOptions;
    readonly version: string;
    readonly server?: Server | undefined;
    readonly router: Express;
    readonly shouldEnableHttpd: boolean;

    constructor(adapter: string | object, httpd: boolean, name: string, alias?: string);
    catchAll(callback: ListenerCallback<A, CatchAllMessage>): void;
    catchAll(options: {}, callback: ListenerCallback<A, CatchAllMessage>): void;
    emit(event: string | symbol, ...args: unknown[]): void;
    enter(callback: ListenerCallback<A, EnterMessage>): void;
    enter(options: {}, callback: ListenerCallback<A, EnterMessage>): void;
    error(cb: (error: Error) => void): void;
    hear(regex: RegExp, callback: ListenerCallback<A, TextMessage>): void;
    hear(regex: RegExp, options: {}, callback: ListenerCallback<A, TextMessage>): void;
    helpCommands(): string[];
    http(url: string, options?: HttpOptions): ScopedClient;
    leave(callback: ListenerCallback<A, LeaveMessage>): void;
    leave(options: {}, callback: ListenerCallback<A, LeaveMessage>): void;
    listen(matcher: (message: Message) => boolean, callback: ListenerCallback<A>): void;
    listen(matcher: (message: Message) => boolean, options: {}, callback: ListenerCallback<A>): void;
    listenerMiddleware(middleware: MiddlewareHandler<A>): void;
    load(path: string): Promise<void>;
    loadAdapter(): Promise<void>;
    loadAdapter(adapterPath: string): Promise<void>;
    loadExternalScripts(packages: string[]): void;
    loadFile(directory: string, fileName: string): Promise<void>;
    messageRoom(room: string, ...strings: string[]): Promise<any>;
    parseVersion(): string;
    on(event: string | symbol, listener: (...args: unknown[]) => void): this;
    receive(message: Message): Promise<any>;
    receiveMiddleware(middleware: MiddlewareHandler<A, TextMessage>): void;
    reply(envelope: Envelope, ...strings: string[]): Promise<any>;
    respond(regex: RegExp, callback: ListenerCallback<A, TextMessage>): void;
    respond(regex: RegExp, options: {}, callback: ListenerCallback<A, TextMessage>): void;
    respondPattern(regex: RegExp): RegExp;
    responseMiddleware(middleware: MiddlewareHandler<A, TextMessage>): void;
    run(): Promise<any>;
    send(envelope: Envelope, ...strings: string[]): Promise<any>;
    shutdown(): void;
    topic(callback: ListenerCallback<A, TopicMessage>): void;
    topic(options: {}, callback: ListenerCallback<A, TopicMessage>): void;
}
