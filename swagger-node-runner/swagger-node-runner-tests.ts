import * as SwaggerNodeRunner from "swagger-node-runner";
import * as express from "express";
import * as connect from "connect";
import * as Hapi from "hapi";
import * as restify from "restify";
import * as sails from "sails.io.js";

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


//Connect middleware
let connectApp = connect();
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  let conncetMiddleware = runner.connectMiddleware();

  conncetMiddleware.register(connectApp);
  var port = process.env.PORT || 10010;
  connectApp.listen(port);
});


// Sails Middleware (chain) test
SwaggerNodeRunner.create(config, (err, runner) => {
  if (err) { throw err; }

  let sailsMw = runner.sailsMiddleware();
  if(typeof sailsMw.chain !== 'function' || !sailsMw.runner) {
      // do nothing
  }
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


// Restify Middelware
let app = restify.createServer();
SwaggerNodeRunner.create(config, function(err, runner) {
  if (err) { throw err; }

  let restifyMiddelware = runner.restifyMiddleware()

  restifyMiddelware.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);
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
