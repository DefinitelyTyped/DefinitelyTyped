declare interface EJSONableCustomType {
    clone?(): EJSONableCustomType;
    equals?(other: Object): boolean;
    toJSONValue(): JSONable;
    typeName(): string;
}
declare type EJSONableProperty = number | string | boolean | Object | number[] | string[] | Object[] | Date | Uint8Array | EJSONableCustomType | undefined | null;
declare interface EJSONable {
    [key: string]: EJSONableProperty;
}
declare interface JSONable {
    [key: string]: number | string | boolean | Object | number[] | string[] | Object[] | undefined | null;
}
declare interface EJSON extends EJSONable { }

declare module EJSON {
    function addType(name: string, factory: (val: JSONable) => EJSONableCustomType): void;

    function clone<T>(val: T): T;

    function equals(a: EJSON, b: EJSON, options?: {
        keyOrderSensitive?: boolean;
    }): boolean;

    function fromJSONValue(val: JSONable): any;

    function isBinary(x: Object): boolean;
    var newBinary: any;

    function parse(str: string): EJSON;

    function stringify(val: EJSON, options?: {
        indent?: boolean | number | string;
        canonical?: boolean;
    }): string;

    function toJSONValue(val: EJSON): JSONable;
}
