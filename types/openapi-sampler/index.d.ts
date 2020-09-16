// Type definitions for openapi-sampler 1.0
// Project: https://github.com/APIs-guru/openapi-sampler/
// Definitions by: Marcell Toth <https://github.com/marcelltoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

export type OpenApiSchema = any;

export type OpenApiSpec = any;

export interface Options {
    /**
     * Don't include non-required object properties not specified in `required` property of the schema object
     */
    readonly skipNonRequired?: boolean;

    /**
     * Don't include readOnly object properties
     */
    readonly skipReadOnly?: boolean;

    /**
     * Don't include writeOnly object properties
     */
    readonly skipWriteOnly?: boolean;

    /**
     * Don't log console warning messages
     */
    readonly quiet?: boolean;
}

/**
 * Generates samples based on OpenAPI payload/response schema
 * @param schema A OpenAPI Schema Object
 * @param options Options
 * @param spec whole specification where the schema is taken from. Required only when schema may contain `$ref`. `spec` must not contain any external references.
 */
export function sample(schema: OpenApiSchema, options?: Options, spec?: OpenApiSpec): unknown;
