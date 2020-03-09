// Type definitions for use-persisted-state 0.3
// Project: https://github.com/donavon/use-persisted-state#readme
// Definitions by: Karol Majewski <https://github.com/karol-majewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { useState } from 'react';

declare function createPersistedState(key: string, provider?: Pick<Storage, 'getItem' | 'setItem'>): typeof useState;

export as namespace createPersistedState;
export default createPersistedState;
