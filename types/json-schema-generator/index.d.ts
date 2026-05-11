import { JSONSchema4 } from "json-schema";

export = jsonToSchema;

/**
 * JSON schema generated based on draft-v4 of the specification.
 */
declare function jsonToSchema(schema: object): JSONSchema4;
