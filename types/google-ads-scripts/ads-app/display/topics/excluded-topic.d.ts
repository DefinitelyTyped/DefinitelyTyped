declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded topic. */
        interface ExcludedTopic {
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
            /** Returns the topic ID of the excluded topic. */
            getTopicId(): number;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * An iterator of excluded topics.
         *
         * Typical usage:
         *
         *      while (excludedTopicIterator.hasNext()) {
         *        var excludedTopic = excludedTopicIterator.next();
         *      }
         */
        interface ExcludedTopicIterator extends Base.Iterator<ExcludedTopic> {}

        /** An operation representing creation of a new excluded topic. */
        interface ExcludedTopicOperation extends Base.Operation<ExcludedTopic> {}

        /**
         * Fetches excluded topics. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var adGroup = AdsApp.adGroups().get().next();
         *      var excludedTopicSelector = adGroup.display().excludedTopics();
         *
         *      var excludedTopicIterator = excludedTopicSelector.get();
         *      while (excludedTopicIterator.hasNext()) {
         *        var excludedTopic = excludedTopicIterator.next();
         *      }
         */
        interface ExcludedTopicSelector
            extends Base.Selector<ExcludedTopicIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
