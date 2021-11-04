declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Parental Status criterion in a Video Campaign. */
        interface ExcludedVideoParentalStatus {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoParentalStatus". */
            getEntityType(): string;
            /** Returns the ID of the excluded video parental status. */
            getId(): number;
            /** Returns the parental status type. */
            getParentType(): string;
            /** Returns the ad group to which this excluded video parental status belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video parental status belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Enable this excluded video parental status in the ad group. */
            include(): void;
        }

        /**
         * An iterator of excluded video parental statuses.
         *
         * Typical usage:
         *
         *      while (excludedVideoParentalStatusIterator.hasNext()) {
         *        var excludedVideoParentalStatus = excludedVideoParentalStatusIterator.next();
         *      }
         */
        interface ExcludedVideoParentalStatusIterator extends Base.Iterator<ExcludedVideoParentalStatus> {}

        /** An operation representing creation of a new excluded video parental status. */
        interface ExcludedVideoParentalStatusOperation extends Base.Operation<ExcludedVideoParentalStatus> {}

        /**
         * Fetches excluded video parental statuses. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoParentalStatusSelector = AdsApp.videoTargeting()
         *          .excludedVideoParentalStatuses()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoParentalStatusIterator = excludedVideoParentalStatusSelector.get();
         *      while (excludedVideoParentalStatusIterator.hasNext()) {
         *        var excludedVideoParentalStatus = excludedVideoParentalStatusIterator.next();
         *      }
         */
        interface ExcludedVideoParentalStatusSelector
            extends Base.Selector<ExcludedVideoParentalStatusIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
