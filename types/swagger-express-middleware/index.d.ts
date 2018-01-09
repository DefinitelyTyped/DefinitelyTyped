// Type definitions for swagger-express-middleware 1.x
// Project: https://github.com/BigstickCarpet/swagger-express-middleware
// Definitions by: Alexandre Roba <https://github.com/alexandreroba>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================
import * as express from "express";
import * as SwaggerExpressMiddleware from "swagger-express-middleware";

let app = express();

SwaggerExpressMiddleware("PetStore.yaml", app, (err: any, middleware: SwaggerExpressMiddleware.SwaggerMiddleware) => {
    app.use(
        middleware.metadata(),
        middleware.CORS(),
        middleware.files(),
        middleware.parseRequest(),
        middleware.validateRequest(),
        middleware.mock()
    );
});

app.listen(8000, function () {
    console.log('The PetStore sample is now running at http://localhost:8000');
});

 =============================================== */

/// <reference types="express" />

declare module "swagger-express-middleware" {
    import { Application, Router, RequestHandler, Request, Response } from "express";

    let s: s.SwaggerMiddlewareConstructor;

    namespace s {
        interface SwaggerMiddlewareConstructor {
            (apiDefinitionPathOrObject: string | SwaggerObject, appOrRouter: Application | Router, cb: SwaggerMiddlewareConstructorCallback): SwaggerMiddleware;
        }
        interface SwaggerMiddlewareConstructorCallback {
            (err: any, middleware: SwaggerMiddleware): void;
        }
        export interface SwaggerMiddleware {
            /**
            * Annotates the HTTP request (the `req` object) with Swagger metadata.
            * This middleware populates Request.swagger
            */
            metadata: MetadataSignature;
            /**
             * Handles CORS preflight requests and sets CORS headers for all requests according the Swagger API definition.
             */
            CORS: CORSSignature;
            /**
             * Serves the Swagger API file(s) in JSON and YAML formats, so they can be used with third-party front-end tools like Swagger UI and Swagger Editor.
             */
            files: FilesSignature;
            /**
             * Parses the HTTP request into typed values.
             */
            parseRequest: ParseRequestSignature;
            /**
             * Validates the HTTP request against the Swagger API.
             * An error is sent downstream if the request is invalid for any reason.
             */
            validateRequest(): RequestHandler;
            /**
             * Implements mock behavior for HTTP requests, based on the Swagger API.
             */
            mock: MockSignature;
        }

        interface MockSignature {
            (
                /**
                 * Express routing options (e.g. `caseSensitive`, `strict`).
                 * If an Express Application or Router is passed, then its routing settings will be used.
                 */
                router?: Application | Router,
                /**
                * The data store that will be used to persist REST resources.
                * If `router` is an Express Application, then you can set/get the data store
                * using `router.get("mock data store")
                */
                datastore?: any): RequestHandler
        }
        interface MetadataSignature {
            (router?: Application | Router): RequestHandler
        }

        interface CORSSignature {
            (): RequestHandler
        }

        interface FilesSignature {
            (
                /**
                 * Options for how the files are served
                 */
                options?: FilesOptions): RequestHandler
            (
                /**
                 * If an Express Application or Router is passed, then its routing settings will be used.
                 */
                router: Application | Router,
                /**
                 * Options for how the files are served
                 */
                options?: FilesOptions): RequestHandler
        }

        interface ParseRequestSignature {
            (
                /**
                 * Options for each of the request-parsing middleware
                 */
                options?: ParseRequestOptions): RequestHandler
            (
                /**
                 * An Express Application or Router.
                 * If provided, this will be used to register path-param middleware via Router.Param
                 */
                router: Application | Router,
                /**
                 * Options for each of the request-parsing middleware
                 */
                options?: ParseRequestOptions): RequestHandler
        }

        export interface FilesOptions {
            useBasePath?: boolean
            apiPath?: string
            rawFilesPath?: string
        }

        export interface ParseRequestOptions {
            /**
             * Cookie parser options
             */
            cookie?: CookieParserOptionItem
            /**
             * JSON body parser options
             */
            json?: JsonParseOptionItem
            /**
             * Plain-text body parser options
             */
            text?: TextParserOptionItem
            /**
             * URL-encoded body parser options
             */
            urlencoded?: UrlEncodedOptionItem
            /**
             * Raw body parser options
             */
            raw?: RawParserOptionItem
            /**
             * Multipart form data parser options
             */
            multipart?: MulterOptions
        }

