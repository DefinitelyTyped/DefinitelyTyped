import * as express from 'express';
import * as versionRouter from 'express-version-route';

const app = express();

const routesMap = new Map<string, express.Handler>([
    ["1.0", respondV1],
    ["2.0", respondV2]
]);

app.get('/test', versionRouter.route(routesMap));

function respondV1(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v1');
}

function respondV2(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(200).send('ok v2');
}
