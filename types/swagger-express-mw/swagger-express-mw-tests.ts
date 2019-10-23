import * as SwaggerExpress from "swagger-express-mw";
import express = require("express");

const app = express();
const config: SwaggerExpress.Config = {
    appRoot: __dirname
};

SwaggerExpress.create(config, (err, middleware) => {
    if (err) {
        throw err; // or handle error
    }
    middleware.register(app);

    const port = process.env.PORT || 10010;
    app.listen(port);
});

const swaggerSecurityHandlerCb = (err: Error) => {
    // do nothing
};

const configComplex: SwaggerExpress.Config = {
    appRoot: __dirname,
    configDir: "some/directory",
    controllersDirs: ["some/directory"],
    fittingsDirs: ["some/directory"],
    mockMode: true,
    swaggerControllerPipe: 'swagger_controllers',
    swaggerSecurityHandlers: {
        // did not manage to research the typings of first 3 arguments
        someHandlerName: ({}, {}, {}, swaggerSecurityHandlerCb) => {
            // do nothing
        }
    },
    validateResponse: true
};
