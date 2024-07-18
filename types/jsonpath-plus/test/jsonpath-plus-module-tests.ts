import * as JSONPath from "jsonpath-plus";

let path: JSONPath.pathType = ".";
path = [".", "//"];

let json: JSONPath.jsonType = null;
json = true;
json = 1;
json = "test";
json = { hi: "there" };
json = [1, 2];

let result: JSONPath.resultType = "PARENT";
result = "parent";
result = "Parent";

const sandboxType: JSONPath.sandboxType = {
    yes: "man",
};

const callback: JSONPath.callback = (payloadValue: any, type: string, fullPayload: any): void => {};

const otherCallback = (value: any, path: string, parent: object, parentPropertyName: any): boolean => {
    return false;
};

const options: JSONPath.options = {
    path,
    json,
    autostart: true,
    flatten: true,
    resultType: result,
    sandbox: sandboxType,
    wrap: true,
    preventEval: true,
    parent: {},
    parentProperty: {},
    callback,
    otherTypeCallback: otherCallback,
};

let moduleResult = JSONPath.JSONPath(options, path, json, callback, otherCallback);

moduleResult = JSONPath.JSONPath(path, json);
