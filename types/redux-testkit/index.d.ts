import * as Redux from "redux";
import { ThunkAction } from "redux-thunk";

export interface ReducerTestkit {
    expect: (action: Redux.Action) => {
        toReturnState(expected: any): void;
        toStayTheSame(): void;
        toChangeInState(expectedChanges: any): void;
    };
    execute(action: Redux.Action): any; // state
}

export interface ThunkTestkit {
    execute(...args: any[]): any;
}

export function Reducer(action: Redux.Reducer): ReducerTestkit & {
    withState(state: any): ReducerTestkit;
};

export function Selector(selector: (state: any, action: any) => any): {
    expect(state: any, ...args: any[]): {
        toReturn(expected: any): void;
    };
    execute(state: any, ...args: any[]): any;
};

export function Thunk(thunkFunc: ThunkAction<any, any, any, any>, extraArg?: any): ThunkTestkit & {
    withState(state: any): ThunkTestkit;
};

export namespace FlushThunks {
    function createMiddleware(): Redux.Middleware & {
        flush(): void;
        reset(): void;
    };
}
