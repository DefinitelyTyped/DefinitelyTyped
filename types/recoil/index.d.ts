// Type definitions for recoil 0.0
// Project: https://github.com/facebookexperimental/recoil#readme
// Definitions by: Christian Santos <https://github.com/csantos42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

/// <reference types="react" />

declare module 'recoil' {
    // Nominal Classes
    export import DefaultValue = __Recoil.DefaultValue;

    // Components
    export import RecoilRoot = __Recoil.RecoilRoot;

    // RecoilValues (aka Recoil state)
    export import atom = __Recoil.atom;
    export import selector = __Recoil.selector;

    // Hooks for working with Recoil state
    export import useRecoilValue = __Recoil.useRecoilValue;
    export import useRecoilValueLoadable = __Recoil.useRecoilValueLoadable;
    export import useRecoilState = __Recoil.useRecoilState;
    export import useRecoilStateLoadable = __Recoil.useRecoilStateLoadable;
    export import useSetRecoilState = __Recoil.useSetRecoilState;
    export import useResetRecoilState = __Recoil.useResetRecoilState;
    export import useRecoilCallback = __Recoil.useRecoilCallback;

    // Other
    export import isRecoilValue = __Recoil.isRecoilValue;
}

declare module 'recoil/utils' {
    // Convenience RecoilValues
    export import atomFamily = __Recoil.atomFamily;
}

declare namespace __Recoil {
    // Recoil_Node.js
    export class DefaultValue {}

    // Recoil_State.js
    type NodeKey = string;

    // Recoil_RecoilValue.js
    class AbstractRecoilValue<T> {
        tag: 'Writeable';
        key: NodeKey;
        constructor(newKey: NodeKey);
    }

    class AbstractRecoilValueReadonly<T> {
        tag: 'Readonly';
        key: NodeKey;
        constructor(newKey: NodeKey);
    }

    class RecoilState<T> extends AbstractRecoilValue<T> {}

    class RecoilValueReadOnly<T> extends AbstractRecoilValueReadonly<T> {}

    type RecoilValue<T> = RecoilValueReadOnly<T> | RecoilState<T>;

    export function isRecoilValue(val: unknown): val is RecoilValue<any>;

    // Recoil_State.js
    type AtomValues = Map<NodeKey, Loadable<any>>;
    type ComponentCallback = (state: TreeState) => void;
    type TreeState = Readonly<{
        // Information about the TreeState itself:
        isSnapshot: boolean;
        transactionMetadata: object;
        dirtyAtoms: Set<NodeKey>;

        // ATOMS
        atomValues: AtomValues;
        nonvalidatedAtoms: Map<NodeKey, unknown>;

        // NODE GRAPH -- will soon move to StoreState
        // Upstream Node dependencies
        nodeDeps: Map<NodeKey, Set<NodeKey>>;

        // Downstream Node subscriptions
        nodeToNodeSubscriptions: Map<NodeKey, Set<NodeKey>>;
        nodeToComponentSubscriptions: Map<NodeKey, Map<number, [string, ComponentCallback]>>;
    }>;

    // Recoil_Loadable.js
    type ResolvedLoadablePromiseInfo<T> = Readonly<{
        value: T;
        upstreamState__INTERNAL_DO_NOT_USE?: TreeState;
    }>;

    type LoadablePromise<T> = Promise<ResolvedLoadablePromiseInfo<T>>;

    type Accessors<T> = Readonly<{
        // Attempt to get the value.
        // If there's an error, throw an error.  If it's still loading, throw a Promise
        // This is useful for composing with React Suspense or in a Recoil Selector.
        getValue: () => T;

        toPromise: () => LoadablePromise<T>;

        // Convenience accessors
        valueMaybe: () => T | void;
        valueOrThrow: () => T;
        errorMaybe: () => Error | void;
        errorOrThrow: () => Error;
        promiseMaybe: () => Promise<T> | void;
        promiseOrThrow: () => Promise<T>;

        map: <T, S>(map: (val: T) => Promise<S> | S) => Loadable<S>;
    }>;

