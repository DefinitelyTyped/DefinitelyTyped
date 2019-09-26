// Type definitions for hubot 2.19
// Project: https://github.com/hubotio/hubot
// Definitions by: Dirk Gadsden <https://github.com/dirk>
//                 Kees C. Bakker <https://github.com/KeesCBakker>
//                 Emil Marklund <https://github.com/eeemil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from 'events';

declare namespace Hubot {
    class Brain<A> extends EventEmitter {
        constructor(robot: Robot<A>);
        set(key: string, value: any): this;
        get(key: string): any;
        remove(key: string): this;
        save(): void;
        close(): void;
        setAutoSave(enabled: boolean): void;
        resetSaveInterval(seconds: number): void;
        mergeData(data: any): void;
        users(): User[];
        userForId(id: any): User;
        userForName(name: string): User;
        userForRawFuzzyName(fuzzyName: string): User;
        userForFuzzyName(fuzzyName: string): User;
    }

    class User {
        constructor(id: any, options?: any);
        id: any;
        name: string;
        [property: string]: any;
    }

    class Message {
        constructor(user: User, done?: boolean)
        user: User;
        text: string;
        id: string;
        finish(): void;
    }

    class Response<R> {
        match: RegExpMatchArray;
        message: Message;

        constructor(robot: R, message: Message, match: RegExpMatchArray);
        send(...strings: string[]): void;
        emote(...strings: string[]): void;
        reply(...strings: string[]): void;
        topic(...strings: string[]): void;
        play(...strings: string[]): void;
        locked(...strings: string[]): void;
        random<T>(items: T[]): T;
    }

    type ListenerCallback<R> = (response: Response<R>) => void;

    class Robot<A> {
        alias: string;
        brain: Brain<A>;
        name: string;
        readonly adapter: A;

        constructor(adapterPath: string, adapter: string, httpd: boolean, name: string, alias?: string);
        catchAll(callback: ListenerCallback<this>): void;
        catchAll(options: any, callback: ListenerCallback<this>): void;
        hear(regex: RegExp, callback: ListenerCallback<this>): void;
        hear(regex: RegExp, options: any, callback: ListenerCallback<this>): void;
        helpCommands(): string[];
        loadFile(directory: string, fileName: string): void;
        respond(regex: RegExp, callback: ListenerCallback<this>): void;
        respond(regex: RegExp, options: any, callback: ListenerCallback<this>): void;
        enter(callback: ListenerCallback<this>): void;
        enter(options: any, callback: ListenerCallback<this>): void;
        topic(callback: ListenerCallback<this>): void;
        topic(options: any, callback: ListenerCallback<this>): void;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
    }
}

// Compatibility with CommonJS syntax exported by Hubot's CoffeeScript.
// tslint:disable-next-line export-just-namespace
export = Hubot;
export as namespace Hubot;
