/// <reference types="passport" />
"use strict";

import * as passport from "passport";
import { ExtractJwt, JwtFromRequestFunction, Strategy as JwtStrategy, StrategyOptions } from "passport-jwt";

let opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: "secret",
    issuer: "accounts.example.com",
    audience: "example.org",
};

passport.use(
    JwtStrategy.name,
    new JwtStrategy(opts, function (jwt_payload, done) {
        findUser({ id: jwt_payload.sub }, function (err, user) {
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
    })
);

const jwtFromTokenInRequest: JwtFromRequestFunction<{ token: string }> = (req: { token: string }) => {
    return req.token;
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
]);
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.jwtFromRequest = (req: Request) => {
    return req.headers.get("token") as string;
};
opts.secretOrKey = new Buffer("secret");
opts.secretOrKeyProvider = (request, rawJwtToken, done) => done(null, new Buffer("secret"));
opts.audience = ["example1.org", "example2.org"];

class UserModel {}

declare global {
    namespace Express {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface User extends UserModel {}
    }
}
declare function findUser(condition: { id: string }, callback: (error: any, user: UserModel) => void): void;
