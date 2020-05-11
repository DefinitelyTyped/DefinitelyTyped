import safeJsonStringify = require('safe-json-stringify');

const obj1 = {foo: 'bar'};

function replacer(key: any, value: any) {
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

safeJsonStringify(obj1);
safeJsonStringify(obj1, null);
safeJsonStringify(obj1, replacer);
safeJsonStringify(obj1, ['week', 'month']);
safeJsonStringify(obj1, null, '');
safeJsonStringify(obj1, null, 2);
safeJsonStringify.ensureProperties(obj1);
