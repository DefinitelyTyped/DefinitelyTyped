import type { Express, Request, Response } from 'express';
import preconditions = require('express-preconditions');

const app: Express = <any> {};

app.use(preconditions());
app.use(preconditions({
    requiredWith: ['POST']
}));
app.use(preconditions({
    async stateAsync(req) {
        return {
        };
    }
}));
app.use(preconditions({
    async stateAsync(req) {
        return {
            etag: 'foo',
            lastModified: 'bar'
        };
    }
}));
app.use(preconditions({
   error(statusCode: number, message: string, req: Request, res: Response) {
       res.status(statusCode);
       res.send(new Error(message));
   }
}));
