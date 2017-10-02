import * as Koa from 'koa';
import * as passport from 'koa-passport';

const app = new Koa();
let ctx: Koa.Context;


app.use(passport.initialize());
app.use(passport.session());

app.use(async (ctx: Koa.Context): Promise<void> => {
    ctx.isAuthenticated();
    ctx.isUnauthenticated();
    ctx.login({});
    ctx.logout();
    ctx.state.user;
});


app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    return passport.authenticate('local', (user: any, info: any, status: any) => {
        if (user === false) {
            ctx.status = 401;
            ctx.body = { success: false };
        } else {
            ctx.body = { success: true };
            return ctx.login(user);
        }
    })(ctx, next);
});

app.use(
    passport.authenticate('local', {
        successRedirect: '/app',
        failureRedirect: '/'
    })
);

