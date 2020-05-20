import { RecoilValue, RecoilState } from './recoilValue';
import { Loadable } from './loadable';

export type SetterOrUpdater<T> = (valOrUpdater: ((currVal: T) => T) | T) => void;
export type Resetter = () => void;
export type CallbackInterface = Readonly<{
    getPromise: <T>(recoilVal: RecoilValue<T>) => Promise<T>;
    getLoadable: <T>(recoilVal: RecoilValue<T>) => Loadable<T>;
    set: <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
    reset: (recoilVal: RecoilState<any>) => void;
}>;

/**
 * Returns the value of an atom or selector (readonly or writeable) and subscribes the components to future updates of that state.
 */
export function useRecoilValue<T>(recoilValue: RecoilValue<T>): T;

/**
 * Returns a Loadable representing the status of the given Recoil state and subscribes the component to future updates of that state. Useful for working with async selectors.
 */
export function useRecoilValueLoadable<T>(recoilValue: RecoilValue<T>): Loadable<T>;

/**
 * Returns a tuple where the first element is the value of the recoil state and the second is a setter to update that state. Subscribes component to updates of the given state.
 */
export function useRecoilState<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>];

/**
 * Returns a tuple where the first element is a Loadable and the second element is a setter function to update the given state. Subscribes component to updates of the given state.
 */
export function useRecoilStateLoadable<T>(recoilState: RecoilState<T>): [Loadable<T>, SetterOrUpdater<T>];

/**
 * Returns a setter function for updating Recoil state. Does not subscribe the component to the given state.
 */
export function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;

/**
 * Returns a function that will reset the given state to its default value.
 */
export function useResetRecoilState(recoilState: RecoilState<any>): Resetter;

/**
 * Returns a function that will run the callback that was passed when calling this hook. Useful for accessing Recoil state in response to events.
 */
export function useRecoilCallback<Args extends ReadonlyArray<unknown>, Return>(
    fn: (interface: CallbackInterface, ...args: Args) => Return,
    deps?: ReadonlyArray<unknown>,
): (...args: Args) => Return;
