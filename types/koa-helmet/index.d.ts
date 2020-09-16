// Type definitions for koa-helmet 5.2
// Project: https://github.com/venables/koa-helmet#readme
// Definitions by: Nick Simmons <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
    IHelmetConfiguration,
    IHelmetFrameguardConfiguration,
    IHelmetHstsConfiguration,
    IHelmetXssFilterConfiguration,
    IHelmetDnsPrefetchControlConfiguration,
    IHelmetHpkpConfiguration,
    IHelmetReferrerPolicyConfiguration,
    IHelmetHidePoweredByConfiguration,
    IHelmetPermittedCrossDomainPoliciesConfiguration,
    IHelmetExpectCtConfiguration,
} from 'helmet';
import { Middleware, Context } from 'koa';

declare namespace koaHelmet {
    type KoaHelmetContentSecurityPolicyDirectiveFunction = (ctx: Context) => string;

    type KoaHelmetCspDirectiveValue = string | KoaHelmetContentSecurityPolicyDirectiveFunction;

    type KoaHelmetFeaturePolicyDirectiveValue = string;

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

    interface KoaHelmetFeaturePolicyDirectives {
        accelerometer?: KoaHelmetFeaturePolicyDirectiveValue[];
        ambientLightSensor?: KoaHelmetFeaturePolicyDirectiveValue[];
        autoplay?: KoaHelmetFeaturePolicyDirectiveValue[];
        camera?: KoaHelmetFeaturePolicyDirectiveValue[];
        documentDomain?: KoaHelmetFeaturePolicyDirectiveValue[];
        documentWrite?: KoaHelmetFeaturePolicyDirectiveValue[];
        encryptedMedia?: KoaHelmetFeaturePolicyDirectiveValue[];
        fontDisplayLateSwap?: KoaHelmetFeaturePolicyDirectiveValue[];
        fullscreen?: KoaHelmetFeaturePolicyDirectiveValue[];
        geolocation?: KoaHelmetFeaturePolicyDirectiveValue[];
        gyroscope?: KoaHelmetFeaturePolicyDirectiveValue[];
        layoutAnimations?: KoaHelmetFeaturePolicyDirectiveValue[];
        legacyImageFormats?: KoaHelmetFeaturePolicyDirectiveValue[];
        loadingFrameDefaultEager?: KoaHelmetFeaturePolicyDirectiveValue[];
        magnetometer?: KoaHelmetFeaturePolicyDirectiveValue[];
        microphone?: KoaHelmetFeaturePolicyDirectiveValue[];
        midi?: KoaHelmetFeaturePolicyDirectiveValue[];
        oversizedImages?: KoaHelmetFeaturePolicyDirectiveValue[];
        payment?: KoaHelmetFeaturePolicyDirectiveValue[];
        pictureInPicture?: KoaHelmetFeaturePolicyDirectiveValue[];
        serial?: KoaHelmetFeaturePolicyDirectiveValue[];
        speaker?: KoaHelmetFeaturePolicyDirectiveValue[];
        syncScript?: KoaHelmetFeaturePolicyDirectiveValue[];
        syncXhr?: KoaHelmetFeaturePolicyDirectiveValue[];
        unoptimizedImages?: KoaHelmetFeaturePolicyDirectiveValue[];
        unoptimizedLosslessImages?: KoaHelmetFeaturePolicyDirectiveValue[];
        unoptimizedLossyImages?: KoaHelmetFeaturePolicyDirectiveValue[];
        unsizedMedia?: KoaHelmetFeaturePolicyDirectiveValue[];
        usb?: KoaHelmetFeaturePolicyDirectiveValue[];
        verticalScroll?: KoaHelmetFeaturePolicyDirectiveValue[];
        vibrate?: KoaHelmetFeaturePolicyDirectiveValue[];
        vr?: KoaHelmetFeaturePolicyDirectiveValue[];
        wakeLock?: KoaHelmetFeaturePolicyDirectiveValue[];
        xr?: KoaHelmetFeaturePolicyDirectiveValue[];
    }

    interface KoaHelmetFeaturePolicyConfiguration {
        features: KoaHelmetFeaturePolicyDirectives;
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
        hidePoweredBy(options?: IHelmetHidePoweredByConfiguration): Middleware;
        permittedCrossDomainPolicies(options?: IHelmetPermittedCrossDomainPoliciesConfiguration): Middleware;
        featurePolicy(options: KoaHelmetFeaturePolicyConfiguration): Middleware;
        expectCt(options?: IHelmetExpectCtConfiguration): Middleware;
    }
}

declare const koaHelmet: koaHelmet.KoaHelmet;
export = koaHelmet;
