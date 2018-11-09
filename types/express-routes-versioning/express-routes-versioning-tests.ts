import * as express from 'express';
import routesVersioning from 'express-routes-versioning';

const routesVersioningMiddleware = routesVersioning();

const app = express();
app.listen(3000);

app.get('/test', routesVersioningMiddleware({
    "1.0.0": respondV1,
    "~2.2.1": respondV2
}));

function respondV1(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v1');
}

function respondV2(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v2');
}
