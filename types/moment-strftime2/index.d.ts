import * as _moment from "moment";

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
    C?: string | undefined;
    D: string;
    E?: string | undefined;
    F: string;
    G?: string | undefined;
    H: string;
    I: string;
    J?: string | undefined;
    K?: string | undefined;
    L: string;
    M: string;
    N?: string | undefined;
    O?: string | undefined;
    P: string;
    Q?: string | undefined;
    R: string;
    S: string;
    T: string;
    U?: string | undefined;
    V: string;
    W: string;
    X?: string | undefined;
    Y: string;
    Z: string;
    a: string;
    b: string;
    c?: string | undefined;
    d: string;
    e: string;
    f?: string | undefined;
    g: string;
    h: string;
    i?: string | undefined;
    j: string;
    k: string;
    l: string;
    m: string;
    n?: string | undefined;
    o?: string | undefined;
    p: string;
    q?: string | undefined;
    r: string;
    s: string;
    t?: string | undefined;
    u: string;
    v?: string | undefined;
    w: string;
    x?: string | undefined;
    y: string;
    z: string;
}

export let modifiers: Modifiers;

export let separator: string;

export function installTo(moment: object): void;
