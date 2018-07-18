// Type definitions for redux-saga-tester 1.0
// Project: https://github.com/wix/redux-saga-tester#readme
// Definitions by: Ben Lorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type AnyAction = { type: string, [key: string]: any };
export type Reducer = (state: object, action: AnyAction) => object;
export interface ReducerMap {
    [key: string]: Reducer;
}

export interface SagaTesterOptions<StateType extends object> {
    initialState?: StateType,
    reducers?: ReducerMap|Reducer,
    middlewares?: Function[],
    combineReducers?: (map: ReducerMap) => Reducer,
    ignoreReduxActions?: boolean,
    options?: object
}

export default class SagaTester<StateType extends object> {
    constructor(options?: SagaTesterOptions<StateType>);
    start(saga: Function): void;
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
