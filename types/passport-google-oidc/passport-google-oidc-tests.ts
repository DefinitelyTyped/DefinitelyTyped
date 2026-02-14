import { Request } from "express";
import GoogleOidcStrategy from "passport-google-oidc";
import { Profile, VerifyCallback } from "passport-openidconnect";

const opts: GoogleOidcStrategy.StrategyOptions = {
    clientID: "dummy",
    clientSecret: "secret",
    callbackURL: "https://example.com/callback",
};

function testVerifyFunc3(i: string, p: Profile, cb: VerifyCallback) {
    cb(new Error("Not implemented"));
}

function testVerifyFunc4(i: string, p: Profile, ctx: object, cb: VerifyCallback) {
    cb(new Error("Not Implemented"));
}
function testVerifyFunc5(i: string, p: Profile, ctx: object, _idToken: string | object, cb: VerifyCallback) {
    cb(new Error("Not implemented"));
}

function testVerifyFunc7(
    i: string,
    p: Profile,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFunc8(
    i: string,
    p: Profile,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    _params: any,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFunc9(
    i: string,
    uiProfile: object,
    idProfile: object,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    _params: any,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFuncReq4(r: Request, i: string, p: Profile, cb: VerifyCallback) {
    cb(new Error("Not implemented"));
}

function testVerifyFuncReq5(r: Request, i: string, p: Profile, ctx: object, cb: VerifyCallback) {
    cb(new Error("Not Implemented"));
}
function testVerifyFuncReq6(
    r: Request,
    i: string,
    p: Profile,
    ctx: object,
    _idToken: string | object,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFuncReq8(
    r: Request,
    i: string,
    p: Profile,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFuncReq9(
    r: Request,
    i: string,
    p: Profile,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    _params: any,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

function testVerifyFuncReq10(
    r: Request,
    i: string,
    uiProfile: object,
    idProfile: object,
    ctx: object,
    _idToken: string | object,
    _accessToken: string | object,
    _refreshToken: string | object,
    _params: any,
    cb: VerifyCallback,
) {
    cb(new Error("Not implemented"));
}

let strat: GoogleOidcStrategy = new GoogleOidcStrategy(opts, testVerifyFunc3);
strat = new GoogleOidcStrategy(opts, testVerifyFunc4);
strat = new GoogleOidcStrategy(opts, testVerifyFunc5);
strat = new GoogleOidcStrategy(opts, testVerifyFunc7);
strat = new GoogleOidcStrategy(opts, testVerifyFunc8);
strat = new GoogleOidcStrategy(opts, testVerifyFunc9);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq4);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq5);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq6);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq8);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq9);
strat = new GoogleOidcStrategy(opts, testVerifyFuncReq10);
