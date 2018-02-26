// Type definitions for moment-strftime2 1.0
// Project: https://github.com/ShogunPanda/moment-strftime2
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as _moment from 'moment';

declare module "moment" {
    interface Moment {
        strftime(pattern: string): string;
    }
}

declare module "moment-timezone" {
    interface Moment {
        strftime(pattern: string): string;
    }
}

export interface Modifiers {
    "%": string;
    A: string;
    B: string;
    C?: string;
    D: string;
    E?: string;
    F: string;
    G?: string;
    H: string;
    I: string;
    J?: string;
    K?: string;
    L: string;
    M: string;
    N?: string;
    O?: string;
    P: string;
    Q?: string;
    R: string;
    S: string;
    T: string;
    U?: string;
    V: string;
    W: string;
    X?: string;
    Y: string;
    Z: string;
    a: string;
    b: string;
    c?: string;
    d: string;
    e: string;
    f?: string;
    g: string;
    h: string;
    i?: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n?: string;
    o?: string;
    p: string;
    q?: string;
    r: string;
    s: string;
    t?: string;
    u: string;
    v?: string;
    w: string;
    x?: string;
    y: string;
    z: string;
}

export let modifiers: Modifiers;

export let separator: string;

export function installTo(moment: object): void;
