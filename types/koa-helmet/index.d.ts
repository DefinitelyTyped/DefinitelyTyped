// Type definitions for koa-helmet 3.1
// Project: https://github.com/venables/koa-helmet#readme
// Definitions by: Nick Simmons <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    IHelmetConfiguration,
    IHelmetFrameguardConfiguration,
    IHelmetHstsConfiguration,
    IHelmetXssFilterConfiguration,
    IHelmetDnsPrefetchControlConfiguration,
    IHelmetHpkpConfiguration,
    IHelmetReferrerPolicyConfiguration } from 'helmet';
import {Middleware, Context} from 'koa';

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
        setAllHeaders?: boolean;
        disableAndroid?: boolean;
        browserSniff?: boolean;
        directives?: KoaHelmetContentSecurityPolicyDirectives;
    }

    interface KoaHelmet {
        (options?: IHelmetConfiguration): Middleware;
        contentSecurityPolicy(options?: KoaHelmetContentSecurityPolicyConfiguration): Middleware;
        dnsPrefetchControl(options?: IHelmetDnsPrefetchControlConfiguration): Middleware;
        frameguard(options?: IHelmetFrameguardConfiguration): Middleware;
        hpkp(options?: IHelmetHpkpConfiguration): Middleware;
        hsts(options?: IHelmetHstsConfiguration): Middleware;
        ieNoOpen(): Middleware;
        noCache(options?: any): Middleware;
        noSniff(): Middleware;
        referrerPolicy(options?: IHelmetReferrerPolicyConfiguration): Middleware;
        xssFilter(options?: IHelmetXssFilterConfiguration): Middleware;
    }
}

declare const koaHelmet: koaHelmet.KoaHelmet;
export = koaHelmet;
