import { Store, StoreEnhancer } from "redux";

export type NotifyFunction = () => void;
export type BatchFunction = (notify: NotifyFunction) => void;

export interface StoreExtension {
    subscribeImmediate: Store["subscribe"];
}

export function batchedSubscribe(batch: BatchFunction): StoreEnhancer<StoreExtension>;
