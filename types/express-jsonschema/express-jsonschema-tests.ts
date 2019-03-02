import {
    JsonSchemaCustomPropertyError,
    JsonSchemaValidation,
    addSchemaProperties,
    validate,
} from "express-jsonschema";

import { Request, Response, NextFunction } from "express";
import { JSONSchema4 } from "json-schema";

let jsonSchema: JSONSchema4;
let expressMiddleware: (req: Request, res: Response, next: NextFunction) => void;

jsonSchema = {
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
    bar: 4,
    format: 'date-time',
};

expressMiddleware = validate({ test: jsonSchema }, [ jsonSchema ]);
addSchemaProperties({
    test: () => "This is an error with message...",
    conditional: (instance: any, schema: JSONSchema4) => {
        if (!instance) {
            return "An instance should be present";
        }
    }
});
