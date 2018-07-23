import SagaTester from 'redux-saga-tester';

// constructor with all options
new SagaTester({
  initialState: {
    orders: [],
  },
  reducers: {
    orders: (state, action) => state,
  },
  middlewares: [
    ({ dispatch, getState }) => (next) => (action: { type: string }) => {
      dispatch({ type: 'BLA' });
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
  reducers: (state, action) => state,
});

// constructor with no options
interface MockStateType {
  orders: Array<{ name: string }>;
}
const sagaTester = new SagaTester<MockStateType>({ initialState: { orders: [] }});

// start
function* fakeSaga() {
  return 23;
}

sagaTester.start(fakeSaga);

// dispatch
sagaTester.dispatch({ type: 'LOAD_ORDERS', orders: [] });

// updateState
sagaTester.updateState({ orders: [] });

// getState
sagaTester.getState().orders;

// waitFor
sagaTester.waitFor('LOAD_ORDERS').then(() => {});
sagaTester.waitFor('LOAD_ORDERS', true).then(() => {});

// wasCalled
sagaTester.wasCalled("LOAD_ORDERS");

// numCalled
sagaTester.numCalled("LOAD_ORDERS") === 1;

// getLatestCalledAction
sagaTester.getLatestCalledAction().type;

// getCalledActions
sagaTester.getCalledActions()[0].type;

// getCalledActions
sagaTester.reset();
sagaTester.reset(true);
