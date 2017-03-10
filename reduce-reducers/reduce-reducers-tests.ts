import {
	Reducer,
	Action,
} from 'redux';
import reduceReducers from 'reduce-reducers';

interface TestStore {
	a: number,
	b: string
}
let firstReducer: (state: TestStore, action: Action) => TestStore = (a, b) => a;
let secondReducer: (state: TestStore, action: Action) => TestStore = (a, b) => a
let finalReducer: (state: TestStore, action: Action) => TestStore = reduceReducers(firstReducer, secondReducer);
