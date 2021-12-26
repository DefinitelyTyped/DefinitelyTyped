declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Placement in a Video Campaign. */
        interface ExcludedVideoPlacement {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoPlacement". */
            getEntityType(): string;
            /** Returns the ID of the excluded video placement. */
            getId(): number;
            /** Returns the URL of the excluded placement. */
            getUrl(): string;
            /** Returns the ad group to which this excluded video placement belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video placement belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video placement. */
            remove(): void;
        }

        /**
         * An iterator of excluded video placements.
         *
         * Typical usage:
         *
         *      while (excludedVideoPlacementIterator.hasNext()) {
         *        var excludedVideoPlacement = excludedVideoPlacementIterator.next();
         *      }
         */
        interface ExcludedVideoPlacementIterator extends Base.Iterator<ExcludedVideoPlacement> {}

        /** An operation representing creation of a new excluded video placement. */
        interface ExcludedVideoPlacementOperation extends Base.Operation<ExcludedVideoPlacement> {}

        /**
         * Fetches excluded video placements. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoPlacementSelector = AdsApp.videoTargeting()
         *          .excludedVideoPlacements()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoPlacementIterator = excludedVideoPlacementSelector.get();
         *      while (excludedVideoPlacementIterator.hasNext()) {
         *        var excludedVideoPlacement = excludedVideoPlacementIterator.next();
         *      }
         */
        interface ExcludedVideoPlacementSelector
            extends Base.Selector<ExcludedVideoPlacementIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
