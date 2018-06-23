// Type definitions for swagger-ui-express 3.0
// Project: https://github.com/scottie1984/swagger-ui-express
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { RequestHandler } from "express";
import { ServeStaticOptions } from "serve-static";

declare namespace SwaggerUiExpress {
    type JsonObject = { [key: string]: any; };
    type SwaggerUiOptions = { [key: string]: any; };
    type SwaggerOptions = { [key: string]: any; };

    /**
     * Creates a middleware function that returns the pre-generated html file for the Swagger UI page.
     *
     * @param {(JsonObject | null)} [swaggerDoc] json object with the API schema.
     * @param {(SwaggerUiOptions | false | null)} [opts] swagger-ui-express options.
     * @param {SwaggerOptions} [options] custom swagger options.
     * @param {(string | false | null)} [customCss] string with a custom css to embed into the page.
     * @param {(string | false | null)} [customfavIcon] link to a custom favicon.
     * @param {(string | false | null)} [swaggerUrl] Url of the swagger API schema, can be specified instead of the swaggerDoc.
     * @param {(string | false | null)} [customeSiteTitle] custom title for a page
     * @returns {RequestHandler} an express middleware function that returns the generated html page.
     */
    function setup(swaggerDoc?: JsonObject | null,
        opts?: SwaggerUiOptions | false | null,
        options?: SwaggerOptions,
        customCss?: string | false | null,
        customfavIcon?: string | false | null,
        swaggerUrl?: string | false | null,
        customeSiteTitle?: string | false | null): RequestHandler;

    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     *
     * @returns {Array<RequestHandler>} Express handlers that process requests and return files for Swagger UI.
     */
    function serve(): Array<RequestHandler>;

    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     * Additional options are passed to the express.static middleware.
     *
     * @param {ServeStaticOptions} options options object that is passed to the express.static middleware.
     * @returns {Array<RequestHandler>} Express handlers that process requests and return files for Swagger UI.
     */
    function serveWithOptions(options: ServeStaticOptions): Array<RequestHandler>;

    /**
     * Generates the custom html page for the UI API.
     *
     * @param {(JsonObject | null)} [swaggerDoc] json object with the API schema.
     * @param {(SwaggerUiOptions | false | null)} [opts] swagger-ui-express options.
     * @param {SwaggerOptions} [options] custom swagger options.
     * @param {(string | false | null)} [customCss] string with a custom css to embed into the page.
     * @param {(string | false | null)} [customfavIcon] link to a custom favicon.
     * @param {(string | false | null)} [swaggerUrl] Url of the swagger API schema, can be specified instead of the swaggerDoc.
     * @param {(string | false | null)} [customeSiteTitle] custom title for a page
     * @returns {string} the generated html page.
     */
    function generateHTML(swaggerDoc?: JsonObject | null,
        opts?: SwaggerUiOptions | false | null,
        options?: SwaggerOptions,
        customCss?: string | false | null,
        customfavIcon?: string | false | null,
        swaggerUrl?: string | false | null,
        customeSiteTitle?: string | false | null): string;


    /**
     * Returns handlers for serving Swagger UI files.
     * This includes custom initialization js file and static files of Swagger UI.
     * Additional options object is passed to Swagger UI.
     *
     * @param {JsonObject} [swaggerDoc] json object with the Swagger API schema.
     * @param {SwaggerUiOptions} [opts] options to pass to Swagger UI.
     * @returns {Array<RequestHandler>} Express handlers that process requests and return files for Swagger UI.
     */
    function serveFiles(swaggerDoc?: JsonObject, opts?: SwaggerUiOptions): Array<RequestHandler>;
}

export default SwaggerUiExpress;
