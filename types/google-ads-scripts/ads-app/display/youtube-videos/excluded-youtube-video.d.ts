declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded YouTube Video. */
        interface ExcludedYouTubeVideo {
            /** Returns the ad group to which this excluded YouTube video belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this excluded YouTube video belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this excluded YouTube video belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excluded YouTube video belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the excluded YouTube video. */
            getId(): number;
            /** Returns the YouTube video ID. */
            getVideoId(): string;
            /** Removes the excluded YouTube video. */
            remove(): void;
        }

        /**
         * An iterator of excluded YouTube videos.
         *
         * Typical usage:
         *
         *      while (excludedYouTubeVideoIterator.hasNext()) {
         *        var excludedYouTubeVideo = excludedYouTubeVideoIterator.next();
         *      }
         */
        interface ExcludedYouTubeVideoIterator extends Base.Iterator<ExcludedYouTubeVideo> {}

        /** An operation representing creation of a new excluded YouTube video. */
        interface ExcludedYouTubeVideoOperation extends Base.Operation<ExcludedYouTubeVideo> {}

        /**
         * Fetches excluded YouTube videos. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedYouTubeVideoSelector = AdsApp.display()
         *          .excludedYouTubeVideos()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedYouTubeVideoIterator = excludedYouTubeVideoSelector.get();
         *      while (excludedYouTubeVideoIterator.hasNext()) {
         *        var excludedYouTubeVideo = excludedYouTubeVideoIterator.next();
         *      }
         */
        interface ExcludedYouTubeVideoSelector
            extends Base.Selector<ExcludedYouTubeVideoIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
