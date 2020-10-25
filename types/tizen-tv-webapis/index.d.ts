// Type definitions for tizen-tv-webapis 1.0
// Project: https://developer.samsung.com/smarttv/develop/api-references/samsung-product-api-references.html
// Definitions by: SejoongDeJang <https://github.com/SejoongDeJang>
//                 Dongkeun Nam <https://github.com/capscrom>
//                 Woosik Park <https://github.com/pwsses>
//                 Dayoung Kim <https://github.com/darangkim>
//                 Hyojin Kim <https://github.com/prozanne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./adinfo.d.ts" />
/// <reference path="./appcommon.d.ts" />
/// <reference path="./avinfo.d.ts" />
/// <reference path="./avplay.d.ts" />
/// <reference path="./avplaystore.d.ts" />
/// <reference path="./billing.d.ts" />
/// <reference path="./network.d.ts" />
/// <reference path="./productinfo.d.ts" />
/// <reference path="./sso.d.ts" />
/// <reference path="./tvinfo.d.ts" />
/// <reference path="./widgetdata.d.ts" />
/// <reference path="./webapis.d.ts" />

import { AdInfoManager } from './adinfo';
import { AppCommonManager } from './appcommon';
import { AVPlayManager } from './avplay';
import { AVInfoManager } from './avinfo';
import { AVPlayStoreManager } from './avplaystore';
import { BillingManager } from './billing';
import { NetworkManager } from './network';
import { ProductInfoManager } from './productinfo';
import { SsoManager } from './sso';
import { TvInfoManager } from './tvinfo';
import { WidgetDataManager } from './widgetdata';
import { WebAPIException } from './webapis';

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
