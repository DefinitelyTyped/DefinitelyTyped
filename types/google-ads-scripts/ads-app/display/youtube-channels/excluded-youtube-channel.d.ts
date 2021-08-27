declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded YouTube Channel. */
        interface ExcludedYouTubeChannel {
            /** Returns the ad group to which this excluded YouTube channel belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this excluded YouTube channel belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this excluded YouTube channel belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excluded YouTube channel belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the excluded YouTube channel ID. */
            getChannelId(): string;
            /** Returns the ID of the excluded YouTube channel. */
            getId(): number;
            /** Removes the excluded YouTube channel. */
            remove(): void;
        }

        /**
         * An iterator of excluded YouTube channels.
         *
         * Typical usage:
         *
         *      while (excludedYouTubeChannelIterator.hasNext()) {
         *        var excludedYouTubeChannel = excludedYouTubeChannelIterator.next();
         *      }
         */
        interface ExcludedYouTubeChannelIterator extends Base.Iterator<ExcludedYouTubeChannel> {}

        /** An operation representing creation of a new excluded YouTube channel. */
        interface ExcludedYouTubeChannelOperation extends Base.Operation<ExcludedYouTubeChannel> {}

        /**
         * Fetches excluded YouTube channels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedYouTubeChannelSelector = AdsApp.display()
         *          .excludedYouTubeChannels()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedYouTubeChannelIterator = excludedYouTubeChannelSelector.get();
         *      while (excludedYouTubeChannelIterator.hasNext()) {
         *        var excludedYouTubeChannel = excludedYouTubeChannelIterator.next();
         *      }
         */
        interface ExcludedYouTubeChannelSelector
            extends Base.Selector<ExcludedYouTubeChannelIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
