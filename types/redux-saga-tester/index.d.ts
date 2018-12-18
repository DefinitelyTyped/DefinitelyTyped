// Type definitions for redux-saga-tester 1.0
// Project: https://github.com/wix/redux-saga-tester#readme
// Definitions by: Ben Lorantfy <https://github.com/BenLorantfy>, Law Smith <https://github.com/lawsumisu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Task } from 'redux-saga';
import { AnyAction, Middleware, Reducer, ReducersMapObject } from 'redux';

export type SagaFunction = (...args: any[]) => any;

export interface SagaTesterOptions<StateType> {
    initialState?: StateType;
    reducers?: ReducersMapObject | Reducer<StateType>;
    middlewares?: Middleware[];
    combineReducers?: (map: ReducersMapObject) => Reducer<StateType>;
    ignoreReduxActions?: boolean;
    options?: object;
}

export default class SagaTester<StateType extends object> {
    constructor(options?: SagaTesterOptions<StateType>);

    /**
     * Starts execution of the provided saga.
     */
    start(saga: SagaFunction, ...args: any[]): Task;

    /**
     * Dispatches an action to the redux store.
     */
    dispatch(action: AnyAction): void;

    /**
     * Assigns the newState into the current state. (Only works with the default reducer.)
     */
    updateState(state: StateType): void;

    /**
     * Returns the state of the redux store.
     */
    getState(): StateType;

    /**
     * Returns a promise that will resolve if the specified action is dispatched to the store.
     * @param futureOnly Causes waitFor to only resolve if the action is called in the future.
     */
    waitFor(actionType: string, futureOnly?: boolean): PromiseLike<void>;

    /**
     * Returns whether the specified was dispatched in the past.
     */
    wasCalled(actionType: string): boolean;

    /**
     * Returns the number of times an action with the given type was dispatched.
     */
    numCalled(actionType: string): number;

    /**
     * Returns the last action dispatched to the store.
     */
    getLatestCalledAction(): AnyAction;

    /**
     * Returns an array of all actions dispatched.
     */
    getCalledActions(): AnyAction[];

    /**
     * Reset the store state back to initialState
     * @param clearActionList Clears the history of past actions (defaults to false).
     */
    reset(clearActionList?: boolean): void;
}
