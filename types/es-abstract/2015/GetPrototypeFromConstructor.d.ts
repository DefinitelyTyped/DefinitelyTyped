import type { Intrinsics } from '../GetIntrinsic';

declare function GetPrototypeFromConstructor<K extends keyof Intrinsics>(
    constructor: new (...args: any) => any,
    intrinsicDefaultProto: K,
): {} | Intrinsics[K];
declare function GetPrototypeFromConstructor(
    constructor: new (...args: any) => any,
    intrinsicDefaultProto: string,
): any;
export = GetPrototypeFromConstructor;
