import ReadlineTransform from "readline-transform";
import { PassThrough } from "stream";

const readStream = new PassThrough();

// Without constructor argument
{
    const transform = new ReadlineTransform();
    readStream.pipe(transform);
}

// Without any options
{
    const transform = new ReadlineTransform({});
    readStream.pipe(transform);
}

// With options
{
    const transform = new ReadlineTransform({
        breakMatcher: /\n/,
        ignoreEndOfBreak: false,
        skipEmpty: true,
    });
    readStream.pipe(transform);
}
