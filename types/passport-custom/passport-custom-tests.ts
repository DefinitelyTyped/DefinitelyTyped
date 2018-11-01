
/**
 * Created by Alexander Abramov <https://github.com/zarly>.
 */

import express = require('express');
import passport = require('passport');
import custom = require('passport-custom');

//#region Test Models
interface IUser {
    username: string;
}

const testingCustomStrategy = new custom.Strategy(()=>{});
testingCustomStrategy.success = () => {};
testingCustomStrategy.fail = () => {};

class User implements IUser {
    public username: string;
    public password: string;

    static findOne(user: IUser, callback: (err: Error, user: User) => void): void {
        callback(null, new User());
    }

    verifyPassword(password: string): boolean {
        return true;
    }
}
//#endregion

// Sample from https://github.com/mbell8903/passport-custom#configure-strategy
passport.use(new custom.Strategy((req: any, done: any) => {
    done(null, new User());
}));

passport.use(new custom.Strategy((req: any, done: any) => {
    User.findOne({ username: req.body.username }, (err, user) => {
        return done(err, user);
    });
}));

// Sample from https://github.com/mbell8903/passport-custom#authenticate-requests
var app = express();
app.post('/login',
    passport.authenticate('custom', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });
