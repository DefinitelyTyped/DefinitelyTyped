// Type definitions for swagger2openapi 7.0
// Project: https://github.com/Mermade/oas-kit/tree/main/packages/swagger2openapi
// Definitions by: rxliuli <https://github.com/rxliuli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Definitions by: rxliuli <https://github.com/rxliuli>
/// <reference types="node" />

import { OpenAPIV2, OpenAPIV3 } from 'openapi-types';
import { Readable } from 'node:stream';

export class S2OError extends Error {}

export interface ConvertBaseOptions {
    text: string; // Both If not already a truthy value, will be set to the input text of the conversion
}

export interface ConvertInputOptions extends ConvertBaseOptions {
    agent: object; // Input Optional http(s).Agent to be used when fetching resources
    anchors: boolean; // Input Allow use of YAML anchors/aliases. May break things
    cache: object; // Input Optional cache of external resources
    components: boolean; // Input Command-line flag to indicate unresolve information should be displayed
    debug: boolean; // Input Flag to enable debug mode, adds specification-extensions
    direct: boolean; // Input Flag to indicate that only the converted OpenApi definition should be returned, not wrapped in options
    encoding: string; // Input Encoding to use when reading/writing files
    expectFailure: boolean; // Input Flag to invert the status of a validation step
    fail: boolean; // Input Command-line flag used by testRunner
    fatal: boolean; // Input Treat ENOTFOUND and 404 errors as fatal during resolution, otherwise returns empty objects
    file: string; // Input Used to pass filename back to testRunner
    filters: Array<(data: OpenAPIV2.Document, options: ConvertInputOptions) => OpenAPIV2.Document>; // Input Input filters for the resolver (e.g. to convert JSON schema dialects)
    fetch: typeof fetch; // Input Used to override the internal fetch implementation
    fetchOptions: object; // Input Additional options to be passed to fetch calls
    handlers: object; // Input Map of additional protocol/scheme handlers, must be functions which return a Promise
    ignoreIOErrors: boolean; // Input Set to true to ignore IO errors when resolving
    indent: string; // Input Command-line flag to control JSON indenting
    isCallback: boolean; // Input Hint to the linter that we are within a callback object
    laxDefaults: boolean; // Input Flag to validation step to ignore default/type mismatches
    laxurls: boolean; // Input Flag to validation step to ignore empty URLs and # ? in paths
    lint: boolean; // Input Whether to lint the document during validation
    linter: any; // Input A linter plugin to use in place of the default linter
    linterResults: any; // Input A function to return the set of linter warnings
    lintLimit: number; // Input Controls how many linter warnings are logged in verbose mode
    lintSkip: any[]; // Input A list of lint rule names which will not be tested
    mediatype: boolean; // Input Flag to validation step to check media-type strings against RFC pattern
    nopatch: boolean; // Input Command-line flag by testRunner to unset patch
    origin: boolean | string; // Input true or a URL, to indicate an x-origin extension should be added to the converted output
    outfile: string; // Input The output file to write to
    output: boolean; // Input Internal flag to testRunner to write output openapi.yaml files
    patch: boolean; // Input Flag to fix-up minor errors in the source definition during conversion
    preserveMiro: boolean; // Input Flag to resolver as to whether to preserve old value of $ref in x-miro, default: false
    prevalidate: boolean; // Input Whether to validate each externally $refd file separately
    quiet: boolean; // Input Command-line flag used by testRunner
    rbname: string; // Input The name of the vendor extension to use to preserve body parameter names (e.g. x-codegen-request-body-name)
    refSiblings: string; // Input Controls handling of $ref which has sibling properties.
    resolve: boolean; // Input Flag to enable resolution of external $refs
    resolveInternal: boolean; // Input Flag to enable resolution of internal $refs. Also disables deduplication of requestBodies
    stop: boolean; // Input Command-line flag used by testRunner
    source: string; // Input The source filename or url of the definition, used by the resolver
    targetVersion: string; // Input Used to override the default target OpenAPI version of 3.0.0
    throws: boolean; // Input Used by tests only to indicate the fixture should throw an exception
    url: string; // Input URL of the original definition, used when reading a file to create x-origin extension
    verbose: boolean; // Input Increase verbosity, e.g. show HTTP GET requests
    version: boolean; // Input Command-line flag to show version information
    warnOnly: boolean; // Input Do not throw on non-patchable errors, add warning extensions
    warnProperty: string; // Input Property name to use for warning extensions, default x-s2o-warning
    whatwg: boolean; // Input Ignored (enable WHATWG URL parsing in validation step, now the default)
    yaml: boolean; // Input Flag to write YAML, default JSON (overridden by --outfile filepath extension)
    help: boolean; // Reserved Command-line flag to display help
    skip: boolean; // Reserved Used by tools such as Speccy to skip linter rules
}

