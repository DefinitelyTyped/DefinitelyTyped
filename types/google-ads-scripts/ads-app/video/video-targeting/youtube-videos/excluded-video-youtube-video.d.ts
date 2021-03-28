declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded YouTube Video in a Video Campaign. */
        interface ExcludedVideoYouTubeVideo {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoYouTubeVideo". */
            getEntityType(): string;
            /** Returns the ID of the excluded video YouTube video. */
            getId(): number;
            /** Returns the ad group to which this excluded video YouTube video belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video YouTube video belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns the YouTube video ID. */
            getVideoId(): string;
            /** Removes the excluded video YouTube video. */
            remove(): void;
        }

        /**
         * An iterator of excluded video YouTube videos.
         *
         * Typical usage:
         *
         *      while (excludedVideoYouTubeVideoIterator.hasNext()) {
         *        var excludedVideoYouTubeVideo = excludedVideoYouTubeVideoIterator.next();
         *      }
         */
        interface ExcludedVideoYouTubeVideoIterator extends Base.Iterator<ExcludedVideoYouTubeVideo> {}

        /** An operation representing creation of a new excluded video YouTube video. */
        interface ExcludedVideoYouTubeVideoOperation extends Base.Operation<ExcludedVideoYouTubeVideo> {}

        /**
         * Fetches excluded video YouTube videos. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoYouTubeVideoSelector = AdsApp.videoTargeting()
         *          .excludedVideoYouTubeVideos()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoYouTubeVideoIterator = excludedVideoYouTubeVideoSelector.get();
         *      while (excludedVideoYouTubeVideoIterator.hasNext()) {
         *        var excludedVideoYouTubeVideo = excludedVideoYouTubeVideoIterator.next();
         *      }
         */
        interface ExcludedVideoYouTubeVideoSelector
            extends Base.Selector<ExcludedVideoYouTubeVideoIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
