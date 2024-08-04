import camelize = require("camelize");

const obj = {
    "foo-bar": 1,
    "bar-baz": {
        "baz-qux": 2,
    },
    "qux.quux": {
        "quux_quuz": {
            "quuz-corge": 3,
        },
    },
    15: 4,
};

const camelizedObj = camelize(obj);

// $ExpectType number
camelizedObj.fooBar;

// $ExpectType number
camelizedObj.barBaz.bazQux;

// $ExpectType number
camelizedObj.quxQuux.quuxQuuz.quuzCorge;

// $ExpectType "fooBar"
camelize("foo-bar" as const);

// $ExpectType Date
camelize(new Date());

// $ExpectType Date
camelize({ "my-date": new Date() }).myDate;

// $ExpectType RegExp
camelize(/foo/);

// $ExpectType RegExp
camelize({ "my-regexp": /foo/ }).myRegexp;

// $ExpectType string[]
camelize(["foo-bar", "bar-baz"]);

// $ExpectType string[]
camelize({ "my-array": ["foo-bar", "bar-baz"] }).myArray;

// $ExpectType { fooBar: number; }[]
camelize({ "my-array": [{ "foo-bar": 1 }] }).myArray;
