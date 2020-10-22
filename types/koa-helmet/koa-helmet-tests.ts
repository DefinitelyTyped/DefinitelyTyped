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
    app.use(helmet({ frameguard: { action: 'SAMEORIGIN' } }));
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
    };

    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.contentSecurityPolicy({}));
    app.use(helmet.contentSecurityPolicy(config));
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
            },
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
        }),
    );

    app.use(
        helmet.hsts({
            maxAge: 7776000000,
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
    app.use(helmet.xssFilter(false));
}

/**
 * @summary Test for {@see helmet#hidePoweredBy} function.
 */
function hidePoweredByTest() {
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hidePoweredBy(false));
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
 * @summary Test for {@see helmet#expectCt} function.
 */
function expectCtTest() {
    app.use(helmet.expectCt());
    app.use(helmet.expectCt({}));
    app.use(helmet.expectCt({ maxAge: 123 }));
    app.use(helmet.expectCt({ maxAge: 123, enforce: false }));
    app.use(helmet.expectCt({ maxAge: 123, enforce: true, reportUri: 'https://example.com/report' }));
}
