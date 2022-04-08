import { Action, ActionCreator, createStore, Dispatch } from 'redux';
import {
  bindActionCreatorsDeep,
  bindScopedActionFactories,
  scopeActionCreators,
  ScopedActionFactory,
  scopeReducers
} from 'redux-doghouse';

// ==== scopeActionCreators
function fooActionCreator(bar: string): { [key: string]: any } {
  return {};
}

const actionCreators = {
  foo: fooActionCreator
};

scopeActionCreators(actionCreators, 'a').foo('bar');
scopeActionCreators(fooActionCreator, 'a')('bar');
scopeActionCreators(fooActionCreator, 1)('bar');

// ==== ScopedActionFactory
const scopeableActionsFromCreators = new ScopedActionFactory(actionCreators);
const actionCreatorsScopedToA = scopeableActionsFromCreators.scope('a');

actionCreatorsScopedToA.foo('bar');

const scopeableActionsFromFooCreator = new ScopedActionFactory(fooActionCreator);
const actionCreatorScopedToB = scopeableActionsFromFooCreator.scope('b');

actionCreatorScopedToB('bar');

// ==== bindScopedActionFactories
const store = createStore((state: any, action: Action) => state);
const scopeableActionsFactories = {
  myComponentActions: new ScopedActionFactory(actionCreators),
  otherActions: {
    fooAction: new ScopedActionFactory(fooActionCreator),
    plainFooAction: fooActionCreator,
  },
};
const boundScopeableActions = bindScopedActionFactories(scopeableActionsFactories, store.dispatch);
boundScopeableActions['myComponentActions'].scope('bar');
boundScopeableActions['otherActions']['plainFooAction']('bar');

const boundActions = bindScopedActionFactories(actionCreators, store.dispatch);
boundActions.foo('bar');

bindScopedActionFactories(fooActionCreator, store.dispatch, (a: ActionCreator<any>, d: Dispatch<any>) => a)('bar');

// ==== bindActionCreatorsDeep
const boundScopeableActionFactories = bindActionCreatorsDeep(scopeableActionsFactories, store.dispatch);
boundScopeableActionFactories['myComponentActions'].scope('bar');
boundScopeableActionFactories['otherActions']['plainFooAction']('bar');

const boundActionFactories = bindActionCreatorsDeep(actionCreators, store.dispatch);
boundActionFactories.foo('bar');

bindActionCreatorsDeep(fooActionCreator, store.dispatch)('bar');

// ==== scopeReducers
const reducers = {
  foo: (state = 0, action: Action) => {
    return state;
  },
};
const actionCreatorsA = scopeActionCreators({
  incrementFoo: () => ({type: 'INCREMENT_FOO'})
}, 'a');

const scopedReducers = scopeReducers(reducers);
const state = {
  a: {foo: 0},
  b: {foo: 2}
};
const newState = scopedReducers(state, actionCreatorsA.incrementFoo());
const aScopedFoo: number = newState.a.foo;
const bScopedFoo: number = newState.b.foo;
