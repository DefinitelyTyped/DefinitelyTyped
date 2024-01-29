import ReadlineTransform from "readline-transform";
import { PassThrough } from "stream";

const readStream = new PassThrough();
const transform = new ReadlineTransform({
    breakMatcher: /\n/,
    ignoreEndOfBreak: false,
    skipEmpty: true,
});
const writeStream = new PassThrough({ objectMode: true });

readStream.pipe(transform).pipe(writeStream);
