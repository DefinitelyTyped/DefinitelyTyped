// Type definitions for redux-batched-subscribe 0.1
// Project: https://github.com/tappleby/redux-batched-subscribe
// Definitions by: Dibyo Majumdar <https://github.com/mDibyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { GenericStoreEnhancer } from 'redux';

export type NotifyFunction = () => void;
export type BatchFunction = (notify: NotifyFunction) => void;

export function batchedSubscribe(batch: BatchFunction): GenericStoreEnhancer;
