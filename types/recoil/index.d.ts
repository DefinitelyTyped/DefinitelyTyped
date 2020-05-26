// Type definitions for recoil 0.0
// Project: https://github.com/facebookexperimental/recoil#readme
// Definitions by: Moshe Kolodny <https://github.com/kolodny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import React = require('react');

export {};

type Getter = <U>(u: RecoilValue<U>) => U;
type Setter = <U>(coil: RecoilValue<U>, value: U | ((u: U) => U)) => void;

type SelectorGet<T> = (callback: { get: Getter }) => T;

interface SelectorSet<U> {
  set: Setter;
  get: Getter;
}

interface SelectorParameter<T> {
  key: string;
  get: SelectorGet<T>;
  set?: <U extends T>(options: SelectorSet<U>, newValue: U) => void;
}

export const RecoilRoot: React.ComponentType;

interface Atom<T> {
  readonly __type__: unique symbol;
  key: string;
}

interface Selector<T> {
  readonly __type__: unique symbol;
  key: string;
}

type RecoilValue<T> = Atom<T> | Selector<T>;

export function atom<T>(options: { key: string; default: T }): Atom<T>;
export function selector<T>(options: SelectorParameter<T>): Selector<T>;

export function isRecoilValue(x: any): x is RecoilValue<any>;

type ReactState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export function useRecoilState<T>(recoilValue: RecoilValue<T>): ReactState<T>;
export function useRecoilValue<T>(recoilValue: RecoilValue<T>): ReactState<T>[0];
export function useSetRecoilState<T>(recoilValue: RecoilValue<T>): ReactState<T>[1];

export function useResetRecoilState(recoilValue: RecoilValue<any>): () => void;

type Loadable<T> =
| {
    state: 'hasValue';
    contents: T;
    getValue: () => Promise<T>;
    toPromise: () => Promise<T>;
  }
| {
    state: 'loading';
    contents: Promise<T>;
    /** When state is 'loading' getValue throws a Promise */
    getValue: () => never;
    toPromise: () => Promise<T>;
  }
| {
    state: 'hasError';
    contents: Error;
    /** When state is 'hasError' getValue() throws the error */
    getValue: () => never;
    toPromise: () => Promise<never>;
  };
export function useRecoilValueLoadable<T>(recoilValue: RecoilValue<T>): Loadable<T>;
export function useRecoilStateLoadable<T>(recoilValue: RecoilValue<T>): [Loadable<T>, ReactState<T>];

interface CallbackInterface {
  getPromise: <T>(recoilValue: RecoilValue<T>) => Promise<T>;
  getLoadable: <T>(recoilValue: RecoilValue<T>) => Loadable<T>;
  set: Setter;
  reset: (recoilValue: RecoilValue<any>) => void;
}

export function useRecoilCallback(callback: (callbackInterface: CallbackInterface) => void): () => void;
