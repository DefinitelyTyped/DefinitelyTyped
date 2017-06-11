// Type definitions for hubot 2.19.0
// Project: https://hubot.github.com
// Definitions by: Dirk Gadsden <https://github.com/dirk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Hubot {
    class Brain {
        userForId: (id: any) => any;
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
        send: (...strings: string[]) => void;
        reply: (...strings: string[]) => void;
        random: <T>(items: T[]) => T;
    }

    interface ListenerCallback {
        (response: Response): void;
    }

    interface HearWithOptions {
        (regex: RegExp, options: any, callback: ListenerCallback): void;
    }
    interface HearWithoutOptions {
        (regex: RegExp, callback: ListenerCallback): void;
    }

    interface RespondWithOptions {
        (regex: RegExp, options: any, callback: ListenerCallback): void;
    }
    interface RespondWithoutOptions {
        (regex: RegExp, callback: ListenerCallback): void;
    }

    export interface Robot {
        brain: Brain;
        hear: HearWithOptions & HearWithoutOptions;
        respond: RespondWithOptions & RespondWithoutOptions;
    }
}

export = Hubot;
