declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads topic. */
        interface Topic extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): DisplayCriterionBidding;
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
            /** Returns the topic ID of the topic. */
            getTopicId(): number;
            /** Returns true if the audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the audience is paused. */
            isPaused(): boolean;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * Builder for Topic objects.
         *
         * Example usage:
         *
         *      var topicBuilder = adGroup.display().newKeywordBuilder();
         *      var topic = topicBuilder
         *        .withTopicId(3)                 // required
         *        .withCpc(0.50)                  // optional
         *        .build()                        // create the topic
         */
        interface TopicBuilder extends Base.Builder<TopicOperation> {
            /** Builds the excluded topic. */
            exclude(): ExcludedTopicOperation;
            /** Sets the max CPC bid of the new topic to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new topic to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the topic ID of the topic. */
            withTopicId(topicId: number): this;
        }

        /**
         * An iterator of topics.
         *
         * Typical usage:
         *
         *      while (topicIterator.hasNext()) {
         *        var topic = topicIterator.next();
         *      }
         */
        interface TopicIterator extends Base.Iterator<Topic> {}

        /** An operation representing creation of a new topic. */
        interface TopicOperation extends Base.Operation<Topic> {}

        /**
         * Fetches topics. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var topicSelector = AdsApp.display()
         *         .topics()
         *         .withCondition("Impressions > 100")
         *         .forDateRange("LAST_MONTH")
         *         .orderBy("Clicks DESC");
         *
         *     var topicIterator = topicSelector.get();
         *     while (topicIterator.hasNext()) {
         *       var topic = topicIterator.next();
         *     }
         */
        interface TopicSelector
            extends Base.Selector<TopicIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
