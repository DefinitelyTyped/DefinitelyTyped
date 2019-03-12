// Type definitions for redux-batched-subscribe 0.1
// Project: https://github.com/tappleby/redux-batched-subscribe
// Definitions by: Dibyo Majumdar <https://github.com/mDibyo>
//                 Aziz Khambati <https://github.com/azizhk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Store, StoreEnhancer, Action, AnyAction } from "redux";

export type NotifyFunction = () => void;
export type BatchFunction = (notify: NotifyFunction) => void;

export interface StoreExtension<S = any, A extends Action = AnyAction> {
    subscribeImmediate: Store<S, A>["subscribe"];
}

export function batchedSubscribe<S = any, A extends Action = AnyAction>(batch: BatchFunction): StoreEnhancer<StoreExtension<S, A>>;
