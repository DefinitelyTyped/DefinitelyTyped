// Type definitions for hubot 3.3
// Project: https://github.com/hubotio/hubot
// Definitions by: Dirk Gadsden <https://github.com/dirk>
//                 Kees C. Bakker <https://github.com/KeesCBakker>
//                 Emil Marklund <https://github.com/eeemil>
//                 Jon Phenow <https://github.com/jphenow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { EventEmitter } from 'events';
import { Options as HttpOptions, ScopedClient } from 'scoped-http-client';
import { Server } from 'http';
import { Express } from 'express';

declare namespace Hubot {
    interface UnknownData {
        [key: string]: unknown;
    }

    class Adapter extends EventEmitter {
        constructor(robot: Robot);

        send(envelope: Envelope, ...strings: string[]): void;
        emote(envelope: Envelope, ...strings: string[]): void;
        reply(envelope: Envelope, ...strings: string[]): void;
        topic(envelope: Envelope, ...strings: string[]): void;
        play(envelope: Envelope, ...strings: string[]): void;

        run(): void;
        close(): void;

        receive(message: Message): void;
        http(url: string): ScopedClient;

        users(): User[];
        userForId(id: string, options?: UnknownData): User;
        userForName(name: string): User | null;
        usersForRawFuzzyName(fuzzyName: string): User[];
        usersForFuzzyName(fuzzyName: string): User[];
    }

    class DataStore {
        // Represents a persistent, database-backed storage for the robot. Extend this.
        //
        // Returns a new Datastore with no storage.
        constructor(robot: Robot);

        // Public: Set value for key in the database. Overwrites existing
        // values if present. Returns a promise which resolves when the
        // write has completed.
        //
        // Value can be any JSON-serializable type.
        set(key: string, value: any): Promise<void>;

        // Public: Assuming `key` represents an object in the database,
        // sets its `objectKey` to `value`. If `key` isn't already
        // present, it's instantiated as an empty object.
        setObject(key: string, objectKey: string, value: any): Promise<void>;
        setArray(key: string, value: any): Promise<void>;
        get(key: string): Promise<any>;
        getObject(key: string, objectKey: string): Promise<any>;
    }

    class DataStoreUnavailable extends Error {}

    class Middleware<T extends Adapter = Adapter> {
        stack: Array<MiddlewareHandler<T>>;
        constructor(robot: Robot<T>);
        execute(context: MiddlewareContext<T>, next: NextFunction, done: DoneFunction): void;
        register(middleware: MiddlewareHandler<T>): void;
    }

    class Brain<A extends Adapter> extends EventEmitter {
        constructor(robot: Robot<A>);
        set(key: string, value: any): this;
        get(key: string): any;
        remove(key: string): this;
        save(): void;
        close(): void;
        setAutoSave(enabled: boolean): void;
        resetSaveInterval(seconds: number): void;
        mergeData(data: UnknownData): void;
        users(): User[];
        userForId(id: string, options?: UnknownData): User;
        userForName(name: string): User | null;
        usersForRawFuzzyName(fuzzyName: string): User[];
        usersForFuzzyName(fuzzyName: string): User[];
    }

    class User {
        constructor(id: string, options?: UnknownData);
        id: string;
        name: string;
        set(key: string, value: any): this;
        get(key: string): any;
        [property: string]: unknown;
    }

    class Message {
        constructor(user: User, done?: boolean);
        id: string;
        user: User;
        text: string | null;
        room: string;
        finish(): void;
    }

    class TextMessage extends Message {
        text: string;

        constructor(user: User, text: string, id: string);

        match(regex: RegExp): RegExpMatchArray;
        toString(): string;
    }

    class EnterMessage extends Message {
        text: null;
    }

    class LeaveMessage extends Message {
        text: null;
    }

    class TopicMessage extends TextMessage {
        text: string;
    }

    class CatchAllMessage extends Message {
        message: Message;

        constructor(message: Message);
    }

    interface Envelope {
        room: string;
        user: User;
        message: Message;
    }

    class Response<R> {
        match: RegExpMatchArray;
        message: Message;
        envelope: Envelope;

