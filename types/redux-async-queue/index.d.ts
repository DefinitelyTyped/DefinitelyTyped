import { Action, AnyAction, Dispatch } from "redux";

export interface AsyncQueueAction<T extends Action = AnyAction> {
    queue: string;
    callback: (next: () => void, dispatch: Dispatch<T>) => void;
}

declare function queueMiddleware(): (next: (action: AnyAction) => any) => any;

export default queueMiddleware;
