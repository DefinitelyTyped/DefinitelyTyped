import type { Intrinsics } from '../GetIntrinsic';

type PrependThisParameter<T> = T extends (...args: infer A) => infer R
    ? (thisArg: ThisParameterType<T>, ...args: A) => R
    : T;

declare function callBoundIntrinsic<K extends keyof Intrinsics>(
    name: K,
    allowMissing?: false,
): PrependThisParameter<Intrinsics[K]>;
declare function callBoundIntrinsic<K extends keyof Intrinsics>(
    name: K,
    allowMissing: true,
): PrependThisParameter<Intrinsics[K]> | undefined;
declare function callBoundIntrinsic<K extends keyof Intrinsics>(
    name: K,
    allowMissing?: boolean,
): PrependThisParameter<Intrinsics[K]> | undefined;
declare function callBoundIntrinsic(name: string, allowMissing?: boolean): any;

export = callBoundIntrinsic;
