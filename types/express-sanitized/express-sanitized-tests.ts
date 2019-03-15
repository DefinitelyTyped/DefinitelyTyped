import express = require("express");
import expressSanitized = require("express-sanitized");

const RoutingServer: express.Express = express();

RoutingServer.use(expressSanitized());
