// Type definitions for @tizentv/tizen-tv-webapis 1.0
// Project: https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references.html
// Definitions by: SejoongDeJang <https://github.com/SejoongDeJang>
//                 Dongkeun Nam <https://github.com/capscrom>
//                 Woosik Park <https://github.com/pwsses>
//                 Dayoung Kim <https://github.com/darangkim>
//                 Hyojin Kim <https://github.com/prozanne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./adinfo.d.ts" />
/// <reference path="./lib/appcommon.d.ts" />
/// <reference path="./lib/avinfo.d.ts" />
/// <reference path="./lib/avplay.d.ts" />
/// <reference path="./lib/avplaystore.d.ts" />
/// <reference path="./lib/billing.d.ts" />
/// <reference path="./lib/network.d.ts" />
/// <reference path="./lib/productinfo.d.ts" />
/// <reference path="./lib/sso.d.ts" />
/// <reference path="./lib/tvinfo.d.ts" />
/// <reference path="./lib/widgetdata.d.ts" />
/// <reference path="./lib/webapis.d.ts" />

declare const webapis: Webapis;

declare global {
    const webapis: Webapis;
    interface Window {
        webapis: Webapis;
    }
}

interface Webapis {
    adinfo: AdInfoManager;
    appcommon: AppCommonManager;
    avplay: AVPlayManager;
    avinfo: AVInfoManager;
    avplaystore: AVPlayStoreManager;
    billing: BillingManager;
    network: NetworkManager;
    productinfo: ProductInfoManager;
    sso: SsoManager;
    tvinfo: TvInfoManager;
    widgetdata: WidgetDataManager;
    WebAPIException: WebAPIException;
}

export = webapis;
export as namespace webapis;
