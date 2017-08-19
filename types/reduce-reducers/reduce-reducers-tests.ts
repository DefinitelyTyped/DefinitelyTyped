import {
	Reducer,
	Action,
} from 'redux';
import reduceReducers from 'reduce-reducers';

interface TestStore {
	a: number;
	b: string;
}
const firstReducer: (state: TestStore, action: Action) => TestStore = (a, b) => a;
const secondReducer: (state: TestStore, action: Action) => TestStore = (a, b) => a;
const finalReducer: (state: TestStore, action: Action) => TestStore = reduceReducers(firstReducer, secondReducer);
