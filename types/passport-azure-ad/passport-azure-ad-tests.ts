import { Request } from "express";
import {
    BearerStrategy,
    OIDCStrategy,
    IBearerStrategyOptionWithRequest,
    IOIDCStrategyOptionWithRequest,
    VerifyBearerFunctionWithReq,
    VerifyOIDCFunctionWithReq,
    IProfile,
    VerifyCallback
} from "passport-azure-ad";

const bearerStrategyOptions: IBearerStrategyOptionWithRequest = {
    identityMetadata: "https://api.test.com",
    clientID: "XXXXX",
    passReqToCallback: true
};

const oidcStrategyOptions: IOIDCStrategyOptionWithRequest = {
    identityMetadata: "https://api.test.com",
    clientID: "XXXXX",
    passReqToCallback: true,
    responseType: "id_token",
    responseMode: "query",
    redirectUrl: "https://api.test.com"
};

const verifyBearer: VerifyBearerFunctionWithReq = (req, token, done) => {
    if (!token.oid)
        done(null, token);
    else done(new Error("Invalid token"));
};

const verifyOidc: VerifyOIDCFunctionWithReq = (req: Request, profile: IProfile, done: VerifyCallback) => {
    if (!profile.oid)
        done(null, profile);
    else done(new Error("Invalid token"));
};

new BearerStrategy(bearerStrategyOptions, verifyBearer);

new OIDCStrategy(oidcStrategyOptions, verifyOidc);
