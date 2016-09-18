// Type definitions for Swagger-JSDoc
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import * as Express from "express"
    const swaggerJsdoc = require('./swagger-jsdoc');
    const app = new Express()

    let spec = SwaggerJsdoc({
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
interface swaggerOptions {
    swaggerDefinition: {
        info: {
            title: string,
            version: string
        },
        host: string,
        basePath: string
    },
    apis: string[]
}

declare interface swaggerjsdoc {
    (options?: swaggerOptions): any
}

