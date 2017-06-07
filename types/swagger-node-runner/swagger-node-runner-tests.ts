import * as SwaggerNodeRunner from "swagger-node-runner";
import * as express from "express";
import * as connect from "connect";
import * as Hapi from "hapi";
import * as restify from "restify";
import * as sails from "sails.io.js";

const config: SwaggerNodeRunner.Config = {
    appRoot: __dirname
};

// Express middleware
const expressApp = express();
SwaggerNodeRunner.create(config, (err, runner) => {
    if (err) {
        throw err; // or handle error
    }
    const expressMiddleware = runner.expressMiddleware();
    expressMiddleware.register(expressApp);

    const port = process.env.PORT || 10010;
    expressApp.listen(port);
});

// Connect middleware
const connectApp = connect();
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  const connectMiddleware = runner.connectMiddleware();

  connectMiddleware.register(connectApp);
  const port = process.env.PORT || 10010;
  connectApp.listen(port);
});

// Sails Middleware (chain) test
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  const sailsMw = runner.sailsMiddleware();
  if (typeof sailsMw.chain !== 'function' || !sailsMw.runner) {
      // do nothing
  }
});

// Hapi Middleware
const hapiapp = new Hapi.Server();
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  const port = process.env.PORT || 10010;
  hapiapp.connection({ port });
//   hapiapp.address = function() {
//     return { port };
//   };
  const hapiMiddleware = runner.hapiMiddleware();

  if (hapiMiddleware.config.swagger !== undefined) {
    const appRootFromMw = hapiMiddleware.config.swagger.appRoot;
  }

  const pluginAttributes = hapiMiddleware.plugin.register.attributes.name + hapiMiddleware.plugin.register.attributes.version;

  hapiapp.register(hapiMiddleware.plugin, err => {
    if (err) { return console.error("Failed to load plugin:", err); }
    // stat app etc..
  });
});

// Restify Middelware
const app = restify.createServer();
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  const restifyMiddelware = runner.restifyMiddleware();

  restifyMiddelware.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
});

const swaggerSecurityHandlerCb = (err: Error) => {
    // do nothing
};

const configComplex: SwaggerNodeRunner.Config = {
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
