import * as SwaggerRestify from "swagger-restify-mw";
import * as restify from "restify";

const app = restify.createServer();

const config: SwaggerRestify.Config = {
    appRoot: __dirname // required config
};

SwaggerRestify.create(config, (err, swaggerRestify) => {
  if (err) { throw err; }

  swaggerRestify.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
});

const swaggerSecurityHandlerCb = (err: Error) => {
    // do nothing
};

const configComplex: SwaggerRestify.Config = {
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
