// Type definitions for swagger-jsdoc 3.3
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
//                 Neil Bryson Cargamento <https://github.com/neilbryson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* =================== USAGE ===================

    import * as express from 'express';
    import swaggerJSDoc, { Options }  from 'swagger-jsdoc';

    const app = express();

    const options: Options = {
        swaggerDefinition: {
          info: {
            title: 'Hello World',
            version: '1.0.0',
            description: 'A sample API'
          },
          host: 'localhost:3000',
          basePath: '/'
        },
        apis: [
          './example/routes*.js',
          './example/parameters.yaml'
        ]
      }
    };

    const spec = swaggerJSDoc(options);

    app.get('/api-docs.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(spec);
    });

 =============================================== */

export interface ApiInformation {
    description?: string;
    title: string;
    version: string;
}

export interface ServerInformation {
    url: string;
    [key: string]: any;
}

export interface SwaggerDefinition {
    basePath?: string;
    host?: string;
    info: ApiInformation;
    openapi?: string;
    servers?: ReadonlyArray<ServerInformation>;
    [key: string]: any;
}

export interface Options {
    apis?: ReadonlyArray<string>;
    swaggerDefinition: SwaggerDefinition;
    [key: string]: any;
}

export default function swaggerJSDoc(options?: Options): any;
