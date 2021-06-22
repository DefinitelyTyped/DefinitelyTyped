import split = require("split2");
import fs = require("split2");
import { Transform, TransformOptions } from "stream";
import { Options } from "split2";

let stream: Transform;
let options: Options = {};
const matcherString = "\t";
const matcherRegex = /\r?\n/;

stream = split();
stream = split(JSON.parse);
stream = split(options);
stream = split(JSON.parse, options);
stream = split(matcherString);
stream = split(matcherString, JSON.parse);
stream = split(matcherString, options);
stream = split(matcherString, JSON.parse, options);
stream = split(matcherRegex);
stream = split(matcherRegex, JSON.parse);
stream = split(matcherRegex, options);
stream = split(matcherRegex, JSON.parse, options);

options = {
    maxLength: 1000,
    objectMode: true,
    highWaterMark: 16,
    encoding: "utf8",
};
