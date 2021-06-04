// Type definitions for jsonpath-plus 5.0
// Project: https://github.com/s3u/JSONPath
// Definitions by: Chris Barth <https://github.com/cjbarth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace JSONPath;

export type pathType = string | string[];
export type jsonType = null | boolean | number | string | object | [];
export type resultType =
    | 'VALUE'
    | 'Value'
    | 'value'
    | 'PATH'
    | 'Path'
    | 'path'
    | 'POINTER'
    | 'Pointer'
    | 'pointer'
    | 'PARENT'
    | 'Parent'
    | 'parent'
    | 'PARENTPROPERTY'
    | 'ParentProperty'
    | 'parentProperty'
    | 'parentproperty';
export type sandboxType = {
    [key in string]: string;
};
export type callback = (payloadValue: any, type: 'value' | 'property', fullPayload: any) => void;
export type otherCallback = (value: any, path: string, parent: object, parentPropertyName: any) => boolean;

export interface options {
    path?: pathType;
    json?: jsonType;
    autostart?: boolean;
    flatten?: boolean;
    resultType?: resultType;
    sandbox?: sandboxType;
    wrap?: boolean;
    preventEval?: boolean;
    parent?: object;
    parentProperty?: object;
    callback?: callback;
    otherTypeCallback?: otherCallback;
}

export function JSONPath(
    options?: options,
    path?: pathType,
    json?: jsonType,
    callback?: callback,
    otherTypeCallback?: otherCallback,
): object | object[];
export function JSONPath(
    path?: pathType,
    json?: jsonType,
    callback?: callback,
    otherTypeCallback?: otherCallback,
): object | object[];
