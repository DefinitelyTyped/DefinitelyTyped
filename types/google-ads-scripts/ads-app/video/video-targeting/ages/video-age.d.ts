declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Age criterion in a Video Campaign. */
        interface VideoAge extends Base.StatsFor {
            /** Provides access to bidding fields of this video age. */
            bidding(): VideoCriterionBidding;
            /** Excludes this video age from the ad group. */
            exclude(): void;
            /** Returns the age range. */
            getAgeRange(): string;
            /** Returns the type of this entity as a String, in this case, "VideoAge". */
            getEntityType(): string;
            /** Returns the ID of the video age. */
            getId(): number;
            /** Returns the ad group to which this video age belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video age belongs. */
            getVideoCampaign(): VideoCampaign;
        }

        /**
         * Builder for VideoAge objects.
         *
         * Example usage:
         *
         *      var videoAgeBuilder = videoAdGroup.videoTargeting().newAgeBuilder();
         *      var videoAgeOperation = videoAgeBuilder
         *        .withAgeRange('AGE_RANGE_25_34')     // required
         *        .build();                            // create the age
         */
        interface VideoAgeBuilder extends Base.Builder<VideoAgeOperation> {
            /** Builds the excluded video age. */
            exclude(): ExcludedVideoAgeOperation;
            /** Sets the age range. */
            withAgeRange(ageRange: string): this;
        }

        /**
         * An iterator of video ages.
         *
         * Typical usage:
         *
         *      while (videoAgeIterator.hasNext()) {
         *        var videoAge = videoAgeIterator.next();
         *      }
         */
        interface VideoAgeIterator extends Base.Iterator<VideoAge> {}

        /** An operation representing creation of a new video age. */
        interface VideoAgeOperation extends Base.Operation<VideoAge> {}

        /**
         * Fetches video ages. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var ageSelector = AdsApp.videoTargeting()
         *          .ages()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var ageIterator = ageSelector.get();
         *      while (ageIterator.hasNext()) {
         *        var age = ageIterator.next();
         *      }
         */
        interface VideoAgeSelector
            extends Base.Selector<VideoAgeIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
