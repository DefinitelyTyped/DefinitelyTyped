import * as SwaggerHapi from "swagger-hapi";
import * as Hapi from "hapi";

var app = new Hapi.Server();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
} as SwaggerHapi.Config;

SwaggerHapi.create(config, function(err, swaggerHapi) {
  if (err) { throw err; }

  var port = process.env.PORT || 10010;
  app.connection({ port });
  // app.address = function() {
  //   return { port };
  // };

  if (swaggerHapi.config.swagger !== undefined) {
    let appRootFromMw = swaggerHapi.config.swagger.appRoot;
  }

  app.register(swaggerHapi.plugin, function(err) {
    if (err) { return console.error("Failed to load plugin:", err); }
    // stat app etc..
  });
});


let swaggerSecurityHandlerCb = (err: Error) => {
    //do nothing
};


let configComplex: SwaggerHapi.Config = {
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
