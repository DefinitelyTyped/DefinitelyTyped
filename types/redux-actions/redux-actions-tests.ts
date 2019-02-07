import * as ReduxActions from 'redux-actions';

let state: number;
const minimalAction: ReduxActions.BaseAction = { type: 'INCREMENT' };

const incrementAction: () => ReduxActions.Action<number> = ReduxActions.createAction<number>(
    'INCREMENT', () => 1
);

const multiplyAction: (...args: number[]) => ReduxActions.Action<number> = ReduxActions.createAction<number>(
    'MULTIPLY'
);

const action: ReduxActions.Action<number> = incrementAction();

const actionHandler = ReduxActions.handleAction<number, number>(
    'INCREMENT',
    (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    0
);

state = actionHandler(0, incrementAction());

const actionHandlerWithReduceMap = ReduxActions.handleAction<number, number>(
    'MULTIPLY', {
        next(state: number, action: ReduxActions.Action<number>) {
            return state * action.payload;
        },
        throw(state: number) { return state; }
    },
    0
);

state = actionHandlerWithReduceMap(0, multiplyAction(10));

const actionsHandler = ReduxActions.handleActions({
    INCREMENT: (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    MULTIPLY: (state: number, action: ReduxActions.Action<number>) => state * action.payload
}, 0);

state = actionsHandler(0, { type: 'INCREMENT' });

const actionsHandlerWithInitialState = ReduxActions.handleActions({
    INCREMENT: {
        next: (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    },
    MULTIPLY: {
        next: (state: number, action: ReduxActions.Action<number>) => state * action.payload
    }
}, 0);

state = actionsHandlerWithInitialState(0, { type: 'INCREMENT' });

const actionsHandlerWithRecursiveReducerMap = ReduxActions.handleActions<number, number>({
    ADJUST: {
        UP: (state: number, action: ReduxActions.Action<number>) => state + action.payload,
        DOWN: (state: number, action: ReduxActions.Action<number>) => state - action.payload,
    }
}, 0);

state = actionsHandlerWithRecursiveReducerMap(0, { type: 'ADJUST/UP', payload: 1 });

const actionsHandlerWithOptions = ReduxActions.handleActions({
    INCREMENT: (state: number, action: ReduxActions.Action<number>) => state + action.payload,
    MULTIPLY: (state: number, action: ReduxActions.Action<number>) => state * action.payload
}, 0, {prefix: 'TEST'});

state = actionsHandlerWithOptions(0, { type: 'TEST/INCREMENT' });

const actionsHandlerWithRecursiveReducerMapAndOptions = ReduxActions.handleActions<number, number>({
    ADJUST: {
        UP: (state: number, action: ReduxActions.Action<number>) => state + action.payload,
        DOWN: (state: number, action: ReduxActions.Action<number>) => state - action.payload,
    }
}, 0, {namespace: '--'});

state = actionsHandlerWithRecursiveReducerMapAndOptions(0, { type: 'ADJUST--UP', payload: 1 });

// ----------------------------------------------------------------------------------------------------

interface TypedState {
    value: number;
}

interface TypedPayload {
    increase: number;
}

interface MetaType {
    remote: boolean;
}

let typedState: TypedState;

const richerAction: ReduxActions.ActionMeta<TypedState, MetaType> = {
    type: 'INCREMENT',
    error: false,
    payload: {
        value: 2
    },
    meta: {
        remote: true
    }
};

const typedIncrementAction: () => ReduxActions.Action<TypedPayload> = ReduxActions.createAction<TypedPayload>(
    'INCREMENT',
    () => ({ increase: 1 })
);

const typedActionHandler = ReduxActions.handleAction<TypedState, TypedPayload>(
    'INCREMENT',
    (state: TypedState, action: ReduxActions.Action<TypedPayload>) => ({ value: state.value + 1 }),
    {value: 1}
);

const actionNoArgs = typedIncrementAction();
actionNoArgs.payload.increase = 1;

typedState = typedActionHandler({ value: 0 }, actionNoArgs);

const typedIncrementAction1TypedArg: (value: number) =>
    ReduxActions.Action<TypedPayload> = ReduxActions.createAction<TypedPayload, number>(
        'INCREMENT',
        amount => ({ increase: amount })
    );

const actionFrom1Arg = typedIncrementAction1TypedArg(10);
actionFrom1Arg.payload.increase === 10;

const typedIncrementAction2TypedArgs: (numericAmount: number, stringAmount: string) =>
ReduxActions.Action<TypedPayload> = ReduxActions.createAction<TypedPayload, number, string>(
    'INCREMENT',
    (numericAmount, stringAmount) => ({ increase: numericAmount + parseInt(stringAmount, 10) })
);

const actionFrom2Args = typedIncrementAction2TypedArgs(10, '100');
actionFrom1Arg.payload.increase === 110;

const typedActionHandlerReducerMap = ReduxActions.handleActions(
    {
        INCREMENT: (state: TypedState, action: ReduxActions.Action<any>) => ({ value: state.value + 1 })
    },
    {value: 1}
);

typedState = typedActionHandlerReducerMap({ value: 0 }, actionFrom1Arg);

const typedIncrementByActionWithMetaAnyArgs: (...args: any[]) => ReduxActions.ActionMeta<TypedPayload, MetaType> =
    ReduxActions.createAction<TypedPayload, MetaType>(
        'INCREMENT_BY',
        amount => ({ increase: amount }),
        (_, remote) => ({ remote })
    );

const actionMetaFromAnyArgs = typedIncrementByActionWithMetaAnyArgs(10, true, 'nic', 'cage');
actionMetaFromAnyArgs.payload.increase === 10;
actionMetaFromAnyArgs.meta.remote;

const typedActionHandlerWithMeta = ReduxActions.handleAction<TypedState, TypedPayload, MetaType>(
    'INCREMENT_BY', {
        next(state: TypedState, action: ReduxActions.ActionMeta<TypedPayload, MetaType>) {
            return action.meta.remote ? state : { value: state.value + action.payload.increase };
        },
        throw(state: TypedState) { return state; }
    },
    {value: 1}
);

typedState = typedActionHandlerWithMeta({ value: 0 }, typedIncrementByActionWithMetaAnyArgs(10));

const typedActionHandlerReducerMetaMap = ReduxActions.handleActions<TypedState, TypedPayload, MetaType>(
    {
        INCREMENT_BY: {
            next(state: TypedState, action: ReduxActions.ActionMeta<TypedPayload, MetaType>) {
                return action.meta.remote ? state : { value: state.value + action.payload.increase };
            },
            throw(state: TypedState) { return state; }
        }
    },
    {value: 1}
);

typedState = typedActionHandlerReducerMetaMap({ value: 0 }, actionMetaFromAnyArgs);

const typedActionWithMeta1TypedArg: (value: number) => ReduxActions.ActionMeta<TypedPayload, MetaType> =
    ReduxActions.createAction(
        'INCREMENT_BY',
        amount => ({ increase: amount }),
        amount => ({ remote: true })
    );

const actionMetaFrom1Arg = typedActionWithMeta1TypedArg(10);
actionMetaFrom1Arg.payload.increase === 10;
actionMetaFrom1Arg.meta.remote;

typedState = typedActionHandlerReducerMetaMap({ value: 0 }, actionMetaFrom1Arg);

const typedActionWithMeta2TypedArgs: (value: number, remote: boolean) => ReduxActions.ActionMeta<TypedPayload, MetaType> =
    ReduxActions.createAction(
        'INCREMENT_BY',
        (amount, remote)  => ({ increase: amount }),
        (amount, remote) => ({ remote })
    );

const actionMetaFrom2Args = typedActionWithMeta2TypedArgs(10, true);
actionMetaFrom2Args.payload.increase === 10;
actionMetaFrom2Args.meta.remote;

typedState = typedActionHandlerReducerMetaMap({ value: 0 }, actionMetaFrom2Args);

const act0 = ReduxActions.createAction('ACTION0');
// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/__tests__/createAction-test.js#L111
act0().payload; // $ExpectType any
act0().payload === undefined;
// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/__tests__/createAction-test.js#L122
act0({ foo: 'bar' }).payload.foo === 'bar';

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/__tests__/createAction-test.js#L122
const act0_meta = ReduxActions.createAction('ACTION0_META', null, () => ({ foo: 'bar' }));
act0_meta().payload; // $ExpectType any
act0_meta().meta.foo === 'bar';

const act1 = ReduxActions.createAction<string>('ACTION1');
act1('hello').payload; // $ExpectType string
act1('hello').payload === 'hello';

const act1_meta = ReduxActions.createAction('ACTION1_META', null, (foo: string) => ({ foo }));
act1_meta('hello').payload; // $ExpectType any
act1_meta('hello').payload === 'hello';
act1_meta('hello').meta.foo === 'hello';

const act1_type_meta = ReduxActions.createAction('ACTION1_TYPE_META', (x: number) => x, () => ({ foo: 'bar' }));
act1_type_meta(42).payload; // $ExpectType number
act1_type_meta(42).meta.foo === 'bar';

const act1_identity = ReduxActions.createAction('ACTION1_IDENTITY', (x: string) => x);
act1_identity('hello').payload; // $ExpectType string
act1_identity('hello').payload === 'hello';

const act2 = ReduxActions.createAction('ACTION2', (s: {load: boolean}) => s);
act2({load: true}).payload.load; // $ExpectType boolean

const act3 = ReduxActions.createAction('ACTION3', (s: string) => ({s}));
act3('hello').payload.s === 'hello';

const act4 = ReduxActions.createAction('ACTION4', null, (x1: string, x2: number) => ({}));
act4('hello', 42).payload; // $ExpectType any
Object.getOwnPropertyNames(act4('hello', 42).payload).length === 2;

const act5 = ReduxActions.createAction('ACTION5', null, (...args: any[]) => ({}));
act5('hello', 42).payload; // $ExpectType any
Object.getOwnPropertyNames(act5('hello', 42).payload).length === 2;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/__tests__/createActions-test.js#L66
const { actions0_actionOne, actions0_actionTwo } = ReduxActions.createActions({
    ACTION_ONE: (key: string, value: number) => ({ [key]: value }),
    ACTION_TWO: (first: string, second: number) => ([first, second])
});
actions0_actionOne('value', 1).payload; // $ExpectType any
actions0_actionOne('value', 1).payload.value === 1;
actions0_actionTwo('value', 2).payload; // $ExpectType any
actions0_actionTwo('value', 2).payload[0] === 'value';
actions0_actionTwo('value', 2).payload[1] === 2;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/__tests__/createActions-test.js#L66
interface Actions1Payload {
    [key: string]: number;
}
const { actions1_actionOne } = ReduxActions.createActions({
    ACTION_ONE: (key: string, value: number): Actions1Payload => ({ [key]: value })
});
actions1_actionOne('value', 1).payload; // $ExpectType Actions1Payload
actions1_actionOne('value', 1).payload.value === 1;

const options: ReduxActions.Options = {
    prefix: 'TEST'
};
const { actions2_actionOne } = ReduxActions.createActions<any>('ACTION_ONE', options);
actions2_actionOne('value').payload; // $ExpectType any
actions2_actionOne('value').type === 'TEST/ACTION_ONE';

ReduxActions.handleAction<{ hello: string }, string>(act1, (state, action) => {
    return { hello: action.payload };
}, {hello: 'greetings'});

ReduxActions.handleAction<{ hello: { load: boolean } }, { load: boolean }>(act2, (state, action) => {
    return { hello: action.payload };
}, {hello: {load: true}});

ReduxActions.handleAction(act3, (state, action) => {
    return { hello: action.payload.s };
}, {hello: 'greetings'});

ReduxActions.handleAction(ReduxActions.combineActions(act1, act3, act2), (state, action) => state + 1, 0);

ReduxActions.handleActions({
    [`${ReduxActions.combineActions(act1, act3, act2)}`](state, action) {
        return state + 1;
    }
}, 0);

/* can't do this until it lands in 2.2, HKTs
ReduxActions.handleAction(act, (state, action) => {
    action.payload === 'hello'
    return {}
})

ReduxActions.handleAction(act2, (state, action) => {
    action.payload.load === true
    return {}
})

ReduxActions.handleAction(act3, (state, action) => {
    action.payload.s == 'hello'
    return {}
})*/
