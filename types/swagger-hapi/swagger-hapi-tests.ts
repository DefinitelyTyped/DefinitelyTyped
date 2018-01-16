import * as SwaggerHapi from "swagger-hapi";
import * as Hapi from "hapi";

const app = new Hapi.Server();

module.exports = app; // for testing

const config: SwaggerHapi.Config = {
  appRoot: __dirname // required config
};

SwaggerHapi.create(config, (err, swaggerHapi) => {
  if (err) { throw err; }

  const port = process.env.PORT || 10010;
  app.connection({ port });
  // app.address = function() {
  //   return { port };
  // };

  if (swaggerHapi.config.swagger !== undefined) {
    const appRootFromMw = swaggerHapi.config.swagger.appRoot;
  }

  app.register(swaggerHapi.plugin, err => {
    if (err) {
      console.error("Failed to load plugin:", err);
      return;
    }
    // stat app etc..
  });
});

const swaggerSecurityHandlerCb = (err: Error) => {
  // do nothing
};

const configComplex: SwaggerHapi.Config = {
  appRoot: __dirname,
  configDir: "some/directory",
  controllersDirs: ["some/directory"],
  fittingsDirs: ["some/directory"],
  mockMode: true,
  swaggerControllerPipe: 'swagger_controllers',
  swaggerSecurityHandlers: {
    // did not manage to research the typings of first 3 arguments
    someHandlerName: ({ }, { }, { }, swaggerSecurityHandlerCb) => {
      // do nothing
    }
  },
  validateResponse: true
};
