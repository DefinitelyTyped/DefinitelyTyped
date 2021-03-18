// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./sitelink.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignSitelink extends Sitelink {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignSitelinkIterator extends Base.Iterator<CampaignSitelink> {}

        interface CampaignSitelinkSelector
            extends Base.Selector<CampaignSitelinkIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
