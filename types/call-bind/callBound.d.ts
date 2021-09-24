// This is necessary to disallow import of `call-bind/callBound.js`:
// tslint:disable-next-line: no-declare-current-package no-single-declare-module
declare module 'call-bind/callBound' {
    import type { Intrinsics } from 'get-intrinsic';

    type PrependThisParameter<T> = T extends (...args: infer A) => infer R
        ? (thisArg: ThisParameterType<T>, ...args: A) => R
        : T;

    export = callBoundIntrinsic;

    function callBoundIntrinsic<K extends keyof Intrinsics>(
        name: K,
        allowMissing?: false,
    ): PrependThisParameter<Intrinsics[K]>;
    function callBoundIntrinsic<K extends keyof Intrinsics>(
        name: K,
        allowMissing?: boolean,
    ): PrependThisParameter<Intrinsics[K]> | undefined;
    function callBoundIntrinsic(name: string, allowMissing?: boolean): any;
}
