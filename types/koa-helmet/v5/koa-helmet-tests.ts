import Koa = require('koa');
import helmet = require('koa-helmet');

const app = new Koa();

/**
 * @summary Test for {@see helmet}.
 */
function helmetTest() {
    app.use(helmet());
    app.use(helmet({}));
    app.use(helmet({ frameguard: false }));
    app.use(helmet({ frameguard: true }));
    app.use(
        helmet({
            frameguard: {
                action: 'deny',
            },
        }),
    );
}

/**
 * @summary Test for {@see helmet#contentSecurityPolicy} function.
 */
function contentSecurityPolicyTest() {
    const emptyArray: string[] = [];
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
            scriptSrc: [
                'scripts.example.com',
                (ctx: Koa.Context) => {
                    return "'nonce-abc123'";
                },
            ],
            styleSrc: ['css.example.com'],
        },
        reportOnly: false,
        setAllHeaders: false,
        disableAndroid: false,
    };

    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.contentSecurityPolicy({}));
    app.use(helmet.contentSecurityPolicy(config));
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
            },
            setAllHeaders: true,
        }),
    );
}

/**
 * @summary Test for {@see helmet#dnsPrefetchControl} function.
 */
function dnsPrefetchControlTest() {
    app.use(helmet.dnsPrefetchControl());
    app.use(helmet.dnsPrefetchControl({ allow: false }));
    app.use(helmet.dnsPrefetchControl({ allow: true }));
}

/**
 * @summary Test for {@see helmet#frameguard} function.
 */
function frameguardTest() {
    app.use(helmet.frameguard());
    app.use(helmet.frameguard({}));
    app.use(helmet.frameguard({ action: 'deny' }));
    app.use(helmet.frameguard({ action: 'sameorigin' }));
    app.use(
        helmet.frameguard({
            action: 'allow-from',
            domain: 'http://example.com',
        }),
    );
}

/**
 * @summary Test for {@see helmet#hpkp} function.
 */
function hpkpTest() {
    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        }),
    );

    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
            includeSubDomains: false,
        }),
    );

    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
            includeSubDomains: true,
        }),
    );

    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
            reportUri: 'http://example.com',
        }),
    );

    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
            reportOnly: true,
        }),
    );

    app.use(
        helmet.hpkp({
            maxAge: 7776000000,
            sha256s: ['AbCdEf123=', 'ZyXwVu456='],
            setIf: (req, res) => true,
        }),
    );
}

/**
 * @summary Test for {@see helmet#hsts} function.
 */
function hstsTest() {
    app.use(helmet.hsts());

    app.use(helmet.hsts({ maxAge: 7776000000 }));

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
        }),
    );

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
            includeSubDomains: true,
        }),
    );

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
            preload: true,
        }),
    );

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
            force: true,
        }),
    );

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
            setIf: (req, res) => true,
        }),
    );
}

/**
 * @summary Test for {@see helmet#ieNoOpen} function.
 */
function ieNoOpenTest() {
    app.use(helmet.ieNoOpen());
}

/**
 * @summary Test for {@see helmet#noCache} function.
 */
function noCacheTest() {
    app.use(helmet.noCache());
    app.use(helmet.noCache({}));
    app.use(helmet.noCache({ noEtag: true }));
}

/**
 * @summary Test for {@see helmet#noSniff} function.
 */
function noSniffTest() {
    app.use(helmet.noSniff());
}

/**
 * @summary Test for {@see helmet#referrerPolicy} function.
 */
function referrerPolicyTest() {
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
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
 * @summary Test for {@see helmet#hidePoweredBy} function.
 */
function hidePoweredByTest() {
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hidePoweredBy({}));
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
}

/**
 * @summary Test for {@see helmet#permittedCrossDomainPolicies} function.
 */
function permittedCrossDomainPoliciesTest() {
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.permittedCrossDomainPolicies({}));
    app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'none' }));
    app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'master-only' }));
    app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'by-content-type' }));
    app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'all' }));
}

/**
 * @summary Test for {@see helmet#featurePolicy} function.
 */
function featurePolicyTest() {
    const features = {
        accelerometer: ["'none'"],
        ambientLightSensor: ["'none'"],
        autoplay: ["'none'"],
        camera: ["'none'"],
        documentDomain: ["'none'"],
        documentWrite: ["'self'"],
        encryptedMedia: ["'none'"],
        fontDisplayLateSwap: ["'none'"],
        fullscreen: ["'none'"],
        geolocation: ["'none'"],
        gyroscope: ["'none'"],
        layoutAnimations: ["'none'"],
        legacyImageFormats: ["'none'"],
        loadingFrameDefaultEager: ["'none'"],
        magnetometer: ["'none'"],
        microphone: ["'none'"],
        midi: ["'none'"],
        oversizedImages: ["'none'"],
        payment: ["'none'"],
        pictureInPicture: ["'none'"],
        serial: ["'none'"],
        speaker: ["'none'"],
        syncScript: ["'none'"],
        syncXhr: ["'none'"],
        unoptimizedImages: ["'none'"],
        unoptimizedLosslessImages: ["'none'"],
        unoptimizedLossyImages: ["'none'"],
        unsizedMedia: ["'none'"],
        usb: ["'none'"],
        verticalScroll: ["'none'"],
        vibrate: ["'none'"],
        vr: ["'none'"],
        wakeLock: ["'none'"],
        xr: ["'none'"],
    };
    app.use(helmet.featurePolicy({ features: {} }));
    app.use(helmet.featurePolicy({ features }));
}

/**
 * @summary Test for {@see helmet#expectCt} function.
 */
function expectCtTest() {
    app.use(helmet.expectCt());
    app.use(helmet.expectCt({}));
    app.use(helmet.expectCt({ maxAge: 123 }));
    app.use(helmet.expectCt({ maxAge: 123, enforce: false }));
    app.use(helmet.expectCt({ maxAge: 123, enforce: true, reportUri: 'https://example.com/report' }));
}
