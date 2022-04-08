// Type definitions for slate-irc
// Project: https://github.com/slate/slate-irc
// Definitions by: Elisée MAURER <https://github.com/elisee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import * as net from "net";

declare function IRC(socket: net.Socket): IRC.Client;

declare namespace IRC {
    interface DataEvent {
        prefix: string;
        command: string;
        params: string;
        trailing: string;
        string: string;
    }

    interface MOTDEvent {
        motd: string[];
    }

    interface TopicEvent {
        nick: string;
        hostmask: string;
        channel: string;
        topic: string;
    }

    interface MessageEvent {
        from: string;
        hostmask: string;
        to: string;
        message: string;
    }

    interface JoinEvent {
        nick: string;
        hostmask: string;
        channel: string;
    }

    interface PartEvent {
        nick: string;
        hostmask: string;
        channels: string[];
    }

    interface NickEvent {
        nick: string;
        hostmask: string;
        new: string;
    }

    interface ModeEvent {
        nick: string;
        target: string;
        mode: string;
        client: string;
    }

    interface AwayEvent {
        nick: string;
        message: string;
    }

    interface QuitEvent {
        nick: string;
        hostmask: string;
        message: string;
    }

    class Client {
        me: string;

        write(str: string): void;

        pass(pass: string): void;
        nick(nick: string): void;
        user(username: string, realname: string): void;

        invite(name: string, channel: string): void;
        send(target: string, msg: string): void;
        action(target: string, msg: string): void;
        notice(target: string, msg: string): void;
        ctcp(target: string, msg: string): void;

        join(channel: string, key?: string): void;
        part(channel: string, msg?: string): void;
        names(channel: string, callback: (error: Error, names: { name: string; mode: string; }[]) => void): void;

        away(message: string): void;
        topic(channel: string, topic: string): void;
        kick(channels: string | string[], nicks: string | string[], msg: string): void;
        oper(name: string, password: string): void;
        mode(target: string, flags: string, params: string): void;
        quit(msg: string): void;
        whois(target: string, mask: string, callback: Function): void;

        on(event: string, callback: Function): void;
        on(event: "data", callback: (event: DataEvent) => void): void;
        on(event: "welcome", callback: (name: string) => void): void;
        on(event: "message", callback: (event: MessageEvent) => void): void;
        on(event: "notice", callback: (event: MessageEvent) => void): void;
        on(event: "motd", callback: (event: MOTDEvent) => void): void;
        on(event: "topic", callback: (event: TopicEvent) => void): void;
        on(event: "join", callback: (event: JoinEvent) => void): void;
        on(event: "part", callback: (event: PartEvent) => void): void;
        on(event: "nick", callback: (event: NickEvent) => void): void;
        on(event: "mode", callback: (event: ModeEvent) => void): void;
        on(event: "away", callback: (event: AwayEvent) => void): void;
        on(event: "quit", callback: (event: QuitEvent) => void): void;
    }
}

export = IRC;
