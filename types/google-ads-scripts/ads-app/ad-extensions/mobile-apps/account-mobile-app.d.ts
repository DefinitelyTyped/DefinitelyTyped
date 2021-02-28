// Type definitions for Google Ads Scripts 2021-02-27
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./mobile-app.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AccountMobileApp extends MobileApp {}

        interface AccountMobileAppIterator extends Base.Iterator<AccountMobileApp> {}

        interface AccountMobileAppSelector
            extends Base.Selector<AccountMobileAppIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
