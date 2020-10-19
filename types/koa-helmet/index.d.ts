// Type definitions for koa-helmet 6.0
// Project: https://github.com/venables/koa-helmet#readme
// Definitions by: Nick Simmons <https://github.com/me>
//                 Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import helmet = require('helmet');
import { Middleware, Context } from 'koa';

type HelmetOptions = Required<Parameters<typeof helmet>>[0];

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
        (options?: HelmetOptions): Middleware;
        contentSecurityPolicy(options?: KoaHelmetContentSecurityPolicyConfiguration): Middleware;
        dnsPrefetchControl(options?: HelmetOptions['dnsPrefetchControl']): Middleware;
        frameguard(options?: HelmetOptions['frameguard']): Middleware;
        hsts(options?: HelmetOptions['hsts']): Middleware;
        ieNoOpen(): Middleware;
        noCache(options?: any): Middleware;
        noSniff(): Middleware;
        referrerPolicy(options?: HelmetOptions['referrerPolicy']): Middleware;
        xssFilter(options?: HelmetOptions['xssFilter']): Middleware;
        hidePoweredBy(options?: HelmetOptions['hidePoweredBy']): Middleware;
        permittedCrossDomainPolicies(options?: HelmetOptions['permittedCrossDomainPolicies']): Middleware;
        featurePolicy(options: KoaHelmetFeaturePolicyConfiguration): Middleware;
        expectCt(options?: HelmetOptions['expectCt']): Middleware;
    }
}

declare const koaHelmet: koaHelmet.KoaHelmet;
export = koaHelmet;
