import * as express from "express";
import * as expressSanitized from "express-sanitized";

let RoutingServer: express.Express = express();

RoutingServer.use(expressSanitized);
