import {View} from 'muvjs/muv-dom'

export type MUV<M, U, V, I, S, A, E> = {
    model: M,
    update: (m: M) => (a: A) => { model: M, effects?: E[] },
    view: (d: (a: A) => void) => (m: M) => View,
    ignition?: (d: (a: A) => void) => void,
    subscriptions?: (d: (a: A) => void) => (e: E) => void
};

export function muv<M, U, V, I, S, A, E>(muv: MUV<M, U, V, I, S, A, E>): (rootId: string) => void;
