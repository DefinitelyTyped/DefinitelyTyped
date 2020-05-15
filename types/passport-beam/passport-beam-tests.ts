/**
 * Created by AtlasDev on 4/10/2016.
 */
import * as passport from 'passport';
import { Strategy } from 'passport-beam';

var User = {
    findOrCreate(id:string, provider:string, callback:(err:Error, user:any) => void): void {
        callback(null, { username: 'Dany' });
    }
}

passport.use(new Strategy({
        clientID: process.env.BEAM_CLIENT_ID,
        clientSecret: process.env.BEAM_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/beam/callback"
    }, (accessToken:string, refreshToken:string, profile:Strategy.Profile, done:(error:any, user?:any) => void) => {
        User.findOrCreate(profile.id, profile.provider, (err, user) => {
            if (err) { return done(err); }
            done(null, user);
        });
    })
);
