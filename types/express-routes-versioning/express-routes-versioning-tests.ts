import * as express from 'express';
import * as routesVersioning from 'express-routes-versioning';

const app = express();

const routesVersioningMiddleware: routesVersioning.RoutesVersioningMiddleware = routesVersioning();

const versioningOptions: routesVersioning.VersionOptions = {
    "1.0.0": respondV1,
    "~2.2.1": respondV2
};

app.get('/test', routesVersioningMiddleware(versioningOptions));

function respondV1(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v1');
}

function respondV2(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v2');
}
