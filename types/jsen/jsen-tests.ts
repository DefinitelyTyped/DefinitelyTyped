import jsen = require("jsen");
import JsenSettings = jsen.JsenSettings;

// any
{
    // passes validation on any type
    {
        const schema = { type: "any" };
        const validate = jsen(schema);

        console.assert(validate(null));
        console.assert(validate(undefined));
        console.assert(validate(0));
        console.assert(validate(''));
        console.assert(validate(Math.PI));
        console.assert(validate('abc'));
        console.assert(validate(77));
        console.assert(validate(false));
        console.assert(validate(true));
        console.assert(validate({}));
        console.assert(validate([]));
    }
}

// type: array
{
    // required
    {
        const schema = { type: 'array' };
        const validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate([]));
    }
    // nullable
    {
        const schema = { type: ['array', 'null'] };
        const validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(null));
        console.assert(validate([]));
    }

    // type
    {
        const schema = { type: 'array' };
        const validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate(false));
        console.assert(!validate({}));
        console.assert(!validate(Math.PI));

        console.assert(validate([]));
    }

    // minItems
    {
        const schema = { type: 'array', minItems: 3 };
        const validate = jsen(schema);

        console.assert(!validate([]));
        console.assert(!validate([1, 2]));

        console.assert(validate([1, 2, 3]));
        console.assert(validate([1, 2, 3, 4]));
    }

    // maxItems
    {
        const schema = { type: 'array', maxItems: 3 };
        const validate = jsen(schema);

        console.assert(!validate([1, 2, 3, 4]));

        console.assert(validate([]));
        console.assert(validate([1, 2, 3]));
    }

    // items: object
    {
        let schema: any = { type: 'array', items: { type: 'string' } };
        let validate = jsen(schema);

        console.assert(!validate(null));
        console.assert(!validate([1]));
        console.assert(!validate(['a', false, 'b']));
        console.assert(!validate(['a', 'b', 1]));

        console.assert(validate([]));
        console.assert(validate(['a']));
        console.assert(validate(['a', 'b', 'c']));

        schema = {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    strProp: { type: 'string' },
                    boolProp: { type: 'boolean' }
                },
                required: ['strProp']
            }
        };

        validate = jsen(schema);

        console.assert(!validate([123]));
        console.assert(!validate([{}]));
        console.assert(!validate([{
            strProp: 'value',
            boolProp: 123
        }]));

        console.assert(validate([{
            strProp: 'value',
            boolProp: false
        }]));
    }

    // items: array
    {
        const schema = {
            type: 'array',
            items: [
                { type: 'string' },
                { type: 'number' }
            ]
        };

        const validate = jsen(schema);

        console.assert(!validate([1]));
        console.assert(!validate([1, 'a']));

        console.assert(validate([]));
        console.assert(validate(['a']));
        console.assert(validate(['a', 1]));
        console.assert(validate(['a', 1, null, 'b', 2]));
    }

    // additionalItems: boolean
    {
        let schema: any = { type: 'array', additionalItems: false };
        let validate = jsen(schema);

        console.assert(validate([]));
        console.assert(validate([1]));
        console.assert(validate([1, 'a', true]));

        schema.items = { type: 'number' };
        validate = jsen(schema);

        console.assert(!validate(['a']));

        console.assert(validate([]));
        console.assert(validate([1]));
        console.assert(validate([1, 2, 3]));

        schema.items = [
            { type: 'string' },
            { type: 'number' }
        ];
        validate = jsen(schema);

        console.assert(!validate(['a', 1, 2]));

        console.assert(validate([]));
        console.assert(validate(['a']));
        console.assert(validate(['a', 1]));
    }

    // additionalItems: object
    {
        // when `items` is an object schema, `additionalItems`
        // is ignored and must not validate against
        let schema: any = {
            type: 'array',
            items: {
                type: 'string'
            },
            additionalItems: {
                type: 'number'
            }
        };

        let validate = jsen(schema);

        console.assert(!validate(['abc', 'def', 123]));

        // same as above description - only strings are valid
        console.assert(validate(['abc', 'def']));

        // when `items` is an array, any other positional
        // data item must validate against `additionalItems`
        schema.items = [
            { type: 'string' },
            { type: 'boolean' }
        ];
        validate = jsen(schema);

        console.assert(!validate(['abc', false, 'def']));

        console.assert(validate(['abc', false]));
        console.assert(validate(['abc', false, 123]));
        console.assert(validate(['abc', false, 123, Math.PI]));

        // when `additionalItems` is an empty object, anything is valid
        schema.additionalItems = {};
        validate = jsen(schema);

        console.assert(validate(['abc', false, 'def', 123, {}, null]));
    }

    // uniqueItems
    {
        let schema = {
            type: 'array',
            items: { type: 'number' },
            uniqueItems: false
        };

        let validate = jsen(schema);

        console.assert(validate([1, 2, 1]));

        schema.uniqueItems = true;
        validate = jsen(schema);

        console.assert(!validate([1, 2, 1]));

        console.assert(validate([1, 2, 3]));
    }
}

// type: boolean
{
    // required
    {
        const schema = { type: 'boolean' };
        const validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate(false));
        console.assert(validate(true));
    }

    // nullable
    {
        const schema = { type: ['boolean', 'null'] };
        const validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(true));
        console.assert(validate(false));
        console.assert(validate(null));
    }

    // type
    {
        const schema = { type: 'boolean' };
        const validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate([]));
        console.assert(!validate({}));
        console.assert(!validate(Math.PI));

        console.assert(validate(true));
        console.assert(validate(false));
    }
}

