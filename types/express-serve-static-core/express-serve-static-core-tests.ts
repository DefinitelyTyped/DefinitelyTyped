import * as express from 'express-serve-static-core';

const app: express.Application = {} as any;
app.listen(3000);
app.listen(3000, (err: any) => {
    // no-op error callback
});
