import { Request } from "express";
import AppleStrategy, {
    Strategy,
    AppleAuthorizationParams,
    AuthenticateOptions,
    AuthenticateOptionsWithRequest,
    Profile,
    VerifyCallback,
    VerifyFunction,
    VerifyFunctionWithRequest,
} from "passport-apple";

const authenticateOptions: AuthenticateOptions = {
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
    passReqToCallback: false,
};

const authenticateOptionsWithRequest: AuthenticateOptionsWithRequest = {
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
};

const verifyFunction: VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    idToken: string,
    profile: Profile,
    verifyCallback: VerifyCallback,
) => {
    verifyCallback(new Error("unimplemented"));
};

const VerifyFunctionWithRequest: VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    idToken: string,
    profile: Profile,
    verifyCallback: VerifyCallback,
) => {
    verifyCallback(new Error("unimplemented"));
};

const appleStrategy = new AppleStrategy({
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
    passReqToCallback: false,
}, (accessToken, refreshToken, idToken, profile, cb) => {
    cb(null, {});
});

const appleStrategyWithRequest = new Strategy({
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
}, (req, accessToken, refreshToken, idToken, profile, cb) => {
    cb(null, {});
});

const AppleAuthorizationParams: AppleAuthorizationParams = appleStrategy.authorizationParams({});
