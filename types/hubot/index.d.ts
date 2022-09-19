// Type definitions for hubot 3.3
// Project: https://github.com/hubotio/hubot
// Definitions by: Dirk Gadsden <https://github.com/dirk>
//                 Kees C. Bakker <https://github.com/KeesCBakker>
//                 Emil Marklund <https://github.com/eeemil>
//                 Jon Phenow <https://github.com/jphenow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { EventEmitter } from 'events';
import { Options as HttpOptions, ScopedClient } from 'scoped-http-client';
import { Server } from 'http';
import { Express } from 'express';

declare namespace Hubot {
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
        userForId(id: string, options?: {}): User;
        userForName(name: string): User | null;
        usersForRawFuzzyName(fuzzyName: string): User[];
        usersForFuzzyName(fuzzyName: string): User[];
    }

    class DataStore {
        constructor(robot: Robot);
        set(key: string, value: any): Promise<void>;
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
        mergeData(data: {}): void;
        users(): User[];
        userForId(id: string, options?: {}): User;
        userForName(name: string): User | null;
        usersForRawFuzzyName(fuzzyName: string): User[];
        usersForFuzzyName(fuzzyName: string): User[];
    }

    class User {
        constructor(id: string, options?: {});
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

    class Response<A extends Adapter = Adapter, M extends Message = Message> {
        match: RegExpMatchArray;
        message: Message;
        envelope: Envelope;

        constructor(robot: Robot<A>, message: Message, match: RegExpMatchArray);
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

    type ListenerCallback<A extends Adapter = Adapter, M extends Message = Message> = (
        response: Response<A, M>,
    ) => void;
    type DoneFunction = () => void;
    type NextFunction = (done: DoneFunction) => void;
    interface MiddlewareContext<T extends Adapter = Adapter> {
        response?: Response<T> | undefined;
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
        readonly name: string;
        readonly events: EventEmitter;
        readonly brain: Brain<A>;
        readonly alias: string;
        readonly adapterPath: string;
        readonly adapterName: string;
        readonly adapter: A;
        readonly errorHandlers: [];
        readonly onUncaughtException: (err: Error) => void;
        readonly datastore: null | DataStore;
        readonly commands: [];
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

        constructor(adapterPath: string, adapter: string, httpd: boolean, name: string, alias?: string);
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
        loadExternalScripts(packages: string[]): void;
        loadFile(directory: string, fileName: string): void;
        loadHubotScripts(path: string, scripts: string[]): void;
        messageRoom(room: string, ...strings: string[]): void;
        on(event: string | symbol, listener: (...args: unknown[]) => void): this;
        receive(message: Message, cb?: () => void): void;
        receiveMiddleware(middleware: MiddlewareHandler<A>): void;
        reply(envelope: Envelope, ...strings: string[]): void;
        respond(regex: RegExp, callback: ListenerCallback<A, TextMessage>): void;
        respond(regex: RegExp, options: {}, callback: ListenerCallback<A, TextMessage>): void;
        respondPattern(regex: RegExp): RegExp;
        responseMiddleware(middleware: MiddlewareHandler<A>): void;
        run(): void;
        send(envelope: Envelope, ...strings: string[]): void;
        shutdown(): void;
        topic(callback: ListenerCallback<A, TopicMessage>): void;
        topic(options: {}, callback: ListenerCallback<A, TopicMessage>): void;
    }
}

// Compatibility with CommonJS syntax exported by Hubot's CoffeeScript.
// eslint-disable-next-line export-just-namespace
export = Hubot;
export as namespace Hubot;
