// Type definitions for Swagger-JSDoc
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/* =================== USAGE ===================

    import * as express from 'express';
    import * as swaggerJSDoc from 'swagger-jsdoc';
    const app = express()

    let options = {
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

    let spec = swaggerJSDoc(options);

    app.get('/api-docs.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(spec);
    });

 =============================================== */

 declare function swaggerJSDoc(options?: any): any;
 declare namespace swaggerJSDoc {
 
 }
 
 export = swaggerJSDoc;
