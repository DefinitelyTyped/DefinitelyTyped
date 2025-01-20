/// <reference types="node" />

import { EventEmitter } from "events";

export = Steam;

declare namespace Steam {
    export var servers: any;

    export interface LogonOptions {
        accountName: string;
        password: string;
        shaSentryfile?: string | undefined;
        authCode?: string | undefined;
    }

    export enum EResult {
        AccountLogonDenied,
    }

    export enum EPersonaState {
        Online,
    }

    export enum EChatEntryType {
        ChatMsg,
    }

    export enum EChatMemberStateChange {
        Kicked,
    }

    export class SteamClient extends EventEmitter {
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
