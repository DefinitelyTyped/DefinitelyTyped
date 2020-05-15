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

export function useRecoilValue<T>(recoilValue: RecoilValue<T>): T;
export function useRecoilValueLoadable<T>(recoilValue: RecoilValue<T>): Loadable<T>;
export function useRecoilState<T>(recoilState: RecoilState<T>): [T, SetterOrUpdater<T>];
export function useRecoilStateLoadable<T>(recoilState: RecoilState<T>): [Loadable<T>, SetterOrUpdater<T>];
export function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;
export function useResetRecoilState(recoilState: RecoilState<any>): Resetter;
export function useRecoilCallback<Args extends ReadonlyArray<unknown>, Return>(
    fn: (interface: CallbackInterface, ...args: Args) => Return,
    deps?: ReadonlyArray<unknown>,
): (...args: Args) => Return;
