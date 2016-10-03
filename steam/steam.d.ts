﻿// Type definitions for steam
// Project: https://github.com/seishun/node-steam
// Definitions by: Andrey Kurdyumov <https://github.com/kant2002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Steam {
    export var servers: any;

    export interface LogonOptions {
        accountName: string;
        password: string;
        shaSentryfile?: string;
        authCode?: string;
    }

    export enum EResult {
        AccountLogonDenied
    }

    export enum EPersonaState {
        Online
    }

    export enum EChatEntryType {
        ChatMsg
    }

    export enum EChatMemberStateChange {
        Kicked
    }

    export class SteamClient extends NodeJS.EventEmitter {
        sessionId: string;
        cookie: string[];
        steamID: string;
        users: {};

        logOn(options: LogonOptions): void;
        webLogOn(callback: (cookie: any[]) => void): void;

        joinChat(chatId: string): void;
        sendMessage(source: any, message: string, entryType: EChatEntryType): void;

        setPersonaState(state: EPersonaState): void;
        setPersonaName(name: string): void;

        // Event emitter
        addListener(event: string, listener: Function): this;
        on(event: string, listener: Function): this;
        once(event: string, listener: Function): this;
        removeListener(event: string, listener: Function): this;
        removeAllListeners(event?: string): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}

declare module "steam" {
    export = Steam;
}

