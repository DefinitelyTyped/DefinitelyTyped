import type { PropertyKey } from '../index';

declare function Invoke<O extends {}, P extends PropertyKey>(
    O: O,
    P: P,
    args?: P extends keyof O
        ? O[P] extends (...args: infer A) => any ? Readonly<A> : ArrayLike<unknown>
        : ArrayLike<unknown>,
): P extends keyof O ? (O[P] extends (...args: any) => infer R ? R : never) : unknown;
export = Invoke;
