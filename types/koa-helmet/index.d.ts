// Type definitions for koa-helmet 6.0
// Project: https://github.com/venables/koa-helmet#readme
// Definitions by: Nick Simmons <https://github.com/nsimmons>
//                 Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import helmet = require('helmet');
import { Middleware, Context } from 'koa';

type HelmetOptions = Required<Parameters<typeof helmet>>[0];

declare namespace koaHelmet {
    type KoaHelmetContentSecurityPolicyDirectiveFunction = (ctx: Context) => string;

    type KoaHelmetCspDirectiveValue = string | KoaHelmetContentSecurityPolicyDirectiveFunction;

    interface KoaHelmetContentSecurityPolicyDirectives {
        baseUri?: KoaHelmetCspDirectiveValue[];
        childSrc?: KoaHelmetCspDirectiveValue[];
        connectSrc?: KoaHelmetCspDirectiveValue[];
        defaultSrc?: KoaHelmetCspDirectiveValue[];
        fontSrc?: KoaHelmetCspDirectiveValue[];
        formAction?: KoaHelmetCspDirectiveValue[];
        frameAncestors?: KoaHelmetCspDirectiveValue[];
        frameSrc?: KoaHelmetCspDirectiveValue[];
        imgSrc?: KoaHelmetCspDirectiveValue[];
        mediaSrc?: KoaHelmetCspDirectiveValue[];
        objectSrc?: KoaHelmetCspDirectiveValue[];
        pluginTypes?: KoaHelmetCspDirectiveValue[];
        reportUri?: string;
        sandbox?: KoaHelmetCspDirectiveValue[];
        scriptSrc?: KoaHelmetCspDirectiveValue[];
        styleSrc?: KoaHelmetCspDirectiveValue[];
    }

    interface KoaHelmetContentSecurityPolicyConfiguration {
        reportOnly?: boolean;
        directives?: KoaHelmetContentSecurityPolicyDirectives;
    }

    interface KoaHelmet {
        (options?: HelmetOptions): Middleware;
        contentSecurityPolicy(options?: KoaHelmetContentSecurityPolicyConfiguration): Middleware;
        dnsPrefetchControl(options?: HelmetOptions['dnsPrefetchControl']): Middleware;
        expectCt(options?: HelmetOptions['expectCt']): Middleware;
        frameguard(options?: HelmetOptions['frameguard']): Middleware;
        hidePoweredBy(options?: HelmetOptions['hidePoweredBy']): Middleware;
        hsts(options?: HelmetOptions['hsts']): Middleware;
        ieNoOpen(options?: HelmetOptions['ieNoOpen']): Middleware;
        noSniff(options?: HelmetOptions['noSniff']): Middleware;
        permittedCrossDomainPolicies(options?: HelmetOptions['permittedCrossDomainPolicies']): Middleware;
        referrerPolicy(options?: HelmetOptions['referrerPolicy']): Middleware;
        xssFilter(options?: HelmetOptions['xssFilter']): Middleware;
    }
}

declare const koaHelmet: koaHelmet.KoaHelmet;
export = koaHelmet;
