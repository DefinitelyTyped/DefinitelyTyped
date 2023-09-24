import { Request } from "express";
import AppleStrategy, {
    AppleAuthorizationParams,
    AuthenticateOptions,
    AuthenticateOptionsWithRequest,
    DecodedIdToken,
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
};

const authenticateOptionsWithRequest: AuthenticateOptionsWithRequest = {
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
    passReqToCallback: true,
};

const decodedIdToken: DecodedIdToken = { sub: "1" };

const verifyFunction: VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    decodedIdToken: DecodedIdToken,
    profile: Profile,
    verifyCallback: VerifyCallback,
) => {
    verifyCallback(new Error("unimplemented"));
};

const VerifyFunctionWithRequest: VerifyFunctionWithRequest = (
    req: Request,
    accessToken: string,
    refreshToken: string,
    decodedIdToken: DecodedIdToken,
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
}, (accessToken, refreshToken, decodedIdToken, profile, cb) => {
    cb(null, decodedIdToken);
});

const appleStrategyWithRequest = new AppleStrategy({
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyString: "",
    privateKeyLocation: "",
    passReqToCallback: true,
}, (req, accessToken, refreshToken, decodedIdToken, profile, cb) => {
    cb(null, decodedIdToken);
});

const AppleAuthorizationParams: AppleAuthorizationParams = appleStrategy.authorizationParams({});
