import { PassThrough } from 'stream';
import ReadlineTransform = require('readline-transform');

const readStream = new PassThrough();
const transform = new ReadlineTransform({
  breakMatcher: /\n/,
  ignoreEndOfBreak: false,
  skipEmpty: true
});
const writeStream = new PassThrough({ objectMode: true });

readStream.pipe(transform).pipe(writeStream);
