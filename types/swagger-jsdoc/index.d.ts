// Type definitions for swagger-jsdoc 3.0
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
//                 Neil Bryson Cargamento <https://github.com/neilbryson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as express from 'express';
    import * as swaggerJSDoc  from 'swagger-jsdoc';

    const app = express();

    const options: swaggerJSDoc.Options = {
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

/**
 * Returns validated Swagger specification in JSON format.
 */
declare function swaggerJSDoc(options?: swaggerJSDoc.Options): object;

declare namespace swaggerJSDoc {
    interface ApiInformation {
        description?: string;
        title: string;
        version: string;
    }

    interface ServerInformation {
        url: string;
        [key: string]: any;
    }

    interface SwaggerDefinition {
        basePath?: string;
        host?: string;
        info: ApiInformation;
        openapi?: string;
        servers?: ReadonlyArray<ServerInformation>;
        [key: string]: any;
    }

    interface Options {
        apis?: ReadonlyArray<string>;
        definition?: SwaggerDefinition;
        swaggerDefinition?: SwaggerDefinition;
        [key: string]: any;
    }
}

export = swaggerJSDoc;
