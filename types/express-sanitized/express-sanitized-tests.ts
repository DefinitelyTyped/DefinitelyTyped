import * as express from "express";
import * as expressSanitized from "express-sanitized";

const RoutingServer: express.Express = express();

RoutingServer.use(expressSanitized());
