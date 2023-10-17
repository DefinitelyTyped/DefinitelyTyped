export {};

import { CollectionDefinition } from "postman-collection";

export interface Input {
    type: "file" | "string" | "json";
    data: string;
}

export type ParametersResolution = "Example" | "Schema";

/** @see https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md */
export interface Options {
    /**
     * Determines how the requests inside the generated collection will be named. If “Fallback” is selected, the request
     * will be named after one of the following schema values: `description`, `operationid`, `url`.
     *
     * default: Fallback
     */
    requestNameSource?: "Fallback" | "URL" | undefined;

    /**
     * Option for setting indentation character
     *
     * default: Space
     */
    indentCharacter?: "Tab" | "Space" | undefined;

    /**
     * Importing will collapse all folders that have only one child element and lack persistent folder-level data.
     *
     * default: true
     */
    collapseFolders?: boolean | undefined;

    /**
     * Optimizes conversion for large specification, disabling this option might affect the performance of conversion.
     *
     * default: true
     */
    optimizeConversion?: boolean | undefined;

    /**
     * Select whether to generate the request parameters based on the
     * [schema](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject) or the
     * [example](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#exampleObject) in the schema.
     *
     * default: Schema
     */
    requestParametersResolution?: ParametersResolution | undefined;

    /**
     * Select whether to generate the response parameters based on the
     * [schema](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#schemaObject) or the
     * [example](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.2.md#exampleObject) in the schema.
     *
     * default: Example
     */
    exampleParametersResolution?: ParametersResolution | undefined;

    /**
     * Select whether to create folders according to the spec’s paths or tags.
     *
     * default: Paths
     */
    folderStrategy?: "Paths" | "Tags" | undefined;

    /**
     * Whether or not schemas should be faked.
     *
     * default: true
     */
    schemaFaker?: boolean | undefined;

    /**
     * Number of nesting limit till which schema resolution will happen. Increasing this limit may result in more time
     * to convert collection depending on complexity of specification. (To make sure this option works correctly
     * "optimizeConversion" option needs to be disabled)
     *
     * default: 10
     */
    stackLimit?: number | undefined;

    /**
     * Select whether to include authentication parameters in the example request
     *
     * default: true
     */
    includeAuthInfoInExample?: boolean | undefined;

    /**
     * Whether detailed error messages are required for request <> schema validation operations.
     *
     * default: false
     */
    shortValidationErrors?: boolean | undefined;

    /**
     * Specific properties (parts of a request/response pair) to ignore during validation. Must be sent as an array of
     * strings. Valid inputs in the array: PATHVARIABLE, QUERYPARAM, HEADER, BODY, RESPONSE_HEADER, RESPONSE_BODY
     *
     * default: []
     */
    validationPropertiesToIgnore?: ReadonlyArray<string> | undefined;

    /**
     * MISSING_IN_SCHEMA indicates that an extra parameter was included in the request. For most use cases, this need
     * not be considered an error.
     *
     * default: false
     */
    showMissingInSchemaErrors?: boolean | undefined;

    /**
     * Determines whether to show detailed mismatch information for application/json content in the request/response body.
     *
     * default: false
     */
    detailedBlobValidation?: boolean | undefined;

    /**
     * Whether to provide fixes for patching corresponding mismatches.
     *
     * default: false
     */
    suggestAvailableFixes?: boolean | undefined;

    /**
     * Whether to show mismatches for incorrect name and description of request
     *
     * default: false
     */
    validateMetadata?: boolean | undefined;

    /**
     * Whether to ignore mismatches resulting from unresolved variables in the Postman request
     *
     * default: false
     */
    ignoreUnresolvedVariables?: boolean | undefined;

    /**
     * Whether requests should be strictly matched with schema operations. Setting to true will not include any matches
     * where the URL path segments don't match exactly.
     *
     * default: false
     */
    strictRequestMatching?: boolean | undefined;

    /**
     * Whether to allow matching path variables that are available as part of URL itself in the collection request
     *
     * default: false
     */
    allowUrlPathVarMatching?: boolean | undefined;

    /**
     * Whether to set optional parameters as disabled
     *
     * default: false
     */
    disableOptionalParameters?: boolean | undefined;

    /**
     * Whether to keep implicit headers from the OpenAPI specification, which are removed by default.
     *
     * default: false
     */
    keepImplicitHeaders?: boolean | undefined;

    /**
     * Select whether to include Webhooks in the generated collection
     *
     * default: false
     */
    includeWebhooks?: boolean | undefined;
}

export interface SuccessfulValidationResult {
    result: true;
}
export interface UnsuccessfulValidationResult {
    result: false;
    reason: string;
}

export type ValidateResult = SuccessfulValidationResult | UnsuccessfulValidationResult;

type Result<T> =
    | (SuccessfulValidationResult & {
        output: ReadonlyArray<{ type: "collection" } & T>;
    })
    | UnsuccessfulValidationResult;

export type ConvertResult = Result<{ data: CollectionDefinition }>;

export type MetadataResult = Result<{ name: string }>;

export type Callback<Result> = (err: unknown, result: Result) => void;

interface OptionsBase {
    external?: boolean | undefined;
    usage: ReadonlyArray<"CONVERSION" | "VALIDATION">;
}
export type OptionsVersion = "3.0" | "3.1";

export interface OptionsCriteria extends OptionsBase {
    version?: OptionsVersion | undefined;
}

interface OptionsTypes {
    boolean: boolean;
    enum: string;
    string: string;
    integer: number;
    array: ReadonlyArray<unknown>;
}

export interface OptionsDocument<T extends keyof OptionsTypes = keyof OptionsTypes> extends OptionsBase {
    name: string;
    id: string;
    type: T;
    default: Array<OptionsTypes[T]>;
    description: string;
    supportedIn: OptionsVersion[];
}

type OptionsUse = Record<string, OptionsTypes[keyof OptionsTypes]>;

export class SchemaPack {
    constructor(input: Input, options?: Options);

    convert(cb: Callback<ConvertResult>): void;

    getMetaData(cb: Callback<MetadataResult>): void;

    mergeAndValidate(cb: Callback<ValidateResult>): void;

    validate(): ValidateResult;

    validateTransaction(
        transaction: unknown,
        cb: Callback<{ requests: unknown; missingEndpoints: unknown }>,
    ): void;

    static getOptions(mode: "document", criteria: OptionsCriteria): OptionsDocument;
    static getOptions(mode: "use", criteria: OptionsCriteria): OptionsUse;
}

export function convert(
    input: Input,
    options: Options | undefined,
    cb: Callback<ConvertResult>,
): void;

export function getMetaData(input: Input, cb: Callback<MetadataResult>): void;

export function getOptions(mode: "document", criteria: OptionsCriteria): OptionsDocument;
export function getOptions(mode: "use", criteria: OptionsCriteria): OptionsUse;

export function mergeAndValidate(input: Input, cb: Callback<ValidateResult>): void;

export function validate(input: Input): ValidateResult;
