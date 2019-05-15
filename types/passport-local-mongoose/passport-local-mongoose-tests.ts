/**
 * Created by Linus Brolin <https://github.com/linusbrolin/>.
 */

import {
    Schema,
    model,
    Document,
    PassportLocalDocument,
    PassportLocalSchema,
    PassportLocalModel,
    PassportLocalOptions,
    PassportLocalErrorMessages
} from 'mongoose';
import passportLocalMongoose = require('passport-local-mongoose');

import { Router, Request, Response } from 'express';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';


//#region Test Models
interface User extends PassportLocalDocument {
    _id: string;
    username: string;
    hash: string;
    salt: string;
    attempts: number;
    last: Date;
}

const UserSchema = new Schema({
    username: String,
    hash: String,
    salt: String,
    attempts: Number,
    last: Date
}) as PassportLocalSchema;

let options: PassportLocalOptions = <PassportLocalOptions>{};
options.iterations = 25000;
options.keylen = 512;
options.digestAlgorithm = 'sha256';
options.interval = 100;
options.usernameField = 'username';
options.usernameUnique = true;
options.usernameLowerCase = true;
options.hashField = 'hash';
options.saltField = 'salt';
options.saltlen = 32;
options.attemptsField = 'attempts';
options.lastLoginField = 'last';
options.selectFields = 'undefined';
options.populateFields = 'undefined';
options.encoding = 'hex';
options.limitAttempts = false;
options.maxAttempts = Infinity;
options.passwordValidator = function(password: string, cb: (err: any) => void): void {};
options.usernameQueryFields = [];

let errorMessages: PassportLocalErrorMessages = {};
errorMessages.MissingPasswordError = 'No password was given';
errorMessages.AttemptTooSoonError = 'Account is currently locked. Try again later';
errorMessages.TooManyAttemptsError = 'Account locked due to too many failed login attempts';
errorMessages.NoSaltValueStoredError = 'Authentication not possible. No salt value stored';
errorMessages.IncorrectPasswordError = 'Password or username are incorrect';
errorMessages.IncorrectUsernameError = 'Password or username are incorrect';
errorMessages.MissingUsernameError = 'No username was given';
errorMessages.UserExistsError = 'A user with the given username is already registered';

options.errorMessages = errorMessages;

UserSchema.plugin(passportLocalMongoose, options);

interface UserModel<T extends Document> extends PassportLocalModel<T> {}

let UserModel: UserModel<User> = model<User>('User', UserSchema);
//#endregion


//#region Test Passport/Passport-Local
passport.use(UserModel.createStrategy());

passport.use('login', new LocalStrategy({
        passReqToCallback: true,
        usernameField: 'username',
        passwordField: 'password'
    },
    (req: any, username: string, password: string, done: (err: any, res: any, msg?: any) => void) => {
        process.nextTick(() => {
            UserModel
            .findOne({ 'username': username })
            .exec((err: any, user: User) => {
                if (err) {
                    console.log(err);
                    return done(err, null);
                }

                if (!user) {
                    console.log(errorMessages.IncorrectUsernameError);
                    return done(null, false, errorMessages.IncorrectUsernameError);
                }

                user.authenticate(password, function(autherr: any, authuser: User, autherrmsg: any) {
                    if (autherr) {
                        console.log(autherr);
                        return done(autherr, null);
                    }

                    if (!authuser) {
                        console.log(errorMessages.IncorrectPasswordError);
                        return done(null, false, errorMessages.IncorrectPasswordError);
                    }

                    return done(null, authuser);
                });
            });
        });
    })
);

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

let router: Router = Router();

router.post('/login', passport.authenticate('local'), function(req: Request, res: Response) {
  res.redirect('/');
});
//#endregion
