import { Action } from "redux";
import { OptimisticState, OptimisticAction, BEGIN, optimistic, ensureState } from "redux-optimistic-ui";

interface TestState {
    a: number;
    b: string;
}

declare const testState: TestState;
declare const optimisticState: OptimisticState<TestState>;

function myReducer(state: TestState, action: Action) {
    return state;
}

const optimisticReducer = optimistic(myReducer);

const nextState = optimisticReducer(optimisticState, { type: "test" });
nextState.current.a;
nextState.current.b;
nextState.beforeState;
nextState.history;

ensureState(testState).a;
ensureState(optimisticState).a;

const myOptimisticAction: Action & OptimisticAction = {
    type: "test",
    meta: {
        optimistic: {
            type: BEGIN,
            id: 1
        }
    }
}