// build
{
    // validator function has a build property
    {
        const validate = jsen({});

        console.assert(typeof validate.build === 'function');
        console.assert(validate.build.length === 2);
    }

    // returns default value from schema if initial undefined
    {
        const validate = jsen({ type: 'string', default: 'abc' });

        console.assert(validate.build() === 'abc');
        console.assert(validate.build(undefined) === 'abc');
    }

    // does not modify initial defined value
    {
        const validate = jsen({ type: 'string', default: 'abc' });
        const initials = [
            null,
            '',
            'string value',
            true,
            false,
            123,
            Math.PI
        ];

        let obj: any;

        initials.forEach((initial) => {
            obj = validate.build(initial);
            console.assert(obj === initial);
        });
    }

    // returns a copy of initial defined value
    {
        const validate = jsen({ type: 'string', default: 'abc' });
        const initials = [
            {},
            [],
            new Date()
        ];

        let obj: any;

        initials.forEach((initial) => {
            obj = validate.build(initial);
            console.assert(obj !== initial);
            console.assert(JSON.stringify(obj) === JSON.stringify(initial));
        });
    }

    // returns initial if no default in schema
    {
        const validate = jsen({}),
            initials = [
                undefined,
                null,
                '',
                'string value',
                true,
                false,
                123,
                Math.PI,
                {},
                [],
                new Date()
            ];

        let obj: any;

        initials.forEach((initial) => {
            obj = validate.build(initial);
            console.assert(JSON.stringify(obj) === JSON.stringify(initial));
        });
    }

    // returns the default value specified in schema
    {
        const schemas = [
            { default: null },
            { default: undefined },
            { default: '' },
            { default: 'abc' },
            { default: true },
            { default: false },
            { default: 123 },
            { default: Math.PI }
        ];

        schemas.forEach((schema) => {
            let validate = jsen(schema);
            console.assert(validate.build() === schema.default);
        });
    }

    // returns a copy of a default object or array in schema
    {
        const schemas = [
            { default: { a: { b: 123 } } },
            { default: [[1, 2, 3], { a: { b: 123 } }] },
            { default: /\d+/ },
            { default: new Date('05/14/2015') }
        ];

        schemas.forEach((schema) => {
            let validate = jsen(schema);
            let def = validate.build();

            console.assert(def !== schema.default);
            console.assert(JSON.stringify(def) === JSON.stringify(schema.default));
        });
    }

    // recursively collects default values
    {
        const schema: any = {
            type: 'object',
            default: {},
            properties: {
                a: {
                    type: 'array',
                    default: [],
                    items: {
                        type: 'string'
                    }
                },
                b: {
                    type: 'array',
                    default: [],
                    items: {
                        type: 'string',
                        default: 'abc'
                    }
                },
                c: {
                    type: 'object',
                    default: {},
                    properties: {
                        d: {
                            type: 'boolean',
                            default: false
                        },
                        e: {
                            type: 'date',
                            default: new Date('05/14/2015')
                        },
                        f: {
                            type: 'array',
                            default: [{}, {}],
                            items: [{
                                type: 'object',
                                properties: {
                                    g: {
                                        type: 'string',
                                        default: 'yes'
                                    }
                                }
                            }, {
                                type: 'object',
                                properties: {
                                    g: {
                                        type: 'integer',
                                        default: 0
                                    }
                                }
                            }, {
                                type: 'object',
                                properties: {
                                    g: {
                                        type: 'boolean',
                                        default: true
                                    }
                                }
                            }]
                        },
                        h: {
                            type: 'array',
                            default: [{}, {}],
                            items: {
                                type: 'object',
                                properties: {
                                    i: {
                                        type: 'object',
                                        default: { foo: 'bar' }
                                    }
                                }
                            }
                        },
                        i: {
                            type: 'object',
                            default: null,
                            properties: {
                                j: {
                                    type: 'string',
                                    default: 'baz'
                                }
                            }
                        }
                    }
                },
                j: {
                    type: 'object',
                    properties: {
                        k: {
                            type: 'boolean',
                            default: false
                        }
                    }
                }
            }
        };

        const expected: any = {
            a: [],
            b: [],
            c: {
                d: false,
                e: new Date('05/14/2015'),
                f: [
                    { g: 'yes' },
                    { g: 0 }
                ],
                h: [
                    { i: { foo: 'bar' } },
                    { i: { foo: 'bar' } }
                ],
                i: null
            }
        };

        const validate = jsen(schema);
        console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
    }

    // merges default values with the initial values
    {
        const schemas = [
            {
                properties: {
                    foo: { default: 'bar' }
                }
            },
            {
                properties: {
                    foo: { default: 'bar' }
                }
            },
            {
                properties: {
                    foo: { default: 'bar' }
                }
            },
            {
                items: {
                    properties: {
                        foo: { default: 'bar' }
                    }
                }
            },
            {
                items: {
                    properties: {
                        foo: { default: 'bar' }
                    }
                }
            },
            {
                items: [
                    { default: 'foo' },
                    { default: 'bar' },
                    { default: 'baz' }
                ]
            },
            {
                items: [
                    { default: 'foo' },
                    { default: 'bar' },
                    { default: 'baz' }
                ]
            }
        ];

        const defaults = [
            {},
            { foo: 'baz' },
            { x: 'yz' },
            [],
            [{}],
            [],
            [null, {}, undefined, false]
        ];

        const expected = [
            { foo: 'bar' },
            { foo: 'baz' },
            { foo: 'bar', x: 'yz' },
            [],
            [{ foo: 'bar' }],
            ['foo', 'bar', 'baz'],
            [null, {}, 'baz', false]
        ];

        schemas.forEach((schema, index) => {
            let validate = jsen(schema);
            console.assert(JSON.stringify(validate.build(defaults[index])) === JSON.stringify(expected[index]));
        });
    }

    // $ref
    {
        const schema = {
            definitions: {
                positiveInteger: {
                    type: 'integer',
                    minimum: 1,
                    default: 7
                }
            },
            $ref: '#definitions/positiveInteger'
        };

        const validate = jsen(schema);
        console.assert(validate.build() === 7);
    }

    // object
    {
        // clones default object and subproperties recursively
        {
            const schema = {
                default: {},
                properties: {
                    foo: {
                        type: 'string',
                        default: 'bar'
                    }
                }
            };

            const expected = { foo: 'bar' };

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }

        // does not recursively assign defaults of children if parent default is not an object
        {
            const schema: any = {
                default: [],
                properties: {
                    foo: {
                        type: 'string',
                        default: 'bar'
                    }
                }
            };

            const expected: any = [];

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }
    }

    // array
    {
        // does not add new elements to default array: items schema is an object
        {
            const schema: any = {
                default: [],
                items: {
                    type: 'string',
                    default: 'bar'
                }
            };

            const expected: any = [];

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }

        // adds new elements to default array: items schema is an array
        {
            const schema: any = {
                default: [],
                items: [{
                    type: 'string',
                    default: 'bar'
                }]
            };

            const expected = ['bar'];

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }

        // adds default values to already existing child items of compatible type only: items schema is an object
        {
            const schema: any = {
                default: [{}, null, []],
                items: {
                    properties: {
                        foo: {
                            type: 'string',
                            default: 'bar'
                        }
                    }
                }
            };

            const expected: any = [{ foo: 'bar' }, null, []];

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }

        // adds default values to already existing child items of compatible type only: items schema is an array
        {
            const schema: any = {
                default: [{}, null, {}, undefined],
                items: [
                    {
                        properties: {
                            foo: {
                                type: 'string',
                                default: 'bar'
                            }
                        }
                    },
                    { default: 'abc' },
                    { default: 123 },
                    { default: 123 }
                ]
            };

            const expected = [{ foo: 'bar' }, null, {}, 123];

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }

        // does not assign default child items if parent default is not an array
        {
            const schema: any = {
                default: 'foobar',
                items: {
                    type: 'string',
                    default: 'bar'
                }
            };

            const expected = 'foobar';

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build()) === JSON.stringify(expected));
        }
    }

    // option: copy
    {
        // returns deep copy of the initial object by default
        {
            const schema = {};
            const initial = {};

            const validate = jsen(schema);

            console.assert(JSON.stringify(validate.build(initial)) === JSON.stringify(initial));
            console.assert(validate.build(initial) !== initial);
        }

        // modifies the initial object when copy = false
        {
            const schema = {
                properties: {
                    a: { default: 'foo' },
                    b: {
                        items: {
                            properties: {
                                c: { default: 'bar' },
                                d: { default: 'baz' }
                            }
                        }
                    }
                }
            };

            const initial = { b: [{ d: 'xyz' }] };
            const expected = { a: 'foo', b: [{ c: 'bar', d: 'xyz' }] };

            const validate = jsen(schema);
            const actual = validate.build(initial, { copy: false });

            console.assert(JSON.stringify(actual) === JSON.stringify(expected));
            console.assert(actual === initial);
        }
    }

    // option: additionalProperties
    {
        // includes by default
        {
            const schema = {
                properties: {
                    foo: {}
                }
            };

            const initial = { foo: 1, bar: 2 };
            const expected = { foo: 1, bar: 2 };

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build(initial)) === JSON.stringify(expected));
        }

        // excludes when schema.additionalProperties = false
        {
            const schema = {
                additionalProperties: false,
                properties: {
                    foo: {}
                }
            };

            const initial = { foo: 1, bar: 2 };
            const expected = { foo: 1 };

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build(initial)) === JSON.stringify(expected));
        }

        // removes from the initial object when schema.additionalProperties = false and options.copy = false
        {
            const schema = {
                additionalProperties: false,
                properties: {
                    foo: {}
                }
            };

            const initial = { foo: 1, bar: 2 };
            const expected = { foo: 1 };

            const validate = jsen(schema);
            const actual = validate.build(initial, { copy: false });

            console.assert(actual === initial);
            console.assert(JSON.stringify(actual) === JSON.stringify(expected));
        }

        // removes from the initial object when options.additionalProperties = false and options.copy = false
        {
            const schema = {
                properties: {
                    foo: {}
                }
            };

            const initial = { foo: 1, bar: 2 };
            const expected = { foo: 1 };

            const validate = jsen(schema);
            const actual = validate.build(initial, {
                copy: false,
                additionalProperties: false
            });

            console.assert(actual === initial);
            console.assert(JSON.stringify(actual) === JSON.stringify(expected));
        }

        // schema.additionalProperties takes precedence
        {
            const schema = {
                additionalProperties: true,
                properties: {
                    foo: {}
                }
            };

            const initial = { foo: 1, bar: 2 };
            const expected = { foo: 1, bar: 2 };

            const validate = jsen(schema);
            console.assert(JSON.stringify(validate.build(initial, { additionalProperties: false })) === JSON.stringify(expected));
        }
    }
}

// clone
{
    const clone = jsen.clone;

    // string
    {
        console.assert(clone('abc') === 'abc');
    }

    // number
    {
        console.assert(clone(123) === 123);
    }

    // integer
    {
        console.assert(clone(Math.PI) === Math.PI);
    }

    // boolean
    {
        console.assert(clone(false) === false);
    }

    // function
    {
        const func = () => {
        };
        console.assert(clone(func) === func);
    }

    // regexp
    {
        const regex = /a/gim;
        console.assert(clone(regex) !== regex);
        console.assert(clone(regex).toString() === regex.toString());
    }

    // date
    {
        const today = new Date('05/14/2015');
        console.assert(clone(today) !== today);
        console.assert(clone(today).toJSON() === today.toJSON());
    }

    // null
    {
        console.assert(clone(null) === null);
    }

    // undefined
    {
        console.assert(clone(undefined) === undefined);
    }

    // object
    {
        const obj = { a: 1, b: 'a', c: false, d: { e: Math.PI, f: [1, 2, 3] } };
        console.assert(clone(obj) !== obj);
        console.assert(JSON.stringify(clone(obj)) === JSON.stringify(obj));
    }

    // array
    {
        const arr = [1, 'a', false, { d: [1, 2, 3] }];
        console.assert(clone(arr) !== arr);
        console.assert(JSON.stringify(clone(arr)) === JSON.stringify(arr));
    }
}

