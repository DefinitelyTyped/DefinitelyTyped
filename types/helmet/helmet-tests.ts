

import express = require("express")
import helmet = require("helmet");

var app = express();

/**
 * @summary Test for {@see helmet}.
 */
function helmetTest() {
    app.use(helmet());
    app.use(helmet({}));
    app.use(helmet({ frameguard: false }));
    app.use(helmet({ frameguard: true }));
    app.use(helmet({
      frameguard: {
        action: 'deny'
      }
    }));
    app.use(helmet({
      featurePolicy: {
        features: {
          fullscreen: ["'self'"],
          vibrate: ["'none'"],
          payment: ['example.com'],
          syncXhr: ["'none'"]
        }
      }
    }))
}

/**
 * @summary Test for {@see helmet#contentSecurityPolicy} function.
 */
function contentSecurityPolicyTest() {
    const emptyArray: string[] =  [];
    const config: helmet.IHelmetContentSecurityPolicyConfiguration = {
        directives: {
            baseUri: ['base.example.com'],
            blockAllMixedContent: true,
            childSrc: ['child.example.com'],
            connectSrc: ['connect.example.com'],
            defaultSrc: ['*'],
            fontSrc: ['font.example.com'],
            formAction: ['formaction.example.com'],
            frameAncestors: ["'none'"],
            frameSrc: emptyArray,
            imgSrc: ['images.example.com'],
            mediaSrc: ['media.example.com'],
            manifestSrc: ['manifest.example.com'],
            objectSrc: ['objects.example.com'],
            pluginTypes: emptyArray,
            prefetchSrc: ['prefetch.example.com'],
            reportUri: '/some-url',
            reportTo: 'report.example.com',
            requireSriFor: emptyArray,
            sandbox: ['allow-presentation'],
            scriptSrc: ['scripts.example.com', function (req: express.Request, res: express.Response) {
              return "'nonce-abc123'";
            }],
            styleSrc: ['css.example.com'],
            upgradeInsecureRequests: true,
            workerSrc: ['worker.example.com']
        },
        reportOnly: false,
        setAllHeaders: false,
        disableAndroid: false
    };

    function reportUriCb(req: express.Request, res: express.Response) { return '/some-uri'; }
    function reportOnlyCb(req: express.Request, res: express.Response) { return false; }

    app.use(helmet.contentSecurityPolicy());
    app.use(helmet.contentSecurityPolicy({}));
    app.use(helmet.contentSecurityPolicy(config));
    app.use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            reportUri: reportUriCb,
            'report-uri': reportUriCb,
            reportTo: reportUriCb,
            'report-to': reportUriCb
        },
        reportOnly: reportOnlyCb,
        loose: false,
        setAllHeaders: true
    }));
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
    app.use(helmet.frameguard({
      action: 'allow-from',
      domain: 'http://example.com'
    }));
}

/**
 * @summary Test for {@see helmet#hidePoweredBy} function.
 */
function hidePoweredBy() {
    app.use(helmet.hidePoweredBy());
    app.use(helmet.hidePoweredBy({}));
    app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
}

/**
 * @summary Test for {@see helmet#hpkp} function.
 */
function hpkpTest() {
    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
    }));

    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        includeSubDomains: false
    }));

    // Deprecated: Use includeSubDomains instead. (Uppercase "D")
    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        includeSubdomains: false
    }));

    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        includeSubDomains: true
    }));

    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        reportUri: 'http://example.com'
    }));

    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        reportOnly: true
    }));

    app.use(helmet.hpkp({
        maxAge: 7776000000,
        sha256s: ['AbCdEf123=', 'ZyXwVu456='],
        setIf: function (req, res) { return true; }
    }));
}

/**
 * @summary Test for {@see helmet#hsts} function.
 */
function hstsTest() {
    app.use(helmet.hsts());

    app.use(helmet.hsts({ maxAge: 7776000000 }));

    app.use(helmet.hsts({
      maxAge: 7776000000,
    }));

    app.use(helmet.hsts({
      maxAge: 7776000000,
      includeSubDomains: true
    }));

    // Deprecated: Use includeSubDomains instead. (Uppercase "D")
    app.use(helmet.hsts({
      maxAge: 7776000000,
      includeSubdomains: true
    }));

    app.use(helmet.hsts({
      maxAge: 7776000000,
      preload: true
    }));

    app.use(helmet.hsts({
      maxAge: 7776000000,
      force: true
    }));

    app.use(helmet.hsts({
      maxAge: 7776000000,
      setIf: function (req, res) { return true; }
    }));
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
    app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
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
 * @summary Test for {@see helmet#permittedCrossDomainPolicies} function.
 */
function permittedCrossDomainPoliciesTest() {
    app.use(helmet.permittedCrossDomainPolicies());
    app.use(helmet.permittedCrossDomainPolicies({}));
    app.use(helmet.permittedCrossDomainPolicies({ permittedPolicies: 'none' }));
}

/**
 * @summary Test for {@see helmet#featurePolicy} function.
 */
function featurePolicyTest() {
  app.use(helmet.featurePolicy({
    features: {
      fullscreen: ["'self'"],
      vibrate: ["'none'"],
      payment: ['example.com'],
      syncXhr: ["'none'"]
    }
  }));
}

