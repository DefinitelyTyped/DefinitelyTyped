import { View } from './muv-dom';

export type U<M, A, E> = (m: M) => (a: A) => { model: M, effects?: E[] };
export type V<M, A> = (d: (a: A) => void) => (m: M) => View;
export type I<A> = (d: (a: A) => void) => void;
export type S<A, E> = (d: (a: A) => void) => (e: E) => void;

export interface MUV<M, A, E> {
    model: M;
    update: U<M, A, E>;
    view: V<M, A>;
    ignition?: I<A>;
    subscriptions?: S<A, E>;
}

export function muv<M, A, E>(muv: MUV<M, A, E>): (rootId: string) => void;