        interface MulterOptions{
            /** The destination directory for the uploaded files. */
            dest?: string;
            /** The storage engine to use for uploaded files. */
            storage?: StorageEngine;
            /** An object specifying the size limits of the following optional properties. This object is passed to busboy directly, and the details of properties can be found on https://github.com/mscdex/busboy#busboy-methods */
            limits?: {
                /** Max field name size (Default: 100 bytes) */
                fieldNameSize?: number;
                /** Max field value size (Default: 1MB) */
                fieldSize?: number;
                /** Max number of non- file fields (Default: Infinity) */
                fields?: number;
                /** For multipart forms, the max file size (in bytes)(Default: Infinity) */
                fileSize?: number;
                /** For multipart forms, the max number of file fields (Default: Infinity) */
                files?: number;
                /** For multipart forms, the max number of parts (fields + files)(Default: Infinity) */
                parts?: number;
                /** For multipart forms, the max number of header key=> value pairs to parse Default: 2000(same as node's http). */
                headerPairs?: number;
            };
            /** A function to control which files to upload and which to skip. */
            fileFilter?: (req: Request, file: File, callback: (error: Error, acceptFile: boolean) => void) => void;

        }

        interface StorageEngine {
            _handleFile(req: Request, file: File, callback: (error?: any, info?: File) => void): void;
            _removeFile(req: Request, file: File, callback: (error: Error) => void): void;
        }

        export interface File {
            /** Field name specified in the form */
            fieldname: string;
            /** Name of the file on the user's computer */
            originalname: string;
            /** Encoding type of the file */
            encoding: string;
            /** Mime type of the file */
            mimetype: string;
            /** Size of the file in bytes */
            size: number;
            /** The folder to which the file has been saved (DiskStorage) */
            destination: string;
            /** The name of the file within the destination (DiskStorage) */
            filename: string;
            /** Location of the uploaded file (DiskStorage) */
            path: string;
            /** A Buffer of the entire file (MemoryStorage) */
            buffer: Buffer;
        }

        interface RawParserOptionItem {
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size. If this is a number, then the value specifies the number of bytes;
             * if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.
             */
            limit?: string | number;
            /**
             * The type option is used to determine what media type the middleware will parse.
             * This option can be a function or a string.
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like bin), a mime type (like application/octet-stream), or a mime type with a wildcard (like * /* or application/*).
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value.
             * Defaults to application/octet-stream.
             */
            type?: ((req: Request) => string) | string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;

        }

        interface CookieParserOptionItem {
            /**
             * A string or array used for signing cookies.
             * This is optional and if not specified, will not parse signed cookies.
             * If a string is provided, this is used as the secret.
             * If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
             */
            secret?: string | Array<string>
            /**
             *  an object that is passed to cookie.parse as the second option
             */
            options?: any
        }

        interface JsonParseOptionItem {
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size.
             * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
             * Defaults to '100kb'
             */
            limit?: string | number;
            /**
             * The type option is used to determine what media type the middleware will parse.
             * This option can be a function or a string.
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like json), a mime type (like application/json), or a mime * type with a wildcard (like * /* or * /json).
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to application/json
             */
            type?: ((req: Request) => string) | string
            /**
             * The verify option, if supplied, is called as verify(req, res, buf, encoding), where buf is a Buffer of the raw request body and encoding is the encoding of the request.
             * The parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
            /**
             * only parse objects and arrays. (default: true)
             */
            strict?: boolean;
            /**
             * passed to JSON.parse().
             */
            receiver?: (key: string, value: any) => any;
        }

        interface TextParserOptionItem {
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size.
             * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
             * Defaults to '100kb'
             */
            limit?: string | number;
            /**
             * The type option is used to determine what media type the middleware will parse.
             * This option can be a function or a string.
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like txt), a mime type (like text/plain), or a mime type * with a wildcard (like * /* or text/*).
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to text/plain.
             */
            type?: ((req: Request) => string) | string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
            /**
             * the default charset to parse as, if not specified in content-type. (default: 'utf-8')
             */
            defaultCharset?: string;
        }

        interface UrlEncodedOptionItem {
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size.
             * If this is a number, then the value specifies the number of bytes;
             * if it is a string, the value is passed to the bytes library for parsing.
             * Defaults to '100kb'.
             */
            limit?: string | number;
            /**
             * The type option is used to determine what media type the middleware will parse.
             * This option can be a function or a string.
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like urlencoded), a mime type (like application/x-www-form-urlencoded),
             * or a mime type with a wildcard (like * /x-www-form-urlencoded). If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value.
             * Defaults to application/x-www-form-urlencoded.
             */
            type?: ((req: Request) => string) | string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
            /**
             * parse extended syntax with the qs module.
             */
            extended?: boolean;
        }

        export interface SwaggerObject {
            swagger: string
            info: InfoObject
            host?: string
            basePath?: string
            schemes?: string[]
            consumes?: MimeTypes
            produces?: MimeTypes
            paths: PathsObject
            definitions?: DefinitionsObject
            parameters?: ParametersDefinitionsObject
            responses?: ResponsesDefinitionsObject
            securityDefinitions?: SecurityDefinitionsObject
            security?: SecurityRequirementObject[]
            tags?: TagObject[]
            externalDocs?: ExternalDocumentationObject
        }