// type: date
{
    // required
    {
        const schema = { type: 'date' };
        const validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate(new Date()));
    }

    // nullable
    {
        const schema = { type: ['date', 'null'] };
        const validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(new Date()));
        console.assert(validate(null));
    }

    // type
    {
        const schema = { type: 'date' };
        const validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate([]));
        console.assert(!validate({}));
        console.assert(!validate(Math.PI));

        console.assert(validate(new Date()));
    }
}

// equal
{
    const equal = jsen.equal;
    // string
    {
        console.assert(equal('a', 'a'));
        console.assert(!equal('a', 'b'));
    }

    // number
    {
        console.assert(equal(123, 123));
        console.assert(equal(Math.PI, Math.PI));
        console.assert(!equal(Math.PI, Math.E));
    }

    // boolean
    {
        console.assert(equal(true, true));
        console.assert(!equal(true, false));
    }

    // null
    {
        console.assert(equal(null, null));
        console.assert(!equal(null, undefined));
    }

    // undefined
    {
        console.assert(equal(undefined, undefined));
        console.assert(!equal(null, undefined));
    }

    // function
    {
        const f1 = () => {
        };
        const f2 = () => {
        };
        const f3 = f1;

        // two functions are only equal if they
        // reference the same function object
        console.assert(equal(f1, f3));
        console.assert(!equal(f1, f2));
    }

    // array
    {
        const f = () => {
        };
        const obj1 = { a: 123, b: 'abc', c: f };
        const obj2 = { a: 123, b: 'abc', c: f };
        const arr1 = [1, 'a', f, obj1];
        const arr2 = [1, 'a', f, obj1];
        const arr3 = [1, 'a', f];
        const arr4 = [1, 'a', f, obj2];

        console.assert(equal(arr1, arr2));
        console.assert(equal(arr1, arr4));

        console.assert(!equal(arr1, arr3));
    }

    // object
    {
        const a = { a: 123, b: ['abc'], c: {} };
        const b = { b: ['abc'], c: {}, a: 123 };
        const c = a;
        const d: any = { a: 123, b: ['abc'], c: { d: undefined } };

        console.assert(equal(a, b));
        console.assert(equal(a, c));

        console.assert(!equal(a, d));
    }

    // regexp
    {
        const a = /a+/gim;
        const b = new RegExp('a+', 'gim');
        const c = /a/gim;
        const d = a;

        console.assert(equal(a, b));
        console.assert(equal(a, d));

        console.assert(!equal(a, c));
    }
}

