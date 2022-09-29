import * as passport from 'passport';
import express = require('express');
import 'express-session';

declare global {
    namespace Express {
        interface User {
            username: string;
            id?: number | undefined;
        }
    }
}

declare module 'express-session' {
    interface SessionData {
        error: any;
    }
}

class TestStrategy extends passport.Strategy {
    name = 'test';

    authenticate(req: express.Request) {
        const user: Express.User = { username: 'abc' };
        if (Math.random() > 0.5) {
            this.fail();
            this.fail(403);
            this.fail('challenge string', 403);
            this.fail({message: 'hello'}, 403);
            this.fail({message: 'hello', other: 123}, 123);
        } else {
            this.success(user);
        }
    }
}

const newFramework: passport.Framework = {
    initialize() {
        return () => { };
    },
    authenticate(passport, name, options) {
        return () => {
            return `authenticate(): ${name} ${options}`;
        };
    },
    authorize(passport, name, options) {
        return () => {
            return `authorize(): ${name} ${options}`;
        };
    }
};
passport.use(new TestStrategy());
passport.framework(newFramework);

passport.serializeUser((user, done: (err: any, id?: number) => void) => {
    done(null, user.id);
});
passport.serializeUser<number>((user, done) => {
    if (user.id! > 0) {
        done(null, user.id);
    } else {
        done(new Error('user ID is invalid'));
    }
});
passport.serializeUser((user, done) => {
    done(null, { id: user.id });
});
passport.deserializeUser((id, done) => {
    done(null, { username: `${id}` });
});
passport.deserializeUser((id, done) => {
    done(null, false);
});
passport.deserializeUser((id, done) => {
    done(null, null);
});
passport.deserializeUser((id, done) => {
    done('Error', false);
});
passport.deserializeUser<number>((id, done) => {
    const fetchUser = (id: number): Promise<Express.User> => {
        return Promise.reject(new Error(`user not found: ${id}`));
    };

    fetchUser(id)
        .then((user) => done(null, user))
        .catch(done);
});

passport.use(new TestStrategy())
    .unuse('test')
    .use(new TestStrategy())
    .framework(newFramework);

const app = express();
app.use(passport.initialize());
app.use(passport.session());

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    (req, res) => {
        res.redirect('/');
    });

app.post('/login',
    passport.authorize('local', { failureRedirect: '/login', failureFlash: true }),
    (req, res) => {
        res.redirect('/');
    });

app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err: any, user: { username: string; }, info: { message: string; }) => {
        if (err) { return next(err); }
        if (!user) {
            if (req.session) {
                req.session.error = info.message;
            }
            return res.redirect('/login');
        }
        req.logIn(user, (err) => {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});

app.post('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
    });
});

app.post('/logout', (req, res, next) => {
    req.logout({ keepSessionInfo: false }, (err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
    });
});

app.post('/auth/token', passport.authenticate(['basic', 'oauth2-client-password'], { session: false }));

function authSetting(): void {
    const authOption = {
        successRedirect: '/',
        failureRedirect: '/login',
    };
    const successCallback = (req: express.Request, res: express.Response) => {
        res.redirect('/');
    };

    app.get('/auth/facebook',
        passport.authenticate('facebook'));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', authOption), successCallback);

    app.get('/auth/twitter',
        passport.authenticate('twitter'));
    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', authOption));

    app.get('/auth/google',
        passport.authenticate('google', {
            scope:
                ['https://www.googleapis.com/auth/userinfo.profile']
        }));
    app.get('/auth/google/callback',
        passport.authenticate('google', authOption), successCallback);
}

function ensureAuthenticated(req: express.Request, res: express.Response, next: (err?: any) => void) {
    if (req.isAuthenticated()) {
        const user: Express.User = req.user;
        return next();
    } else if (req.isUnauthenticated()) {
        const user: undefined = req.user;
        res.redirect('/login');
    }
}

const passportInstance = new passport.Passport();
passportInstance.use(new TestStrategy());

const authenticator = new passport.Authenticator();
authenticator.use(new TestStrategy());

app.use((req: express.Request, res: express.Response, next: (err?: any) => void) => {
    if (req.user) {
        if (req.user.username) {
            req.user.username = "hello user";
        }
        if (req.user.id) {
            req.user.id = 123;
        }
    }
    next();
});
