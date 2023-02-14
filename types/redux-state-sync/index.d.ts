// Type definitions for redux-state-sync 3.1
// Project: https://github.com/AOHUA/redux-state-sync#readme
// Definitions by: MU AOHUA <https://github.com/AOHUA>
//                 AntonioMendez <https://github.com/AntonioMendez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Store, Reducer, Middleware, AnyAction } from "redux";
import BroadcastChannel, { BroadcastChannelOptions } from "broadcast-channel";

export const GET_INIT_STATE = '&_GET_INIT_STATE';
export const SEND_INIT_STATE = '&_SEND_INIT_STATE';
export const RECEIVE_INIT_STATE = '&_RECEIVE_INIT_STATE';
export const INIT_MESSAGE_LISTENER = '&_INIT_MESSAGE_LISTENER';
export const WINDOW_STATE_SYNC_ID: string;

export interface Stamp {
    $uuid: string;
    $wuid: string;
    $isSync: boolean;
}
export type StampedAction = Stamp & AnyAction;

export interface Config {
    channel?: string | undefined;
    predicate?: ((action: AnyAction) => boolean | null) | undefined;
    blacklist?: string[] | undefined;
    whitelist?: string[] | undefined;
    broadcastChannelOption?: BroadcastChannelOptions | undefined;
    prepareState?: ((state: any) => any) | undefined;
    receiveState?: ((prevState: any, nextState: any) => any) | undefined;
}

export interface MessageListenerConfig {
    channel: BroadcastChannel;
    dispatch: (action: AnyAction | StampedAction) => void;
    allowed: (action: AnyAction) => boolean;
}

export function generateUuidForAction(action: AnyAction): StampedAction;
export function isActionAllowed(config: Config): (type: string) => boolean;
export function createMessageListener(config: MessageListenerConfig): void;
export function createStateSyncMiddleware(config?: Config): Middleware;
export function withReduxStateSync<T extends Reducer>(
    appReducer: T,
    prepareInitialStateForStore?: Config['receiveState'],
): T;
export function initStateWithPrevTab(store: Store): Store;
export function initMessageListener(store: Store): Store;
export function isActionSynced(action: AnyAction): boolean;

/** @deprecated Undocumented alias to withReduxStateSync */
export const createReduxStateSync: typeof withReduxStateSync;
