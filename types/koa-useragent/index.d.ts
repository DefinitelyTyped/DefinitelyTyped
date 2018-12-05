// Type definitions for koa-useragent 1.2
// Project: https://github.com/rvboris/koa-useragent
// Definitions by: Boris Ryabov <https://github.com/rvboris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Koa = require("koa");

declare namespace UserAgent {
    interface UserAgent {
        isAuthoritative: boolean;
        isMobile: boolean;
        isTablet: boolean;
        isiPad: boolean;
        isiPod: boolean;
        isiPhone: boolean;
        isAndroid: boolean;
        isBlackberry: boolean;
        isOpera: boolean;
        isIE: boolean;
        isEdge: boolean;
        isIECompatibilityMode: boolean;
        isSafari: boolean;
        isFirefox: boolean;
        isWebkit: boolean;
        isChrome: boolean;
        isKonqueror: boolean;
        isOmniWeb: boolean;
        isSeaMonkey: boolean;
        isFlock: boolean;
        isAmaya: boolean;
        isPhantomJS: boolean;
        isEpiphany: boolean;
        isDesktop: boolean;
        isWindows: boolean;
        isLinux: boolean;
        isLinux64: boolean;
        isMac: boolean;
        isChromeOS: boolean;
        isBada: boolean;
        isSamsung: boolean;
        isRaspberry: boolean;
        isBot: boolean;
        isCurl: boolean;
        isAndroidTablet: boolean;
        isWinJs: boolean;
        isKindleFire: boolean;
        isSilk: boolean;
        isCaptive: boolean;
        isSmartTV: boolean;
        isUC: boolean;
        isElectron: boolean;
        isFacebook: boolean;
        isAlamoFire: boolean;
        silkAccelerated: boolean;
        browser: string;
        version: string;
        os: string;
        platform: string;
        geoIp: object;
        electronVersion: string;
        source: string;
    }

    const UserAgent: Koa.Middleware;
}

declare module "koa" {
    interface Context {
        userAgent: UserAgent.UserAgent;
    }
}

export = UserAgent.UserAgent;