// error
{
    // errors is empty array before validation
    {
        const schema = { type: 'number' };
        const validate = jsen(schema);

        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 0);
    }

    // no errors on successful validation
    {
        const schema = { type: 'number' };
        const validate = jsen(schema);
        const valid = validate(123);

        console.assert(valid);
        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 0);
    }

    // has errors when validation unsuccessful
    {
        const schema = { type: 'number' };
        const validate = jsen(schema);
        const valid = validate('123');

        console.assert(!valid);
        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 1);
    }

    // clears errors on successive validation calls
    {
        const schema = { type: 'number' };
        const validate = jsen(schema);

        validate('123');
        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 1);

        validate(123);
        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 0);

        validate('123');
        console.assert(Array.isArray(validate.errors));
        console.assert(validate.errors.length === 1);
    }

    // two successive runs return different arrays
    {
        const schema = { type: 'number' };
        const validate = jsen(schema);

        let previous: any;

        validate('123');
        console.assert(validate.errors.length === 1);
        previous = validate.errors;

        validate('123');
        console.assert(validate.errors.length === 1);

        console.assert(validate.errors !== previous);
        console.assert(JSON.stringify(validate.errors) === JSON.stringify(previous));
    }

    // error object
    {
        const schemas = [
            {
                type: 'number'
            },

            {
                type: 'object',
                properties: {
                    a: {
                        type: 'string'
                    }
                }
            },

            {
                type: 'array',
                uniqueItems: true
            },

            {
                type: 'array',
                items: {
                    maximum: 10
                }
            },

            {
                type: 'object',
                properties: {
                    a: {
                        type: 'array',
                        items: [{
                            type: 'object',
                            properties: {
                                b: {
                                    multipleOf: 7
                                }
                            }
                        }]
                    }
                }
            },

            {
                allOf: [
                    { minimum: 5 },
                    { maximum: 10 }
                ]
            },

            {
                type: 'object',
                properties: {
                    a: {
                        anyOf: [
                            { type: 'string' },
                            { type: 'number' }
                        ]
                    }
                }
            },

            {
                type: 'array',
                items: [{
                    type: 'object',
                    properties: {
                        a: {
                            oneOf: [
                                { type: 'boolean' },
                                { type: 'null' }
                            ]
                        }
                    }
                }]
            },

            {
                type: 'object',
                properties: {
                    a: {
                        not: {
                            type: 'string'
                        }
                    }
                }
            },

            {
                definitions: {
                    positiveInteger: {
                        type: 'integer',
                        minimum: 0,
                        exclusiveMinimum: true
                    }
                },
                type: 'object',
                properties: {
                    a: {
                        type: 'object',
                        properties: {
                            b: {
                                type: 'object',
                                properties: {
                                    c: {
                                        $ref: '#/definitions/positiveInteger'
                                    }
                                }
                            }
                        }
                    }
                }
            },

            {
                type: 'object',
                required: ['a', 'b']
            },

            {
                type: 'object',
                dependencies: {
                    a: {
                        required: ['b']
                    }
                }
            },

            {
                type: 'object',
                dependencies: {
                    a: ['b']
                }
            }
        ];

        const data = [
            '123',
            { a: 123 },
            [7, 11, 7],
            [10, 11, 9],
            { a: [{ b: 8 }] },
            12,
            { a: false },
            [{ a: 123 }],
            { a: 'abc' },
            { a: { b: { c: 0 } } },
            {},
            { a: 123 },
            { a: 123 }
        ];

        // property: path
        {
            const expectedPaths = [
                [''],
                ['a'],
                [''],
                ['1'],
                ['a.0.b'],
                [''],
                ['a', 'a'],
                ['0.a', '0.a', '0.a'],
                ['a'],
                ['a.b.c'],
                ['a'],
                ['b'],
                ['b']
            ];

            schemas.forEach((schema, index) => {
                let validate = jsen(schema);
                let valid = validate(data[index]);

                console.assert(!valid);

                expectedPaths[index].forEach((path, pindex) => {
                    try {
                        console.assert(validate.errors[pindex].path === path);
                    }
                    catch (e) {
                        // console.log(index);
                        // console.log(validate.errors);
                        throw e;
                    }
                });
            });
        }

        // property: keyword
        {
            const expectedKeywords = [
                ['type'],
                ['type'],
                ['uniqueItems'],
                ['maximum'],
                ['multipleOf'],
                ['maximum'],
                ['type', 'type', 'anyOf'],
                ['type', 'type', 'oneOf'],
                ['not'],
                ['exclusiveMinimum'],
                ['required'],
                ['required'],
                ['dependencies']
            ];

            schemas.forEach((schema, index) => {
                let validate = jsen(schema);
                let valid = validate(data[index]);

                console.assert(!valid);

                expectedKeywords[index].forEach((keyword, kindex) => {
                    try {
                        console.assert(validate.errors[kindex].keyword === keyword);
                    }
                    catch (e) {
                        // console.log(index);
                        // console.log(validate.errors);
                        throw e;
                    }
                });
            });
        }

        // adds required property name to path
        {
            let schema: any = { type: 'object', required: ['a'] };
            let validate = jsen(schema);
            let valid = validate({});

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].path === 'a');
            console.assert(validate.errors[0].keyword === 'required');

            schema = {
                type: 'object',
                properties: {
                    a: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['b']
                        }
                    }
                }
            };

            validate = jsen(schema);
            valid = validate({ a: [{}] });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].path === 'a.0.b');
            console.assert(validate.errors[0].keyword === 'required');
        }

        // adds required dependency property to path
        {
            let schema: any = {
                type: 'object',
                dependencies: {
                    a: ['b']
                }
            };

            let validate = jsen(schema);
            let valid = validate({ a: 123 });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].path === 'b');
            console.assert(validate.errors[0].keyword === 'dependencies');

            schema = {
                type: 'object',
                properties: {
                    a: {
                        type: 'array',
                        items: {
                            type: 'object',
                            dependencies: {
                                a: ['b']
                            }
                        }
                    }
                }
            };

            validate = jsen(schema);
            valid = validate({ a: [{ a: 123 }] });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].path === 'a.0.b');
            console.assert(validate.errors[0].keyword === 'dependencies');
        }
    }

    // multiple errors
    {
        const schema = {
            definitions: {
                array: {
                    maxItems: 1
                }
            },
            type: 'object',
            properties: {
                a: {
                    anyOf: [
                        { items: { type: 'integer' } },
                        { $ref: '#/definitions/array' },
                        { items: [{ maximum: 3 }] }
                    ]
                }
            }
        };

        const data = { a: [Math.PI, Math.E] };
        const validate = jsen(schema);

        // returns multiple errors
        {
            const valid = validate(data);

            // console.log(validate.errors);

            console.assert(!valid);
            console.assert(validate.errors.length === 5);
        }
    }

    // custom errors
    {
        const schemas = [
            {
                type: 'string',
                invalidMessage: 'string is invalid',
                requiredMessage: 'string is required'
            },
            {
                type: 'object',
                required: ['a'],
                properties: {
                    a: {
                        invalidMessage: 'a is invalid',
                        requiredMessage: 'a is required'
                    }
                }
            },
            {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        a: {
                            type: 'object',
                            properties: {
                                b: {
                                    invalidMessage: 'b is invalid',
                                    requiredMessage: 'b is required'
                                }
                            },
                            required: ['b']
                        }
                    }
                }
            },
            {
                type: 'object',
                properties: {
                    a: {
                        type: 'object',
                        properties: {
                            c: {
                                type: 'string',
                                invalidMessage: 'c is invalid',
                                requiredMessage: 'c is required'
                            }
                        }
                    }
                }
            }
        ];

        const data = [
            undefined,
            {},
            [{ a: {} }],
            { a: { c: 123 } }
        ];

        const expectedMessages = [
            'string is invalid',
            'a is required',
            'b is required',
            'c is invalid'
        ];

        schemas.forEach((schema, index) => {
            //it(expectedMessages[index], function () {
            let validate = jsen(schema);
            let valid = validate(data[index]);

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === expectedMessages[index]);
            //});
        });
    }

    // custom keyword messages
    {
        // uses custom messages on keywords
        {
            const schemas: any = [
                {
                    type: 'string',
                    messages: { type: 'custom message for keyword "type"' }
                },
                {
                    enum: [1, 2, 3],
                    messages: { enum: 'custom message for keyword "enum"' }
                },
                {
                    minimum: 3,
                    messages: { minimum: 'custom message for keyword "minimum"' }
                },
                {
                    minimum: 3,
                    exclusiveMinimum: true,
                    messages: { exclusiveMinimum: 'custom message for keyword "exclusiveMinimum"' }
                },
                {
                    maximum: 10,
                    messages: { maximum: 'custom message for keyword "maximum"' }
                },
                {
                    maximum: 10,
                    exclusiveMaximum: true,
                    messages: { exclusiveMaximum: 'custom message for keyword "exclusiveMaximum"' }
                },
                {
                    multipleOf: 5,
                    messages: { multipleOf: 'custom message for keyword "multipleOf"' }
                },
                {
                    minLength: 3,
                    messages: { minLength: 'custom message for keyword "minLength"' }
                },
                {
                    maxLength: 5,
                    messages: { maxLength: 'custom message for keyword "maxLength"' }
                },
                {
                    pattern: '\\d+',
                    messages: { pattern: 'custom message for keyword "pattern"' }
                },
                {
                    format: 'email',
                    messages: { format: 'custom message for keyword "format"' }
                },
                {
                    minItems: 1,
                    messages: { minItems: 'custom message for keyword "minItems"' }
                },
                {
                    maxItems: 1,
                    messages: { maxItems: 'custom message for keyword "maxItems"' }
                },
                {
                    additionalItems: false,
                    items: [{ type: 'string' }],
                    messages: { additionalItems: 'custom message for keyword "additionalItems"' }
                },
                {
                    uniqueItems: true,
                    messages: { uniqueItems: 'custom message for keyword "uniqueItems"' }
                },
                {
                    minProperties: 1,
                    messages: { minProperties: 'custom message for keyword "minProperties"' }
                },
                {
                    maxProperties: 1,
                    messages: { maxProperties: 'custom message for keyword "maxProperties"' }
                },
                {
                    required: ['foo'],
                    messages: { required: 'custom message for keyword "required"' }
                },
                {
                    required: ['foo'],
                    properties: {
                        foo: {
                            messages: {
                                required: 'custom message for keyword "required"'
                            }
                        }
                    }
                },
                {
                    required: ['foo'],
                    properties: {
                        foo: {
                            messages: {
                                required: 'this custom message for keyword "required" is assigned'
                            }
                        }
                    },
                    messages: { required: 'this custom message for keyword "required" is NOT assigned' }
                },
                {
                    additionalProperties: false,
                    messages: { additionalProperties: 'custom message for keyword "additionalProperties"' }
                },
                {
                    dependencies: {
                        foo: ['bar']
                    },
                    messages: { dependencies: 'custom message for keyword "dependencies"' }
                },
                {
                    anyOf: [
                        { type: 'string' },
                        { type: 'integer' }
                    ],
                    messages: { anyOf: 'custom message for keyword "anyOf"' }
                },
                {
                    oneOf: [
                        { type: 'string' },
                        { type: 'integer' }
                    ],
                    messages: { oneOf: 'custom message for keyword "oneOf"' }
                },
                {
                    not: {
                        type: 'string'
                    },
                    messages: { not: 'custom message for keyword "not"' }
                }
            ];

            const data = [
                123,
                5,
                1,
                3,
                11,
                10,
                12,
                'ab',
                'abcdef',
                'abc',
                'invalid email',
                [],
                [1, 2, 3],
                ['abc', 'def'],
                [1, 2, 2],
                {},
                { foo: 1, bar: 2 },
                {},
                {},
                {},
                { foo: 'bar' },
                { foo: 'abc' },
                null,
                null,
                'abc'
            ];

            const expectedMessages = [
                schemas[0].messages.type,
                schemas[1].messages.enum,
                schemas[2].messages.minimum,
                schemas[3].messages.exclusiveMinimum,
                schemas[4].messages.maximum,
                schemas[5].messages.exclusiveMaximum,
                schemas[6].messages.multipleOf,
                schemas[7].messages.minLength,
                schemas[8].messages.maxLength,
                schemas[9].messages.pattern,
                schemas[10].messages.format,
                schemas[11].messages.minItems,
                schemas[12].messages.maxItems,
                schemas[13].messages.additionalItems,
                schemas[14].messages.uniqueItems,
                schemas[15].messages.minProperties,
                schemas[16].messages.maxProperties,
                schemas[17].messages.required,
                schemas[18].properties.foo.messages.required,
                schemas[19].properties.foo.messages.required,
                schemas[20].messages.additionalProperties,
                schemas[21].messages.dependencies,
                schemas[22].messages.anyOf,
                schemas[23].messages.oneOf,
                schemas[24].messages.not
            ];

            schemas.forEach((schema: any, index: number) => {
                let validate = jsen(schema);
                let valid = validate(data[index]);

                console.assert(!valid);
                console.assert(validate.errors[validate.errors.length - 1].message === expectedMessages[index]);
            });
        }

        // does not use custom messages on keyword: items (object)
        {
            const schema = {
                items: {
                    type: 'string',
                    messages: {
                        type: 'will be assigned'
                    }
                },
                messages: {
                    items: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate([123]);

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }

        // does not use custom messages on keyword: items (array)
        {
            const schema = {
                items: [{
                    type: 'string',
                    messages: {
                        type: 'will be assigned'
                    }
                }],
                messages: {
                    items: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate([123, 123]);

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }

        // does not use custom messages on keyword: properties
        {
            const schema = {
                properties: {
                    foo: {
                        type: 'number',
                        messages: {
                            type: 'will be assigned'
                        }
                    }
                },
                messages: {
                    properties: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate({ foo: 'bar' });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }

        // does not use custom messages on keyword: patternProperties
        {
            const schema = {
                patternProperties: {
                    '^foo$': {
                        type: 'number',
                        messages: {
                            type: 'will be assigned'
                        }
                    }
                },
                messages: {
                    patternProperties: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate({ foo: 'bar' });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }

        // does not use custom messages on keyword: dependencies (schema)
        {
            const schema = {
                dependencies: {
                    foo: {
                        minProperties: 2,
                        messages: {
                            minProperties: 'will be assigned'
                        }
                    }
                },
                messages: {
                    dependencies: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate({ foo: 'bar' });

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }

        // does not use custom messages on keyword: allOf
        {
            const schema = {
                dependencies: {
                    foo: {
                        minProperties: 2,
                        messages: {
                            minProperties: 'will be assigned'
                        }
                    }
                },
                allOf: [
                    {
                        minimum: 2,
                        messages: {
                            minimum: 'will not be assigned'
                        }
                    },
                    {
                        maximum: 5,
                        messages: {
                            maximum: 'will be assigned'
                        }
                    }
                ],
                messages: {
                    allOf: 'will not be assigned'
                }
            };

            const validate = jsen(schema);
            const valid = validate(6);

            console.assert(!valid);
            console.assert(validate.errors.length === 1);
            console.assert(validate.errors[0].message === 'will be assigned');
        }
    }
}

const doesThrow = (func: Function) => {
    try {
        func();
    }
    catch (e) {
        return true;
    }

    return false;
};

const doesNotThrow = (func: Function) => {
    return !doesThrow(func);
};

// fixes
{
    // Fix broken inlining of regular expressions containing slashes (#15, #25)
    {
        const schema = {
            type: 'string',
            pattern: '^/dev/[^/]+(/[^/]+)*$'
        };

        console.assert(doesNotThrow(jsen(schema)));
    }

    // Fix code generation breaks when object properties in schema are not valid identifiers (#16)
    {
        const schema = {
            type: 'object',
            properties: {
                123: {
                    type: 'boolean'
                }
            }
        };

        console.assert(doesNotThrow(() => {
                let validate = jsen(schema);
                console.assert(validate({ 123: true }));
            })
        );
    }

    // Fix cannot dereference schema when ids change resolution scope (#14)
    {
        let schema: any = {
            $ref: '#child',
            definitions: {
                child: {
                    id: '#child',
                    type: 'string'
                }
            }
        };

        console.assert(doesNotThrow(() => {
                let validate = jsen(schema);

                console.assert(validate('abc'));
                console.assert(!validate(123));
            })
        );


        schema = {
            $ref: '#child/definitions/subchild',
            definitions: {
                child: {
                    id: '#child',
                    definitions: {
                        subchild: {
                            type: 'number'
                        }
                    }
                }
            }
        };

        console.assert(doesThrow(() => {
                let validate = jsen(schema);
            })
        );
    }

    // Fix recursive calls to the same cached $ref validator resets the error object
    {
        const schema = {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    foo: { $ref: '#' }
                },
                required: ['foo']
            }
        };

        const validate = jsen(schema);

        console.assert(validate([{ foo: [] }]));
        console.assert(validate([{ foo: [{ foo: [] }] }]));
        console.assert(!validate([{ bar: [] }]));
        console.assert(!validate([{ foo: [{ foo: [] }, { bar: [] }] }])); // Bug! False positive
    }
}

// format
{
    // date-time
    {
        const schema = { format: 'date-time' };
        const validate = jsen(schema);

        console.assert(validate(new Date().toJSON()));

        console.assert(!validate(''));
        console.assert(!validate(new Date().toUTCString()));
        console.assert(!validate(new Date().toLocaleDateString()));
        console.assert(!validate(new Date().toTimeString()));
    }

    // uri
    {
        const schema = { format: 'uri' };
        const validate = jsen(schema);

        console.assert(validate('http://google.com'));
        console.assert(validate('ftp://my-site'));
        console.assert(validate('custom://my-site/long/$cr@mbl3d/u_r-l?with=query%20string'));
        console.assert(validate('//no-scheme-here'));

        console.assert(!validate(''));
        console.assert(!validate('google'));
        console.assert(!validate('/google'));
        console.assert(!validate('://google'));
        console.assert(!validate('http://google.com/no space allowed'));
    }

    // email
    {
        const schema = { format: 'email' };
        const validate = jsen(schema);
        const maxLongHostname1 = new Array(5).join('.' + new Array(64).join('a')).substr(1); // 255 chars (4 groups x 63 chars)
        const maxLongHostname2 = new Array(9).join('.' + new Array(32).join('a')).substr(1); // 255 chars (8 groups x 31 chars)

        console.assert(validate('me@domain'));
        console.assert(validate('first.last+plus-dash#hash!bang$dollar%percent&amp\'quote*star/dash=equal?question^pow_under`backtick{brace}|bar~tilde@domain'));
        console.assert(validate('me@domain.with.multiple.subdomains'));
        console.assert(validate('me@domain-parts.may.contain-dashes'));
        console.assert(validate('me@a-single-domain-part-can-be-up-to-sixty-three-characters-long63'));
        console.assert(validate('me@' + maxLongHostname1));
        console.assert(validate('me@' + maxLongHostname2));

        console.assert(!validate(''));
        console.assert(!validate('qu"ote\'s@domain'));
        console.assert(!validate('me@no_underscores+or?special$chars'));
        console.assert(!validate('me@ends-with-dash-'));
        console.assert(!validate('me@-starts-with-dash'));
        console.assert(!validate('me@asingle-domain-part-cannot-be-longer-than-sixty-three-characters'));

        // These verify that a hostname cannot be longer than 255 chars in total. However,
        // maximum string length verification cannot be performed in the same regex, so
        // these test cases fail. Users must additionall use the `maxlength` keyword in this case.
        // assert(!validate('me@' + maxLongHostname1 + '.a'));
        // assert(!validate('me@' + maxLongHostname2 + '.a'));
    }

    // ipv4
    {
        const schema = { format: 'ipv4' };
        const validate = jsen(schema);

        console.assert(validate('0.0.0.0'));
        console.assert(validate('255.255.255.255'));
        console.assert(validate('127.0.0.1'));

        console.assert(!validate(''));
        console.assert(!validate('...'));
        console.assert(!validate('0.0.0.-1'));
        console.assert(!validate('0.0.-1.0'));
        console.assert(!validate('0.-1.0.0'));
        console.assert(!validate('-1.0.0.0'));
        console.assert(!validate('256.0.0.0'));
        console.assert(!validate('0.256.0.0'));
        console.assert(!validate('0.0.256.0'));
        console.assert(!validate('0.0.0.256'));
    }

    // ipv6
    {
        const schema = { format: 'ipv6' };
        const validate = jsen(schema);

        console.assert(validate('1:2:3:4:5:6:7:8'));
        console.assert(validate('1::'));
        console.assert(validate('1:2:3:4:5:6:7::'));
        console.assert(validate('1::8'));
        console.assert(validate('1:2:3:4:5:6::8'));
        console.assert(validate('1::7:8'));
        console.assert(validate('1:2:3:4:5::7:8'));
        console.assert(validate('1:2:3:4:5::8'));
        console.assert(validate('1::6:7:8'));
        console.assert(validate('1:2:3:4::6:7:8'));
        console.assert(validate('1:2:3:4::8'));
        console.assert(validate('1::5:6:7:8'));
        console.assert(validate('1:2:3::5:6:7:8'));
        console.assert(validate('1:2:3::8'));
        console.assert(validate('1::4:5:6:7:8'));
        console.assert(validate('1:2::4:5:6:7:8'));
        console.assert(validate('1:2::8'));
        console.assert(validate('1::3:4:5:6:7:8'));
        console.assert(validate('1::8'));
        console.assert(validate('::2:3:4:5:6:7:8'));
        console.assert(validate('::8'));
        console.assert(validate('::'));

        // link-local IPv6 addresses with zone index
        console.assert(validate('fe80::7:8%eth0'));
        console.assert(validate('fe80::7:8%1'));

        // IPv4-mapped IPv6 addresses and IPv4-translated addresses
        console.assert(validate('::255.255.255.255'));
        console.assert(validate('::ffff:255.255.255.255'));
        console.assert(validate('::ffff:0:255.255.255.255'));

        // IPv4-Embedded IPv6 Address
        console.assert(validate('2001:db8:3:4::192.0.2.33'));
        console.assert(validate('64:ff9b::192.0.2.33'));

        console.assert(!validate(''));
        console.assert(!validate('::_'));

        // TODO: we may need more invalid cases here
    }

    // hostname
    {
        const schema = { format: 'hostname' },
            validate = jsen(schema),
            maxLong1 = new Array(5).join('.' + new Array(64).join('a')).substr(1),  // 255 chars (4 groups x 63 chars)
            maxLong2 = new Array(9).join('.' + new Array(32).join('a')).substr(1);  // 255 chars (8 groups x 31 chars)

        console.assert(validate('my.host'));
        console.assert(validate('host'));
        console.assert(validate('domain.with.multiple.subdomains'));
        console.assert(validate('domain-parts.may.contain-dashes'));
        console.assert(validate('a-single-domain-part-can-be-up-to-sixty-three-characters-long63'));
        console.assert(validate(maxLong1));
        console.assert(validate(maxLong2));

        console.assert(!validate(''));
        console.assert(!validate('me@domain'));
        console.assert(!validate('qu"ote\'s'));
        console.assert(!validate('no_underscores+or?special$chars'));
        console.assert(!validate('ends-with-dash-'));
        console.assert(!validate('-starts-with-dash'));
        console.assert(!validate('asingle-domain-part-cannot-be-longer-than-sixty-three-characters'));

        // These verify that a hostname cannot be longer than 255 chars in total. However,
        // maximum string length verification cannot be performed in the same regex, so
        // these test cases fail. Users must additionall use the `maxlength` keyword in this case.
        // assert(!validate(maxLong1 + '.a'));
        // assert(!validate(maxLong2 + '.a'));
    }

    // custom format
    {
        // accepts string
        {
            const schema = { format: 'custom' },
                custom = '^\\d+$',
                validate = jsen(schema, {
                    formats: {
                        custom: custom
                    }
                });

            console.assert(validate('123'));
            console.assert(!validate('a123'));
        }

        // accepts regex
        {
            const schema = { format: 'custom' },
                custom = /^\d+$/,
                validate = jsen(schema, {
                    formats: {
                        custom: custom
                    }
                });

            console.assert(validate('123'));
            console.assert(!validate('a123'));
        }

        // accepts function
        {
            let schema = { format: 'custom' },
                callCount = 0,
                custom = (value: any, childSchema: any) => {
                    console.assert(value.indexOf('123') > -1);
                    console.assert(childSchema === schema);

                    callCount++;

                    return /^\d+$/.test(value);
                },
                validate = jsen(schema, {
                    formats: {
                        custom: custom
                    }
                });

            console.assert(validate('123'));
            console.assert(!validate('a123'));
            console.assert(callCount === 2);
        }

        // is run for all types
        {
            let schema = { format: 'custom' },
                callCount = 0,
                options = {
                    formats: {
                        custom: () => {
                            callCount++;
                            return true;
                        }
                    }
                },
                validate = jsen(schema, options),
                data = [
                    undefined,
                    null,
                    'abc',
                    123,
                    Math.PI,
                    true,
                    false,
                    {},
                    [],
                    new Date()
                ];

            data.forEach((dataItem) => {
                validate(dataItem);
                console.assert(callCount === 1);
                callCount = 0;
            });
        }

        // is not run if a built-in keyword fails
        {
            let schema = {
                    format: 'custom',
                    type: 'number',
                    maximum: 10
                },
                callCount = 0,
                options = {
                    formats: {
                        custom: () => {
                            callCount++;
                            return true;
                        }
                    }
                },
                validate = jsen(schema, options);

            console.assert(!validate(123));
            console.assert(callCount === 0);

            console.assert(validate(7));
            console.assert(callCount === 1);
        }

        // common scenarios
        {
            // verify passwords match
            {
                let schema = {
                        description: 'User account creation form',
                        type: 'object',
                        properties: {
                            password: {
                                type: 'string',
                                minLength: 8
                            },
                            password_confirm: {
                                type: 'string',
                                minLength: 8
                            }
                        },
                        format: 'passwordsMatch'
                    },
                    options = {
                        formats: {
                            passwordsMatch: (obj: any) => {
                                callCount++;
                                return obj.password === obj.password_confirm;
                            }
                        }
                    },
                    data = {
                        password: '1234567',
                        password_confirm: '1234567'
                    },
                    validate = jsen(schema, options),
                    callCount = 0;

                console.assert(!validate(data)); // minLength validator failed
                console.assert(callCount === 0);

                data.password += '8';
                data.password_confirm += '9';

                console.assert(!validate(data)); // custom validator failed
                console.assert(callCount === 1);

                data.password_confirm = data.password;

                console.assert(validate(data)); // OK
                console.assert(callCount === 2);
            }
        }
    }
}

// option: greedy
{
    // validates as many keywords as possible
    {
        let schema = {
                type: 'object',
                properties: {
                    test1: {
                        type: 'string'
                    },
                    test2: {
                        type: 'object',
                        properties: {
                            test21: {
                                type: 'number'
                            }
                        }
                    },
                    test3: {
                        type: 'number'
                    },
                    test4: { $ref: '#external' }
                },
                additionalProperties: false
            },
            options: jsen.JsenSettings = {
                greedy: true,
                schemas: {
                    external: {
                        type: 'string'
                    }
                }
            },
            validate = jsen(schema, options),
            invalidTest = {
                test1: 1,
                test2: '2',
                test3: 'j',
                test4: 4
            },
            ret = validate(invalidTest);

        console.assert(!ret); // false
        console.assert(JSON.stringify(validate.errors)
            === JSON.stringify([
                { path: 'test1', keyword: 'type' },
                { path: 'test2', keyword: 'type' },
                { path: 'test3', keyword: 'type' },
                { path: 'test4', keyword: 'type' }
            ])
        );

        delete options.greedy;

        validate = jsen(schema, options);

        ret = validate(invalidTest);

        console.assert(!ret); // false
        console.assert(JSON.stringify(validate.errors)
            === JSON.stringify([{ path: 'test1', keyword: 'type' }])
        );
    }

    // does not descend into invalid objects
    {
        let schema = {
                type: 'object',
                properties: {
                    test1: { type: 'object' },
                    test2: {
                        required: ['foo']
                    },
                    test3: {
                        properties: {
                            foo: { type: 'string' }
                        }
                    },
                    test4: {
                        type: 'array',
                        items: {
                            type: 'object',
                            required: ['foo']
                        }
                    }
                }
            },
            options = { greedy: true },
            data = {
                test1: 123,
                test2: {},
                test3: 123,
                test4: [{}, { foo: 123 }, null]
            },
            validate = jsen(schema, options),
            ret = validate(data);

        console.assert(!ret);
        console.assert(JSON.stringify(validate.errors)
            === JSON.stringify([
                { path: 'test1', keyword: 'type' },
                { path: 'test2.foo', keyword: 'required' },
                { path: 'test4.0.foo', keyword: 'required' },
                { path: 'test4.2', keyword: 'type' }
            ])
        );
    }
}

// jsen
{
    // is a function
    {
        console.assert(typeof jsen === "function");
    }

    // throws if schema is not an object
    {
        console.assert(doesThrow(jsen()));
        console.assert(doesThrow(jsen(null)));
        console.assert(doesThrow(jsen(false)));
        console.assert(doesThrow(jsen(123)));
        console.assert(doesThrow(jsen("abc")));
        console.assert(doesThrow(jsen([])));
        console.assert(doesNotThrow(jsen({})));
    }

    // produces a function
    {
        const validate = jsen({});
        console.assert(typeof validate === 'function');
        console.assert(validate() === true);
        // console.assert(validate.error === null);
    }
}

// type: integer
{
    // required
    {
        const schema = { type: 'integer' },
            validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));
        console.assert(validate(123));
    }

    // nullable
    {
        const schema = { type: ['integer', 'null'] },
            validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(null));
        console.assert(validate(123));
    }

    // type
    {
        const schema = { type: 'integer' },
            validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate(true));
        console.assert(!validate(false));
        console.assert(!validate([]));
        console.assert(!validate({}));
        console.assert(!validate(Math.PI));

        console.assert(validate(13));
    }

    // enum
    {
        const schema = { type: 'integer', enum: [1, 3, 5, 7] },
            validate = jsen(schema);

        console.assert(!validate(4));
        console.assert(validate(5));
    }

    // minimum
    {
        const schema = { type: 'integer', minimum: 7 },
            validate = jsen(schema);

        console.assert(!validate(6));

        console.assert(validate(7));
        console.assert(validate(999));
    }

    // exclusiveMinimum
    {
        const schema = {
                type: 'integer',
                minimum: 7,
                exclusiveMinimum: true
            },
            validate = jsen(schema);

        console.assert(!validate(6));
        console.assert(!validate(7));

        console.assert(validate(8));
        console.assert(validate(999));
    }

    // maximum
    {
        const schema = { type: 'integer', maximum: 77 },
            validate = jsen(schema);

        console.assert(!validate(78));

        console.assert(validate(-12));
        console.assert(validate(76));
        console.assert(validate(77));
    }

    // exclusiveMaximum
    {
        const schema = {
                type: 'integer',
                maximum: 77,
                exclusiveMaximum: true
            },
            validate = jsen(schema);

        console.assert(!validate(77));
        console.assert(!validate(78));

        console.assert(validate(-12));
        console.assert(validate(75));
        console.assert(validate(76));
    }

    // multipleOf
    {
        const schema = { type: 'integer', multipleOf: 7 },
            validate = jsen(schema);

        console.assert(!validate(8));

        console.assert(validate(14));
        console.assert(validate(-49));
        console.assert(validate(77));
    }
}

// missing $ref
{
    // passes validation with ignore missing $ref
    {
        let schema = {
                type: 'object',
                properties: {
                    test1: { $ref: '#external1' },
                    test2: {
                        type: 'number'
                    },
                    test3: { $ref: '#external3' } //missing
                },
                additionalProperties: false
            },
            external1 = {
                type: 'object',
                properties: {
                    test11: { $ref: '#external11' }, //missing
                    test12: {
                        type: 'number'
                    },
                    test13: { $ref: '#external11' } //duplicate
                }
            },
            validate = jsen(schema, {
                schemas: {
                    external1: external1
                },
                missing$Ref: true
            }),
            missingTest = {
                test1: {
                    test11: 'missing',
                    test12: 5,
                    test13: 'missing too'
                },
                test2: 2,
                test3: 3
            },
            invalidTest = {
                test1: {
                    test11: 'missing',
                    test12: 5,
                    test13: 'missing too'
                },
                test2: 'fail',
                test3: 3
            },
            ret: boolean;

        ret = validate(missingTest);
        console.assert(ret); // true

        ret = validate(invalidTest);
        console.assert(!ret); // !false
    }
}

// multi schema
{
    // allOf
    {
        const schema = {
                allOf: [
                    { type: 'number' },
                    { type: 'integer' }
                ]
            },
            validate = jsen(schema);

        console.assert(!validate(null));
        console.assert(!validate(Math.PI));

        console.assert(validate(0));
        console.assert(validate(777));
        console.assert(validate(-9));
    }

    // anyOf
    {
        const schema = {
                anyOf: [
                    { type: 'string' },
                    { type: 'number' }
                ]
            },
            validate = jsen(schema);

        console.assert(!validate(null));
        console.assert(!validate(true));
        console.assert(!validate({}));
        console.assert(!validate([]));

        console.assert(validate('abc'));
        console.assert(validate(123));
        console.assert(validate(''));
        console.assert(validate(0));
    }

    // oneOf
    {
        const schema = {
                oneOf: [
                    { type: 'number', maximum: 5 },
                    { type: 'number', minimum: 3 }
                ]
            },
            validate = jsen(schema);

        console.assert(!validate(null));
        console.assert(!validate(true));
        console.assert(!validate({}));
        console.assert(!validate([]));
        // matches both validators
        console.assert(!validate(3));

        console.assert(validate(0));
        console.assert(validate(1));
        console.assert(validate(2));
        console.assert(validate(6));
        console.assert(validate(17));
    }

    // not
    {
        const schema = {
                not: {
                    type: 'array'
                }
            },
            validate = jsen(schema);

        console.assert(!validate([]));

        console.assert(validate(0));
        console.assert(validate(false));
        console.assert(validate('abc'));
        console.assert(validate({}));
        console.assert(validate(null));
        console.assert(validate());
    }
}

// type: null
{
    // required
    {
        const schema = { type: 'null' },
            validate = jsen(schema);

        console.assert(!validate(undefined));
        console.assert(validate(null));
    }

    // type
    {
        const schema = { type: 'null' },
            validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate([]));
        console.assert(!validate({}));
        console.assert(!validate(Math.PI));

        console.assert(validate(null));
    }
}

// type: number
{
    // required
    {
        const schema = { type: 'number' },
            validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate(Math.PI));
        console.assert(validate(123));
    }

    // nullable
    {
        const schema = { type: ['number', 'null'] },
            validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(null));
        console.assert(validate(Math.PI));
    }

    // type
    {
        const schema = { type: 'number' },
            validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate(true));
        console.assert(!validate(false));
        console.assert(!validate([]));
        console.assert(!validate({}));

        console.assert(validate(13));
        console.assert(validate(17.8));
        console.assert(validate(Math.PI));
    }

    // enum
    {
        const schema = {
                type: 'number',
                enum: [1, Math.E, 3, 5, 7]
            },
            validate = jsen(schema);

        console.assert(!validate(4));
        console.assert(!validate(Math.PI));

        console.assert(validate(5));
        console.assert(validate(Math.E));
    }

    // minimum
    {
        const schema = { type: 'number', minimum: 7 },
            validate = jsen(schema);

        console.assert(!validate(6));
        console.assert(!validate(Math.PI));

        console.assert(validate(7));
        console.assert(validate(999));
    }

    // exclusiveMinimum
    {
        const schema = {
                type: 'number',
                minimum: 7,
                exclusiveMinimum: true
            },
            validate = jsen(schema);

        console.assert(!validate(6));
        console.assert(!validate(7));
        console.assert(!validate(Math.PI));

        console.assert(validate(8));
        console.assert(validate(999));
    }

    // maximum
    {
        const schema = { type: 'number', maximum: 77 },
            validate = jsen(schema);

        console.assert(!validate(77.000001));
        console.assert(!validate(78));

        console.assert(validate(-12));
        console.assert(validate(76));
        console.assert(validate(77));
        console.assert(validate(Math.PI));
    }

    // exclusiveMaximum
    {
        const schema = {
                type: 'number',
                maximum: 77,
                exclusiveMaximum: true
            },
            validate = jsen(schema);

        console.assert(!validate(77));
        console.assert(!validate(78));

        console.assert(validate(-12));
        console.assert(validate(75));
        console.assert(validate(76));
        console.assert(validate(76.99999));
    }

    // multipleOf
    {
        let schema = { type: 'number', multipleOf: 7 },
            validate = jsen(schema);

        console.assert(!validate(8));

        console.assert(validate(14));
        console.assert(validate(-49));
        console.assert(validate(77));

        schema = {
            type: 'number',
            multipleOf: 3.14 // Math.PI
        };

        validate = jsen(schema);

        console.assert(!validate(2.5));

        console.assert(validate(9.42)); // 3 * Math.PI
    }

    // fix multipleOf doesn't validate data for decimal point (#1)
    {
        const schema = { type: 'number', multipleOf: 0.01 },
            validate = jsen(schema);

        console.assert(validate(18.15));
    }
}

