interface IPrimitiveType {
    UNDEFINED: "undefined";
    NULL: "null";
    STRING: "string";
    NUMBER: "number";
    SPECIAL_NUMBER: "number";
    BOOLEAN: "boolean";
    BIGINT: "bigint";

    findByName(name: string):
        | "undefined"
        | "null"
        | "string"
        | "number"
        | "number"
        | "boolean"
        | "bigint"
        | null;
}

const PrimitiveType: IPrimitiveType;

interface INonPrimitiveType {
    ARRAY: "array";
    DATE: "date";
    MAP: "map";
    OBJECT: "object";
    REGULAR_EXPRESSION: "regexp";
    SET: "set";

    findByName(name):
        | "array"
        | "date"
        | "map"
        | "object"
        | "regexp"
        | "set"
        | null;
}

const NonPrimitiveType: INonPrimitiveType;

interface IRemoteType {
    SYMBOL: "symbol";
    FUNCTION: "function";
    WEAK_MAP: "weakmap";
    WEAK_SET: "weakset";
    ITERATOR: "iterator";
    GENERATOR: "generator";
    ERROR: "error";
    PROXY: "proxy";
    PROMISE: "promise";
    TYPED_ARRAY: "typedarray";
    ARRAY_BUFFER: "arraybuffer";
    NODE_LIST: "nodelist";
    HTML_COLLECTION: "htmlcollection";
    NODE: "node";
    WINDOW: "window";

    findByName(name: string):
        | "symbol"
        | "function"
        | "weakmap"
        | "weakset"
        | "iterator"
        | "generator"
        | "error"
        | "proxy"
        | "promise"
        | "typedarray"
        | "arraybuffer"
        | "nodelist"
        | "htmlcollection"
        | "node"
        | "window"
        | null;
}

const RemoteType: IRemoteType;

interface ISpecialNumberType {
    NAN: "NaN";
    MINUS_ZERO: "-0";
    INFINITY: "Infinity";
    MINUS_INFINITY: "-Infinity";
}

const SpecialNumberType: ISpecialNumberType;

export { NonPrimitiveType, PrimitiveType, RemoteType, SpecialNumberType };
