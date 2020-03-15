import express = require('express');
import compression = require('compression');
import zlib = require('zlib');

const app = express();

// compression

app.use(compression());
app.use(
    compression({
        chunkSize: zlib.constants.Z_DEFAULT_CHUNK,
        filter: (req: express.Request, res: express.Response) => true,
        level: zlib.constants.Z_DEFAULT_COMPRESSION,
        memLevel: zlib.constants.Z_DEFAULT_MEMLEVEL,
        strategy: zlib.constants.Z_DEFAULT_STRATEGY,
        threshold: '1kb',
        windowBits: zlib.constants.Z_DEFAULT_WINDOWBITS,
        // should accept zlib options https://nodejs.org/api/zlib.html#zlib_class_options
        flush: zlib.constants.Z_NO_FLUSH,
        finishFlush: zlib.constants.Z_FINISH,
        dictionary: Buffer.from('Hello World!'),
        info: true,
    }),
);
app.use(
    compression({
        threshold: 512,
        filter: (req: express.Request, res: express.Response) => {
            if (req.headers['x-no-compression']) {
                // don't compress responses with this request header
                return false;
            }

            // fallback to standard filter function
            return compression.filter(req, res);
        },
    }),
);

// compression.filter

app.use(compression({ filter: shouldCompress }));

function shouldCompress(req: express.Request, res: express.Response): boolean {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false;
    }
    // fallback to standard filter function
    return compression.filter(req, res);
}

// Express.Request.flush

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');

    // send a ping approx every 2 seconds
    const timer = setInterval(() => {
        res.write('data: ping\n\n');

        // !!! this is the important part
        res.flush();
    }, 2000);

    res.on('close', () => {
        clearInterval(timer);
    });
});
