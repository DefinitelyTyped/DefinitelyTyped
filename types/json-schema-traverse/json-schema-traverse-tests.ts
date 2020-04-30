import traverse = require('json-schema-traverse');

const schema = {
    properties: {
        foo: { type: 'string' },
        bar: { type: 'integer' },
    },
};

const cb: traverse.TraverseCallbackDef = (
    schema: object,
    jsonPtr: string,
    rootSchema: object,
    parentJsonPtr: string,
    parentKeyword: string,
    parentSchema: object,
    keyIndex: string | number,
) => {
    // work with data
};

traverse(schema, { cb });

const pre: traverse.TraverseCallbackDef = cb;
const post: traverse.TraverseCallbackDef = cb;

traverse(schema, { cb: { pre, post } });

traverse(schema, { allKeys: true, cb });

// example output
/*
{
"type": "integer"
},
"/properties/bar",
{
"properties": {
    "foo": {
    "type": "string"
    },
    "bar": {
    "type": "integer"
    }
}
},
"",
"properties",
{
"properties": {
    "foo": {
    "type": "string"
    },
    "bar": {
    "type": "integer"
    }
}
},
"bar"
 */
