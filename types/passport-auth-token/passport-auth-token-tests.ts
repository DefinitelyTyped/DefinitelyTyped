/**
 * Created by Ian Woongsoo Lee <https://github.com/yummyummyummy>.
 */

import Koa = require('koa');
import KoaRouter = require('koa-router');
import passport = require('koa-passport');
import AuthTokenStrategy = require('passport-auth-token');

//#region Test Models
interface AccessToken {
    id: string;
}

interface User {
    id: string;
}

const testingAuthTokenStrategy = new AuthTokenStrategy(() => {});
testingAuthTokenStrategy.success = () => {};
testingAuthTokenStrategy.fail = () => {};

class AccessTokenImpl implements AccessToken {
    id: string;
    userId: string;

    static findOne(token: AccessToken, callback: (err: Error, token: AccessTokenImpl) => void): void {
        callback(null, new AccessTokenImpl());
    }

    verifyToken(token: string): boolean {
        return true;
    }
}

class UserImpl implements User {
    id: string;
    static findOne(user: User, callback: (err: Error, user: UserImpl) => void): void {
        callback(null, new UserImpl());
    }
}
//#endregion

// Sample from https://github.com/mbell8903/passport-auth-token#configure-strategy
passport.use(
    new AuthTokenStrategy((token: any, done: any) => {
        AccessTokenImpl.findOne(
            {
                id: token,
            },
            (error, accessToken) => {
                if (error) {
                    return done(error);
                }

                if (accessToken) {
                    if (!token.verifyToken(accessToken)) {
                        return done(null, false);
                    }

                    UserImpl.findOne(
                        {
                            id: accessToken.userId,
                        },
                        (error, user) => {
                            if (error) {
                                return done(error);
                            }

                            if (!user) {
                                return done(null, false);
                            }

                            return done(null, user);
                        },
                    );
                } else {
                    return done(null);
                }
            },
        );
    }),
);

passport.use(
    new AuthTokenStrategy({ passReqToCallback: true }, (req, token: any, done: any) => {
        AccessTokenImpl.findOne(
            {
                id: token,
            },
            (error, accessToken) => {
                if (error) {
                    return done(error);
                }

                if (accessToken) {
                    if (!token.verifyToken(accessToken)) {
                        return done(null, false);
                    }

                    UserImpl.findOne(
                        {
                            id: accessToken.userId,
                        },
                        (error, user) => {
                            if (error) {
                                return done(error);
                            }

                            if (!user) {
                                return done(null, false);
                            }

                            return done(null, user);
                        },
                    );
                } else {
                    return done(null);
                }
            },
        );
    }),
);

const app = new Koa();
const route = new KoaRouter<Koa.DefaultState, Koa.Context>();
// Sample from https://github.com/mbell8903/passport-auth-token#authenticate-requests
app.use(route.routes());
route.post('/login', passport.authenticate('authtoken', { session: false, optional: false }), async (ctx, next) => {
    await next();
});
