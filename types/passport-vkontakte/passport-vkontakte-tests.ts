import * as passport from 'passport';
import vk = require('passport-vkontakte');

const User = {
    findOrCreate(
        id: string,
        provider: string,
        callback: (err: any, user: any) => void
    ): void {
        callback(null, { username: 'ivan' });
    }
};

const options: vk.StrategyOptions = {
    clientID: 'PASSPORT_VKONTAKTE_CLIENT_ID',
    clientSecret: 'PASSPORT_VKONTAKTE_CLIENT_SECRET',
    callbackURL: 'PASSPORT_VKONTAKTE_CALLBACK_URL'
};

const verify: vk.VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: vk.Profile,
    done: vk.VerifyCallback
) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

const verifyWithParams: vk.VerifyFunctionWithParams = (
    accessToken: string,
    refreshToken: string,
    params: vk.Params,
    profile: vk.Profile,
    done: vk.VerifyCallback
) => {
    User.findOrCreate(profile.id, profile.provider, (err, user) => {
        if (err) {
            done(err);
        }
        done(null, user);
    });
};

passport.use(new vk.Strategy(options, verify));
passport.use(new vk.Strategy(options, verifyWithParams));
