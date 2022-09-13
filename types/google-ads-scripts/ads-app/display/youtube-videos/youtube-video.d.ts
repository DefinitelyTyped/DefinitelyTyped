declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads YouTube Video. */
        interface YouTubeVideo extends Base.StatsFor {
            /** Provides access to this YouTube video's bidding fields. */
            bidding(): DisplayCriterionBidding;
            /** Returns the ad group to which this YouTube video belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this YouTube video belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this YouTube video belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this YouTube video belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "YouTubeVideo". */
            getEntityType(): string;
            /** Returns the ID of the YouTube video. */
            getId(): number;
            /** Returns the YouTube video ID. */
            getVideoId(): string;
            /** Returns true if the YouTube video is enabled. */
            isEnabled(): boolean;
            /** Returns true if the YouTube video is managed. */
            isManaged(): boolean;
            /** Returns true if the YouTube video is paused. */
            isPaused(): boolean;
            /** Removes the YouTube video. */
            remove(): void;
        }

        /**
         * Builder for YouTubeVideo objects.
         *
         * Example usage:
         *
         *  var youTubeVideoBuilder = adGroup.display().newYouTubeVideoBuilder();
         *  var youTubeVideoOperation = youTubeVideoBuilder
         *    .withVideoId('_YUugB4IUl4')      // required
         *    .build();                        // create the YouTube video
         */
        interface YouTubeVideoBuilder {
            /** Builds the excluded YouTube video criterion. */
            exclude(): ExcludedYouTubeVideoOperation;
            /** Sets the max CPC bid of the new YouTube video to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new YouTube video to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the YouTube video ID. */
            withVideoId(videoId: string): this;
        }

        /**
         * An iterator of YouTube videos.
         *
         * Typical usage:
         *
         *  while (youTubeVideoIterator.hasNext()) {
         *    var youTubeVideo = youTubeVideoIterator.next();
         *  }
         */
        interface YouTubeVideoIterator extends Base.Iterator<YouTubeVideo> {}

        /** An operation representing creation of a new YouTube video. */
        interface YouTubeVideoOperation extends Base.Operation<YouTubeVideo> {}

        /**
         * Fetches YouTube videos. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var youTubeVideoSelector = AdsApp.display()
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
        interface YouTubeVideoSelector
            extends Base.Selector<YouTubeVideoIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
