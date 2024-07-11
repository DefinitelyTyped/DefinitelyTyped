import * as expressBusboy from "express-busboy";
import express = require("express");

const app: express.Application = express();
const options: expressBusboy.ExpressBusboyOptions = {};
const withStripOptions: expressBusboy.ExpressBusboyOptions = { strip: (value: string) => value };
const result: express.Application = expressBusboy.extend(app, options);
const resultWithStrip: express.Application = expressBusboy.extend(app, withStripOptions);
