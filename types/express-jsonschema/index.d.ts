// Type definitions for express-jsonschema 1.1
// Project: https://github.com/trainiac/express-jsonschema#readme
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Request, Response, NextFunction } from "express";
import { JSONSchema4 } from "json-schema";

export class JsonSchemaCustomPropertyError {
    name: string;
    message: string;
    constructor(propertyName: string);
}

export class JsonSchemaValidation {
    name: string;
    message: string;
    validations: {[requestProperty: string]: Array<{ value: any, property: string, messages: string[]}> };
    constructor(validations: { [requestProperty: string]: { instance: any, property: string, message: string }});
}

/**
 * Updates customProperties with the newProperties param. Provides a way for client to extend JSON Schema validations.
 *
 * @param newProperties - An object where the keys are the
 * names of the new schema properties and the values are the respective
 * functions that implement the validation.
 * @throws Client tries to override an existing JSON Schema property.
 */
export function addSchemaProperties(newProperties: { [attribute: string]: (instance: any, schema: JSONSchema4, options: any, ctx: any) => void | string }): void;

/**
 * Accepts an object where the keys are request properties and the
 * values are their respective schemas.  Optionally, you may provide
 * dependency schemas that are referenced by your schemas using `$ref`
 * (see https://www.npmjs.com/package/jsonschema#complex-example-with-split-schemas-and-references
 * for more details).
 * Returns a middleware function that validates the given
 * request properties when a request is made.  If there is any invalid
 * data a JsonSchemaValidation instance is passed to the next middleware.
 * If the data is valid the next middleware is called with no params.
 *
 * @param schemas - An object where the keys are request properties
 * and the values are their respective schemas.
 * @param schemaDependencies - A list of schemas on which
 * schemas in `schemas` parameter are dependent.  These will be added
 * to the `jsonschema` validator.
 * @returns A middleware function.
 */
export function validate(
    schemas: { [requestProperty: string]: JSONSchema4 },
    schemaDependencies?: JSONSchema4[],
): (req: Request, res: Response, next: NextFunction) => void;
