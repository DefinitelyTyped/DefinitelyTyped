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
    app.use(helmet.xssFilter({ setOnOldIE: true }));
}

/**
 * @summary Test for {@see helmet#csp} function
 */

function contentSecurityPolicyTest() {
    
    // taken directly from helmet-csp docs
    const config = {
        // Specify directives as normal.
        directives: {
            defaultSrc: ["'self'", 'default.com'],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ['style.com'],
            imgSrc: ['img.com', 'data:'],
            sandbox: ['allow-forms', 'allow-scripts'],
            reportUri: '/report-violation',

            objectSrc: ["'self'"], // An empty array allows nothing through
        },

        // Set to true if you only want browsers to report errors, not block them
        reportOnly: false,

        // Set to true if you want to blindly set all headers: Content-Security-Policy,
        // X-WebKit-CSP, and X-Content-Security-Policy.
        setAllHeaders: false,

        // Set to true if you want to disable CSP on Android where it can be buggy.
        disableAndroid: false
    }
    app.use(helmet.csp());
    app.use(helmet.contentSecurityPolicy(config));
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
