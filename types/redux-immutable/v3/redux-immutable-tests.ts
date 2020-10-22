
import { combineReducers } from 'redux-immutable';
import { Map, List } from 'immutable';

// Dummy State interface
interface State { };

/**
 * Combine reducers should work with only one argument (a reducers object).
 */
combineReducers({});
combineReducers<State>({});

/**
 * Combine reducers should accepts a function (getDefaultState()) as a second parameter, that returns an immutable Collection.Keyed collection.
 */
combineReducers<State, string>({}, () => { return Map<string, State>(); });
combineReducers<State, number>({}, () => { return Map<number, State>(); });
/**
 * Combine reducers should accepts a function (getDefaultState()) as a second parameter, that returns an immutable Collection.Indexed collection.
 */
combineReducers<State>({}, () => { return List<State>(); });
