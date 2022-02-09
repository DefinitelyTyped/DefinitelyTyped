declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface ExcludedVideoTopic {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoTopic". */
            getEntityType(): string;
            /** Returns the ID of the excluded video topic. */
            getId(): number;
            /** Returns the topic ID of the excluded topic. */
            getTopicId(): number;
            /** Returns the ad group to which this excluded video topic belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video topic belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video topic. */
            remove(): void;
        }

        /**
         * An iterator of excluded video topics.
         *
         * Typical usage:
         *
         *      while (excludedVideoTopicIterator.hasNext()) {
         *        var excludedVideoTopic = excludedVideoTopicIterator.next();
         *      }
         */
        interface ExcludedVideoTopicIterator extends Base.Iterator<ExcludedVideoTopic> {}

        /** An operation representing creation of a new excluded video topic. */
        interface ExcludedVideoTopicOperation extends Base.Operation<ExcludedVideoTopic> {}

        /**
         * Fetches excluded video topics. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoTopicSelector = AdsApp.videoTargeting()
         *          .excludedVideoTopics()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoTopicIterator = excludedVideoTopicSelector.get();
         *      while (excludedVideoTopicIterator.hasNext()) {
         *        var excludedVideoTopic = excludedVideoTopicIterator.next();
         *      }
         */
        interface ExcludedVideoTopicSelector
            extends Base.Selector<ExcludedVideoTopicIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
