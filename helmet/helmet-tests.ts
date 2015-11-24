/// <reference path="helmet.d.ts" />

import helmet = require("helmet");

/**
 * @summary Test for {@see helmet}.
 */
function helmetTest() {
    helmet();
}

/**
 * @summary Test for {@see helmet#xssFilter} function.
 */
function contentSecurityPolicyTest() {
    helmet.xssFilter();
    helmet.xssFilter({ setOnOldIE: true });
}

/**
 * @summary Test for {@see helmet#frameguard} function.
 */
function frameguardTest() {
    helmet.frameguard();
    helmet.frameguard("sameorigin");
}

/**
 * @summary Test for {@see helmet#hsts} function.
 */
function hstsTest() {
    helmet.hsts();
    helmet.hsts({ maxAge: 7776000000 });
}

/**
 * @summary Test for {@see helmet#ieNoOpen} function.
 */
function ieNoOpenTest() {
    helmet.ieNoOpen();
}

/**
 * @summary Test for {@see helmet#noSniff} function.
 */
function noSniffTest() {
    helmet.noSniff();
}

/**
 * @summary Test for {@see helmet#publicKeyPins} function.
 */
function publicKeyPinsTest() {
    helmet.publicKeyPins({
        sha256s: ["AbCdEf123=", "ZyXwVu456="],
        includeSubdomains: true,
        reportUri: "http://example.com"
    });
}
