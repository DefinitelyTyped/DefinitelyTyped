// Type definitions for redux-state-sync 2.0
// Project: https://github.com/AOHUA/redux-state-sync#readme
// Definitions by: MU AOHUA <https://github.com/AOHUA>
//                 AntonioMendez <https://github.com/AntonioMendez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Store, Reducer, Middleware, AnyAction } from "redux";
import BroadcastChannel from "broadcast-channel";

export interface Stamp {
    $uuid: string;
    $wuid: string;
}
export type StampedAction = Stamp & AnyAction;

export interface Config {
    channel?: string;
    predicate?: (type?: string) => boolean | null;
    blacklist?: string[];
    whitelist?: string[];
    broadcastChannelOption?: object | null;
}

export interface MessageListenerConfig {
    channel: BroadcastChannel;
    dispatch: (action: AnyAction | StampedAction) => void;
    allowed: (type?: string) => boolean;
}

export function generateUuidForAction(action: AnyAction): StampedAction;
export function isActionAllowed(config: Config): (type: string) => boolean;
export function createMessageListener(config: MessageListenerConfig): void;
export function createStateSyncMiddleware(config?: Config): Middleware;
export function withReduxStateSync(
    appReducer: Reducer
): (state: any, action: AnyAction) => Reducer;
export function initStateWithPrevTab(store: Store): Store;