// type: object
{
    // required
    {
        const schema = { type: 'object' },
            validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate({}));
    }

    // nullable
    {
        const schema = { type: ['object', 'null'] },
            validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(null));
        console.assert(validate({}));
    }

    // type
    {
        const schema = { type: 'object' },
            validate = jsen(schema);

        console.assert(!validate('123'));
        console.assert(!validate(false));
        console.assert(!validate([]));
        console.assert(!validate(Math.PI));

        console.assert(validate({}));
        console.assert(jsen({ type: 'object', properties: {} }, {})());
    }

    // maxProperties
    {
        const schema = { type: 'object', maxProperties: 3 },
            validate = jsen(schema);

        console.assert(!validate({ a: 1, b: 2, c: 3, d: 4 }));

        console.assert(validate({}));
        console.assert(validate({ a: 1 }));
        console.assert(validate({ a: 1, b: 2 }));
        console.assert(validate({ a: 1, b: 2, c: 3 }));
    }

    // minProperties
    {
        const schema = { type: 'object', minProperties: 2 },
            validate = jsen(schema);

        console.assert(!validate({}));
        console.assert(!validate({ a: 1 }));

        console.assert(validate({ a: 1, b: 2 }));
        console.assert(validate({ a: 1, b: 2, c: 3 }));
    }

    // required properties
    {
        const schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' },
                    c: { type: 'boolean' }
                },
                required: ['a', 'b']
            },
            validate = jsen(schema);

        console.assert(!validate({}));
        console.assert(!validate({ c: true }));
        console.assert(!validate({ a: 'abc', c: true }));
        console.assert(!validate({ b: 123, c: true }));
        console.assert(!validate({ a: 'abc', b: undefined }));

        console.assert(validate({ a: 'abc', b: 123 }));
        console.assert(validate({ a: 'abc', b: 123, c: true }));
    }

    // additionalProperties
    {
        let schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' }
                },
                additionalProperties: true
            },
            validate = jsen(schema);

        console.assert(validate({ a: 'abc' }));
        console.assert(validate({ b: 123 }));
        console.assert(validate({ a: 'abc', b: 123 }));
        console.assert(validate({ a: 'abc', b: 123, c: true }));

        schema.additionalProperties = false;
        validate = jsen(schema);

        console.assert(!validate({ c: true }));
        console.assert(!validate({ a: 'abc', b: 123, c: true }));

        console.assert(validate({ a: 'abc', b: 123 }));
        console.assert(jsen({ type: 'object', additionalProperties: false })({}));
    }

    // additionalProperties as schema
    {
        const schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' }
                },
                additionalProperties: {
                    type: 'boolean'
                }
            },
            validate = jsen(schema);

        console.assert(!validate({ a: 'abc', b: 123, c: 123 }));

        console.assert(validate({ a: 'abc', b: 123, c: false }));
    }

    // additionalProperties with patternProperties
    {
        let schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' }
                },
                patternProperties: {
                    '^b': { type: 'number' }
                },
                additionalProperties: true
            },
            validate = jsen(schema);

        console.assert(validate({ a: 'abc' }));
        console.assert(validate({ b: 123 }));
        console.assert(validate({ a: 'abc', b: 123, bar: Math.E, baz: Math.PI }));
        console.assert(validate({ a: 'abc', baz: 123, c: true }));

        schema.additionalProperties = false;
        validate = jsen(schema);

        console.assert(!validate({ c: true }));
        console.assert(!validate({ a: 'abc', bar: 123, c: true }));

        console.assert(validate({ a: 'abc', baz: 123 }));
        console.assert(jsen({ type: 'object', additionalProperties: false })({}));
    }

    // patternProperties
    {
        const schema = {
                type: 'object',
                patternProperties: {
                    '^a': { type: 'string' },
                    '^b': { type: 'number' }
                }
            },
            validate = jsen(schema);

        console.assert(!validate({ a: 123 }));
        console.assert(!validate({ b: 'abc' }));

        console.assert(validate({}));
        console.assert(validate({ a: 'abc' }));
        console.assert(validate({ b: 123 }));
        console.assert(validate({ a: 'abc', b: 123 }));
    }

    // dependencies: schema
    {
        const schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' }
                },
                dependencies: {
                    a: {
                        type: 'object',
                        required: ['c'],
                        properties: {
                            c: { type: 'boolean' }
                        }
                    },
                    b: {
                        type: 'object',
                        required: ['f'],
                        properties: {
                            f: { type: 'null' }
                        }
                    },
                    g: {
                        type: 'object',
                        required: ['b'],
                        properties: {
                            b: {
                                type: 'integer'
                            }
                        }
                    }
                }
            },
            validate = jsen(schema);

        console.assert(!validate({ a: 'abc' }));
        console.assert(!validate({ a: 'abc', c: 123 }));
        console.assert(!validate({ b: Math.PI, f: false }));
        console.assert(!validate({ b: Math.PI, g: null }));

        console.assert(validate({}));
        console.assert(validate({ a: 'abc', c: false }));
        console.assert(validate({ b: Math.PI, f: null }));
        console.assert(validate({ b: 123, g: 'any value', f: null }));
    }

    // dependencies: property
    {
        const schema = {
                type: 'object',
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' },
                    c: { type: 'boolean' }
                },
                dependencies: {
                    a: ['b', 'c']
                }
            },
            validate = jsen(schema);

        console.assert(!validate({ a: 'abc' }));
        console.assert(!validate({ a: 'abc', b: 123 }));

        console.assert(validate({}));
        console.assert(validate({ a: 'abc', b: 123, c: false }));
    }

    // nested graph
    {
        const schema = {
                type: ['object', 'null'],
                properties: {
                    a: { type: 'string' },
                    b: { type: 'number' },
                    c: {
                        type: 'array',
                        items: { type: 'boolean' }
                    }
                },
                required: ['a']
            },
            validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate({}));
        console.assert(!validate({ a: 123 }));
        console.assert(!validate({ a: 'abc', b: false }));
        console.assert(!validate({ a: 'abc', c: [null] }));

        console.assert(validate(null));
        console.assert(validate({ a: 'abc', b: 123.4, c: [true, false] }));
        console.assert(validate({ a: 'abc', b: 0 }));
        console.assert(validate({ a: 'abc', c: [true, false] }));
        console.assert(validate({ a: 'abc', c: [] }));
    }
}

