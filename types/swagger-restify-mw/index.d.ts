/* =================== USAGE ===================
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

  if (swaggerRestify.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});

 =============================================== */

import { Config, RestifyMiddleware } from "swagger-node-runner";

/** export interfaces */
export { Config, RestifyMiddleware } from "swagger-node-runner";

/**
 * Create a new instance of a Restify specific `SwaggerNodeRunner` middleware
 *
 * The `swagger-node-runner` module has the following config priority:
 *   1. `swagger_*` environment vars
 *   2. `config` passed to `create()`
 *   3. read from swagger node in `default.yaml` in config directory
 *   4. module defaults
 *
 * @see @link{https://github.com/apigee-127/swagger-express|Github}
 */
export function create(config: Config, cb: (err: Error | undefined, middleware: RestifyMiddleware) => void): void;