        type MimeTypes = string[]

        export interface InfoObject {
            title: string
            description?: string
            termsOfService?: string
            contact?: ContactObject
            license?: LicenseObject
            version: string
        }

        export interface ContactObject {
            name?: string
            url?: string
            email?: string
        }

        export interface LicenseObject {
            name: string
            url?: string
        }

        export interface PathsObject {
            [index: string]: PathItemObject | any
        }

        export interface PathItemObject {
            $ref?: string
            get?: OperationObject
            put?: OperationObject
            post?: OperationObject
            'delete'?: OperationObject
            options?: OperationObject
            head?: OperationObject
            patch?: OperationObject
            parameters?: Parameters
        }

        export interface OperationObject {
            tags?: string[]
            summary?: string
            description?: string
            externalDocs?: ExternalDocumentationObject
            operationId?: string
            consumes?: MimeTypes
            produces?: MimeTypes
            parameters?: Parameters
            responses: ResponsesObject
            schemes?: string[]
            deprecated?: boolean
            security?: SecurityRequirementObject[]
        }

        export interface DefinitionsObject {
            [index: string]: SchemaObject
        }

        export interface ResponsesObject {
            [index: string]: Response | any
            'default': Response
        }

        type Response = ResponseObject | ReferenceObject

        export interface ResponsesDefinitionsObject {
            [index: string]: ResponseObject
        }

        export interface ResponseObject {
            description: string
            schema?: SchemaObject
            headers?: HeadersObject
            examples?: ExampleObject
        }

        export interface HeadersObject {
            [index: string]: HeaderObject
        }

        export interface HeaderObject extends ItemsObject {
        }

        export interface ExampleObject {
            [index: string]: any
        }

        export interface SecurityDefinitionsObject {
            [index: string]: SecuritySchemeObject
        }

        export interface SecuritySchemeObject {
            type: string
            description?: string
            name: string
            'in': string
            flow: string
            authorizationUrl: string
            tokenUrl: string
            scopes: ScopesObject
        }
        export interface ScopesObject {
            [index: string]: any
        }

        export interface SecurityRequirementObject {
            [index: string]: string[]
        }

        export interface TagObject {
            name: string
            description?: string
            externalDocs?: ExternalDocumentationObject
        }

        export interface ItemsObject {
            type: string
            format?: string
            items?: ItemsObject
            collectionFormat?: string
            'default'?: any
            maximum?: number
            exclusiveMaximum: boolean
            minimum?: number
            exclusiveMinimum?: boolean
            maxLength?: number
            minLength?: number
            pattern?: string
            maxItems?: number
            minItems?: number
            uniqueItems?: boolean
            'enum'?: any[]
            multipleOf?: number
        }

        export interface ParametersDefinitionsObject {
            [index: string]: ParameterObject
        }

        type Parameters = (ParameterObject | ReferenceObject)[]

        export interface ParameterObject {
            name: string
            'in': string
            description?: string
            required?: boolean
        }

        export interface InBodyParameterObject extends ParameterObject {
            schema: SchemaObject
        }

        export interface GeneralParameterObject extends ParameterObject, ItemsObject {
            allowEmptyValue?: boolean
        }

        export interface ReferenceObject {
            $ref: string
        }

        export interface ExternalDocumentationObject {
            [index: string]: any
            description?: string
            url: string
        }

        export interface SchemaObject extends IJsonSchema {
            [index: string]: any
            discriminator?: string
            readOnly?: boolean
            xml?: XMLObject
            externalDocs?: ExternalDocumentationObject
            example?: any
        }

        interface IJsonSchema {
            id?: string
            $schema?: string
            title?: string
            description?: string
            multipleOf?: number
            maximum?: number
            exclusiveMaximum?: boolean
            minimum?: number
            exclusiveMinimum?: boolean
            maxLength?: number
            minLength?: number
            pattern?: string
            additionalItems?: boolean | IJsonSchema
            items?: IJsonSchema | IJsonSchema[]
            maxItems?: number
            minItems?: number
            uniqueItems?: boolean
            maxProperties?: number
            minProperties?: number
            required?: string[]
            additionalProperties?: boolean | IJsonSchema
            definitions?: {
                [name: string]: IJsonSchema
            }
            properties?: {
                [name: string]: IJsonSchema
            }
            patternProperties?: {
                [name: string]: IJsonSchema
            }
            dependencies?: {
                [name: string]: IJsonSchema | string[]
            }
            'enum'?: any[]
            type?: string | string[]
            allOf?: IJsonSchema[]
            anyOf?: IJsonSchema[]
            oneOf?: IJsonSchema[]
            not?: IJsonSchema
            $ref?: string
            format?: string
        }

        export interface XMLObject {
            [index: string]: any
            name?: string
            namespace?: string
            prefix?: string
            attribute?: boolean
            wrapped?: boolean
        }
    }

    export = s;
}