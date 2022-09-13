declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded placement. */
        interface ExcludedPlacement {
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this audience belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the audience. */
            getId(): number;
            /** Returns the URL of the excluded placement. */
            getUrl(): string;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * An iterator of excluded placements.
         *
         * Typical usage:
         *
         *      while (excludedPlacementIterator.hasNext()) {
         *        var excludedPlacement = excludedPlacementIterator.next();
         *      }
         */
        interface ExcludedPlacementIterator extends Base.Iterator<ExcludedPlacement> {}

        /** An operation representing creation of a new excluded placement. */
        interface ExcludedPlacementOperation extends Base.Operation<ExcludedPlacement> {}

        /**
         * Fetches excluded placements. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adGroup = AdsApp.adGroups().get().next();
         *      var excludedPlacementSelector = adGroup.display().excludedPlacements();
         *
         *      var excludedPlacementIterator = excludedPlacementSelector.get();
         *      while (excludedPlacementIterator.hasNext()) {
         *        var excludedPlacement = excludedPlacementIterator.next();
         *      }
         */
        interface ExcludedPlacementSelector
            extends Base.Selector<ExcludedPlacementIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
