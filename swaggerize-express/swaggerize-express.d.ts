// Type definitions for swaggerize-express 4.x
// Project: https://github.com/krakenjs/swaggerize-express
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>

/* =================== USAGE ===================

 import express = require('express');
 import swaggerize = require('swaggerize-express');
 var app = express();
 app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/api-docs',
    handlers: './handlers'
 });

 =============================================== */

declare module "swaggerize-express" {
    import express = require('express');
    function swaggerize(options: swaggerize.Options): express.RequestHandler;

    module swaggerize {
        export interface ISwaggerApiDefinition {
            swagger: string
            host: string
        }

        export interface Options {
            api: ISwaggerApiDefinition
            docspath: String
            handlers: String
        }

        export interface IConfig {
            api: ISwaggerApiDefinition
            routes: express.IRoute[]
        }

        export interface SwaggerizedExpress extends express.Express {
            swagger: IConfig
        }
    }

    export = swaggerize;
}
