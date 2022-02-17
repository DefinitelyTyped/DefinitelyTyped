// Type definitions for yt-types 1.0.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: peakWay <https://github.com/peakWay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


///<reference path="types/service.d.ts" />
///<reference path="types/module.d.ts" />

interface BaseInfo {
    appId: string;
    serverName: string;
    proxyServerName: string;
    yunServerName: string;
    hosServerName: string;
    appName: string;
    appType: string;
    pltType?: string;
    isDctApp?: string;
    isYTPHAApp?: string;
    version: {
        app_version: string;
        package_version: string;
        yun_version: string;
    };
    yunId: string;
    hosId: string;
    srcId: string;
    prdCode: string;
    theme: string;
    localization?: string;
    ua: {
        clientName: string;
        isMobile?: boolean;
        isWeb?: boolean;
        isiPhone?: boolean;
        isAndroid?: boolean;
        type: string;
        ytAppEnv?: number;
    };
    access_token?: string;
    usId?: number;
    thirdAppId?: number;
    openid?: string;
    openUsId?: string;
    isBind?: boolean;
}

declare var baseInfo: BaseInfo;
declare var routePrefix: string;
declare var publicPrefix: string;
declare var imagePrefix: string;