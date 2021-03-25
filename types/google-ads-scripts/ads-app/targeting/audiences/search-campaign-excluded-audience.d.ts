// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="../../ad-groups/ad-group.d.ts" />
/// <reference path="../../campaigns/campaign.d.ts" />
/// <reference path="../../shopping/campaigns/shopping-campaign.d.ts" />
/// <reference path="./search-audience-bidding.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded audience configured for search campaigns. */
        interface SearchCampaignExcludedAudience {
            /** Returns the audience ID of the excluded audience. */
            getAudienceId(): number;
            /** Returns the base campaign to which this excluded audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excluded audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the excluded audience. */
            getId(): number;
            /** Returns the name of the audience. */
            getName(): string;
            /** Removes the excluded audience. */
            remove(): void;
        }

        /**
         * An iterator of excluded audiences.
         *
         * Typical usage:
         *
         *      while (excludedAudienceIterator.hasNext()) {
         *        var excludedAudience = excludedAudienceIterator.next();
         *      }
         */
        interface SearchCampaignExcludedAudienceIterator extends Base.Iterator<SearchCampaignExcludedAudience> {}

        /** An operation representing creation of a new excluded audience. */
        interface SearchCampaignExcludedAudienceOperation extends Base.Operation<SearchCampaignExcludedAudience> {}

        /**
         * Fetches excluded audiences. Supports filtering and sorting.
         * 
         * Typical usage:
         * 
         *      var campaign = AdsApp.campaigns().get().next();
         *      var excludedAudienceSelector = campaign.targeting().excludedAudiences();
         * 
         *      var excludedAudienceIterator = excludedAudienceSelector.get();
         *      while (excludedAudienceIterator.hasNext()) {
         *        var excludedAudience = excludedAudienceIterator.next();
         *      }
         */
        interface SearchCampaignExcludedAudienceSelector
            extends Base.Selector<SearchCampaignExcludedAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
