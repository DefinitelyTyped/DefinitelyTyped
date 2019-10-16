import {
    Reducer,
    Action,
} from 'redux';
import reduceReducers from 'reduce-reducers';

interface TestStore {
    a: number;
    b: string;
}
const firstReducer: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const secondReducer: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const finalReducer: (state: TestStore, action: Action) => TestStore = reduceReducers(firstReducer, secondReducer);
const finalReducerWithState: (state: TestStore, action: Action) => TestStore = reduceReducers(firstReducer, secondReducer, null);

const initialState: TestStore = {
    a: 1,
    b: '2',
};

const finalReducerWithInitialState: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    initialState);

const reducer02: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer03: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer04: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer05: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer06: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer07: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer08: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});
const reducer09: Reducer<TestStore, Action> = (store, action) => ({a: 0, b: ''});

const finalReducerWithInitialState02: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    initialState);
const finalReducerWithInitialState02null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    null);

const finalReducerWithInitialState03: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    initialState);
const finalReducerWithInitialState03null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    null);

const finalReducerWithInitialState04: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    initialState);
const finalReducerWithInitialState04null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    null);

const finalReducerWithInitialState05: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    initialState);
const finalReducerWithInitialState05null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    null);

const finalReducerWithInitialState06: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    initialState);
const finalReducerWithInitialState06null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    null);

const finalReducerWithInitialState07: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    initialState);
const finalReducerWithInitialState07null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    null);

const finalReducerWithInitialState08: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    reducer08,
    initialState);
const finalReducerWithInitialState08null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    reducer08,
    null);

const finalReducerWithoutInitialState09: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    reducer08,
    reducer09);
const finalReducerWithInitialState09: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    reducer08,
    reducer09,
    initialState);
const finalReducerWithInitialState09null: (state: TestStore, action: Action) => TestStore = reduceReducers(
    firstReducer,
    secondReducer,
    reducer02,
    reducer03,
    reducer04,
    reducer05,
    reducer06,
    reducer07,
    reducer08,
    reducer09,
    null);
