/// <reference path="./index.d.ts" />

/**
 * Created by AtlasDev on 4/10/2016.
 * Based on typings from passport-facebook by jcabresos.
 */
import passport = require('passport');
import beam = require('passport-beam');

var User = {
    findOrCreate(id:string, provider:string, callback:(err:any, user:any) => void): void {
        callback(null, { username: 'Dany' });
    }
}

passport.use(new beam.Strategy({
		clientID: BEAM_CLIENT_ID,
		clientSecret: BEAM_CLIENT_SECRET,
		callbackURL: "http://127.0.0.1:3000/auth/beam/callback"
    },
    function(accessToken:string, refreshToken:string, profile:beam.Profile, done:(error:any, user?:any) => void) {
		User.findOrCreate(profile.id, profile.provider, function(err, user) {
			if (err) { return done(err); }
			done(null, user);
		});
    })
);
