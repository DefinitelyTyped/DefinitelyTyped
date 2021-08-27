declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads YouTube Channel. */
        interface YouTubeChannel extends Base.StatsFor {
            /** Provides access to this YouTube channel's bidding fields. */
            bidding(): DisplayCriterionBidding;
            /** Returns the ad group to which this YouTube channel belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this YouTube channel belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this YouTube channel belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this YouTube channel belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the YouTube channel ID. */
            getChannelId(): string;
            /** Returns the type of this entity as a String, in this case, "YouTubeChannel". */
            getEntityType(): string;
            /** Returns the ID of the YouTube channel. */
            getId(): number;
            /** Returns true if the YouTube channel is enabled. */
            isEnabled(): boolean;
            /** Returns true if the YouTube channel is managed. */
            isManaged(): boolean;
            /** Returns true if the YouTube channel is paused. */
            isPaused(): boolean;
            /** Removes the YouTube channel. */
            remove(): void;
        }

        /**
         * Builder for YouTubeChannel objects.
         *
         * Example usage:
         *
         *      var youTubeChannelBuilder = adGroup.display().newYouTubeChannelBuilder();
         *      var youTubeChannelOperation = youTubeChannelBuilder
         *        .withChannelId('UCqVDpXKLmKeBU_yyt_QkItQ')    // required
         *        .build();                                     // create the YouTube channel
         */
        interface YouTubeChannelBuilder extends Base.Builder<YouTubeChannelOperation> {
            /** Builds the excluded YouTube channel. */
            exclude(): ExcludedYouTubeChannelOperation;
            /** Sets the YouTube channel ID. */
            withChannelId(channelId: string): this;
            /** Sets the max CPC bid of the new YouTube channel to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new YouTube channel to the specified value. */
            withCpm(cpm: number): this;
        }

        /**
         * An iterator of YouTube channels.
         *
         * Typical usage:
         *
         *      while (youTubeChannelIterator.hasNext()) {
         *        var youTubeChannel = youTubeChannelIterator.next();
         *      }
         */
        interface YouTubeChannelIterator extends Base.Iterator<YouTubeChannel> {}

        /** An operation representing creation of a new YouTube channel. */
        interface YouTubeChannelOperation extends Base.Operation<YouTubeChannel> {}

        /**
         * Fetches YouTube channels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var youTubeChannelSelector = AdsApp.display()
         *          .youTubeChannels()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var youTubeChannelIterator = youTubeChannelSelector.get();
         *      while (youTubeChannelIterator.hasNext()) {
         *        var youTubeChannel = youTubeChannelIterator.next();
         *      }
         */
        interface YouTubeChannelSelector
            extends Base.Selector<YouTubeChannelIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