    export type Loadable<T> =
        | Readonly<Accessors<T> & { state: 'hasValue'; contents: T }>
        | Readonly<Accessors<T> & { state: 'hasError'; contents: Error }>
        | Readonly<
              Accessors<T> & {
                  state: 'loading';
                  contents: LoadablePromise<T>;
              }
          >;

    // Recoil_RecoilRoot.react.js
    type RecoilRootProps = {
        initializeState?: (options: {
            set: <T>(recoilVal: RecoilValue<T>, newVal: T) => void;
            setUnvalidatedAtomValues: (atomMap: Map<string, unknown>) => void;
        }) => void;
    };

    export const RecoilRoot: React.FC<RecoilRootProps>;

    // Recoil_atom.js
    type AtomOptions<T> = Readonly<{
        key: NodeKey;
        default: RecoilValue<T> | Promise<T> | T;
        // persistence_UNSTABLE?: PersistenceSettings<T>,
        dangerouslyAllowMutability?: boolean;
    }>;

    export function atom<T>(options: AtomOptions<T>): RecoilState<T>;

    // Recoil_selector.js
    type GetRecoilValue = <T>(recoilVal: RecoilValue<T>) => T;
    type SetRecoilState = <T>(
        recoilVal: RecoilState<T>,
        newVal: T | DefaultValue | ((prevValue: T) => T | DefaultValue),
    ) => void;
    type ResetRecoilState = <T>(recoilVal: RecoilState<T>) => void;

    type ReadOnlySelectorOptions<T> = {
        key: string;
        get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;

        // cacheImplementation_UNSTABLE?: CacheImplementation<Loadable<T>>,
        dangerouslyAllowMutability?: boolean;
    };

    type ReadWriteSelectorOptions<T> = ReadOnlySelectorOptions<T> & {
        set: (
            opts: // FIXME: these types are not working
            {
                set: SetRecoilState;
                get: GetRecoilValue;
                reset: ResetRecoilState;
            },
            newValue: T | DefaultValue,
        ) => void;
    };

    export function selector<T>(options: ReadOnlySelectorOptions<T>): RecoilValueReadOnly<T>;
    export function selector<T>(options: ReadWriteSelectorOptions<T>): RecoilState<T>;

    // Recoil_Hooks.js
    type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
    type Resetter = () => void;
    type CallbackInterface = Readonly<{
        getPromise: <T>(recoilVal: RecoilValue<T>) => Promise<T>;
        getLoadable: <T>(recoilVal: RecoilValue<T>) => Loadable<T>;
        set: <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
        reset: <T>(recoilVal: RecoilState<T>) => void;
    }>;

    export function useRecoilValue<T>(recoilValue: RecoilValue<T>): T;
    export function useRecoilValueLoadable<T>(recoilValue: RecoilValue<T>): Loadable<T>;
    export function useRecoilState<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>];
    export function useRecoilStateLoadable<T>(recoilState: RecoilState<T>): [Loadable<T>, SetterOrUpdater<T>];
    export function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;
    export function useResetRecoilState<T>(recoilState: RecoilState<T>): Resetter;
    export function useRecoilCallback<Args extends ReadonlyArray<unknown>, Return>(
        fn: (interface: CallbackInterface, ...args: Args) => Return,
        deps?: ReadonlyArray<unknown>,
    ): (...args: Args) => Return;

    // Recoil_atomFamily.js
    type Primitive = void | null | boolean | number | string;
    type AtomFamilyParameter =
        | Primitive
        | ReadonlyArray<AtomFamilyParameter>
        | Readonly<{ [k: string]: AtomFamilyParameter }>;
    type AtomFamilyOptions<T, P extends AtomFamilyParameter> = Readonly<
        AtomOptions<T> & {
            default:
                | RecoilValue<T>
                | Promise<T>
                | T
                | ((param: any /*FIXME*/) => T | RecoilValue<T> | Promise<T>)
                | any; // FIXME
        }
    >;

    function atomFamily<T, P extends AtomFamilyParameter>(
        options: AtomFamilyOptions<T, P>,
    ): (param: P) => RecoilState<T>;
}
