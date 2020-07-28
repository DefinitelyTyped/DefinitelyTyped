// Type definitions for recoil 0.0
// Project: https://github.com/facebookexperimental/recoil#readme
// Definitions by: Christian Santos <https://github.com/csantos42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

// state.d.ts
export type NodeKey = string;
export type AtomValues = Map<NodeKey, Loadable<any>>;
export type ComponentCallback = (state: TreeState) => void;
export type TreeState = Readonly<{
    isSnapshot: boolean;
    transactionMetadata: object;
    dirtyAtoms: Set<NodeKey>;
    atomValues: AtomValues;
    nonvalidatedAtoms: Map<NodeKey, unknown>;
    nodeDeps: Map<NodeKey, Set<NodeKey>>;
    nodeToNodeSubscriptions: Map<NodeKey, Set<NodeKey>>;
    nodeToComponentSubscriptions: Map<NodeKey, Map<number, [string, ComponentCallback]>>;
}>;

// node.d.ts
export class DefaultValue {}

// recoilRoot.d.ts
import * as React from 'react';

export interface RecoilRootProps {
    initializeState?: (options: {
        set: <T>(recoilVal: RecoilState<T>, newVal: T) => void;
        setUnvalidatedAtomValues: (atomMap: Map<string, unknown>) => void;
    }) => void;
}

export const RecoilRoot: React.FC<RecoilRootProps>;

// atom.d.ts
export interface AtomOptions<T> {
    key: NodeKey;
    default: RecoilValue<T> | Promise<T> | T;
    dangerouslyAllowMutability?: boolean;
}
/**
 * Creates an atom, which represents a piece of writeable state
 */
export function atom<T>(options: AtomOptions<T>): RecoilState<T>;

// selector.d.ts
export type GetRecoilValue = <T>(recoilVal: RecoilValue<T>) => T;

export type SetRecoilState = <T>(
    recoilVal: RecoilState<T>,
    newVal: T | DefaultValue | ((prevValue: T) => T | DefaultValue),
) => void;

export type ResetRecoilState = (recoilVal: RecoilState<any>) => void;

export interface ReadOnlySelectorOptions<T> {
    key: string;
    get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;
    dangerouslyAllowMutability?: boolean;
}

export interface ReadWriteSelectorOptions<T> extends ReadOnlySelectorOptions<T> {
    set: (
        opts: {
            set: SetRecoilState;
            get: GetRecoilValue;
            reset: ResetRecoilState;
        },
        newValue: T | DefaultValue,
    ) => void;
}

export function selector<T>(options: ReadWriteSelectorOptions<T>): RecoilState<T>;
export function selector<T>(options: ReadOnlySelectorOptions<T>): RecoilValueReadOnly<T>;

// hooks.d.ts
export type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
export type Resetter = () => void;
export type CallbackInterface = Readonly<{
    getPromise: <T>(recoilVal: RecoilValue<T>) => Promise<T>;
    getLoadable: <T>(recoilVal: RecoilValue<T>) => Loadable<T>;
    set: <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
    reset: (recoilVal: RecoilState<any>) => void;
}>;

/**
 * Returns the value of an atom or selector (readonly or writeable) and
 * subscribes the components to future updates of that state.
 */
export function useRecoilValue<T>(recoilValue: RecoilValue<T>): T;

/**
 * Returns a Loadable representing the status of the given Recoil state
 * and subscribes the component to future updates of that state. Useful
 * for working with async selectors.
 */
export function useRecoilValueLoadable<T>(recoilValue: RecoilValue<T>): Loadable<T>;

/**
 * Returns a tuple where the first element is the value of the recoil state
 * and the second is a setter to update that state. Subscribes component
 * to updates of the given state.
 */
export function useRecoilState<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>];

/**
 * Returns a tuple where the first element is a Loadable and the second
 * element is a setter function to update the given state. Subscribes
 * component to updates of the given state.
 */
export function useRecoilStateLoadable<T>(recoilState: RecoilState<T>): [Loadable<T>, SetterOrUpdater<T>];

/**
 * Returns a setter function for updating Recoil state. Does not subscribe
 * the component to the given state.
 */

export function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;

/**
 * Returns a function that will reset the given state to its default value.
 */
export function useResetRecoilState(recoilState: RecoilState<any>): Resetter;

/**
 * Returns a function that will run the callback that was passed when
 * calling this hook. Useful for accessing Recoil state in response to
 * events.
 */
export function useRecoilCallback<Args extends ReadonlyArray<unknown>, Return>(
    fn: (interface: CallbackInterface, ...args: Args) => Return,
    deps?: ReadonlyArray<unknown>,
): (...args: Args) => Return;

