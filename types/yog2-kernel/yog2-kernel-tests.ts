import * as yog2Kernel from 'yog2-kernel';
import { NextFunction } from 'express';

yog.log.notice('some debug');
yog.log.debug('some debug');
yog.log.trace('some debug');
yog.log.warning('some debug');
yog.log.fatal('some debug');

const handler = async function(req: yog2Kernel.Request, resp: yog2Kernel.Response, next: NextFunction) {
    const test = await req.ralP("test", {});

    resp.bigpipe.bind("test", function(done) {
        done(null, 'yeap');
    });

    resp.render("test", {});
};

const router = <yog2Kernel.Router> {};
(<yog2Kernel.ActionObject> router.action("test")).get;

const handler2 = router.wrapAsync(function() { });

yog.bootstrap({});

yog.bootstrap({
    rootPath: ''
});
