declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads YouTube Video in a Video Campaign. */
        interface VideoYouTubeVideo extends Base.StatsFor {
            /** Provides access to bidding fields of this video YouTube video. */
            bidding(): VideoCriterionBidding;
            /** Returns the type of this entity as a String, in this case, "VideoYouTubeVideo". */
            getEntityType(): string;
            /** Returns the ID of the video YouTube video. */
            getId(): number;
            /** Returns the ad group to which this video YouTube video belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video YouTube video belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns the YouTube video ID. */
            getVideoId(): string;
            /** Returns true if the video YouTube video is enabled. */
            isEnabled(): boolean;
            /** Returns true if the YouTube video is managed. */
            isManaged(): boolean;
            /** Returns true if the video YouTube video is paused. */
            isPaused(): boolean;
            /** Removes the video YouTube video. */
            remove(): void;
        }

        /**
         * Builder for VideoYouTubeVideo objects.
         *
         * Example usage:
         *
         *      var videoYouTubeVideoBuilder = videoAdGroup.videoTargeting().newYouTubeVideoBuilder();
         *      var videoYouTubeVideoOperation = videoYouTubeVideoBuilder
         *        .withVideoId('_YUugB4IUl4')      // required
         *        .build();                        // create the YouTube video
         */
        interface VideoYouTubeVideoBuilder extends Base.Builder<VideoYouTubeVideoOperation> {
            /** Builds the excluded video YouTube video. */
            exclude(): ExcludedVideoYouTubeVideoOperation;
            /** Sets the YouTube video ID. */
            withVideoId(videoId: string): this;
        }

        /**
         * An iterator of video YouTube videos.
         *
         * Typical usage:
         *
         *      while (videoYouTubeVideoIterator.hasNext()) {
         *        var videoYouTubeVideo = videoYouTubeVideoIterator.next();
         *      }
         */
        interface VideoYouTubeVideoIterator extends Base.Iterator<VideoYouTubeVideo> {}

        /** An operation representing creation of a new video YouTube video. */
        interface VideoYouTubeVideoOperation extends Base.Operation<VideoYouTubeVideo> {}

        /**
         * Fetches video YouTube videos. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var youTubeVideoSelector = AdsApp.videoTargeting()
         *          .youTubeVideos()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var youTubeVideoIterator = youTubeVideoSelector.get();
         *      while (youTubeVideoIterator.hasNext()) {
         *        var youTubeVideo = youTubeVideoIterator.next();
         *      }
         */
        interface VideoYouTubeVideoSelector
            extends Base.Selector<VideoYouTubeVideoIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
