import { JSONSchema4, JSONSchema4Type, JSONSchema4TypeName, JSONSchema6, JSONSchema6Type, JSONSchema6TypeName } from 'json-schema'

/* JSON Schema 4 */

// SimpleType
() => {
  const a: JSONSchema4TypeName = 'string'
  const b: JSONSchema4TypeName = 'null'
  const c: JSONSchema4TypeName = 'any'
}

// Type
() => {
  const a: JSONSchema4Type = 'foo'
  const b: JSONSchema4Type = null
  const c: JSONSchema4Type = [1, 2]
}

// JSONSchema4
() => {
  const a: JSONSchema4 = {}
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
    items: [
      { items: [{ minLength: 4 }] }
    ],
    maxItems: 4,
    minItems: 5,
    uniqueItems: true,
    maxProperties: 10,
    minProperties: 11,
    required: ['foo', 'bar'],
    additionalProperties: false,
    definitions: {
      foo: { type: 'string' }
    },
    properties: {
      bar: { type: 'boolean' }
    },
    patternProperties: {
      foo: { type: 'integer' }
    },
    dependencies: {
      baz: { type: 'integer' }
    },
    enum: ['foo', 42],
    type: 'string',
    allOf: [{}],
    anyOf: [{}],
    oneOf: [{}],
    not: {},
    extends: 'foo',
    bar: 4
  }
}

/* JSON Schema 6 */

// SimpleType
() => {
  const a: JSONSchema6TypeName = 'string'
  const b: JSONSchema6TypeName = 'null'
  const c: JSONSchema6TypeName = 'any'
}

// Type
() => {
  const a: JSONSchema6Type = 'foo'
  const b: JSONSchema6Type = null
  const c: JSONSchema6Type = [1, 2]
}

// JSONSchema4
() => {
  const a: JSONSchema6 = {}
  const b: JSONSchema6 = {
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
    items: [
      { items: [{ minLength: 4 }] }
    ],
    maxItems: 4,
    minItems: 5,
    uniqueItems: true,
    maxProperties: 10,
    minProperties: 11,
    required: ['foo', 'bar'],
    additionalProperties: false,
    definitions: {
      foo: { type: 'string' }
    },
    properties: {
      bar: { type: 'boolean' }
    },
    patternProperties: {
      foo: { type: 'integer' }
    },
    dependencies: {
      baz: { type: 'integer' }
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
    propertyNames: {}
  }
}
