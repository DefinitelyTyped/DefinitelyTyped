// Type definitions for Swagger-JSDoc
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as Express from "express"
    import swaggerJsdoc = require('./swagger-jsdoc');
    const app = new Express()

    let spec = SwaggerJSDoc({
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

    app.get('/api-docs.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(spec);
    });

 =============================================== */

declare module "swagger-jsdoc" {
    interface SwaggerDefinition {
        info: InfoObject,
        host: string,
        basePath: string
    }

    interface InfoObject {
        title: string,
        version: string
    }

    interface swaggerOptions {
        swaggerDefinition: SwaggerDefinition
        apis: string[]
    }

    function swaggerJSDoc(options?: swaggerOptions): any;
    export = swaggerJSDoc;
}
