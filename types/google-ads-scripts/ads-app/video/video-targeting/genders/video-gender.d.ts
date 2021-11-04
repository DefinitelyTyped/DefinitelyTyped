declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Gender criterion in a Video Campaign. */
        interface VideoGender extends Base.StatsFor {
            /** Provides access to bidding fields of this video gender. */
            bidding(): VideoCriterionBidding;
            /** Excludes this video gender from the ad group. */
            exclude(): void;
            /** Returns the type of this entity as a String, in this case, "VideoGender". */
            getEntityType(): string;
            /** Returns the gender type. */
            getGenderType(): string;
            /** Returns the ID of the video gender. */
            getId(): number;
            /** Returns the ad group to which this video gender belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video gender belongs. */
            getVideoCampaign(): VideoCampaign;
        }

        /**
         * Builder for VideoGender objects.
         *
         * Example usage:
         *
         *      var videoGenderBuilder = videoAdGroup.videoTargeting().newGenderBuilder();
         *      var videoGenderOperation = videoGenderBuilder
         *        .withGenderType('GENDER_FEMALE')     // required
         *        .build();                            // create the gender
         */
        interface VideoGenderBuilder extends Base.Builder<VideoGenderOperation> {
            /** Builds the excluded video gender. */
            exclude(): ExcludedVideoGenderOperation;
            /** Sets the gender type. */
            withGenderType(genderType: string): this;
        }

        /**
         * An iterator of video genders.
         *
         * Typical usage:
         *
         *      while (videoGenderIterator.hasNext()) {
         *        var videoGender = videoGenderIterator.next();
         *      }
         */
        interface VideoGenderIterator extends Base.Iterator<VideoGender> {}

        /** An operation representing creation of a new video gender. */
        interface VideoGenderOperation extends Base.Operation<VideoGender> {}

        /**
         * Fetches video genders. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var genderSelector = AdsApp.videoTargeting()
         *          .genders()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var genderIterator = genderSelector.get();
         *      while (genderIterator.hasNext()) {
         *        var gender = genderIterator.next();
         *      }
         */
        interface VideoGenderSelector
            extends Base.Selector<VideoGenderIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
