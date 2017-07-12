export as namespace ReduxDoghouse;

import { ActionCreator, ActionCreatorsMapObject, bindActionCreators, Dispatch, Reducer } from 'redux';

export interface ActionCreatorsTree<S extends ActionCreator<any> | ActionCreatorsMapObject,
  F extends ActionCreator<any> | ScopedActionFactory<S>> {
  [key: string]: F | ActionCreatorsTree<S, F>;
}

export class ScopedActionFactory<A extends ActionCreator<any> | ActionCreatorsMapObject> {
  constructor(actionCreator: A);

  scope(id: string | number): A;
}

export interface ActionFactoriesMap {
  [key: string]: ScopedActionFactory<any> | ActionCreator<any> | ActionFactoriesMap;
}

export function bindActionCreatorsDeep<M extends ActionFactoriesMap, S>(actionFactories: M,
                                                                        dispatch: Dispatch<S>): M;
export function bindActionCreatorsDeep<A extends ActionCreator<any>, S>(actionFactories: A,
                                                                        dispatch: Dispatch<S>): A;
export function bindActionCreatorsDeep<A extends ActionCreator<any> | ActionCreatorsMapObject,
  F extends ScopedActionFactory<A>, S>(actionFactories: F,
                                       dispatch: Dispatch<S>): F;

export function bindScopedActionFactories<M extends ActionFactoriesMap, S>(actionFactories: M,
                                                                           dispatch: Dispatch<S>,
                                                                           bindFn?: typeof bindActionCreators): M;
export function bindScopedActionFactories<A extends ActionCreator<any>, S>(actionFactories: A,
                                                                           dispatch: Dispatch<S>,
                                                                           bindFn?: typeof bindActionCreators): A;
export function bindScopedActionFactories<A extends ActionCreator<any> | ActionCreatorsMapObject,
  F extends ScopedActionFactory<A>, S>(actionFactories: F,
                                       dispatch: Dispatch<S>,
                                       bindFn?: typeof bindActionCreators): F;

export function scopeActionCreators<A extends ActionCreator<any> | ActionCreatorsMapObject>(actionCreator: A, scopeID: string | number): A;

export function scopeReducers(reducers?: { [key: string]: Reducer<any> }): Reducer<any>;
