declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Age criterion in a Video Campaign. */
        interface ExcludedVideoAge {
            /** Returns the age range. */
            getAgeRange(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoAge". */
            getEntityType(): string;
            /** Returns the ID of the excluded video age. */
            getId(): number;
            /** Returns the ad group to which this excluded video age belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video age belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Enable this excluded video age in the ad group. */
            include(): void;
        }

        /**
         * An iterator of excluded video ages.
         *
         * Typical usage:
         *
         *      while (excludedVideoAgeIterator.hasNext()) {
         *        var excludedVideoAge = excludedVideoAgeIterator.next();
         *      }
         */
        interface ExcludedVideoAgeIterator extends Base.Iterator<ExcludedVideoAge> {}

        /** An operation representing creation of a new excluded video age. */
        interface ExcludedVideoAgeOperation extends Base.Operation<ExcludedVideoAge> {}

        /**
         * Fetches excluded video ages. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoAgeSelector = AdsApp.videoTargeting()
         *          .excludedVideoAges()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoAgeIterator = excludedVideoAgeSelector.get();
         *      while (excludedVideoAgeIterator.hasNext()) {
         *        var excludedVideoAge = excludedVideoAgeIterator.next();
         *      }
         */
        interface ExcludedVideoAgeSelector
            extends Base.Selector<ExcludedVideoAgeIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
