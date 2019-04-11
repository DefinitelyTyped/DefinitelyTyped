import yog2Kernel = require('yog2-kernel');
import { Request, Response, NextFunction } from 'express';

yog2Kernel.log.notice('some debug');
yog2Kernel.log.debug('some debug');
yog2Kernel.log.trace('some debug');
yog2Kernel.log.warning('some debug');
yog2Kernel.log.fatal('some debug');

const handler = async function(req: yog2Kernel.Request, resp: yog2Kernel.Response, next: NextFunction) {
    const test = await req.ralP("test", {});

    resp.bigpipe.bind("test", function(done) {
        done(null, 'yeap');
    });

    resp.render("test", {});
};

const router = {} as yog2Kernel.Router;
(router.action("test") as yog2Kernel.ActionObject).get;

const handler1 = router.wrapAsync(function() { });
const handler21 = router.wrapAsync(function(req: yog2Kernel.Request) { });
const handler22 = router.wrapAsync(function(req: Request) { });
const handler31 = router.wrapAsync(function(req: yog2Kernel.Request, resp: yog2Kernel.Response) { });
const handler33 = router.wrapAsync(function(req: Request, resp: Response) { });
const handler4 = router.wrapAsync(function(req: Request, resp: Response, next: NextFunction) { });

yog2Kernel.bootstrap({});

yog2Kernel.bootstrap({
    rootPath: ''
});
