// Type definitions for @reach/component-component 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface Args<P, S> {
  props: P;
  state: S;
  setState<K extends keyof S>(
    state:
      | ((prevState: Readonly<S>, props: P) => Pick<S, K> | S | null)
      | (Pick<S, K> | S | null),
    callback?: () => void
  ): void;
  forceUpdate(callBack?: () => void): void;
}

export interface Refs {
  [key: string]: React.Ref<HTMLElement> | null;
}

export type StateProps<P, S> = Pick<Args<P, S>, "state" | "props">;

export interface ComponentProps<P, S> {
  initialState?: S;
  getInitialState?(): S;
  refs?: Refs;
  getRefs?(): Refs;
  didMount?(args: Args<P, S> & Refs): void;
  didUpdate?(args: Args<P, S> & Refs & { prevProps: P; prevState: S }): void;
  willUnmount?(args: StateProps<P, S> & Refs): void;
  getSnapshotBeforeUpdate?(
    args: StateProps<P, S> & Refs & { prevProps: P; prevState: S }
  ): any;
  shouldUpdate?(
    args: StateProps<P, S> & { nextProps: P; nextState: S }
  ): boolean;
  children?(
    args: Args<P, S> & Refs
  ): Args<P, S> & Refs | React.ReactNode | null;
  render?(args: Args<P, S>): void;
}

export class Component<
  P extends ComponentProps<P, S>,
  S = any
> extends React.Component<ComponentProps<P, S>> {}
