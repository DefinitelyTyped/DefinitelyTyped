import { Duck, DuckOptions, DuckCreators, DuckReducer, DuckSagas, DuckTakes, DuckInstance } from 'extensible-duck';

// mandatory prop types
interface TState {
    z: number;
}
interface TAction {
    type: string;
}
interface TActionTypes {
    A1: unknown;
}
interface TActionCreators extends Record<string, () => TAction> {
    actA1: () => TAction;
}
interface TSelectors extends Record<string, (s: TState) => any> {
    getZ: (s: TState) => number;
}

// optional prop types
interface TSagas extends Record<string, () => any> {
    sg1: () => Generator<TAction>;
}
type TTakes = any[];
interface TConsts extends Record<string, string[]> {
    c1: string[];
    c2: string[];
}

// mandatory props
const initialState: TState = { z: 1 };
const types: Array<keyof TActionTypes> = ['A1'];
const reducer: DuckReducer<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> = (
    s,
    a,
    d,
) => {
    testDuckInstanceProperties(d);
    switch (a.type) {
        case d.types.A1:
            return { ...s, z: 2 };
        default:
            return s;
    }
};
const creators: DuckCreators<
    TState,
    TAction,
    TActionTypes,
    TActionCreators,
    TSelectors,
    TSagas,
    TTakes,
    TConsts
> = d => {
    testDuckInstanceProperties(d);
    return {
        actA1: () => ({
            type: d.types.A1,
        }),
    };
};
const selectors: TSelectors = {
    getZ: s => s.z,
};

// optional props
const sagas: DuckSagas<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> = d => {
    testDuckInstanceProperties(d);
    return {
        *sg1() {
            const a: TAction = { type: 's' };
            yield a;
        },
    };
};
const takes: DuckTakes<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts> = d => {
    testDuckInstanceProperties(d);
    return [];
};
const consts: TConsts = { c1: [], c2: [] };

// duck instances
const dMandatoryProps: DuckOptions<
    TState,
    TAction,
    TActionTypes,
    TActionCreators,
    TSelectors,
    TSagas,
    TTakes,
    TConsts
> = { namespace: 'ns', store: 's', types, initialState, reducer, creators, selectors };
const d1 = new Duck<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>(
    dMandatoryProps,
);

const d2 = new Duck<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>({
    ...dMandatoryProps,
    // optional props
    storePath: 'sp',
    sagas,
    takes,
    consts,
});

// duck instance properties
const testDuckProperties = (
    d: Duck<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
) => {
    d.creators.actA1;
    d.initialState.z;
    d.reducer(
        initialState,
        { type: 'a1' },
        // have to assert type as Duck class definition is missing 'TConsts'. practically, you'll probably use 'any' 😢
        d as DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
    );
    d.selectors.getZ;
    d.store;
    d.storePath;
    d.types.A1;
    d.sagas.sg1;
    d.takes;
    d.options;
};
const testDuckInstanceProperties = (
    d: DuckInstance<TState, TAction, TActionTypes, TActionCreators, TSelectors, TSagas, TTakes, TConsts>,
) => {
    d.creators.actA1;
    d.initialState.z;
    d.reducer(initialState, { type: 'a1' }, d);
    d.selectors.getZ;
    d.store;
    d.storePath;
    d.types.A1;
    d.sagas.sg1;
    d.takes;
    d.options;
};
