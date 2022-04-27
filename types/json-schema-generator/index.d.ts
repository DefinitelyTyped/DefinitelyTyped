// Type definitions for json-schema-generator 2.0
// Project: https://github.com/krg7880/json-schema-generator
// Definitions by: Marcell Toth <https://github.com/marcelltoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { JSONSchema4 } from 'json-schema';

export = jsonToSchema;

/**
 * JSON schema generated based on draft-v4 of the specification.
 */
declare function jsonToSchema(schema: object): JSONSchema4;
