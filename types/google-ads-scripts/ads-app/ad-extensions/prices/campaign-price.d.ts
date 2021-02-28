// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./price.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignPrice extends Price {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignPriceIterator extends Base.Iterator<CampaignPrice> {}

        interface CampaignPriceSelector
            extends Base.Selector<CampaignPriceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
