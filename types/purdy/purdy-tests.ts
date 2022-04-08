import Purdy = require('purdy');

const obj: object = {
    str: 'string',
    num: 5,
    nil: null,
    bool: false,
    nested: {
        hello: "world"
    }
};

const options: Purdy.Options = {
    pathPrefix: "",
    arrayIndex: true,
    indent: 2,
    align: "left",
    depth: null,
    json: true
};

Purdy(obj, options); // $ExpectType void
Purdy.stringify(obj, options); // $ExpectType string

const inst = Purdy.purdy(options); // $ExpectType Instance
inst.print("string", 5, true, obj); // $ExpectType void
inst.stringify("string", 5, true, obj); // $ExpectType string
