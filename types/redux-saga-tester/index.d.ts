// Type definitions for redux-saga-tester 1.0
// Project: https://github.com/wix/redux-saga-tester#readme
// Definitions by: Ben Lorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export interface AnyObject {
    [key: string]: any;
}

export type AnyAction = { type: string, [key: string]: any };
export type AnyGenerator = Function;
export type Reducer = (state: AnyObject, action: AnyAction) => AnyObject;
export interface ReducerMap {
    [key: string]: Reducer;
}

export interface SagaTesterOptions<StateType extends AnyObject> {
    initialState?: StateType,
    reducers?: ReducerMap|Reducer,
    middlewares?: Function[],
    combineReducers?: (map: ReducerMap) => Reducer,
    ignoreReduxActions?: boolean,
    options?: AnyObject
}

export default class SagaTester<StateType extends AnyObject> {
    constructor(options?: SagaTesterOptions<StateType>);
    start(saga: AnyGenerator): void;
    dispatch(action: AnyAction): void;
    updateState(state: StateType): void;
    getState(): StateType;
    waitFor(actionType: string, futureOnly?: boolean): PromiseLike<void>;
    wasCalled(actionType: string): boolean;
    numCalled(actionType: string): number;
    getLatestCalledAction(): AnyAction;
    getCalledActions(): AnyAction[];
    reset(clearActionList?: boolean): void;
}
