import superagent = require("superagent");
// TODO 1. update superagent with generics
// TODO 2. create underscore.deffered .d.ts file
// TODO 3. refactor & improve specialized parameter methods

// Merged declaration, ChatWork is both a callable function and a namespace
declare function ChatWork(): ChatWork.ChatWork;

declare namespace ChatWork {
    interface ChatWorkInitOptions {
        token: string;
    }

    interface ChatWork {
        apiVersion: string;
        sdkVersion: string;
        token: string;
        Deferred: any; // _.Deferred
        when: any; // _.when

        init(options: ChatWorkInitOptions): void;

        // http://developer.chatwork.com/ja/endpoint_me.html
        get(api: "me", callback: (err: Error, res: superagent.Response) => void): void;

        // http://developer.chatwork.com/ja/endpoint_my.html
        get(api: "my/status", callback: (err: Error, res: superagent.Response) => void): void;
        get(api: "my/tasks", callback: (err: Error, res: superagent.Response) => void): void;

        // http://developer.chatwork.com/ja/endpoint_contacts.html
        get(api: "contacts", callback: (err: Error, res: superagent.Response) => void): void;

        // http://developer.chatwork.com/ja/endpoint_rooms.html
        get(api: "rooms", callback: (err: Error, res: superagent.Response) => void): void;
        post(api: "rooms", args: any, callback: (err: Error, res: superagent.Response) => void): void;

        // can't create specialized parameter
        // specialized parameter required compile-time constant string literal
        // GET      /rooms/{room_id}
        // PUT      /rooms/{room_id}
        // DELETE   /rooms/{room_id}
        // GET      /rooms/{room_id}/members
        // PUT      /rooms/{room_id}/members
        // GET      /rooms/{room_id}/messages <- not implemented yet
        // POST     /rooms/{room_id}/messages
        // GET      /rooms/{room_id}/messages/{message_id}
        // GET      /rooms/{room_id}/tasks
        // POST     /rooms/{room_id}/tasks
        // GET      /rooms/{room_id}/tasks/{task_id}
        // GET      /rooms/{room_id}/files
        // GET      /rooms/{room_id}/files/{file_id}

        // General functions

        api(method: string, api: string): any; // return same type as _.Deferred()
        api(method: string, api: string, callback: (err: Error, res: superagent.Response) => void): void;
        api(method: string, api: string, args: any, callback: (err: Error, res: superagent.Response) => void): void;

        get(api: string): any; // return same type as _.Deferred()
        get(api: string, callback: (err: Error, res: superagent.Response) => void): void;
        get(api: string, args: any, callback: (err: Error, res: superagent.Response) => void): void;

        post(api: string): any; // return same type as _.Deferred()
        post(api: string, callback: (err: Error, res: superagent.Response) => void): void;
        post(api: string, args: any, callback: (err: Error, res: superagent.Response) => void): void;

        put(api: string): any; // return same type as _.Deferred()
        put(api: string, callback: (err: Error, res: superagent.Response) => void): void;
        put(api: string, args: any, callback: (err: Error, res: superagent.Response) => void): void;

        del(api: string): any; // return same type as _.Deferred()
        del(api: string, callback: (err: Error, res: superagent.Response) => void): void;
        del(api: string, args: any, callback: (err: Error, res: superagent.Response) => void): void;
    }
}

export = ChatWork;
