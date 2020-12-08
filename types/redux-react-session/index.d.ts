// Type definitions for redux-react-session 2.6.1
// Project: https://github.com/bernabe9/redux-react-session
// Definitions by: João Neto <https://github.com/joaomlneto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Reducer, Dispatch, Action, Store } from "redux";

const GET_SESSION_SUCCESS = '@@redux-react-session/GET_SESSION_SUCCESS'
const GET_SESSION_ERROR = '@@redux-react-session/GET_SESSION_ERROR'
const GET_USER_SESSION_SUCCESS = '@@redux-react-session/GET_USER_SESSION_SUCCESS'
const GET_USER_SESSION_ERROR = '@@redux-react-session/GET_USER_SESSION_ERROR'
const INVALID_SESSION = '@@redux-react-session/INVALID_SESSION'

interface StoreType {
  dispatch: Dispatch
}

type CookiesType = any

interface GetSessionSuccessAction extends Action {
  type: typeof GET_SESSION_SUCCESS
}

interface GetSessionErrorAction extends Action {
  type: typeof GET_SESSION_ERROR
}

interface GetUserSessionSuccessAction<UserType> extends Action {
  type: typeof GET_USER_SESSION_SUCCESS
  user: UserType
}

interface GetUserSessionErrorAction extends Action {
  type: typeof GET_USER_SESSION_ERROR
}

interface InvalidSessionAction extends Action {
  type: typeof INVALID_SESSION
}

export type ActionTypes<UserType> = GetSessionSuccessAction | GetSessionErrorAction | GetUserSessionSuccessAction<UserType> | GetUserSessionErrorAction | InvalidSessionAction

export interface ReduxReactSessionState<UserType> {
  authenticated: boolean,
  checked: boolean,
  invalid: boolean,
  user: UserType
}

export const initialState : ReduxReactSessionState = {
  authenticated: false,
  checked: false,
  invalid: false,
  user: {}
}

export interface SessionServiceOptions {
  driver: any
  validateSession: Function
  refreshOnCheckAuth: boolean
  expires: number
}

export class sessionService<SessionType, UserType extends Object> implements Reducer<ReduxReactSessionState,AnyAction> {
  constructor(store: StoreType, options?: SessionServiceOptions);
  static setOptions(store: StoreType, options?: SessionServiceOptions) : void;
  static initSessionService(store: StoreType, options?: SessionServiceOptions) : Promise;
  static saveFromClient(cookies: CookiesType);
  static invalidateSession(): void;
  static attemptLoadUser(): Promise;
  static refreshFromLocalStorage(): Promise;
  static checkAuth(nextState: any, replace: any, next: any): void;
  static saveSession(session: SessionType) : Promise;
  static loadSession() : Promise;
  static deleteSession() : Promise;
  static saveUser(user: UserType) : Promise;
  static loadUser() : Promise;
  static deleteUser() : Promise;
}

export function sessionReducer<UserType>(state : ReduxReactSessionState<UserType> = initialState, action: Action) : any;