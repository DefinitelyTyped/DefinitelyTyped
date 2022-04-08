import Koa = require("koa");
import bouncer = require("koa-bouncer");

const app = new Koa();

app.use(bouncer.middleware());

app.use(async ctx => {
    ctx.validateBody('uname')
        .required('Username required')
        .isString()
        .trim();

    ctx.validateBody('email')
        .optional()
        .isString()
        .trim()
        .isEmail('Invalid email format');

    ctx.validateBody('password1')
        .required('Password required')
        .isString()
        .isLength(6, 100, 'Password must be 6-100 chars');

    ctx.validateBody('password2')
        .required('Password confirmation required')
        .isString()
        .eq(ctx.vals.password1, 'Passwords must match');

    ctx.validateBody('age').gte(18, 'Must be 18 or older');

    ctx.body = ctx.vals;
});

app.listen(80);
