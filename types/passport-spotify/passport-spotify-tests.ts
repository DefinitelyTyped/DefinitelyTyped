
/**
 * Created by Maxime LUCE <https://github.com/SomaticIT>.
 */

import express = require("express");
import passport = require('passport');
import spotify = require('passport-spotify');

//#region Test Models
interface IUser {
    username: string;
}

const testingSpotifyStrategy = new spotify.Strategy({
    clientID: '',
    clientSecret: '',
    callbackURL: ''
}, ()=>{});
testingSpotifyStrategy.success = () => {};
testingSpotifyStrategy.fail = () => {};

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

passport.use(testingSpotifyStrategy);

var app = express();
app.post('/login',
    passport.authenticate('spotify', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });
