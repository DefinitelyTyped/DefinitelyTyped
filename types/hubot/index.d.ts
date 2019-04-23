// Type definitions for hubot 2.19
// Project: https://github.com/hubotio/hubot
// Definitions by: Dirk Gadsden <https://github.com/dirk>
//                 Kees C. Bakker <https://github.com/KeesCBakker>
//                 Emil Marklund <https://github.com/eeemil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Hubot {
    class Brain {
        userForId(id: any): any;
        userForName(name: string): any;
    }

    class User {
        id: any;
        name: string;
    }

    class Message {
        user: User;
        text: string;
        id: string;
    }

    class Response<R> {
        match: RegExpMatchArray;
        message: Message;

        constructor(robot: R, message: Message, match: RegExpMatchArray);
        send(...strings: string[]): void;
        reply(...strings: string[]): void;
        random<T>(items: T[]): T;
    }

    type ListenerCallback<R> = (response: Response<R>) => void;

    class Robot<A> {
        alias: string;
        brain: Brain;
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
    }
}

// Compatibility with CommonJS syntax exported by Hubot's CoffeeScript.
// tslint:disable-next-line export-just-namespace
export = Hubot;
export as namespace Hubot;
