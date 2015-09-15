/// <reference path="./redux-actions.d.ts" />

const minimalAction: ReduxActions.Action = { type: 'INCREMENT' };
const richerAction: ReduxActions.Action = {
    type: 'INCREMENT',
    payload: 2,
    error: false,
    meta: {
        remote: true
    }
};

const incrementAction: (...args: any[]) => ReduxActions.Action = ReduxActions.createAction<number>(
    'INCREMENT',
    (amount: number) => amount
);
const action: ReduxActions.Action = incrementAction(42);

    const incrementByAction: (...args: any[]) => ReduxActions.Action = ReduxActions.createAction<number>(
    'INCREMENT_BY',
    (amount: number) => amount,
    amount => ({ remote: true })
);

const incrementReducer = ReduxActions.handleAction(
    'INCREMENT',
    (state: number, action: ReduxActions.Action) => state + 1
);

const incrementByReducer = ReduxActions.handleAction(
    'INCREMENT_BY', {
    next(state: number, action: ReduxActions.Action) {
            return state + action.payload;
        },
        throw(state: number) { return state }
    }
);

const reducer = ReduxActions.handleActions<number>({
    'INCREMENT': (state: number, action: ReduxActions.Action) => state + 1,
        'DECREMENT': (state: number, action: ReduxActions.Action) => state - 1
});

const reducerWithInitialState = ReduxActions.handleActions<number>({
    'INCREMENT': (state: number, action: ReduxActions.Action) => state + 1,
        'DECREMENT': (state: number, action: ReduxActions.Action) => state - 1
}, 0);


