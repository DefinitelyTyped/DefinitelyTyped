import helmet = require("helmet");
import { Context, Middleware } from "koa";

type HelmetOptions = Required<Parameters<typeof helmet>>[0];

declare namespace koaHelmet {
    type KoaHelmetContentSecurityPolicyDirectiveFunction = (ctx: Context) => string;

    type KoaHelmetCspDirectiveValue = string | KoaHelmetContentSecurityPolicyDirectiveFunction;

    interface KoaHelmetContentSecurityPolicyDirectives {
        baseUri?: KoaHelmetCspDirectiveValue[] | undefined;
        childSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        connectSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        defaultSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        fontSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        formAction?: KoaHelmetCspDirectiveValue[] | undefined;
        frameAncestors?: KoaHelmetCspDirectiveValue[] | undefined;
        frameSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        imgSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        mediaSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        objectSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        pluginTypes?: KoaHelmetCspDirectiveValue[] | undefined;
        reportUri?: string | undefined;
        sandbox?: KoaHelmetCspDirectiveValue[] | undefined;
        scriptSrc?: KoaHelmetCspDirectiveValue[] | undefined;
        styleSrc?: KoaHelmetCspDirectiveValue[] | undefined;
    }

    interface KoaHelmetContentSecurityPolicyConfiguration {
        reportOnly?: boolean | undefined;
        useDefaults?: boolean | undefined;
        directives?: KoaHelmetContentSecurityPolicyDirectives | undefined;
    }

    interface KoaHelmet {
        (options?: HelmetOptions): Middleware;
        contentSecurityPolicy(options?: KoaHelmetContentSecurityPolicyConfiguration): Middleware;
        dnsPrefetchControl(options?: HelmetOptions["dnsPrefetchControl"]): Middleware;
        expectCt(options?: HelmetOptions["expectCt"]): Middleware;
        frameguard(options?: HelmetOptions["frameguard"]): Middleware;
        hidePoweredBy(options?: HelmetOptions["hidePoweredBy"]): Middleware;
        hsts(options?: HelmetOptions["hsts"]): Middleware;
        ieNoOpen(options?: HelmetOptions["ieNoOpen"]): Middleware;
        noSniff(options?: HelmetOptions["noSniff"]): Middleware;
        permittedCrossDomainPolicies(options?: HelmetOptions["permittedCrossDomainPolicies"]): Middleware;
        referrerPolicy(options?: HelmetOptions["referrerPolicy"]): Middleware;
        xssFilter(options?: HelmetOptions["xssFilter"]): Middleware;
    }
}

declare const koaHelmet: koaHelmet.KoaHelmet;
export = koaHelmet;
