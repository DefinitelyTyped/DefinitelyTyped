// note: all need to share same generics args, since the library exposes an instance of itself
// for .reducer(), .sagas(), .takes(), etc...
export class Duck<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> {
    constructor(
        options: DuckOptions<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
    );

    creators: TActionCreators;
    initialState: TState;
    reducer: DuckReducer<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>;
    selectors: TSelectors;
    store: string;
    storePath: string | undefined;
    types: DuckActionTypes<TActionTypes>;
    sagas: TSagas;
    takes: TTakes;
    options: DuckOptions<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>;
}

export interface DuckOptions<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> {
    namespace: string;
    store: string;
    storePath?: string | undefined;
    types: Array<keyof TActionTypes>;
    initialState: TState;
    reducer: DuckReducer<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>;
    creators: DuckCreators<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>;
    selectors: TSelectors;
    sagas?: DuckSagas<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> | undefined;
    takes?: DuckTakes<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> | undefined;
    consts?: TConsts | undefined;
}

export type DuckInstance<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> = Duck<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> & DuckConsts<TConsts>;

export type DuckCreators<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> = (
    D: DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
) => TActionCreators;

export type DuckReducer<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> = (
    S: TState,
    A: TAction,
    D: DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
) => TState;

export type DuckSagas<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> = (D: DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>) => TSagas;

export type DuckTakes<
    TState = AnyObject,
    TAction = AnyObject,
    TActionTypes extends Record<string, any> = AnyObject,
    TActionCreators extends Record<string, (...args: any[]) => TAction> = AnyObject,
    TSelectors extends Record<string, (s: TState) => any> = AnyObject,
    TSagas extends Record<string, (...args: any[]) => any> = AnyObject,
    TTakes extends any[] = [],
    TConsts extends Record<string, string[]> = AnyObject,
> = (D: DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>) => TTakes;

export type DuckConsts<TConsts> = Record<keyof TConsts, Record<string, string>>;

export type DuckActionTypes<TActionTypes> = Record<keyof TActionTypes, string>;

type AnyObject = Record<any, any>;

export {};

export default Duck;
