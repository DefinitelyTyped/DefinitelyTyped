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
    public id: string;
    public userId: string;

    static findOne(token: IAccessToken, callback: (err: Error, token: AccessToken) => void): void {
        callback(null, new AccessToken());
    }

    verifyToken(token: string): boolean {
        return true;
    }
}

class User implements IUser {
    public id: string;
    static findOne(user: IUser, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }
}
//#endregion

// Sample from https://github.com/mbell8903/passport-auth-token#configure-strategy
passport.use(
    new AuthTokenStrategy(function (token: any, done: any) {
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
                        function (error, user) {
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
    new AuthTokenStrategy({ passReqToCallback: true }, function (req, token: any, done: any) {
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
                        function (error, user) {
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

var app = new Koa();
var route = new KoaRouter<Koa.DefaultState, Koa.Context>();
// Sample from https://github.com/mbell8903/passport-auth-token#authenticate-requests
app.use(route.routes());
route.post('/login', passport.authenticate('authtoken', { session: false, optional: false }), async function (
    ctx,
    next,
) {
    await next();
});
