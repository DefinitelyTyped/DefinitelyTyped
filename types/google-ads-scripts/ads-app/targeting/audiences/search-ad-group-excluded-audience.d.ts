declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded audience configured for search ad groups. */
        interface SearchAdGroupExcludedAudience {
            /** Returns the ad group to which this excluded audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the audience ID of the excluded audience. */
            getAudienceId(): number;
            /** Returns the base ad group to which this excluded audience belongs. */
            getBaseAdGroup(): AdGroup;
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
        interface SearchAdGroupExcludedAudienceIterator extends Base.Iterator<SearchAdGroupExcludedAudience> {}

        /** An operation representing creation of a new excluded audience. */
        interface SearchAdGroupExcludedAudienceOperation extends Base.Operation<SearchAdGroupExcludedAudience> {}

        /**
         * Fetches excluded audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adGroup = AdsApp.adGroups().get().next();
         *      var excludedAudienceSelector = adGroup.targeting().excludedAudiences();
         *
         *      var excludedAudienceIterator = excludedAudienceSelector.get();
         *      while (excludedAudienceIterator.hasNext()) {
         *        var excludedAudience = excludedAudienceIterator.next();
         *      }
         */
        interface SearchAdGroupExcludedAudienceSelector
            extends Base.Selector<SearchAdGroupExcludedAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