// $ref
{
    // throws if string is not in correct format
    {
        console.assert(doesThrow(
            jsen({ $ref: '' })
        ));

        console.assert(doesThrow(
            jsen({ $ref: '#double//slash' })
        ));

        console.assert(doesThrow(
            jsen({ $ref: '#ends/with/slash/' })
        ));

        console.assert(doesThrow(
            // invalid reference, non-existent schema properties
            jsen({ $ref: '#a/b/c' })
        ));

        console.assert(doesNotThrow(
            // schema resolves to itself
            jsen({ $ref: '#' })
        ));

        console.assert(doesNotThrow(
            jsen({
                a: {
                    b: {
                        c: {
                            type: 'any'
                        }
                    }
                },
                $ref: '#/a/b/c'
            })
        ));

        console.assert(doesNotThrow(
            jsen({
                arr: [
                    { value: { type: 'string' } },
                    { value: { type: 'number' } },
                    { value: { type: 'boolean' } }
                ],
                type: 'object',
                properties: {
                    a: { $ref: '#arr/2/value' }
                }
            })
        ));
    }

    // external schema
    {
        // finds external schema with a hash
        {
            const external = { type: 'string' },
                schema = { $ref: '#external' },
                validate = jsen(schema, {
                    schemas: {
                        external: external
                    }
                });

            console.assert(validate('abc'));
            console.assert(!validate(123));
        }

        // finds external schema without a hash
        {
            const external = { type: 'string' },
                schema = { $ref: 'external' },
                validate = jsen(schema, {
                    schemas: {
                        external: external
                    }
                });

            console.assert(validate('abc'));
            console.assert(!validate(123));
        }

        // throws when no external schema found
        {
            const schema = { $ref: '#external' };

            console.assert(doesNotThrow(
                jsen(schema)
            ));
        }

        // own property takes precendence over external schema
        {
            const external = { type: 'string' },
                schema = {
                    external: { type: 'number' },
                    $ref: '#external'
                },
                validate = jsen(schema, {
                    schemas: {
                        external: external
                    }
                });

            console.assert(!validate('abc'));
            console.assert(validate(123));
        }

        // external schemas have their own dereferencing scope
        {
            const external = {
                    inner: { type: 'string' },
                    $ref: '#inner'
                },
                schema = {
                    inner: { type: 'number' },
                    $ref: '#external'
                },
                validate = jsen(schema, {
                    schemas: {
                        external: external
                    }
                });

            console.assert(validate('abc'));
            console.assert(!validate(123));
        }
    }
}

