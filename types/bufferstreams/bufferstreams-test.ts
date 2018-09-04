import bufferstreams from 'bufferstreams';

import fs = require('fs');

fs.createReadStream("./index.d.ts").pipe(new bufferstreams((err, buf, cb)=>{
    if(err)
        console.error(err);
    if(buf)
        console.log(buf.toString());
    return cb();
}));