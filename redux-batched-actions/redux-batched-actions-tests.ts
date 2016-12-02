import { Reducer, createStore } from 'redux';
import { Action, createAction } from 'redux-actions';
import { enableBatching, batchActions } from 'redux-batched-actions';

const doThing = createAction('DO_THING');
const doOther = createAction('DO_OTHER');

const reducer = (state: any = {}, action: Action<any>): any => {
    return state;
};

const store = createStore(enableBatching(reducer), {});

store.dispatch(batchActions([doThing(), doOther()]));