// loadable.d.ts
export type ResolvedLoadablePromiseInfo<T> = Readonly<{
    value: T;
    upstreamState__INTERNAL_DO_NOT_USE?: TreeState;
}>;

export type LoadablePromise<T> = Promise<ResolvedLoadablePromiseInfo<T>>;

export type Loadable<T> =
    | Readonly<{
          state: 'hasValue';
          contents: T;
      }>
    | Readonly<{
          state: 'hasError';
          contents: Error;
      }>
    | Readonly<{
          state: 'loading';
          contents: LoadablePromise<T>;
      }>;

// recoilValue.d.ts
export class AbstractRecoilValue<T> {
    __tag: [T];
    __cTag: (t: T) => void; // for contravariance

    key: NodeKey;
    constructor(newKey: NodeKey);
}

export class AbstractRecoilValueReadonly<T> {
    __tag: [T];

    key: NodeKey;
    constructor(newKey: NodeKey);
}

export class RecoilState<T> extends AbstractRecoilValue<T> {}
export class RecoilValueReadOnly<T> extends AbstractRecoilValueReadonly<T> {}
export type RecoilValue<T> = RecoilValueReadOnly<T> | RecoilState<T>;

export function isRecoilValue(val: unknown): val is RecoilValue<any>;

/** Utilities */

// bigint not supported yet
export type Primitive = undefined | null | boolean | number | symbol | string;

export type SerializableParam = Primitive | SerializableParam[] | { [key: string]: SerializableParam };

export interface AtomFamilyOptions<T, P extends SerializableParam> {
    key: NodeKey;
    dangerouslyAllowMutability?: boolean;
    default: RecoilValue<T> | Promise<T> | T | ((param: P) => T | RecoilValue<T> | Promise<T>);
}

export function atomFamily<T, P extends SerializableParam>(
    options: AtomFamilyOptions<T, P>,
): (param: P) => RecoilState<T>;

export interface ReadOnlySelectorFamilyOptions<T, P extends SerializableParam> {
    key: string;
    get: (param: P) => (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;
    // cacheImplementation_UNSTABLE?: () => CacheImplementation<Loadable<T>>,
    // cacheImplementationForParams_UNSTABLE?: () => CacheImplementation<
    //   RecoilValue<T>,
    // >,
    dangerouslyAllowMutability?: boolean;
}

export interface ReadWriteSelectorFamilyOptions<T, P extends SerializableParam> {
    key: string;
    get: (param: P) => (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;
    set: (
        param: P,
    ) => (
        opts: { set: SetRecoilState; get: GetRecoilValue; reset: ResetRecoilState },
        newValue: T | DefaultValue,
    ) => void;
    // cacheImplementation_UNSTABLE?: () => CacheImplementation<Loadable<T>>,
    // cacheImplementationForParams_UNSTABLE?: () => CacheImplementation<
    //   RecoilValue<T>,
    // >,
    dangerouslyAllowMutability?: boolean;
}

export function selectorFamily<T, P extends SerializableParam>(
    options: ReadWriteSelectorFamilyOptions<T, P>,
): (param: P) => RecoilState<T>;

export function selectorFamily<T, P extends SerializableParam>(
    options: ReadOnlySelectorFamilyOptions<T, P>,
): (param: P) => RecoilValueReadOnly<T>;

export function constSelector<T extends SerializableParam>(constant: T): RecoilValueReadOnly<T>;

export function errorSelector(message: string): RecoilValueReadOnly<never>;

export function readOnlySelector<T>(atom: RecoilValue<T>): RecoilValueReadOnly<T>;

export function noWait<T>(state: RecoilValue<T>): RecoilValueReadOnly<Loadable<T>>;

export type UnwrapRecoilValue<T> = T extends RecoilValue<infer R> ? R : never;

export type UnwrapRecoilValueLoadables<T extends Array<RecoilValue<any>> | { [key: string]: RecoilValue<any> }> = {
    [P in keyof T]: Loadable<UnwrapRecoilValue<T[P]>>;
};

export function waitForNone<RecoilValues extends Array<RecoilValue<any>> | [RecoilValue<any>]>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;

export function waitForNone<RecoilValues extends { [key: string]: RecoilValue<any> }>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;

export function waitForAny<RecoilValues extends Array<RecoilValue<any>> | [RecoilValue<any>]>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;

export function waitForAny<RecoilValues extends { [key: string]: RecoilValue<any> }>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;

export function waitForAll<RecoilValues extends Array<RecoilValue<any>> | [RecoilValue<any>]>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;

export function waitForAll<RecoilValues extends { [key: string]: RecoilValue<any> }>(
    param: RecoilValues,
): RecoilValueReadOnly<UnwrapRecoilValueLoadables<RecoilValues>>;
