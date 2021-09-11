declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Parental Status criterion in a Video Campaign. */
        interface VideoParentalStatus extends Base.StatsFor {
            /** Provides access to bidding fields of this video parental status. */
            bidding(): VideoCriterionBidding;
            /** Excludes this video parental status from the ad group. */
            exclude(): void;
            /** Returns the type of this entity as a String, in this case, "VideoParentalStatus". */
            getEntityType(): string;
            /** Returns the ID of the video parental status. */
            getId(): number;
            /** Returns the parental status type. */
            getParentType(): string;
            /** Returns the ad group to which this video parental status belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video parental status belongs. */
            getVideoCampaign(): VideoCampaign;
        }

        /**
         * Builder for VideoParentalStatus objects.
         *
         * Example usage:
         *
         *  var videoParentalStatusBuilder = videoAdGroup.videoTargeting().newParentalStatusBuilder();
         *  var videoParentalStatusOperation = videoParentalStatusBuilder
         *    .withParentType('PARENT_PARENT')     // required
         *    .build();                            // create the parental status
         */
        interface VideoParentalStatusBuilder extends Base.Builder<VideoParentalStatusOperation> {
            /** Builds the excluded video parental status. */
            exclude(): ExcludedVideoParentalStatusOperation;
            /** Sets the parental status type. */
            withParentType(parentalStatus: string): this;
        }

        /**
         * An iterator of video parental statuses.
         *
         * Typical usage:
         *
         *      while (videoParentalStatusIterator.hasNext()) {
         *        var videoParentalStatus = videoParentalStatusIterator.next();
         *      }
         */
        interface VideoParentalStatusIterator extends Base.Iterator<VideoParentalStatus> {}

        /** An operation representing creation of a new video parental status. */
        interface VideoParentalStatusOperation extends Base.Operation<VideoParentalStatus> {}

        /**
         * Fetches video parental statuses. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var parentalStatusSelector = AdsApp.videoTargeting()
         *          .parentalStatuses()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var parentalStatusIterator = parentalStatusSelector.get();
         *      while (parentalStatusIterator.hasNext()) {
         *        var parentalStatus = parentalStatusIterator.next();
         *      }
         */
        interface VideoParentalStatusSelector
            extends Base.Selector<VideoParentalStatusIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
