export as namespace JSONPath;

export type pathType = string | string[];
export type jsonType = null | boolean | number | string | object | [];
export type resultType =
    | "VALUE"
    | "Value"
    | "value"
    | "PATH"
    | "Path"
    | "path"
    | "POINTER"
    | "Pointer"
    | "pointer"
    | "PARENT"
    | "Parent"
    | "parent"
    | "PARENTPROPERTY"
    | "ParentProperty"
    | "parentProperty"
    | "parentproperty";
export type sandboxType = {
    [key in string]: string;
};
export type callback = (payloadValue: any, type: "value" | "property", fullPayload: any) => void;
export type otherCallback = (value: any, path: string, parent: object, parentPropertyName: any) => boolean;

export interface options {
    path?: pathType | undefined;
    json?: jsonType | undefined;
    autostart?: boolean | undefined;
    flatten?: boolean | undefined;
    resultType?: resultType | undefined;
    sandbox?: sandboxType | undefined;
    wrap?: boolean | undefined;
    preventEval?: boolean | undefined;
    parent?: object | undefined;
    parentProperty?: object | undefined;
    callback?: callback | undefined;
    otherTypeCallback?: otherCallback | undefined;
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
