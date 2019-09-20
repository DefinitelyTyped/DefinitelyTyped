import * as ReduxAction from 'redux-action';
import * as Redux from 'redux';

interface Payload {
  name: string;
  id: number;
}

const dispatch: Redux.Dispatch<any> = (...args: any[]): any => { };

const actionCreator0 = ReduxAction.createAction<Payload>('get items');

actionCreator0(1)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: Payload = action.payload;
  });

const actionCreator1 = ReduxAction.createAction<Payload>();

actionCreator1(1)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: Payload = action.payload;
  });

const actionCreator2 = ReduxAction.createAction('get items', (name: string) => name);

actionCreator2(1)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: string = action.payload;
  });

const actionCreator3 = ReduxAction.createAction('get items', (name: string) => Promise.resolve(name));

actionCreator3(1)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: string = action.payload;
  });

const actionCreator4 = ReduxAction.createAction((name: string) => name);

actionCreator4(1)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: string = action.payload;
  });

const actionCreator5 = ReduxAction.createAction<number, string>((name: string) => 1);

actionCreator5('items')(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: number = action.payload;
  });

const actionCreator6 = ReduxAction.createAction<number, string, boolean>((name: string) => 1);

actionCreator6('items', false)(dispatch, () => { })
  .then(action => {
    const type: string = action.type;
    const payload: number = action.payload;
  });

const syncActionCreator0 = ReduxAction.createSyncAction<Payload>('get items');
const syncAction0: ReduxAction.Action<Payload> = dispatch(syncActionCreator0(1));

const syncActionCreator1 = ReduxAction.createSyncAction<string>('get items', (name: string) => name);
const syncAction1: ReduxAction.Action<string> = dispatch(syncActionCreator1(1));

interface State {
  name: string;
}
const reducer = ReduxAction.createReducer<State>({ name: 'name' }, {
  'get items': () => {
    return { name: 'new name' };
  }
});

const combinedReducer: Redux.Reducer<{ reducer: State }> = Redux.combineReducers<{ reducer: State }>({ reducer });