export interface ConvertInternalOptions {
    allScopes: object; // Internal Cache of scopes by securityScheme for validation
    externalRef: object; // Internal When prevalidate is true, holds the entire object representing an externally $refd file
    externalRefs: object; // Internal Used to track resolved external references
    promise: object; // Internal object containing resolve and reject functions for the converter
    refmap: object; // Internal Used as a mapping between old and new $refs
    resolver: object; // Internal Used by the resolver to track outstanding resolutions
}

export interface ConvertOutputOptions extends ConvertBaseOptions, ConvertInternalOptions {
    context: any[]; // Output The context stack of associated with errors in a validation step, you normally want the last entry only
    externals: any[]; // Output Information required to unresolve a resolved definition back into its component parts
    metadata: object; // Output Used by the validator, if options.text is a string, will have a property lines containing the number of lines in the input document.
    openapi: OpenAPIV3.Document; // Output The OpenApi 3.x definition returned from a conversion step
    operationIds: string[]; // Output Used by validation to track uniqueness of operationIds
    original: OpenAPIV2.Document; // Bi-directional Used by testRunner to round-trip the original definition, set by non-object ConvertXXX methods
    patches: number; // Output Count of number of patches applied during conversion
    sourceYaml: boolean; // Output Flag set if the source string, URL or stream contained a YAML formatted definition
    valid: boolean; // Output The result of a validation step
    warnings: any[]; // Output Warnings generated by a validation step
}

export function convertObj(
    schema: OpenAPIV2.Document,
    options: Partial<ConvertInputOptions>,
): Promise<ConvertOutputOptions>;
export function convertObj(
    schema: OpenAPIV2.Document,
    options: Partial<ConvertInputOptions>,
    callback: (err: S2OError | undefined, options: ConvertOutputOptions) => void,
): void;

export const convert: typeof convertObj;

export function convertFile(filename: string, options: Partial<ConvertInputOptions>): Promise<ConvertOutputOptions>;
export function convertFile(
    filename: string,
    options: Partial<ConvertInputOptions>,
    callback: (err: S2OError | undefined, options: ConvertOutputOptions) => void,
): void;

export function convertUrl(url: string, options: Partial<ConvertInputOptions>): Promise<ConvertOutputOptions>;
export function convertUrl(
    url: string,
    options: Partial<ConvertInputOptions>,
    callback: (err: S2OError | undefined, options: ConvertOutputOptions) => void,
): void;

export function convertStr(str: string, options: Partial<ConvertInputOptions>): Promise<ConvertOutputOptions>;
export function convertStr(
    str: string,
    options: Partial<ConvertInputOptions>,
    callback: (err: S2OError | undefined, options: ConvertOutputOptions) => void,
): void;

export function convertStream(readable: Readable, options: Partial<ConvertInputOptions>): Promise<ConvertOutputOptions>;
export function convertStream(
    readable: Readable,
    options: Partial<ConvertInputOptions>,
    callback: (err: S2OError | undefined, options: ConvertOutputOptions) => void,
): void;
export const targetVersion: string;

declare const converter: {
    S2OError: typeof S2OError;
    targetVersion: typeof targetVersion;
    convert: typeof convert;
    convertObj: typeof convertObj;
    convertUrl: typeof convertUrl;
    convertStr: typeof convertStr;
    convertFile: typeof convertFile;
    convertStream: typeof convertStream;
};

export default converter;