        constructor(robot: R, message: Message, match: RegExpMatchArray);
        send(...strings: string[]): void;
        emote(...strings: string[]): void;
        reply(...strings: string[]): void;
        topic(...strings: string[]): void;
        play(...strings: string[]): void;
        locked(...strings: string[]): void;
        random<T>(items: T[]): T;
        finish(): void;
        http(url: string, options?: HttpOptions): ScopedClient;
    }

    type ListenerCallback<R> = (response: Response<R>) => void;
    type DoneFunction = () => void;
    type NextFunction = (done: DoneFunction) => void;
    interface MiddlewareContext<T extends Adapter = Adapter> {
        response?: Response<Robot<T>>;
        [key: string]: unknown;
    }
    type MiddlewareHandler<T extends Adapter = Adapter> = (
        context: MiddlewareContext<T>,
        next: NextFunction,
        done: DoneFunction,
    ) => void;

    interface LogLevel {
        (...messages: any[]): void;
        disable(): void;
        enable(): void;
    }

    interface Log {
        (...messages: any[]): void;
        get(namespace: string): Log;
        debug: LogLevel;
        info: LogLevel;
        notice: LogLevel;
        warning: LogLevel;
        error: LogLevel;
    }

    class Robot<A extends Adapter = Adapter> {
        name: string;
        events: EventEmitter;
        brain: Brain<A>;
        alias: string;
        adapterPath: string;
        adapterName: string;
        adapter: A;
        errorHandlers: [];
        onUncaughtException: (err: Error) => void;
        datastore: null | DataStore;
        commands: [];
        middleware: {
            listener: Middleware<A>;
            response: Middleware<A>;
            receive: Middleware<A>;
        };
        logger: Log;
        pingIntervalId: null | NodeJS.Timeout;
        globalHttpOptions: HttpOptions;
        version: string;
        server?: Server;
        router: Express;

        constructor(adapterPath: string, adapter: string, httpd: boolean, name: string, alias?: string);
        catchAll(callback: ListenerCallback<this>): void;
        catchAll(options: UnknownData, callback: ListenerCallback<this>): void;
        emit(event: string | symbol, ...args: unknown[]): boolean;
        enter(callback: ListenerCallback<this>): void;
        enter(options: UnknownData, callback: ListenerCallback<this>): void;
        error(cb: (error: Error) => void): void;
        hear(regex: RegExp, callback: ListenerCallback<this>): void;
        hear(regex: RegExp, options: UnknownData, callback: ListenerCallback<this>): void;
        helpCommands(): string[];
        http(url: string, options?: HttpOptions): ScopedClient;
        leave(callback: ListenerCallback<this>): void;
        leave(options: UnknownData, callback: ListenerCallback<this>): void;
        listen(matcher: (message: Message) => boolean, callback: ListenerCallback<this>): void;
        listen(matcher: (message: Message) => boolean, options: UnknownData, callback: ListenerCallback<this>): void;
        listenerMiddleware(middleware: MiddlewareHandler<A>): void;
        loadExternalScripts(packages: string[]): void;
        loadFile(directory: string, fileName: string): void;
        loadHubotScripts(path: string, scripts: string[]): void;
        messageRoom(room: string, ...strings: string[]): void;
        on(event: string | symbol, listener: (...args: unknown[]) => void): this;
        receive(message: Message, cb?: () => void): void;
        receiveMiddleware(middleware: MiddlewareHandler<A>): void;
        reply(envelope: Envelope, ...strings: string[]): void;
        respond(regex: RegExp, callback: ListenerCallback<this>): void;
        respond(regex: RegExp, options: UnknownData, callback: ListenerCallback<this>): void;
        respondPattern(regex: RegExp): RegExp;
        responseMiddleware(middleware: MiddlewareHandler<A>): void;
        run(): void;
        send(envelope: Envelope, ...strings: string[]): void;
        shutdown(): void;
        topic(callback: ListenerCallback<this>): void;
        topic(options: UnknownData, callback: ListenerCallback<this>): void;
    }
}

// Compatibility with CommonJS syntax exported by Hubot's CoffeeScript.
// tslint:disable-next-line export-just-namespace
export = Hubot;
export as namespace Hubot;
