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
function xssFilterTest() {
    app.use(helmet.xssFilter());
    app.use(helmet.xssFilter({}));
    app.use(helmet.xssFilter({ setOnOldIE: false }));
    app.use(helmet.xssFilter({ setOnOldIE: true }));
}

/**
 * @summary Test for {@see helmet#csp} function.
 */

function contentSecurityPolicyTest() {
    const emptyArray: string[] =  [];
    const config = {
        directives: {
            baseUri: ['base.example.com'],
            childSrc: ['child.example.com'],
            connectSrc: ['connect.example.com'],
            defaultSrc: ['*'],
            fontSrc: ['font.example.com'],
            formAction: ['formaction.example.com'],
            frameAncestors: ["'none'"],
            frameSrc: emptyArray,
            imgSrc: ['images.example.com'],
            mediaSrc: ['media.example.com'],
            objectSrc: ['objects.example.com'],
            pluginTypes: emptyArray,
            reportUri: '/some-url',
            sandbox: emptyArray,
            scriptSrc: ['scripts.example.com', function (req: express.Request, res: express.Response) {
              return "'nonce-abc123'";
            }],
            styleSrc: ['css.example.com']
        },
        reportOnly: false,
        setAllHeaders: false,
        disableAndroid: false
    };

    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.contentSecurityPolicy({}));
    app.use(helmet.contentSecurityPolicy(config));
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"]
        },
        setAllHeaders: true
    }));

    app.use(helmet.csp());
    app.use(helmet.csp({}));
    app.use(helmet.csp(config));
    app.use(helmet.csp({
        directives: {
            defaultSrc: ["'self'"]
        },
        setAllHeaders: true
    }));
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
