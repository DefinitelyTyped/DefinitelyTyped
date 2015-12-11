/// <reference path="helmet.d.ts" />

import express = require("express")
import helmet = require("helmet");

var app = express();

/**
 * @summary Test for {@see helmet}.
 */
function helmetTest() {
    app.use(helmet());
}

/**
 * @summary Test for {@see helmet#xssFilter} function.
 */
function contentSecurityPolicyTest() {
    app.use(helmet.xssFilter());
    app.use(helmet.xssFilter({ setOnOldIE: true }));
}

/**
 * @summary Test for {@see helmet#frameguard} function.
 */
function frameguardTest() {
    app.use(helmet.frameguard());
    app.use(helmet.frameguard("sameorigin"));
}

/**
 * @summary Test for {@see helmet#hsts} function.
 */
function hstsTest() {
    app.use(helmet.hsts());
    app.use(helmet.hsts({ maxAge: 7776000000 }));
}

/**
 * @summary Test for {@see helmet#ieNoOpen} function.
 */
function ieNoOpenTest() {
    app.use(helmet.ieNoOpen());
}

/**
 * @summary Test for {@see helmet#noSniff} function.
 */
function noSniffTest() {
    app.use(helmet.noSniff());
}

/**
 * @summary Test for {@see helmet#publicKeyPins} function.
 */
function publicKeyPinsTest() {
    app.use(helmet.publicKeyPins({
        sha256s: ["AbCdEf123=", "ZyXwVu456="],
        includeSubdomains: true,
        reportUri: "http://example.com"
    }));
}
