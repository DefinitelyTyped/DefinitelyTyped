import { Context, HttpRequest } from 'azure-functions';

function run(ctx: Context, req: HttpRequest) {
    ctx.log('Hello', 'world');
    ctx.log.error('Hello', 'world');
    ctx.log.warn('Hello', 'world');
    ctx.log.info('Hello', 'world');
    ctx.log.verbose('Hello', 'world');
    ctx.log.metric('Hello', 'world');
    ctx.res.status = 404;
    ctx.res.isRaw = true;
    ctx.res.body = '';
    if (ctx.req.body.emoji === ':pizza:') ctx.log('Yay!');
    if (req.body.emoji === ':pizza:') ctx.log('Yay!');
    ctx.res = {
        status: 400,
        body: ''
    };
    ctx.done();
    ctx.done(null, { myOutput: { text: 'hello there, world' }});
}
