
import { combineReducers } from 'redux-immutable';
import { Map, List, Record } from 'immutable';
import { AnyAction } from 'redux';

// Dummy State interface
interface State { };

/**
 * Combine reducers should work with only one argument (a reducers object).
 */
combineReducers({});
combineReducers<State>({});

/**
 * Combine reducers support reducer with custom action
 */
combineReducers<State, { type: string; payload: number | string}>({
    reducerNumber: (state: number, action: { type: string; payload: number }) => {
        switch(action.type) {
            case 'multiply': return state * action.payload
            default: return state
        }
    },
    reducerString: (state: string, action: { type: string; payload: string }) => {
        switch(action.type) {
            case 'concat': return state.concat(action.payload)
            default: return state
        }
    },
});

/**
 * Combine reducers should accept a function (getDefaultState()) as a second parameter, that returns an immutable Collection.Keyed collection.
 */
combineReducers<State, AnyAction, string>({}, () => { return Map<string, State>(); });
combineReducers<State, AnyAction, number>({}, () => { return Map<number, State>(); });
/**
 * Combine reducers should accept a function (getDefaultState()) as a second parameter, that returns an immutable Collection.Indexed collection.
 */
combineReducers<State>({}, () => { return List<State>(); });
/**
 * Combine reducers should accept an immutable Record factory as a second parameter.
 */
combineReducers<State, object>({}, Record({}));
