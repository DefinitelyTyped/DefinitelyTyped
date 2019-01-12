// Type definitions for redux-state-sync 2.0
// Project: https://github.com/AOHUA/redux-state-sync#readme
// Definitions by: MU AOHUA <https://github.com/AOHUA>
//                 AntonioMendez <https://github.com/AntonioMendez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "redux-state-sync" {
    import { Store, Reducer, Middleware, AnyAction } from "redux";
    import BroadcastChannel from "broadcast-channel";

    export let lastUuid: number;
    export const GET_INIT_STATE: string;
    export const SEND_INIT_STATE: string;
    export const RECEIVE_INIT_STATE: string;

    type Stamp = {
        $uuid: string;
        $wuid: string;
    };
    export type StampedAction = Stamp & AnyAction;

    export interface Config {
        channel?: string;
        predicate?: Function | null;
        blacklist?: Array<string>;
        whitelist?: Array<string>;
        broadcastChannelOption?: object | null;
    }

    export interface MessageListenerConfig {
        channel: BroadcastChannel;
        dispatch: (action: AnyAction | StampedAction) => void;
        allowed: (type?: string) => boolean;
    }

    export const defaultConfig: Config;
    export const WINDOW_STATE_SYNC_ID: string;
    export let isMessageListenerCreated: boolean;

    export function myMethod(a: string): string;
    export function myOtherMethod(a: number): number;

    export function getIniteState(): AnyAction;
    export function sendIniteState(): AnyAction;
    export function receiveIniteState<S>(store: Store<S>): AnyAction;
    export function s4(): string;
    export function guid(): string;

    export function generateUuidForAction(action: AnyAction): StampedAction;
    export function isActionAllowed(config: Config): (type?: any) => boolean;
    export function createMessageListener(config: MessageListenerConfig): void;
    export function createStateSyncMiddleware(config?: Config): Middleware;
    export function withReduxStateSync<S>(
        appReducer: Reducer<S>
    ): (state: any, action: AnyAction) => Reducer<S>;
    export function initStateWithPrevTab<S>(store: Store<S>): Store<S>;
}
