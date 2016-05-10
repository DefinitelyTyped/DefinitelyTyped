// Type definitions for swagger-express-middleware 1.x
// Project: https://github.com/BigstickCarpet/swagger-express-middleware
// Definitions by: Alexandre Roba <https://github.com/alexandreroba/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

/// <reference path="../express/express.d.ts" />
/// <reference path="../swagger-object/swagger-object.d.ts" />
/// <reference path="../multer/multer.d.ts" />

declare module "swagger-express-middleware" {
    import {Application, Router, RequestHandler,Request,Response} from "express";
    import {SwaggerObject} from "swagger-object";
    import {Options as MulterOptions} from "multer";

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

        interface MockSignature{
            (   
                /**
                 * Express routing options (e.g. `caseSensitive`, `strict`).
                 * If an Express Application or Router is passed, then its routing settings will be used.
                 */
                router?:Application|Router,
                /**
                * The data store that will be used to persist REST resources.
                * If `router` is an Express Application, then you can set/get the data store
                * using `router.get("mock data store")
                */
                datastore?:any):RequestHandler
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
        
        interface ParseRequestSignature{
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
        
        export interface ParseRequestOptions{
            /**
             * Cookie parser options
             */
            cookie?: CookieParserOptionItem
            /**
             * JSON body parser options
             */
            json?:JsonParseOptionItem
            /**
             * Plain-text body parser options
             */
            text?:TextParserOptionItem
            /**
             * URL-encoded body parser options
             */
            urlencoded?:UrlEncodedOptionItem
            /**
             * Raw body parser options
             */
            raw?:RawParserOptionItem
            /**
             * Multipart form data parser options
             */
            multipart?:MulterOptions
        }
        
        interface RawParserOptionItem{
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; 
             * if it is a string, the value is passed to the bytes library for parsing. Defaults to '100kb'.
             */
            limit?: string|number;
            /**
             * The type option is used to determine what media type the middleware will parse. 
             * This option can be a function or a string. 
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like bin), a mime type (like application/octet-stream), or a mime type with a wildcard (like * /* or application/*).
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. 
             * Defaults to application/octet-stream.
             */
            type?: ((req: Request)=>string)|string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
         
        }
        
        interface CookieParserOptionItem{
            /** 
             * A string or array used for signing cookies. 
             * This is optional and if not specified, will not parse signed cookies. 
             * If a string is provided, this is used as the secret. 
             * If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
             */
            secret?:string|Array<string>
            /**
             *  an object that is passed to cookie.parse as the second option
             */
            options?:any
        }
        
        interface JsonParseOptionItem{
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size. 
             * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. 
             * Defaults to '100kb'
             */
            limit?: string|number;
            /**
             * The type option is used to determine what media type the middleware will parse. 
             * This option can be a function or a string. 
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like json), a mime type (like application/json), or a mime * type with a wildcard (like * /* or * /json). 
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to application/json
             */
            type?: ((req: Request)=>string)|string
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
        
        interface TextParserOptionItem{
            /**
             * if deflated bodies will be inflated. (default: true)
             */
            inflate?: boolean;
            /**
             * Controls the maximum request body size. 
             * If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing. 
             * Defaults to '100kb'
             */
            limit?: string|number;
            /**
             * The type option is used to determine what media type the middleware will parse. 
             * This option can be a function or a string. 
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like txt), a mime type (like text/plain), or a mime type * with a wildcard (like * /* or text/*). 
             * If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. Defaults to text/plain.
             */
            type?: ((req: Request)=>string)|string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
            /**
             * the default charset to parse as, if not specified in content-type. (default: 'utf-8')
             */
            defaultCharset?: string;
        }
        
        interface UrlEncodedOptionItem{
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
            limit?: string|number;
            /**
             * The type option is used to determine what media type the middleware will parse. 
             * This option can be a function or a string. 
             * If a string, type option is passed directly to the type-is library and this can be an extension name (like urlencoded), a mime type (like application/x-www-form-urlencoded), 
             * or a mime type with a wildcard (like * /x-www-form-urlencoded). If a function, the type option is called as fn(req) and the request is parsed if it returns a truthy value. 
             * Defaults to application/x-www-form-urlencoded.
             */
            type?: ((req: Request)=>string)|string
            /**
             * function to verify body content, the parsing can be aborted by throwing an error.
             */
            verify?: (req: Request, res: Response, buf: Buffer, encoding: string) => void;
            /**
             * parse extended syntax with the qs module.
             */
            extended?: boolean;
        }
    }
    export = s;
}