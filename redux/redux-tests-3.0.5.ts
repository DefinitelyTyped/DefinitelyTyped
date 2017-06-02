/// <reference path="./redux-3.0.5.d.ts" />

// some hypothetical root state container
class RootState {
  leafReducerA: number[];
  leafReducerB: string[];
}

// some hypothetical leaf reducer / "leaf store init"
const leafReducerA = (state:number[] = [], action:Redux.Action) => {
  return state;
};

// some other hypothetical leaf reducer / "leaf store init"
const leafReducerB = (state:string[] = [], action:Redux.Action) => {
  return state;
};

// to be used as a replacement reducer
const someReplacementReducer = (state:RootState = {
  leafReducerA: [1],
  leafReducerB: ['hello']
}, action: Redux.Action) => {
  return state;
};

// combine the reducers into the root reducer
const rootReducer = Redux.combineReducers<RootState>({
  leafReducerA,
  leafReducerB
});

// configure a store
interface ComposedCreateStore extends Redux.CreateStore<RootState> {}

// This bit is quite awkward still, it _should_ ideally mock applying a
// thunk, or other middleware, but it needs work
const finalCreateStore = <ComposedCreateStore>Redux
  .compose(Redux.applyMiddleware<any>(() => () => 0))(Redux.createStore);

// finally create the store
const store = finalCreateStore(rootReducer);

store.dispatch({
  type: 'TEST'
});

// subscribe
store.subscribe(() => {
  // get state
  let someNumbers:number[] = store.getState().leafReducerA;
  let someStrings:string[] = store.getState().leafReducerB;
});

// replace the reducer function
store.replaceReducer(someReplacementReducer);

// bind action creators to dispatcher, function example
const blah = Redux.bindActionCreators(() => {
  return { type: 'TEST', payload: 'blah' };
}, store.dispatch);

blah();

interface ActionCreators {
  [key: string]: any;
  testFun: Redux.ActionCreator;
  testBye: Redux.ActionCreator;
}

interface PartialActionCreators {
  [key: string]: any;
  testFun: Redux.PartialDispatch;
  testBye: Redux.PartialDispatch;
}

// bind action creators to dispatch, map example
const actions = Redux.bindActionCreators<ActionCreators,
  PartialActionCreators>({
  testFun: () => { return { type: 'TEST', payload: 'fun' }},
  testBye: () => { return { type: 'TEST', payload: 'bye' }}
}, store.dispatch);

actions.testFun();
actions.testBye();

// async action creators
const asyncAction: Redux.ActionAsync =
  (dispatch: Redux.Dispatch, getState) => {};
