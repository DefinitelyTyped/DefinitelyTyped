// Type definitions for swagger-hapi 0.7
// Project: https://github.com/apigee-127/swagger-hapi#readme
// Definitions by: Michael Mrowetz <https://github.com/micmro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/* =================== USAGE ===================

import * as SwaggerHapi from "swagger-hapi";
import * as Hapi from "hapi";

var app = new Hapi.Server();
let config: SwaggerHapi.Config = {
    appRoot: __dirname
};

SwaggerHapi.create(config, (err, middleware) => {
    if (err) {
        throw err; // or handle error
    }
    var port = process.env.PORT || 10010;
    app.connection({ port });

    app.register(middleware.plugin, function(err) {
        if (err) { return console.error("Failed to load plugin:", err); }
        app.start(function() {
            if (middleware.runner.swagger.paths['/hello']) {
                console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
            }
        });
    });
});

 =============================================== */

import { Config, HapiMiddleware } from "swagger-node-runner";

/** export interfaces */
export { Config, HapiMiddleware } from "swagger-node-runner";

/**
 * Create a new instance of a Hapi specific `SwaggerNodeRunner` middleware
 *
 * The `swagger-node-runner` module has the following config priority:
 *   1. `swagger_*` environment vars
 *   2. `config` passed to `create()`
 *   3. read from swagger node in `default.yaml` in config directory
 *   4. module defaults
 *
 * @see @link{https://github.com/apigee-127/swagger-express|Github}
 */
export function create(config: Config, cb: (err: Error | undefined, middleware: HapiMiddleware) => void): void;
