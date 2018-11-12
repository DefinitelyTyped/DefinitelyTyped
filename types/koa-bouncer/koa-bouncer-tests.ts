import Koa = require("koa");
import Router = require("koa-router");
import bouncer = require("koa-bouncer");

const app = new Koa();

app.use(bouncer.middleware());
const router = new Router()

router.post('/users', async (ctx) => {
    ctx.validateBody('uname')
        .required('Username required')
        .isString()
        .trim()

    ctx.validateBody('email')
        .optional()
        .isString()
        .trim()
        .isEmail('Invalid email format')

    ctx.validateBody('password1')
        .required('Password required')
        .isString()
        .isLength(6, 100, 'Password must be 6-100 chars')

    ctx.validateBody('password2')
        .required('Password confirmation required')
        .isString()
        .eq(ctx.vals.password1, 'Passwords must match')

    console.log(ctx.vals)
})

app
    .use(router.routes())
    .use(router.allowedMethods());
    

app.listen(80);
