/// <reference path="swagger-express-middleware.d.ts" />

import * as express from "express";
import * as SwaggerExpressMiddleware from "swagger-express-middleware";

let app = express();
let router = express.Router();

SwaggerExpressMiddleware("PetStore.yaml", app, (err: any, middleware: SwaggerExpressMiddleware.SwaggerMiddleware) => {
    let filesOptions: SwaggerExpressMiddleware.FilesOptions = {
        useBasePath: false,
        apiPath: "/api-docs/",
        rawFilesPath: "/api-docs/"
    };

    let parseRequestOptions: SwaggerExpressMiddleware.ParseRequestOptions = {
        cookie: { secret: undefined },
        json: {
            limit: '1mb'
        },
        text: {
            limit: '1mb',
            type: 'text/*'
        },
        urlencoded:{
            extended:true
        },
        raw:{
           inflate:false,
           limit:100 
        }
        
    }

    app.use(
        middleware.metadata(router),
        middleware.CORS(),
        middleware.files(router, filesOptions),
        middleware.parseRequest(parseRequestOptions),
        middleware.validateRequest(),
        middleware.mock(router)
    );
});

app.listen(8000, function () {
    console.log('The PetStore sample is now running at http://localhost:8000');
});