// type: string
{
    // required
    {
        const schema = { type: 'string' },
            validate = jsen(schema);

        console.assert(!validate());
        console.assert(!validate(null));

        console.assert(validate('abc'));
    }

    // nullable
    {
        const schema = { type: ['string', 'null'] },
            validate = jsen(schema);

        console.assert(!validate(undefined));

        console.assert(validate(null));
        console.assert(validate(''));
    }

    // type
    {
        const schema = { type: 'string' },
            validate = jsen(schema);

        console.assert(!validate(123));
        console.assert(!validate(true));
        console.assert(!validate(false));
        console.assert(!validate(0));
        console.assert(!validate([]));
        console.assert(!validate({}));

        console.assert(validate('abc'));
    }

    // enum
    {
        const schema = { type: 'string', enum: ['a', 'b', 'c'] },
            validate = jsen(schema);

        console.assert(!validate('not in enum'));
        console.assert(validate('b'));
    }

    // minLength
    {
        const schema = { type: 'string', minLength: 10 },
            validate = jsen(schema);

        console.assert(!validate('too short'));
        console.assert(validate('just long enough'));
    }

    // maxLength
    {
        const schema = { type: 'string', maxLength: 12 },
            validate = jsen(schema);

        console.assert(!validate('this string is too long'));
        console.assert(validate('short enough'));
    }

    // pattern
    {
        let schema: any = { type: 'string', pattern: '\\d' },
            validate = jsen(schema);

        console.assert(!validate('a'));
        console.assert(validate('1'));

        schema = { type: 'string', pattern: /\d/ };
        validate = jsen(schema);

        console.assert(!validate('a'));
        console.assert(validate('1'));
    }
}

