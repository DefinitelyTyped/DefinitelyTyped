import { EventEmitter } from "events";

export interface Session {
    webId: string;
}

export interface AsyncStorage {
    getItem(key: string): Promise<undefined | string>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}

interface LoginOptions {
    callbackUri?: string | undefined;
    popupUri?: string | undefined;
    storage?: Storage | AsyncStorage | undefined;
}

export interface SolidAuthClient extends EventEmitter {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    currentSession(storage?: AsyncStorage): Promise<Session | undefined>;
    trackSession(callback: (session?: Session) => void): Promise<void>;
    stopTrackSession(callback: (session?: Session) => void): void;
    login(identityProvider: string, options?: LoginOptions): Promise<void>;
    logout(storage?: AsyncStorage): Promise<void>;
    popupLogin(params?: LoginOptions): Promise<Session>;
}

declare const instantiated: SolidAuthClient;
export default instantiated;
