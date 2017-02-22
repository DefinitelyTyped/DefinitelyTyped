import {
	Reducer,
	Action,
} from 'redux';
import reduceReducers from 'reduce-reducers';

interface ITestStore {
	a: number,
	b: string
}
let firstReducer: (state: ITestStore, action: Action) => ITestStore = (a, b) => a;
let secondReducer: (state: ITestStore, action: Action) => ITestStore = (a, b) => a
let finalReducer: (state: ITestStore, action: Action) => ITestStore = reduceReducers(firstReducer, secondReducer);
