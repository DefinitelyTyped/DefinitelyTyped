import type { Intrinsics } from '../GetIntrinsic';

// tslint:disable-next-line: ban-types
type TypedProto<P> = { readonly prototype?: P } & Omit<Function, 'prototype'>;

declare function GetPrototypeFromConstructor<P, K extends keyof Intrinsics>(
    constructor: TypedProto<P>,
    intrinsicDefaultProto: K,
): P extends object ? P : Intrinsics[K];
declare function GetPrototypeFromConstructor<P>(
    constructor: TypedProto<P>,
    intrinsicDefaultProto: string,
): P extends object ? P : object;
export = GetPrototypeFromConstructor;
