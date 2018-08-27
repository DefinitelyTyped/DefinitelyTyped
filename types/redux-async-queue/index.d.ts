// Type definitions for redux-async-queue 1.0
// Project: https://github.com/zackargyle/redux-async-queue
// Definitions by: Andrei Horodinca <https://github.com/andreiho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Store, AnyAction } from 'redux';

declare function queueMiddleware(store: Store): (next: (action: AnyAction) => any) => any;

export default queueMiddleware;