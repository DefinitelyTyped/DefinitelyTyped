// Type definitions for redux-async-queue 1.0
// Project: https://github.com/zackargyle/redux-async-queue
// Definitions by: Andrei Horodinca <https://github.com/andreiho>
//                 Dean van Niekerk <https://github.com/deanvanniekerk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Action, AnyAction, Dispatch } from "redux";

export interface AsyncQueueAction<T extends Action = AnyAction> {
    queue: string;
    callback: (next: () => void, dispatch: Dispatch<T>) => void;
}

declare function queueMiddleware(): (next: (action: AnyAction) => any) => any;

export default queueMiddleware;
