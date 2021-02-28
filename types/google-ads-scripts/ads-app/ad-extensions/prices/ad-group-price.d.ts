// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./price.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AdGroupPrice extends Price {
            getAdGroup(): AdGroup;
            getBaseAdGroup(): AdGroup;
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface AdGroupPriceIterator extends Base.Iterator<AdGroupPrice> {}

        interface AdGroupPriceSelector
            extends Base.Selector<AdGroupPriceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
