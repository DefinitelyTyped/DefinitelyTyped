// Type definitions for tmi.js 1.2.1
// Project: https://github.com/tmijs/tmi.js
// Definitions by: DyingAlbatross <https://github.com/dyingalbatross>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'tmi.js' {
	var tmi: Tmi;

	export = tmi;
}

interface UserState {
  badges: any;
  color: string;
  'display-name': string;
  emotes: any;
  mod: boolean;
  'room-id': string;
  subscriber: boolean;
  turbo: boolean;
  'user-id': string;
  'user-type': string;
  'emotes-raw': string;
  'badges-raw': string;
  'username': string;
  'message-type': string;
}

interface ChannelState {
  'broadcaster-lang': string | null;
  r9k: boolean;
  slow: boolean;
  'subs-only': boolean;
  channel: string;
}

interface TmiOptions {
  options?: { 
    clientId?: string; 
    debug?: boolean; 
  };
  connection?: {
    server?: string;
    port?: number;
    reconnect?: boolean;
    maxReconnectAttempts?: number;
    maxReconnectInterval?: number;
    reconnectDelay?: number;
    reconnectInterval?: number;
    secure?: boolean;
    timeout?: number;
  };
  identity?: {
    username: string;
    password: string;
  };
  channels?: string[];
  logger?: any;
}

interface Tmi {
  client: ClientStatic;
}

interface ClientStatic {
  new (options?: TmiOptions): Client;
}

interface ApiOptions {
  url: string;
  headers?: any;
  method?: string;
}

interface Client {
    /* API */
    api( options: ApiOptions,
         callback: (error: any, response: any, body: any) => void
       ): any;
    getChannels(): any[];
    getOptions(): any;
    getUsername(): string;
    isMod( channel: string, 
           username: string
         ): boolean;
    readyState(): string;

    /* Events */
    on( event: "action", 
        callback: (channel: string, userstate: UserState, message: string, self: boolean) => void
      ): void; 
    on( event: "ban", 
        callback: (channel: string, username: string, reason: string) => void
      ): void; 
    on( event: "chat", 
        callback: (channel: string, userstate: UserState, message: string, self: boolean) => void
      ): void; 
    on( event: "cheer", 
        callback: (channel: string, userstate: UserState, message: string) => void
      ): void; 
    on( event: "clearchat", 
        callback: (channel: string) => void
      ): void; 
    on( event: "connected", 
        callback: (address: string, port: number) => void
      ): void; 
    on( event: "connecting", 
        callback: (address: string, port: number) => void
      ): void; 
    on( event: "disconnected", 
        callback: (reason: string) => void
      ): void; 
    on( event: "emoteonly", 
        callback: (channel: string, enabled: boolean) => void
      ): void; 
    on( event: "emotesets", 
        callback: (sets: string, obj: any) => void
      ): void; 
    on( event: "followersonly", 
        callback: (channel: string, enabled: boolean, length: number) => void
      ): void; 
    on( event: "hosted", 
        callback: (channel: string, username: string, viewers: number, autohost: boolean) => void
      ): void;
    on( event: "hosting", 
        callback: (channel: string, target: string, viewers: number) => void
      ): void; 
    on( event: "join", 
        callback: (channel: string, username: string, self: boolean) => void
      ): void;
    on( event: "logon", 
        callback: () => void
      ): void;
    on( event: "message", 
        callback: (channel: string, userstate: UserState, message: string, self: boolean) => void
      ): void;
    on( event: "mod", 
        callback: (channel: string, username: string) => void
      ): void;
    on( event: "mods", 
        callback: (channel: string, mods: string[]) => void
      ): void;
    on( event: "notice", 
        callback: (channel: string, msgid: string, message: string) => void
      ): void;
    on( event: "part", 
        callback: (channel: string, username: string, self: boolean) => void
      ): void;
    on( event: "ping", 
        callback: () => void
      ): void;
    on( event: "pong", 
        callback: () => void
      ): void;
    on( event: "r9kbeta", 
        callback: (channel: string, enabled: boolean) => void
      ): void;
    on( event: "reconnect", 
        callback: () => void
      ): void;
    on( event: "resub", 
        callback: (channel: string, username: string, months: number, message: string, userstate: UserState, methods: any) => void
      ): void;
    on( event: "roomstate", 
        callback: (channel: string, state: ChannelState) => void
      ): void;
    on( event: "serverchange", 
        callback: (channel: string) => void
      ): void;
    on( event: "slowmode", 
        callback: (channel: string, enabled: boolean, length: number) => void
      ): void;
    on( event: "subscribers", 
        callback: (channel: string, enabled: boolean) => void
      ): void;
    on( event: "subscription", 
        callback: (channel: string, username: string, method: any, message: string, userstate: UserState) => void
      ): void;
    on( event: "timeout", 
        callback: (channel: string, username: string, reason: string, duration: number) => void
      ): void;
    on( event: "unhost", 
        callback: (channel: string, viewers: number) => void
      ): void;
    on( event: "unmod", 
        callback: (channel: string, username: string) => void
      ): void;
    on( event: "whisper", 
        callback: (from: string, userstate: UserState, message: string, self: boolean) => void
      ): void;

    /* Actions */
    action(channel: string, message: string): Promise<any>;
    ban(channel: string, username: string, reason?: string): Promise<any>;
    clear(channel: string): Promise<any>;
    color(color: string): Promise<any>;
    commercial(channel: string, seconds: number): Promise<any>;
    connect(): Promise<any>;
    disconnect(): Promise<any>;
    emoteonly(channel: string): Promise<any>;
    emoteonlyoff(channel: string): Promise<any>;
    followersonly(channel: string, length?: number): Promise<any>;
    followersonlyoff(channel: string): Promise<any>;
    host(channel: string, target: string): Promise<any>;
    join(channel: string): Promise<any>;
    mod(channel: string, username: string): Promise<any>;
    mods(channel: string): Promise<any>;
    part(channel: string): Promise<any>;
    ping(): Promise<any>;
    r9kbeta(channel: string): Promise<any>;
    r9kbetaoff(channel: string): Promise<any>;
    raw(message: string): Promise<any>;
    say(channel: string, message: string): Promise<any>;
    slow(channel: string, length?: number): Promise<any>;
    slowoff(channel: string): Promise<any>;
    subscribers(channel: string): Promise<any>;
    subscribersoff(channel: string): Promise<any>;
    timeout(channel: string, username: string, length?: number, reason?: string): Promise<any>;
    unban(channel: string, username: string): Promise<any>;
    unhost(channel: string): Promise<any>;
    unmod(channel: string, username: string): Promise<any>;
    whisper(username: string, message: string): Promise<any>;
}
