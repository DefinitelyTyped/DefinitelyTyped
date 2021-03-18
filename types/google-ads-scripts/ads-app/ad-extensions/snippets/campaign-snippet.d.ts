// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./snippet.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignSnippet extends Snippet {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignSnippetIterator extends Base.Iterator<CampaignSnippet> {}

        interface CampaignSnippetSelector
            extends Base.Selector<CampaignSnippetIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