// unique
{
    // filters unique values
    {
        const inputs = [
                [1, 'a', 3, false, null, undefined],
                ['abc', 123, true, 123, false, Math.PI, 'abc', true, null, null]
            ],
            expected = [
                [1, 'a', 3, false, null, undefined],
                ['abc', 123, true, false, Math.PI, null]
            ];

        for (let i = 0; i < inputs.length; i++) {
            console.assert(JSON.stringify(jsen.unique(inputs[i])) === JSON.stringify(expected[i]));
        }
    }

    // performs deep equality checks
    {
        const input: any = [
                {},
                { a: 1 },
                { b: { c: { d: 123, f: null }, e: 'abc' } },
                [1, 2, 3],
                [{ a: 213 }],
                { b: 1 },
                { a: 1, b: undefined },
                { b: { e: 'abc', c: { f: null, d: 123 } } },
                [1, 2, 3],
                [{ a: 213 }]
            ],
            expected: any = [
                {},
                { a: 1 },
                { b: { c: { d: 123, f: null }, e: 'abc' } },
                [1, 2, 3],
                [{ a: 213 }],
                { b: 1 },
                { a: 1, b: undefined }
            ];

        console.assert(JSON.stringify(jsen.unique(input)) === JSON.stringify(expected));
    }

    // unique.findIndex
    {
        // finds an item index with comparator
        {
            const arr = [{}, { a: 1 }, { a: 1, b: 2 }],
                expected = 2,
                comparator = (obj1: any, obj2: any) => {
                    return obj1.a === obj2.a && obj1.b === obj2.b;
                };

            console.assert(jsen.unique.findIndex(arr, { a: 1, b: 2 }, comparator) === expected);
        }

        // returns -1 when item cannot be found
        {
            const arr = [{}, { a: 1 }, { a: 1, b: 2 }],
                expected = -1,
                comparator = (obj1: any, obj2: any) => {
                    return obj1.a === obj2.a && obj1.b === obj2.b;
                };

            console.assert(jsen.unique.findIndex(arr, { a: 1, b: null }, comparator) === expected);
        }
    }
}
