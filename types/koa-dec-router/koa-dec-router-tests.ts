import DecRouter, { controller, get, post } from 'koa-dec-router';

class Ctx {
    body: any;
    params: any;
}

const bazHandler = (ctx: Ctx, next: () => void) => {
    next();
};

@controller('/foo')
export class FooController {
    @get('/baz')
    async fooBaz(ctx: Ctx) {
        ctx.body = '/foo/baz';
    }

    @get()
    async foo(ctx: Ctx) {
        ctx.body = '/foo';
    }

    @get('/:code', { priority: -1 })
    async fooCode(ctx: Ctx) {
        ctx.body = '/foo/' + ctx.params.code;
    }
}

@controller('/baz', bazHandler)
export class BazController {
    @get('/foo')
    async fooBaz(ctx: Ctx) {
        ctx.body = '/foo/baz';
    }
}

const decRouter = DecRouter({
    controllersDir: './'
});
