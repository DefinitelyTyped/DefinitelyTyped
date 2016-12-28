import * as SwaggerNodeRunner from "swagger-node-runner";
import * as express from "express";

let app = express();
let config: SwaggerNodeRunner.Config = {
    appRoot: __dirname
};

SwaggerNodeRunner.create(config, (err, runner) => {
    if (err) {
        throw err; // or handle error
    }
    let middleware = runner.expressMiddleware();
    middleware.register(app);

    const port = process.env.PORT || 10010;
    app.listen(port);
});



let swaggerSecurityHandlerCb = (err: Error) => {
    //do nothing
}


let configComplex: SwaggerNodeRunner.Config = {
    appRoot: __dirname,
    configDir: "some/directory",
    controllersDirs: ["some/directory"],
    fittingsDirs: ["some/directory"],
    mockMode: true,
    swaggerControllerPipe: 'swagger_controllers',
    swaggerSecurityHandlers: {
        // did not manage to research the typings of first 3 arguments
        someHandlerName: ({}, {}, {}, swaggerSecurityHandlerCb) => {
            //do nothing
        }
    },
    validateResponse: true
};
