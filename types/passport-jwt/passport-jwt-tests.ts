/// <reference types="passport" />
"use strict";

import { Request as ExpressRequest } from "express";
import { FastifyReply } from "fastify";
import * as passport from "passport";
import { ExtractJwt, JwtFromRequestFunction, Strategy as JwtStrategy, StrategyOptions } from "passport-jwt";

// valid case without request in callback
let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromBodyField("jwt"),
    secretOrKey: "secret",
    issuer: "accounts.example.com",
    audience: "example.org",
    algorithms: ["RS256"],
};

passport.use(
    JwtStrategy.name,
    new JwtStrategy(opts, function(jwt_payload, done) {
        findUser({ id: jwt_payload.sub }, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false, { message: "foo" });
                // or you could create a new account
            }
        });
    }),
);

const jwtFromTokenInRequest: JwtFromRequestFunction<{ token: string }> = (req: { token: string }) => {
    return req.token;
};

const jwtFromTokenInRequest2: JwtFromRequestFunction = (req: ExpressRequest) => {
    return req.body.my_token;
};

opts.jwtFromRequest = ExtractJwt.fromHeader("x-api-key");
opts.jwtFromRequest = ExtractJwt.fromBodyField("field_name");
opts.jwtFromRequest = ExtractJwt.fromUrlQueryParameter("param_name");
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("param_name");
opts.jwtFromRequest = ExtractJwt.fromExtractors([
    ExtractJwt.fromHeader("x-api-key"),
    ExtractJwt.fromBodyField("field_name"),
    ExtractJwt.fromUrlQueryParameter("param_name"),
    jwtFromTokenInRequest,
    jwtFromTokenInRequest2,
]);
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.jwtFromRequest = (req: ExpressRequest) => {
    return req.query.token as string;
};
opts.jwtFromRequest = (req: FastifyReply) => {
    return req.getHeader("token") as string;
};
opts.secretOrKey = Buffer.from("secret");
opts.audience = ["example1.org", "example2.org"];

class UserModel {}
declare function findUser(condition: { id: string }, callback: (error: any, user: UserModel) => void): void;

// Invalid algorithm
let invalidOptsAlg: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "test",
    // @ts-expect-error
    algorithms: ["invalid"],
};

// secretOrKey and secretOrKeyProvider are mutually exclusive
// https://github.com/mikenicholson/passport-jwt/blob/fed94fa005c5b2dcb7e6d5d5372e3b20cae898f1/lib/strategy.js#L37C106-L37C106
// @ts-expect-error
let invalidOpts: StrategyOptions = {
    secretOrKey: "secret",
    secretOrKeyProvider: (request, rawJwtToken, done) => done(null, new Buffer("secret")),
};

// secret or key already defined
// @ts-expect-error
opts.secretOrKeyProvider = (request, rawJwtToken, done) => done(null, new Buffer("secret"));

// valid case with request in callback
let opts2: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret",
    passReqToCallback: true,
};

passport.use(
    JwtStrategy.name,
    new JwtStrategy(opts2, function(req: ExpressRequest, jwt_payload, done) {
        findUser({ id: req.headers["user"] as string }, function(err, user) {
            return done(err, user);
        });
    }),
);

// using request in verify callback, without setting it in opts
let opts3: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret",
};
passport.use(
    JwtStrategy.name,
    // @ts-expect-error
    new JwtStrategy(opts3, function(request: ExpressRequest, jwt_payload: { sub: string }, done) {
        findUser({ id: jwt_payload.sub }, function(err, user) {
            return done(err, user);
        });
    }),
);

// jwtFromRequest is required
// https://github.com/mikenicholson/passport-jwt/blob/fed94fa005c5b2dcb7e6d5d5372e3b20cae898f1/lib/strategy.js#L53
// @ts-expect-error
let invalid: StrategyOptions = {
    secretOrKey: "secret",
};

// secret or key is required
// https://github.com/mikenicholson/passport-jwt/blob/fed94fa005c5b2dcb7e6d5d5372e3b20cae898f1/lib/strategy.js#L44
// @ts-expect-error
let invalid: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
