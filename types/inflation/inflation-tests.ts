import { createServer } from 'http';

import * as inflate from 'inflation';

createServer((req, res) => {
    inflate(req).pipe(res);
});
