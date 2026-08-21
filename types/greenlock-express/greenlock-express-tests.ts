import express = require("express");
import { RequestListener } from "http";
import greenlock = require("greenlock-express");

const o: greenlock.Options = {
    packageRoot: "./",
    maintainerEmail: "user@example.com",
    configDir: "./greenlock.d",
    cluster: false,
};

const expressApp = express();

// $ExpectType Serve
greenlock.init(o);

// $ExpectType Serve
greenlock.init(o).ready();

// $ExpectType Serve
greenlock.init(o).ready(expressApp);

// $ExpectType Serve
greenlock.init(o).master();

// $ExpectType Serve
greenlock.init(o).master(expressApp);

// $ExpectType void
greenlock.init(o).serve(expressApp);

const genericApp: RequestListener = (req, res) => {};

// $ExpectType Serve
greenlock.init(o);

// $ExpectType Serve
greenlock.init(o).ready();

// $ExpectType Serve
greenlock.init(o).ready(genericApp);

// $ExpectType Serve
greenlock.init(o).master();

// $ExpectType Serve
greenlock.init(o).master(genericApp);

// $ExpectType void
greenlock.init(o).serve(genericApp);
