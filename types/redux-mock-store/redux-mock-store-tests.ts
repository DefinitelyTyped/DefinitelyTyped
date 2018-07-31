import * as Redux from 'redux';
import configureStore, { MockStore, MockStoreCreator } from 'redux-mock-store';

// Redux store API tests
// The following test are taken from ../redux/redux-tests.ts
function counter(state: any, action: any) {
    if (!state) {
        state = 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function loggingMiddleware() {
    return (next: Redux.Dispatch<Redux.AnyAction>) => (action: any) => {
        console.log(action.type);
        return next(action);
    };
}

const mockStoreCreator: MockStoreCreator<number> = configureStore<number>([loggingMiddleware]);
const initialState = 0;

const store: MockStore<number> = mockStoreCreator(initialState);

store.subscribe(() => {
    // ...
});

store.dispatch({ type: 'INCREMENT' });

// Additional mock store API tests
const actions: any[] = store.getActions();

store.clearActions();

// actions access without the need to cast
const actions2 = store.getActions();
actions2[10].payload.id;
