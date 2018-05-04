import { Reducer, Selector, FlushThunks, Thunk } from 'redux-testkit';
import { Action, Dispatch } from 'redux';

interface SimpleState {
	currentState: string;
	numbers: number[];
}

const TO_FINISH_STATE = 'TO_FINISH_STATE';
const TO_INITIAL_STATE = 'TO_INITIAL_STATE';
const ODD_NUMBERS = 'ODD_NUMBERS';
const EVEN_NUMBERS = 'EVEN_NUMBERS';

const simpleState: SimpleState = {
	currentState: "initial",
	numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
};

const simpleAction = (state: SimpleState = simpleState, action: Action): SimpleState => {
	if (action.type === TO_FINISH_STATE) {
		return {...state, currentState: 'finish'};
	}

	if (action.type === TO_INITIAL_STATE) {
		return {...state, currentState: 'initial'};
	}

	return state;
};

const getNumbers = (state: SimpleState = simpleState, type: string): number[] => {
	return state.numbers.filter(element => {
		const division = element % 2;

		if (division === 0 && type === ODD_NUMBERS) {
			return element;
		}

		if (division !== 0 && type === EVEN_NUMBERS) {
			return element;
		}
	});
};

const thunkAction1: Action = {
	type: TO_FINISH_STATE
};

const thunkAction2: Action = {
	type: TO_INITIAL_STATE
};

const thunk = () => {
	return (dispatch: Dispatch<Action>): void => {
		dispatch(thunkAction1);
		dispatch(thunkAction2);
	};
};

Reducer(simpleAction).expect({ type: 'WRONG_TYPE' }).toStayTheSame();
Reducer(simpleAction).withState(simpleState).expect({ type: TO_FINISH_STATE }).toChangeInState({ currentState: 'finish' });
Reducer(simpleAction).expect({ type: TO_INITIAL_STATE }).toReturnState(simpleState);

Selector(getNumbers).expect(simpleState, EVEN_NUMBERS).toReturn([2, 4, 6, 8]);
Selector(getNumbers).execute(simpleState, ODD_NUMBERS);

Thunk(thunk).execute();
Thunk(thunk).withState(simpleState).execute();
