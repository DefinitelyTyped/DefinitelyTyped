declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Placement in a Video Campaign. */
        interface VideoPlacement extends Base.StatsFor {
            /** Provides access to bidding fields of this video placement. */
            bidding(): VideoCriterionBidding;
            /** Returns the type of this entity as a String, in this case, "VideoPlacement". */
            getEntityType(): string;
            /** Returns the ID of the video placement. */
            getId(): number;
            /** Returns the URL of the placement. */
            getUrl(): string;
            /** Returns the ad group to which this video placement belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video placement belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video placement is enabled. */
            isEnabled(): boolean;
            /** Returns true if the placement is managed. */
            isManaged(): boolean;
            /** Returns true if the video placement is paused. */
            isPaused(): boolean;
            /** Removes the video placement. */
            remove(): void;
        }

        /**
         * Builder for VideoPlacement objects.
         *
         * Example usage:
         *
         *      var videoPlacementBuilder = videoAdGroup.videoTargeting().newPlacementBuilder();
         *      var videoPlacementOperation = videoPlacementBuilder
         *        .withUrl('"http://www.site.com"')    // required
         *        .build();                            // create the placement
         */
        interface VideoPlacementBuilder extends Base.Builder<VideoPlacementOperation> {
            /** Builds the excluded video placement. */
            exclude(): ExcludedVideoPlacementOperation;
            /** Sets the URL of the placement. */
            withUrl(url: string): this;
        }

        /**
         * An iterator of video placements.
         *
         * Typical usage:
         *
         *      while (videoPlacementIterator.hasNext()) {
         *        var videoPlacement = videoPlacementIterator.next();
         *      }
         */
        interface VideoPlacementIterator extends Base.Iterator<VideoPlacement> {}

        /** An operation representing creation of a new video placement. */
        interface VideoPlacementOperation extends Base.Operation<VideoPlacement> {}

        /**
         * Fetches video placements. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var placementSelector = AdsApp.videoTargeting()
         *          .placements()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var placementIterator = placementSelector.get();
         *      while (placementIterator.hasNext()) {
         *        var placement = placementIterator.next();
         *      }
         */
        interface VideoPlacementSelector
            extends Base.Selector<VideoPlacementIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
