import { Request } from "express";
import {
    BearerStrategy,
    IBearerStrategyOptionWithRequest,
    IOIDCStrategyOptionWithoutRequest,
    IOIDCStrategyOptionWithRequest,
    IProfile,
    ITokenPayload,
    OIDCStrategy,
    VerifyBearerFunctionWithReq,
    VerifyCallback,
    VerifyOIDCFunction,
    VerifyOIDCFunctionWithReq,
} from "passport-azure-ad";

const bearerStrategyOptions: IBearerStrategyOptionWithRequest = {
    identityMetadata: "https://api.test.com",
    clientID: "XXXXX",
    passReqToCallback: true,
    proxy: {
        protocol: "http",
        host: "proxy.test.com",
        port: "8080",
    },
};

const oidcStrategyOptions: IOIDCStrategyOptionWithRequest = {
    identityMetadata: "https://api.test.com",
    clientID: "XXXXX",
    passReqToCallback: true,
    responseType: "id_token",
    responseMode: "query",
    redirectUrl: "https://api.test.com",
};

const oidcStrategyOptionWithoutRequest: IOIDCStrategyOptionWithoutRequest = {
    identityMetadata: "https://api.test.com",
    clientID: "XXXXX",
    passReqToCallback: false,
    responseType: "id_token",
    responseMode: "query",
    redirectUrl: "https://api.test.com",
};

const verifyBearer: VerifyBearerFunctionWithReq = (req, token, done) => {
    if (!token.oid) {
        done(null, token);
    } else done(new Error("Invalid token"));
};

const verifyOidc: VerifyOIDCFunctionWithReq = (req: Request, profile: IProfile, done: VerifyCallback) => {
    if (!profile.oid) {
        done(null, profile);
    } else done(new Error("Invalid token"));
};

const verifyOidcWithoutReq: VerifyOIDCFunction = (profile: IProfile, done: VerifyCallback) => {
    if (!profile.oid) {
        done(null, profile);
    } else done(new Error("Invalid token"));
};

new BearerStrategy(bearerStrategyOptions, verifyBearer);

new OIDCStrategy(oidcStrategyOptions, verifyOidc);

new OIDCStrategy(oidcStrategyOptionWithoutRequest, verifyOidcWithoutReq);

const tokenPayloadV2: ITokenPayload = {
    aud: "test-aud",
    iss: "test-iss",
    idp: "test-idp",
    iat: 1,
    nbf: 2,
    exp: 3,
    aio: "test-aio",
    acr: "0" as "0" | "1",
    amr: [""],
    appid: "test-appid",
    azp: "test-azp",
    appidacr: "0" as "0" | "1" | "2",
    azpacr: "0" as "0" | "1" | "2",
    preferred_username: "test-username",
    name: "test-name",
    scp: "test-scp",
    roles: ["test-role"],
    groups: ["group1"],
    hasgroups: true,
    sub: "test-sub",
    oid: "test-oid",
    tid: "test-tid",
    unique_name: "test-unique-name",
    uti: "test-uti",
    rh: "test-rh",
    ver: "2.0",
};

const tokenPayloadV1: ITokenPayload = {
    ipaddr: "127.0.0.1",
    onprem_sid: "test-sid",
    pwd_exp: 1234,
    pwd_url: "test-url",
    in_corp: "no",
    nickname: "test-nickname",
    family_name: "test-family-name",
    given_name: "test-given-name",
    upn: "test-upn",
    ver: "1.0",
};
