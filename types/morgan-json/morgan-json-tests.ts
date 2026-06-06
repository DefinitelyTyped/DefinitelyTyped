import json = require("morgan-json");
import morgan = require("morgan");

json(":method :url :status :res[content-length] bytes :response-time ms");

json(":method", { stringify: true });

json({
    short: ":method :url :status",
    length: ":res[content-length]",
    "response-time": ":response-time ms",
});

morgan(
    json({
        short: ":method :url :status",
        length: ":res[content-length]",
        "response-time": ":response-time ms",
    }),
);
