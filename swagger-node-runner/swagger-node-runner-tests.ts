import * as SwaggerNodeRunner from "swagger-node-runner";
import * as express from "express";
import * as Hapi from "hapi";

let config: SwaggerNodeRunner.Config = {
    appRoot: __dirname
};

// Express middleware
let expressApp = express();
SwaggerNodeRunner.create(config, (err, runner) => {
    if (err) {
        throw err; // or handle error
    }
    let expressMiddleware = runner.expressMiddleware();
    expressMiddleware.register(expressApp);

    const port = process.env.PORT || 10010;
    expressApp.listen(port);
});


//Hapi Middleware
var hapiapp = new Hapi.Server();
SwaggerNodeRunner.create(config, function(err, runner) {
  if (err) { throw err; }

  var port = process.env.PORT || 10010;
  hapiapp.connection({ port });
//   hapiapp.address = function() {
//     return { port };
//   };
  let hapiMiddleware = runner.hapiMiddleware();

  if (hapiMiddleware.config.swagger !== undefined) {
    let appRootFromMw = hapiMiddleware.config.swagger.appRoot;
  }

  let pluginAttributes = hapiMiddleware.plugin.register.attributes.name + hapiMiddleware.plugin.register.attributes.version;

  hapiapp.register(hapiMiddleware.plugin, function(err) {
    if (err) { return console.error("Failed to load plugin:", err); }
    // stat app etc..
  });
});


let swaggerSecurityHandlerCb = (err: Error) => {
    //do nothing
};


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
