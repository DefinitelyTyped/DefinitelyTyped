import { createServer } from "http";

import inflate from "inflation";

createServer((req, res) => {
    inflate(req).pipe(res);
});
