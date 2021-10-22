declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads YouTube Channel in a Video Campaign. */
        interface VideoYouTubeChannel extends Base.StatsFor {
            /** Provides access to bidding fields of this video YouTube channel. */
            bidding(): VideoCriterionBidding;
            /** Returns the YouTube channel ID. */
            getChannelId(): string;
            /** Returns the type of this entity as a String, in this case, "VideoYouTubeChannel". */
            getEntityType(): string;
            /** Returns the ID of the video YouTube channel. */
            getId(): number;
            /** Returns the ad group to which this video YouTube channel belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video YouTube channel belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video YouTube channel is enabled. */
            isEnabled(): boolean;
            /** Returns true if the YouTube channel is managed. */
            isManaged(): boolean;
            /** Returns true if the video YouTube channel is paused. */
            isPaused(): boolean;
            /** Removes the video YouTube channel. */
            remove(): void;
        }

        /**
         * Builder for VideoYouTubeChannel objects.
         *
         * Example usage:
         *
         *      var videoYouTubeChannelBuilder = videoAdGroup.videoTargeting().newYouTubeChannelBuilder();
         *      var videoYouTubeChannelOperation = videoYouTubeChannelBuilder
         *        .withChannelId('UCqVDpXKLmKeBU_yyt_QkItQ')    // required
         *        .build();                                     // create the YouTube channel
         */
        interface VideoYouTubeChannelBuilder extends Base.Builder<VideoYouTubeChannelOperation> {
            /** Builds the excluded video YouTube channel. */
            exclude(): ExcludedVideoYouTubeChannelOperation;
            /** Sets the YouTube channel ID. */
            withChannelId(channelId: string): this;
        }

        /**
         * An iterator of video YouTube channels.
         *
         * Typical usage:
         *
         *      while (videoYouTubeChannelIterator.hasNext()) {
         *        var videoYouTubeChannel = videoYouTubeChannelIterator.next();
         *      }
         */
        interface VideoYouTubeChannelIterator extends Base.Iterator<VideoYouTubeChannel> {}

        /** An operation representing creation of a new video YouTube channel. */
        interface VideoYouTubeChannelOperation extends Base.Operation<VideoYouTubeChannel> {}

        /**
         * Fetches video YouTube channels. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var youTubeChannelSelector = AdsApp.videoTargeting()
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
        interface VideoYouTubeChannelSelector
            extends Base.Selector<VideoYouTubeChannelIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
