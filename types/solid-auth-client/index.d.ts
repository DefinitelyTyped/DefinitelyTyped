// Type definitions for solid-auth-client 2.3
// Project: https://github.com/solid/solid-auth-client#readme
// Definitions by: Vincent <https://github.com/Vinnl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
import { EventEmitter } from 'events';

export interface Session {
    webId: string;
}
export interface SolidAuthClient extends EventEmitter {
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    currentSession(): Promise<Session | undefined>;
    trackSession(callback: (session?: Session) => void): void;
    login(identityProvider: string): Promise<void>;
    logout(): Promise<void>;
    popupLogin(params: { popupUri: string }): Promise<Session>;
}

declare const instantiated: SolidAuthClient;
export default instantiated;
