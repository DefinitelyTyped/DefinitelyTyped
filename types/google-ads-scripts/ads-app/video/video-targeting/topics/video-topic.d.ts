declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Topic in a Video Campaign. */
        interface VideoTopic extends Base.StatsFor {
            /** Provides access to bidding fields of this video topic. */
            bidding(): VideoCriterionBidding;
            /** Returns the type of this entity as a String, in this case, "VideoTopic". */
            getEntityType(): string;
            /** Returns the ID of the video topic. */
            getId(): number;
            /** Returns the topic ID of the topic. */
            getTopicId(): number;
            /** Returns the ad group to which this video topic belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video topic belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video topic is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video topic is paused. */
            isPaused(): boolean;
            /** Removes the video topic. */
            remove(): void;
        }

        /**
         * Builder for VideoTopic objects.
         *
         * Example usage:
         *
         *      var videoTopicBuilder = videoAdGroup.videoTargeting().newTopicBuilder();
         *      var videoTopicOperation = videoTopicBuilder
         *        .withTopicId(3)     // required
         *        .build();           // create the topic
         */
        interface VideoTopicBuilder extends Base.Builder<VideoTopicOperation> {
            /** Builds the excluded video topic. */
            exclude(): ExcludedVideoTopicOperation;
            /** Sets the topic ID of the topic. */
            withTopicId(topicId: number): this;
        }

        /**
         * An iterator of video topics.
         *
         * Typical usage:
         *
         *      while (videoTopicIterator.hasNext()) {
         *        var videoTopic = videoTopicIterator.next();
         *      }
         */
        interface VideoTopicIterator extends Base.Iterator<VideoTopic> {}

        /** An operation representing creation of a new video topic. */
        interface VideoTopicOperation extends Base.Operation<VideoTopic> {}

        /**
         * Fetches video topics. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var topicSelector = AdsApp.videoTargeting()
         *          .topics()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var topicIterator = topicSelector.get();
         *      while (topicIterator.hasNext()) {
         *        var topic = topicIterator.next();
         *      }
         */
        interface VideoTopicSelector
            extends Base.Selector<VideoTopicIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
