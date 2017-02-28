// Type definitions for body-parser
// Project: http://expressjs.com
// Definitions by: Santi Albo <https://github.com/santialbo/>, VILIC VANE <https://vilic.info>, Jonathan Häberle <https://github.com/dreampulse/>, Gevik Babakhani <https://github.com/blendsdk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




import * as express from "express";

/**
 * bodyParser: use individual json/urlencoded middlewares
 * @deprecated
 */

declare function bodyParser(options?: {
    /**
     * if deflated bodies will be inflated. (default: true)
     */
    inflate?: boolean;
    /**
     * maximum request body size. (default: '100kb')
     */
    limit?: any;
    /**
     * function to verify body content, the parsing can be aborted by throwing an error.
     */
    verify?: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void;
    /**
     * only parse objects and arrays. (default: true)
     */
    strict?: boolean;
    /**
     * passed to JSON.parse().
     */
    reviver?: (key: string, value: any) => any;
    /**
     * parse extended syntax with the qs module. (default: true)
     */
    extended?: boolean;
}): express.RequestHandler;

declare namespace bodyParser {

    /**
     * Interface for defining the options for the json() middleware
     *
     * @export
     * @interface JsonOptions
     */
    export interface JsonOptions {
        /**
         * if deflated bodies will be inflated. (default: true)
         */
        inflate?: boolean;
        /**
         * maximum request body size. (default: '100kb')
         */
        limit?: any;
        /**
         * request content-type to parse, passed directly to the type-is library. (default: 'json')
         */
        type?: any;
        /**
         * function to verify body content, the parsing can be aborted by throwing an error.
         */
        verify?: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void;
        /**
         * only parse objects and arrays. (default: true)
         */
        strict?: boolean;
        /**
         * passed to JSON.parse().
         */
        reviver?: (key: string, value: any) => any;
    }

    /**
     * Interface for defining the options the raw() middleware
     *
     * @export
     * @interface RawOptions
     */
    export interface RawOptions {
        /**
         * if deflated bodies will be inflated. (default: true)
         */
        inflate?: boolean;
        /**
         * maximum request body size. (default: '100kb')
         */
        limit?: any;
        /**
         * request content-type to parse, passed directly to the type-is library. (default: 'application/octet-stream')
         */
        type?: any;
        /**
         * function to verify body content, the parsing can be aborted by throwing an error.
         */
        verify?: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void;
    }

    /**
     * Interface for defining the options for the text() middleware
     *
     * @export
     * @interface TextOptions
     */
    export interface TextOptions {
        /**
         * if deflated bodies will be inflated. (default: true)
         */
        inflate?: boolean;
        /**
         * maximum request body size. (default: '100kb')
         */
        limit?: any;
        /**
         * request content-type to parse, passed directly to the type-is library. (default: 'text/plain')
         */
        type?: any;
        /**
         * function to verify body content, the parsing can be aborted by throwing an error.
         */
        verify?: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void;
        /**
         * the default charset to parse as, if not specified in content-type. (default: 'utf-8')
         */
        defaultCharset?: string;
    }

    /**
     * Interface for defining the options for the urlencoded() middleware
     *
     * @export
     * @interface UrlEncodedOptions
     */
    export interface UrlEncodedOptions {
        /**
         * if deflated bodies will be inflated. (default: true)
         */
        inflate?: boolean;
        /**
         * maximum request body size. (default: '100kb')
         */
        limit?: any;
        /**
         * request content-type to parse, passed directly to the type-is library. (default: 'urlencoded')
         */
        type?: any;
        /**
         * function to verify body content, the parsing can be aborted by throwing an error.
         */
        verify?: (req: express.Request, res: express.Response, buf: Buffer, encoding: string) => void;
        /**
         * parse extended syntax with the qs module.
         */
        extended: boolean;
    }

    /**
     * Returns middleware that only parses json. This parser accepts any Unicode encoding
     * of the body and supports automatic inflation of gzip and deflate encodings.
     *
     * @export
     * @param {JsonOptions} [options]
     * @returns {express.RequestHandler}
     */
    export function json(options?: JsonOptions): express.RequestHandler;

    /**
     * Returns middleware that parses all bodies as a Buffer. This parser supports automatic
     * inflation of gzip and deflate encodings.
     *
     * @export
     * @param {RawOptions} [options]
     * @returns {express.RequestHandler}
     */
    export function raw(options?: RawOptions): express.RequestHandler;

    /**
     * Returns middleware that parses all bodies as a string. This parser supports
     * automatic inflation of gzip and deflate encodings.
     *
     * @export
     * @param {TextOptions} [options]
     * @returns {express.RequestHandler}
     */
    export function text(options?: TextOptions): express.RequestHandler;

    /**
     * Returns middleware that only parses urlencoded bodies. This parser accepts only
     * UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
     *
     * @export
     * @param {UrlEncodedOptions} [options]
     * @returns {express.RequestHandler}
     */
    export function urlencoded(options?: UrlEncodedOptions): express.RequestHandler;
}

export = bodyParser;
