import * as stream from 'node:stream';

import JSONStream = require('json-stream');

(async () => {
    const s: stream.Transform = new JSONStream();
})();
