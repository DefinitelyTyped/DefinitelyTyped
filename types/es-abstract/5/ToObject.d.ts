// tslint:disable: ban-types
// prettier-ignore
declare function ToObject<T>(value: T): T extends object ? T
    : T extends null | undefined ? never
    : T extends string ? String
    : T extends number ? Number
    : T extends boolean ? Boolean
    : T extends symbol ? Symbol
    : T extends bigint ? BigInt
    : object;
export = ToObject;
