// Type definitions for redux-react-session 2.6
// Project: https://github.com/bernabe9/redux-react-session
// Definitions by: João Neto <https://github.com/joaomlneto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Reducer, Action, Store } from 'redux';
import {
    GetSessionSuccessAction,
    GetSessionErrorAction,
    GetUserSessionSuccessAction,
    GetUserSessionErrorAction,
    InvalidSessionAction,
} from './actions';
import { SessionState } from './reducer';

export type ActionTypes<UserType> =
    | GetSessionSuccessAction
    | GetSessionErrorAction
    | GetUserSessionSuccessAction<UserType>
    | GetUserSessionErrorAction
    | InvalidSessionAction;

export interface SessionServiceOptions {
    driver: any;
    validateSession: (session: any) => boolean | Promise<boolean>;
    refreshOnCheckAuth: boolean;
    expires: number;
}

// tslint:disable-next-line:no-unnecessary-class
export class sessionService /*implements Reducer<SessionState, Action>*/ {
    constructor(store: Store, options?: SessionServiceOptions);
    static setOptions(store: Store, options?: SessionServiceOptions): void;
    static initSessionService(store: Store, options?: SessionServiceOptions): Promise<any>;
    static saveFromClient(cookies: any): any;
    static invalidateSession(): void;
    static attemptLoadUser(): Promise<any>;
    static refreshFromLocalStorage(): Promise<any>;
    static checkAuth(nextState: any, replace: any, next: any): void;
    static saveSession(session: any): Promise<any>;
    static loadSession(): Promise<any>;
    static deleteSession(): Promise<any>;
    static saveUser(user: any): Promise<any>;
    static loadUser(): Promise<any>;
    static deleteUser(): Promise<any>;
}

export function sessionReducer(state: SessionState, action: Action): any;
