import split = require('split2');
import * as fs from 'fs';
import { Transform, TransformOptions } from 'stream';

let stream: Transform;
let options: split.Options = {};
let matcherString = '\t';
let matcherRegex = /\r?\n/;

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
  encoding: 'utf8'
};

