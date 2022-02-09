declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Gender criterion in a Video Campaign. */
        interface ExcludedVideoGender {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoGender". */
            getEntityType(): string;
            /** Returns the gender type. */
            getGenderType(): string;
            /** Returns the ID of the excluded video gender. */
            getId(): number;
            /** Returns the ad group to which this excluded video gender belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video gender belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Enable this excluded video gender in the ad group. */
            include(): void;
        }

        /**
         * An iterator of excluded video genders.
         *
         * Typical usage:
         *
         *      while (excludedVideoGenderIterator.hasNext()) {
         *        var excludedVideoGender = excludedVideoGenderIterator.next();
         *      }
         */
        interface ExcludedVideoGenderIterator extends Base.Iterator<ExcludedVideoGender> {}

        /** An operation representing creation of a new excluded video gender. */
        interface ExcludedVideoGenderOperation extends Base.Operation<ExcludedVideoGender> {}

        /**
         * Fetches excluded video genders. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoGenderSelector = AdsApp.videoTargeting()
         *          .excludedVideoGenders()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoGenderIterator = excludedVideoGenderSelector.get();
         *      while (excludedVideoGenderIterator.hasNext()) {
         *        var excludedVideoGender = excludedVideoGenderIterator.next();
         *      }
         */
        interface ExcludedVideoGenderSelector
            extends Base.Selector<ExcludedVideoGenderIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
