// Type definitions for hubot 2.19
// Project: https://github.com/github/hubot
// Definitions by: Dirk Gadsden <https://github.com/dirk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

declare namespace Hubot {
    class Brain extends EventEmitter {
        constructor(robot: Robot);
        set<T = any>(key: string, value: T): this;
        get<T = any>(key: string): T;
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

    class Response {
        match: RegExpMatchArray;
        message: Message;

        constructor(robot: Robot, message: Message, match: RegExpMatchArray);
        send(...strings: string[]): void;
        emote(...strings: string[]): void;
        reply(...strings: string[]): void;
        topic(...strings: string[]): void;
        play(...strings: string[]): void;
        locked(...strings: string[]): void;
        random<T>(items: T[]): T;
    }

    type ListenerCallback = (response: Response) => void;

    class Robot {
        brain: Brain;

        constructor(adapterPath: string, adapter: string, httpd: boolean, name: string, alias?: string);
        hear(regex: RegExp, callback: ListenerCallback): void;
        hear(regex: RegExp, options: any, callback: ListenerCallback): void;
        respond(regex: RegExp, callback: ListenerCallback): void;
        respond(regex: RegExp, options: any, callback: ListenerCallback): void;
        enter(callback: ListenerCallback): void;
        enter(options: any, callback: ListenerCallback): void;
        topic(callback: ListenerCallback): void;
        topic(options: any, callback: ListenerCallback): void;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        emit(event: string | symbol, ...args: any[]): boolean;
    }
}

// Compatibility with CommonJS syntax exported by Hubot's CoffeeScript.
// tslint:disable-next-line export-just-namespace
export = Hubot;
export as namespace Hubot;
