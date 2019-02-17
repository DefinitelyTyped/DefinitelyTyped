import * as express from "express";
import { Profile, Strategy as SlackStrategy } from "passport-slack";

new SlackStrategy(
    {
        callbackURL: "callbackurl",
        clientID: "clientid",
        clientSecret: "clientsecret",
        passReqToCallback: true,
        scope: ["identity.basic"],
        skipUserProfile: false
    },
    (
        req: express.Request,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: (error: any, user?: any) => void
    ) => {}
);
