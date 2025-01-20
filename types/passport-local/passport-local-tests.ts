/**
 * Created by Maxime LUCE <https://github.com/SomaticIT>.
 */

import express = require("express");
import passport = require("passport");
import local = require("passport-local");

// #region Test Models
interface IUser {
    username: string;
}

const testingLocalStrategy = new local.Strategy(() => {});
testingLocalStrategy.success = () => {};
testingLocalStrategy.fail = () => {};

class UserModel implements IUser {
    public username: string;
    public password: string;

    static findOne(user: IUser, callback: (err: Error, user: UserModel) => void): void {
        callback(null, new UserModel());
    }

    verifyPassword(password: string): boolean {
        return true;
    }
}

declare global {
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface User extends UserModel {}
    }
}
// #endregion

// Sample from https://github.com/jaredhanson/passport-local#configure-strategy
passport.use(
    new local.Strategy((username: any, password: any, done: any) => {
        UserModel.findOne({ username: username }, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            if (!user.verifyPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    }),
);

passport.use(
    new local.Strategy(
        {
            passReqToCallback: true,
        },
        function(req, username, password, done) {
            UserModel.findOne({ username: username }, function(err, user) {
                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false);
                }

                if (!user.verifyPassword(password)) {
                    return done(null, false);
                }

                return done(null, user);
            });
        },
    ),
);

// Sample from https://github.com/jaredhanson/passport-local#authenticate-requests
var app = express();
app.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), function(req, res) {
    res.redirect("/");
});
