// Type definitions for hubot 2.19.0
// Project: https://hubot.github.com
// Definitions by: Dirk Gadsden <https://github.com/dirk>
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

    class Response {
        match: RegExpMatchArray;
        message: Message;

        constructor(robot: Robot, message: Message, match: RegExpMatchArray);
        send(...strings: string[]): void;
        reply(...strings: string[]): void;
        random<T>(items: T[]): T;
    }

    interface ListenerCallback {
        (response: Response): void;
    }

    export interface Robot {
        brain: Brain;

        hear(regex: RegExp, callback: ListenerCallback): void;
        hear(regex: RegExp, options: any, callback: ListenerCallback): void;
        response(regex: RegExp, callback: ListenerCallback): void;
        response(regex: RegExp, options: any, callback: ListenerCallback): void;
    }
}

export = Hubot;
