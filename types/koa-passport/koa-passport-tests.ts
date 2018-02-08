import Koa = require('koa');
import * as passport from 'koa-passport';

const app = new Koa();

app.use(passport.initialize());
app.use(passport.session());

app.use(async (ctx): Promise<void> => {
    ctx.isAuthenticated();
    ctx.isUnauthenticated();
    ctx.login({});
    ctx.logout();
    ctx.state.user;
});

app.use(async (ctx, next) => {
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

class KoaPasspordChild extends passport.KoaPassport { }
