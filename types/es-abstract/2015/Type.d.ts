// prettier-ignore
declare function Type<T>(x: T): T extends string ? 'String'
    : T extends number ? 'Number'
    : T extends boolean ? 'Boolean'
    : T extends symbol ? 'Symbol'
    : T extends null ? 'Null'
    : T extends undefined ? 'Undefined'
    : T extends object ? 'Object'
    : 'String' | 'Number' | 'Boolean' | 'Symbol' | 'Null' | 'Undefined' | 'Object' | undefined;
export = Type;
