import {
    JSONSchema4,
    JSONSchema4Type,
    JSONSchema4TypeName,
    JSONSchema6,
    JSONSchema6Type,
    JSONSchema6TypeName,
    JSONSchema7,
    JSONSchema7Array,
    JSONSchema7Type,
    JSONSchema7TypeName,
    JSONSchema6Definition,
    JSONSchema7Definition,
    validate,
    mustBeValid,
    checkPropertyChange,
} from 'json-schema';

/* JSON Schema 4 */

// SimpleType
() => {
    const a: JSONSchema4TypeName = 'string';
    const b: JSONSchema4TypeName = 'null';
    const c: JSONSchema4TypeName = 'any';
};

// Type
() => {
    const a: JSONSchema4Type = 'foo';
    const b: JSONSchema4Type = null;
    const c: JSONSchema4Type = [1, 2];
};

// JSONSchema4
() => {
    const a: JSONSchema4 = {};
    const b: JSONSchema4 = {
        id: 'foo',
        $ref: 'foo/bar',
        $schema: 'http://json-schema.org/schema#',
        title: 'foo',
        description: 'bar',
        default: 42,
        multipleOf: 3,
        maximum: 4,
        exclusiveMaximum: true,
        minimum: 5,
        exclusiveMinimum: false,
        maxLength: 6,
        minLength: 7,
        pattern: 'baz',
        additionalItems: true,
        items: [{ items: [{ minLength: 4 }] }],
        maxItems: 4,
        minItems: 5,
        uniqueItems: true,
        maxProperties: 10,
        minProperties: 11,
        required: ['foo', 'bar'],
        additionalProperties: false,
        definitions: {
            foo: { type: 'string' },
        },
        properties: {
            bar: { type: 'boolean' },
        },
        patternProperties: {
            foo: { type: 'integer' },
        },
        dependencies: {
            baz: { type: 'integer' },
        },
        enum: ['foo', 42],
        type: 'string',
        allOf: [{}],
        anyOf: [{}],
        oneOf: [{}],
        not: {},
        extends: 'foo',
        bar: 4,
        format: 'date-time',
    };
    const c: JSONSchema4 = {
        id: 'foo',
        required: true,
    };
};

// Class
class Schema4 implements JSONSchema4 {}

/* JSON Schema 6 */

// SimpleType
() => {
    const a: JSONSchema6TypeName = 'string';
    const b: JSONSchema6TypeName = 'null';
    const c: JSONSchema6TypeName = 'any';
};

// Type
() => {
    const a: JSONSchema6Type = 'foo';
    const b: JSONSchema6Type = null;
    const c: JSONSchema6Type = [1, 2];
};

// JSONSchema6Definition
() => {
    const a: JSONSchema6Definition = {};
    const b: JSONSchema6Definition = {
        $id: 'foo',
        $ref: 'foo/bar',
        $schema: 'http://json-schema.org/schema#',
        title: 'foo',
        description: 'bar',
        default: 42,
        multipleOf: 3,
        maximum: 4,
        exclusiveMaximum: 4,
        minimum: 5,
        exclusiveMinimum: 5,
        maxLength: 6,
        minLength: 7,
        pattern: 'baz',
        additionalItems: true,
        items: [{ items: [{ minLength: 4 }] }],
        maxItems: 4,
        minItems: 5,
        uniqueItems: true,
        maxProperties: 10,
        minProperties: 11,
        required: ['foo', 'bar'],
        additionalProperties: false,
        definitions: {
            foo: { type: 'string' },
        },
        properties: {
            bar: { type: 'boolean' },
        },
        patternProperties: {
            foo: { type: 'integer' },
        },
        dependencies: {
            baz: { type: 'integer' },
        },
        enum: ['foo', 42],
        type: 'string',
        allOf: [{}],
        anyOf: [{}],
        oneOf: [{}],
        not: {},
        const: 'foo',
        contains: {},
        examples: [{}],
        propertyNames: {},
        format: 'date-time',
    };
    const c: JSONSchema6Definition = false;
};

// Class
class Schema6 implements JSONSchema6 {}

/* JSON Schema 7 */

// SimpleType
() => {
    const a: JSONSchema7TypeName = 'string';
    const b: JSONSchema7TypeName = 'number';
    const c: JSONSchema7TypeName = 'null';
};

// Type
() => {
    const a: JSONSchema7Type = 'foo';
    const b: JSONSchema7Type = null;
    const c: JSONSchema7Type = [1, 2];
};

// JSONSchema7Definition
() => {
    const a: JSONSchema7Definition = {};
    const b: JSONSchema7Definition = {
        $id: 'foo',
        $ref: 'foo/bar',
        $schema: 'http://json-schema.org/schema#',
        $comment: "I'm but a simple comment",
        $defs: {
            foo: { type: 'string' },
        },
        title: 'foo',
        description: 'bar',
        default: 42,
        multipleOf: 3,
        maximum: 4,
        exclusiveMaximum: 4,
        minimum: 5,
        exclusiveMinimum: 5,
        maxLength: 6,
        minLength: 7,
        pattern: 'baz',
        additionalItems: {},
        items: [{ items: [{ minLength: 4 }] }],
        maxItems: 4,
        minItems: 5,
        uniqueItems: true,
        maxProperties: 10,
        minProperties: 11,
        required: ['foo', 'bar'],
        additionalProperties: {},
        definitions: {
            foo: { type: 'string' },
        },
        properties: {
            bar: { type: 'boolean' },
        },
        patternProperties: {
            foo: { type: 'integer' },
        },
        dependencies: {
            baz: { type: 'integer' },
        },
        enum: ['foo', 42],
        type: 'string',
        allOf: [{}],
        anyOf: [{}],
        oneOf: [{}],
        not: {},
        const: 'foo',
        contains: {},
        examples: [{}],
        propertyNames: {},
        format: 'date-time',
        readOnly: false,
        writeOnly: false,
        contentEncoding: 'base64',
        contentMediaType: 'text',
        else: {},
        if: {},
        then: {},
    };
    const c: JSONSchema7Definition = false;
};

// Class
class Schema7 implements JSONSchema7 {}

let result = validate({}, { $id: 'schema-id' });
mustBeValid(result);

result = checkPropertyChange({ foo: 'bar' }, { $id: 'schema-id' }, 'foo');
