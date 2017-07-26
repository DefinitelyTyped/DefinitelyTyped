// Type definitions for redux-batched-subscribe 0.1
// Project: https://github.com/tappleby/redux-batched-subscribe
// Definitions by: Dibyo Majumdar <https://github.com/mDibyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { GenericStoreEnhancer } from 'redux';

export function batchedSubscribe(batch: (notify: () => void) => void): GenericStoreEnhancer;
