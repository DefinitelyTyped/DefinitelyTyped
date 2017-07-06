
/// <reference types="passport" />
'use strict';

import {Strategy as JwtStrategy, ExtractJwt, StrategyOptions} from 'passport-jwt';
import {Request} from 'express';
import * as passport from 'passport';

let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'secret',
    issuer: "accounts.example.com",
    audience: "example.org"
};

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    findUser({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false, {message: 'foo'});
            // or you could create a new account
        }
    });
}));

opts.jwtFromRequest = ExtractJwt.fromHeader('x-api-key');
opts.jwtFromRequest = ExtractJwt.fromBodyField('field_name');
opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('param_name');
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('param_name');
opts.jwtFromRequest = ExtractJwt.fromExtractors([ExtractJwt.fromHeader('x-api-key'), ExtractJwt.fromBodyField('field_name'), ExtractJwt.fromUrlQueryParameter('param_name')]);
opts.jwtFromRequest = (req: Request) => { return req.query.token; };

declare function findUser(condition: {id: string}, callback: (error: any, user :any) => void): void;
