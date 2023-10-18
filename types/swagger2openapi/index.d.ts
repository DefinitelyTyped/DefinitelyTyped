/// <reference types="node" />

import { Readable } from "node:stream";
import { OpenAPIV2, OpenAPIV3 } from "openapi-types";

export class S2OError extends Error {}

export interface ConvertBaseOptions {
    /** Both If not already a truthy value, will be set to the input text of the conversion */
    text: string;
}

export interface ConvertInputOptions extends ConvertBaseOptions {
    /** Input Optional http(s).Agent to be used when fetching resources */
    agent: object;
    /** Input Allow use of YAML anchors/aliases. May break things */
    anchors: boolean;
    /** Input Optional cache of external resources */
    cache: object;
    /** Input Command-line flag to indicate unresolve information should be displayed */
    components: boolean;
    /** Input Flag to enable debug mode, adds specification-extensions */
    debug: boolean;
    /** Input Flag to indicate that only the converted OpenApi definition should be returned, not wrapped in options */
    direct: boolean;
    /** Input Encoding to use when reading/writing files */
    encoding: string;
    /** Input Flag to invert the status of a validation step */
    expectFailure: boolean;
    /** Input Command-line flag used by testRunner */
    fail: boolean;
    /** Input Treat ENOTFOUND and 404 errors as fatal during resolution, otherwise returns empty objects */
    fatal: boolean;
    /** Input Used to pass filename back to testRunner */
    file: string;
    /** Input Input filters for the resolver (e.g. to convert JSON schema dialects) */
    filters: Array<(data: OpenAPIV2.Document, options: ConvertInputOptions) => OpenAPIV2.Document>;
    /** Input Used to override the internal fetch implementation */
    fetch: typeof fetch;
    /** Input Additional options to be passed to fetch calls */
    fetchOptions: object;
    /** Input Map of additional protocol/scheme handlers, must be functions which return a Promise */
    handlers: object;
    /** Input Set to true to ignore IO errors when resolving */
    ignoreIOErrors: boolean;
    /** Input Command-line flag to control JSON indenting */
    indent: string;
    /** Input Hint to the linter that we are within a callback object */
    isCallback: boolean;
    /** Input Flag to validation step to ignore default/type mismatches */
    laxDefaults: boolean;
    /** Input Flag to validation step to ignore empty URLs and # ? in paths */
    laxurls: boolean;
    /** Input Whether to lint the document during validation */
    lint: boolean;
    /** Input A linter plugin to use in place of the default linter */
    linter: any;
    /** Input A function to return the set of linter warnings */
    linterResults: any;
    /** Input Controls how many linter warnings are logged in verbose mode */
    lintLimit: number;
    /** Input A list of lint rule names which will not be tested */
    lintSkip: any[];
    /** Input Flag to validation step to check media-type strings against RFC pattern */
    mediatype: boolean;
    /** Input Command-line flag by testRunner to unset patch */
    nopatch: boolean;
    /** Input true or a URL, to indicate an x-origin extension should be added to the converted output */
    origin: boolean | string;
    /** Input The output file to write to */
    outfile: string;
    /** Input Internal flag to testRunner to write output openapi.yaml files */
    output: boolean;
    /** Input Flag to fix-up minor errors in the source definition during conversion */
    patch: boolean;
    /** Input Flag to resolver as to whether to preserve old value of $ref in x-miro, default: false */
    preserveMiro: boolean;
    /** Input Whether to validate each externally $refd file separately */
    prevalidate: boolean;
    /** Input Command-line flag used by testRunner */
    quiet: boolean;
    /** Input The name of the vendor extension to use to preserve body parameter names (e.g. x-codegen-request-body-name) */
    rbname: string;
    /** Input Controls handling of $ref which has sibling properties. */
    refSiblings: string;
    /** Input Flag to enable resolution of external $refs */
    resolve: boolean;
    /** Input Flag to enable resolution of internal $refs. Also disables deduplication of requestBodies */
    resolveInternal: boolean;
    /** Input Command-line flag used by testRunner */
    stop: boolean;
    /** Input The source filename or url of the definition, used by the resolver */
    source: string;
    /** Input Used to override the default target OpenAPI version of 3.0.0 */
    targetVersion: string;
    /** Input Used by tests only to indicate the fixture should throw an exception */
    throws: boolean;
    /** Input URL of the original definition, used when reading a file to create x-origin extension */
    url: string;
    /** Input Increase verbosity, e.g. show HTTP GET requests */
    verbose: boolean;
    /** Input Command-line flag to show version information */
    version: boolean;
    /** Input Do not throw on non-patchable errors, add warning extensions */
    warnOnly: boolean;
    /** Input Property name to use for warning extensions, default x-s2o-warning */
    warnProperty: string;
    /** Input Ignored (enable WHATWG URL parsing in validation step, now the default) */
    whatwg: boolean;
    /** Input Flag to write YAML, default JSON (overridden by --outfile filepath extension) */
    yaml: boolean;
    /** Reserved Command-line flag to display help */
    help: boolean;
    /** Reserved Used by tools such as Speccy to skip linter rules */
    skip: boolean;
}

export interface ConvertInternalOptions {
    /** Internal Cache of scopes by securityScheme for validation */
    allScopes: object;
    /** Internal When prevalidate is true, holds the entire object representing an externally $refd file */
    externalRef: object;
    /** Internal Used to track resolved external references */
    externalRefs: object;
    /** Internal object containing resolve and reject functions for the converter */
    promise: object;
    /** Internal Used as a mapping between old and new $refs */
    refmap: object;
    /** Internal Used by the resolver to track outstanding resolutions */
    resolver: object;
}

export interface ConvertOutputOptions extends ConvertBaseOptions, ConvertInternalOptions {
    /** Output The context stack of associated with errors in a validation step, you normally want the last entry only */
    context: any[];
    /** Output Information required to unresolve a resolved definition back into its component parts */
    externals: any[];
    /** Output Used by the validator, if options.text is a string, will have a property lines containing the number of lines in the input document. */
    metadata: object;
    /** Output The OpenApi 3.x definition returned from a conversion step */
    openapi: OpenAPIV3.Document;
    /** Output Used by validation to track uniqueness of operationIds */
    operationIds: string[];
    /** Bi-directional Used by testRunner to round-trip the original definition, set by non-object ConvertXXX methods */
    original: OpenAPIV2.Document;
    /** Output Count of number of patches applied during conversion */
    patches: number;
    /** Output Flag set if the source string, URL or stream contained a YAML formatted definition */
    sourceYaml: boolean;
    /** Output The result of a validation step */
    valid: boolean;
    /** Output Warnings generated by a validation step */
    warnings: any[];
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
