import bufferstreams from 'bufferstreams';

import * as fs from 'fs';

fs.createReadStream("./index.d.ts").pipe(new bufferstreams((err, buf, cb): void => {
    if (err)
        console.error(err);
    if (buf)
        console.log(buf.toString());
    cb();
}));
