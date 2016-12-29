import * as SwaggerRestify from "swagger-restify-mw";
import * as restify from "restify";

let app = restify.createServer();

let config = {
  appRoot: __dirname // required config
} as SwaggerRestify.Config;

SwaggerRestify.create(config, function(err, swaggerRestify) {
  if (err) { throw err; }

  swaggerRestify.register(app);

  let port = process.env.PORT || 10010;
  app.listen(port);

  // if (swaggerRestify.runner.swagger.paths['/hello']) {
  //   console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  // }
});


let swaggerSecurityHandlerCb = (err: Error) => {
    //do nothing
};


let configComplex: SwaggerRestify.Config = {
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
