import {
    AuthorizationError,
    InternalOAuthError,
    Profile,
    SessionStore,
    SessionStoreCallback,
    SessionStoreContext,
    SessionVerifyCallback,
    StrategyOptions,
    TokenError,
    VerifyCallback,
} from "passport-openidconnect";
import OpenIDConnectStrategy = require("passport-openidconnect");
import { Request } from "express";

const opts: StrategyOptions = {
    authorizationURL: "https://example.com/auth",
    callbackURL: "https://example.com/callback",
    clientID: "dummy",
    clientSecret: "secret",
    issuer: "https://example.com/issuer",
    tokenURL: "https://example.com/token",
    userInfoURL: "https://example.com/userinfo",
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

let strat: OpenIDConnectStrategy = new OpenIDConnectStrategy(opts, testVerifyFunc3);
strat = new OpenIDConnectStrategy(opts, testVerifyFunc4);
strat = new OpenIDConnectStrategy(opts, testVerifyFunc5);
strat = new OpenIDConnectStrategy(opts, testVerifyFunc7);
strat = new OpenIDConnectStrategy(opts, testVerifyFunc8);
strat = new OpenIDConnectStrategy(opts, testVerifyFunc9);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq4);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq5);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq6);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq8);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq9);
strat = new OpenIDConnectStrategy(opts, testVerifyFuncReq10);

const authErr1 = new AuthorizationError("Description", "invalid_request");
const authErr2 = new AuthorizationError("Description", "invalid_request", undefined);
const authErr3 = new AuthorizationError("Description", "invalid_request", undefined, 500);
const authErr4 = new AuthorizationError("Description", "invalid_request", "some_random_uri", 500);

const tokenErr1 = new TokenError("undefined");
const tokenErr2 = new TokenError("undefined", "invalid_request");
const tokenErr3 = new TokenError("undefined", "invalid_request", undefined, 500);
const tokenErr4 = new TokenError("undefined", "invalid_request", "some_random_uri", 500);

const intErr1 = new InternalOAuthError("Hello", new Error("Hello Error"));

class TestStore extends SessionStore {
    store(
        req: Request,
        ctx: SessionStoreContext,
        appState: object | undefined,
        meta: object | undefined,
        cb: SessionStoreCallback,
    ): void {}

    verify(req: Request, reqState: string, cb: SessionVerifyCallback): void {}
}

const testStore = new TestStore({ key: "test" });

const opt2 = { ...opts, store: testStore };

const strat2 = new OpenIDConnectStrategy(opt2, testVerifyFunc3);
