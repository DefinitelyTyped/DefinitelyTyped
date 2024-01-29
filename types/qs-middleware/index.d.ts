import express = require("express");
import qs = require("qs");

declare function qsMiddleware(
    options?: qs.IParseOptions,
): express.RequestHandler;

export = qsMiddleware;
