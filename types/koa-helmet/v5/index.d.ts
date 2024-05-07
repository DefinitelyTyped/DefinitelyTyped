import {
    IHelmetConfiguration,
    IHelmetDnsPrefetchControlConfiguration,
    IHelmetExpectCtConfiguration,
    IHelmetFrameguardConfiguration,
    IHelmetHidePoweredByConfiguration,
    IHelmetHpkpConfiguration,
    IHelmetHstsConfiguration,
    IHelmetPermittedCrossDomainPoliciesConfiguration,
    IHelmetReferrerPolicyConfiguration,
    IHelmetXssFilterConfiguration,
} from "helmet";
import { Context, Middleware } from "koa";

declare namespace koaHelmet {
    type KoaHelmetContentSecurityPolicyDirectiveFunction = (ctx: Context) => string;

    type KoaHelmetCspDirectiveValue = string | KoaHelmetContentSecurityPolicyDirectiveFunction;

    type KoaHelmetFeaturePolicyDirectiveValue = string;

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

    interface KoaHelmetFeaturePolicyDirectives {
        accelerometer?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        ambientLightSensor?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        autoplay?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        camera?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        documentDomain?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        documentWrite?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        encryptedMedia?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        fontDisplayLateSwap?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        fullscreen?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        geolocation?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        gyroscope?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        layoutAnimations?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        legacyImageFormats?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        loadingFrameDefaultEager?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        magnetometer?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        microphone?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        midi?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        oversizedImages?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        payment?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        pictureInPicture?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        serial?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        speaker?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        syncScript?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        syncXhr?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        unoptimizedImages?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        unoptimizedLosslessImages?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        unoptimizedLossyImages?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        unsizedMedia?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        usb?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        verticalScroll?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        vibrate?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        vr?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        wakeLock?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
        xr?: KoaHelmetFeaturePolicyDirectiveValue[] | undefined;
    }

    interface KoaHelmetFeaturePolicyConfiguration {
        features: KoaHelmetFeaturePolicyDirectives;
    }

    interface KoaHelmetContentSecurityPolicyConfiguration {
        reportOnly?: boolean | undefined;
        setAllHeaders?: boolean | undefined;
        disableAndroid?: boolean | undefined;
        browserSniff?: boolean | undefined;
        directives?: KoaHelmetContentSecurityPolicyDirectives | undefined;
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
