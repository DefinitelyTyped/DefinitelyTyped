/**
 * Created by Ian Woongsoo Lee <https://github.com/yummyummyummy>.
 */

import Koa = require('koa');
import KoaRouter = require('koa-router');
import passport = require('koa-passport');
import passportAuthToken = require('passport-auth-token');

//#region Test Models
interface IAccessToken {
    id: string;
}

interface IUser {
    id: string;
}

const AuthTokenStrategy = passportAuthToken.Strategy;

const testingAuthTokenStrategy = new AuthTokenStrategy(() => {});
testingAuthTokenStrategy.success = () => {};
testingAuthTokenStrategy.fail = () => {};

class AccessToken implements IAccessToken {
    id: string;
    userId: string;

    static findOne(token: IAccessToken, callback: (err: Error, token: AccessToken) => void): void {
        callback(null, new AccessToken());
    }

    verifyToken(token: string): boolean {
        return true;
    }
}

class User implements IUser {
    id: string;
    static findOne(user: IUser, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }
}
//#endregion

// Sample from https://github.com/mbell8903/passport-auth-token#configure-strategy
passport.use(
    new AuthTokenStrategy((token: any, done: any) => {
        AccessToken.findOne(
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

                    User.findOne(
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
        AccessToken.findOne(
            {
                id: token,
            },
            function (error, accessToken) {
                if (error) {
                    return done(error);
                }

                if (accessToken) {
                    if (!token.verifyToken(accessToken)) {
                        return done(null, false);
                    }

                    User.findOne(
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
