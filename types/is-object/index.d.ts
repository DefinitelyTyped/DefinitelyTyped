export = isObject;

declare function isObject(value: unknown): value is Record<string | symbol | number, unknown>;

declare namespace isObject {}
