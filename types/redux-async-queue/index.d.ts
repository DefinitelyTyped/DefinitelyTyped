// Type definitions for redux-async-queue 1.0
// Project: https://github.com/zackargyle/redux-async-queue
// Definitions by: Andrei Horodinca <https://github.com/andreiho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { AnyAction } from 'redux';

declare function queueMiddleware(): (next: (action: AnyAction) => any) => any;

export default queueMiddleware;
