let path: JSONPath.pathType = '.';
path = ['.', '//'];

let json: JSONPath.jsonType = null;
json = true;
json = 1;
json = 'test';
json = { hi: 'there' };
json = [1, 2];

let result: JSONPath.resultType = 'PARENT';
result = 'parent';
result = 'Parent';

let sandboxType: JSONPath.sandboxType = {
    yes: 'man',
};

let callback: JSONPath.callback = (payloadValue: any, type: string, fullPayload: any): void => {};

let otherCallback = (value: any, path: string, parent: object, parentPropertyName: any): boolean => {
    return false;
};

let config: JSONPath.options = {
    path: path,
    json: json,
    autostart: true,
    flatten: true,
    resultType: result,
    sandbox: sandboxType,
    wrap: true,
    preventEval: true,
    parent: {},
    parentProperty: {},
    callback: callback,
    otherTypeCallback: otherCallback,
};

let moduleResult = JSONPath.JSONPath(config, path, json, callback, otherCallback);

moduleResult = JSONPath.JSONPath(path, json);
