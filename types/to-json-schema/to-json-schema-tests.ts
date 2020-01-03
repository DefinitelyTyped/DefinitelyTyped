import toJsonSchema = require('to-json-schema');
{
    const objToBeConverted = {
        name: 'David',
        rank: 7,
        born: '1990-04-05T15:09:56.704Z',
        luckyNumbers: [7, 77, 5],
    };

    // $ExpectType JSONSchema3or4
    toJsonSchema(objToBeConverted);
}
{
    // $ExpectType JSONSchema3or4
    toJsonSchema(33, { required: false });
    /*
    {
        "type": "integer"
    }
    */
}
{
    // $ExpectType JSONSchema3or4
    toJsonSchema(33, { required: true });
    /*
    {
        "type": "integer",
        "required": true
    }
    */
    const options: toJsonSchema.Options = {
        postProcessFnc: (type, schema, value, defaultFunc) =>
            type === 'integer' ? { ...schema, required: true } : defaultFunc(type, schema, value),
    };

    const instance = {
        a: 1,
        b: 'str',
    };

    // $ExpectType JSONSchema3or4
    toJsonSchema(instance, options);
    /*
    {
        type: 'object',
        properties: {
            a: {type: 'integer', required: true},
            b: {type: 'string'},
        },
    }
    */
}
{
    const arr = [33, 44, 55];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'all' } });
    /*
    {
        "type": "array",
        "items": {
            "type": "integer"
        }
    }
    */
}
{
    const arr = [33, 'str', 55];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'all' } });
    /*
    {
        "type": "array"
    }
    */
}
{
    const arr = [{ name: 'john', grades: [1, 2, 3] }, { name: 'david', grades: ['a', 'b', 'c'] }];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'all' } });
    /*
    {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
            "name": {
                "type": "string"
            },
            "grades": {
                "type": "array" // due to incompatible array items' types, `items` field is omitted
            }
        }
    }
    */
}
{
    const arr = ['str', 11, 30];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'first' } });
    /* Other than first array item is ignored
    {
        "type": "array",
            "items": {
                "type": "string"
            }
        }
    }
    */
}
{
    const arr = ['str', 11, 30];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'uniform' } });
    /*
    Above code will throw 'Error: Invalid schema, incompatible array items'
    */
}
{
    const arr = ['str', 11, 30];
    // $ExpectType JSONSchema3or4
    toJsonSchema(arr, { arrays: { mode: 'tuple' } });
    /*
    {
        "type": "array",
        "items": [
            {
            "type": "string"
            },
            {
            "type": "integer"
            },
            {
            "type": "integer"
            }
        ]
    }
    */
}
{
    const options: toJsonSchema.Options = {
        objects: { additionalProperties: false },
    };
    const obj = {
        a: {
            c: 1,
            d: 1,
        },
        b: 'str',
    };
    // $ExpectType JSONSchema3or4
    toJsonSchema(obj, options);
    /*
    {
        type: 'object',
        properties: {
            a: {
                type: 'object',
                properties: {
                    c: {type: 'integer'},
                    d: {type: 'integer'},
                },
                additionalProperties: false,
            },
            b: {type: 'string'},
        },
        additionalProperties: false,
    }
    */
}
{
    const options: toJsonSchema.Options = {
        objects: {
            preProcessFnc: (obj, defaultFnc) => defaultFnc({ a: obj.a, b: obj.b }),
        },
    };
    const obj = { a: 1, b: 2, c: 3 };
    // $ExpectType JSONSchema3or4
    toJsonSchema(obj, options);
    /*
    {
        "type": "object",
        "properties": {
            "a": {
                "type": "integer"
            },
            "b": {
                "type": "integer",
            }
        }
    }
    */
}
{
    const options: toJsonSchema.Options = {
        objects: {
            postProcessFnc: (schema, obj, defaultFnc) => ({
                ...defaultFnc(schema, obj),
                required: Object.getOwnPropertyNames(obj),
            }),
        },
    };
    const obj = { a: 1, b: 'str' };
    // $ExpectType JSONSchema3or4
    toJsonSchema(obj, options);
    /*
    {
        type: 'object',
        properties: {
            a: {type: 'integer'},
            b: {type: 'string'},
        }
        required: ['a', 'b']
    }
    */
}
{
    const options: toJsonSchema.Options = {
        strings: {
            preProcessFnc: (value, defaultFnc) => {
                const schema = defaultFnc(value);
                if (value === 'date') {
                    schema.format = 'date';
                }
                return schema;
            },
        },
    };
    // $ExpectType JSONSchema3or4
    toJsonSchema('date', options);
    /*
    {
        "type": "string",
        "format": "date"
    }
    */
}
{
    const obj = {
        a: '2012-07-08T16:41:41.532Z',
        b: '+31 42 123 4567',
        c: 'http://www.google.com/',
        d: 'obama@whitehouse.gov',
    };
    // $ExpectType JSONSchema3or4
    toJsonSchema(obj, { strings: { detectFormat: true } });
}
