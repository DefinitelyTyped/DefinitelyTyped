import Koa from 'koa';
import DecRouter, { controller, get, post } from 'koa-dec-router';

class Ctx {
    body: any;
}

@controller('/hello')
export class HelloController {
    @get('/ha')
    async list(ctx: Ctx) {
        ctx.body = 'Hello';
    }

    @get()
    async methodName(ctx: Ctx) {
        ctx.body = 'method name';
    }
}

const decRouter = DecRouter({
    controllersDir: './'
});


const PORT = 3456;
const app = new Koa();

app.use(decRouter.router.routes());
app.use(decRouter.router.allowedMethods());
app.listen(PORT);
export default app;
