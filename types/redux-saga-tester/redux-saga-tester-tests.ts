import SagaTester from 'redux-saga-tester';
import { AnyAction, Dispatch } from 'redux'; // tslint:disable-line

// constructor with all options
new SagaTester({
    initialState: {
        orders: [],
    },
    reducers: {
        orders: (state: any, action: AnyAction) => state,
    },
    middlewares: [
        ({ dispatch, getState }: any) => (next: any) => (action: AnyAction) => {
            dispatch({type: 'BLA'});
            getState();

            return next(action);
        },
    ],
    ignoreReduxActions: false,
    options: {
        a: 23,
    },
});

// constructor with function as reducers
new SagaTester({
    reducers: (state: any = {}, action: AnyAction) => state,
});

// constructor with reducer map
new SagaTester({
    reducers: {
        a: (state: any, action: AnyAction) => state,
        b: (state: any, action: AnyAction) => state,
        c: (state: any, action: AnyAction) => state,
    }
});

// constructor with no options
interface MockStateType {
    orders: Array<{ name: string }>;
}

const sagaTester = new SagaTester<MockStateType>({initialState: {orders: []}});

// start
function* fakeSaga() {
    return 23;
}

function* fakeSagaWithParams(param1: string, param2: number) {
    return param1.length > param2;
}

sagaTester.start(fakeSaga);
sagaTester.start(fakeSagaWithParams, 'foo', 3);

// dispatch
sagaTester.dispatch({type: 'LOAD_ORDERS', orders: []});

// updateState
sagaTester.updateState({orders: []});

// getState
sagaTester.getState().orders;

// waitFor
sagaTester.waitFor('LOAD_ORDERS').then(() => {
});
sagaTester.waitFor<AnyAction>('LOAD_ORDERS', true).then(() => {
});

// wasCalled
sagaTester.wasCalled('LOAD_ORDERS');

// numCalled
sagaTester.numCalled('LOAD_ORDERS') === 1;

// getLatestCalledAction
sagaTester.getLatestCalledAction().type;

// getCalledActions
sagaTester.getCalledActions()[0].type;

// getCalledActions
sagaTester.reset();
sagaTester.reset(true);

// getState
const state = sagaTester.getState();
state.orders.length;
state.orders[0].name;
