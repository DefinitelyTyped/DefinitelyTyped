// Type definitions for twitch-js 1.2
// Project: https://github.com/twitch-apis/twitch-js#readme
// Definitions by: Evan Steinkerchner <https://github.com/roundaround>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as WebSocket from 'ws';
import {RequestCallback, Options as ApiOptions} from 'request';

declare module 'twitch-js' {
    interface Logger {
        info: (message?: any, ...optionalParams: any[]) => void;
        warn: (message?: any, ...optionalParams: any[]) => void;
        error: (message?: any, ...optionalParams: any[]) => void;
    }
    
    type Listener = (...args: any[]) => void;

    class EventEmitter {
      static defaultMaxListeners: number;
      static listenerCount(emitter: EventEmitter, type: string | number): number;
    
      setMaxListeners(n: number): this;
      emit(type: string | number, ...args: any[]): boolean;
      addListener(type: string | number, listener: Listener): this;
      on(type: string | number, listener: Listener): this;
      once(type: string | number, listener: Listener): this;
      removeListener(type: string | number, listener: Listener): this;
      removeAllListeners(type?: string | number): this;
      listeners(type: string | number): Listener[];
      listenerCount(type: string | number): number;
      emits(types: ReadonlyArray<string | number>, values: ReadonlyArray<any>): void;
    }

    type ClientOptions = {
        channels?: string[],
        connection?: {
            server?: string,
            port?: number,
            reconnect?: boolean,
            maxReconnectAttempts?: number,
            maxReconnectInterval?: number,
            reconnectDecay?: number,
            reconnectInterval?: number,
            secure?: boolean,
            timeout?: number,
        },
        identity?: {
            username?: string,
            password?: string,
        },
        options?: {
            clientId?: string,
            debug?: boolean,
            commandTimeout?: number,
        },
        logger?: Logger,
    };

    type Message = {
        raw: string;
        tags: TagsCollection;
        prefix: string|null;
        command: string;
        params: string[];
    };

    type Emote = {
        code: string;
        id: number;
    };

    type TagsCollection = {
        [key: string]: string|boolean|number|null;
    };

    type Utilities = {
        levenshtein: (s1: string, s2: string, caseSensitive: boolean) => number;
        raffle: Raffle;
        symbols: (line: string) => number;
        uppercase: (line: string) => number;
    };

    type Raffle = {
        init: (channel: string) => void;
        enter: (channel: string, username: string) => void;
        leave: (channel: string, username: string) => boolean;
        pick: (channel: string) => string|null;
        reset: (channel: string) => void;
        count: (channel: string) => number;
        isParticipating: (channel: string, username: string) => boolean;
    };

    export class Client extends EventEmitter {
        channels: string[];
        clientId: string|null;
        currentLatency: number;
        emotes: string;
        emotesets: {[key: string]: Emote[]};
        globaluserstate: TagsCollection;
        lastJoined: string;
        latency: Date;
        log: Logger;
        maxReconnectAttempts: number;
        maxReconnectInterval: number;
        moderators: {[key: string]: string[]};
        opts: ClientOptions;
        pingLoop: number|null;
        pingTimeout: number|null;
        port: string;
        reason: string;
        reconnect: boolean;
        reconnectDecay: number;
        reconnectInterval: number;
        reconnectTimer: number;
        secure: boolean;
        server: string;
        username: string;
        userstate: TagsCollection;
        wasCloseCalled: boolean;
        ws: WebSocket|null;

        readonly utils: Utilities;

        constructor(opts?: ClientOptions);

        /// Base Methods
        api(options?: ApiOptions, cb?: RequestCallback): Promise<any>;
        getChannels(): string[];
        getOptions(): ClientOptions;
        getUsername(): string;
        handleMessage(message: Message): void;
        isMod(channel: string, username: string): boolean;
        readyState(): 'CONNECTING'|'OPEN'|'CLOSING'|'CLOSED';

        /// Commands
        action(channel: string, message: string): Promise<[string, string]>;
        ban(channel: string, username: string, reason: string): Promise<[string, string, string]>;
        clear(channel: string): Promise<[string]>;
        color(channel: string, newColor: string): Promise<[string]>;
        commercial(channel: string, seconds: number): Promise<[string, number]>;
        connect(): Promise<[string, number]>;
        disconnect(): Promise<[string, number]>;
        emoteonly(channel: string): Promise<[string]>;
        emoteonlyoff(channel: string): Promise<[string]>;
        followersmode(channel: string, minutes: number): Promise<[string, number]>;
        followersmodeoff(channel: string): Promise<[string]>;
        followersonly(channel: string, minutes: number): Promise<[string, number]>;
        followersonlyoff(channel: string): Promise<[string]>;
        host(channel: string, target: string): Promise<[string, string, number]>;
        join(channel: string): Promise<[string]>;
        leave(channel: string): Promise<[string]>;
        mod(channel: string, username: string): Promise<[string, string]>;
        mods(channel: string): Promise<string[]>;
        part(channel: string): Promise<[string]>;
        ping(): Promise<[number]>;
        r9kbeta(channel: string): Promise<[string]>;
        r9kbetaoff(channel: string): Promise<[string]>;
        r9kmode(channel: string): Promise<[string]>;
        r9kmodeoff(channel: string): Promise<[string]>;
        raw(message: string): Promise<[string]>;
        say(channel: string, message: string): Promise<[string, string]>;
        slow(channel: string, seconds: number): Promise<[string, number]>;
        slowmode(channel: string, seconds: number): Promise<[string, number]>;
        slowmodeoff(channel: string): Promise<[string]>;
        slowoff(channel: string): Promise<[string]>;
        subscribers(channel: string): Promise<[string]>;
        subscribersoff(channel: string): Promise<[string]>;
        timeout(channel: string, username: string, seconds: number, reason: string): Promise<[string, string, number, string]>;
        unban(channel: string, username: string): Promise<[string, string]>;
        unhost(channel: string): Promise<[string]>;
        unmod(channel: string, username: string): Promise<[string, string]>;
        whisper(username: string, message: string): Promise<[string, string]>;
    }
}
