import * as envToObject from 'env-to-object';

const map = {
    NODE_ENV: {
        keypath: 'env',
        type: 'string'
    },
    PORT: {
        keypath: 'server.port',
        type: 'number'
    },
    SSL: {
        keypath: 'server.ssl',
        type: 'boolean'
    },
    LOG_LEVEL: {
        keypath: 'logger.level',
        type: 'string'
    },
    INT: {
        keypath: 'int',
        type: 'integer',
        radix: '2'
    }
};

const result1: any = envToObject(map);
const result2: any = envToObject(map, {
    parsers: {
        'my-custom-type': (str: string, opts: any) => {
            const foo: any = JSON.parse(str);
            return foo;
        }
    }
});
