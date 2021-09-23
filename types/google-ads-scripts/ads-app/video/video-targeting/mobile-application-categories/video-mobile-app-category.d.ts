declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Mobile App Category in a Video Campaign. */
        interface VideoMobileAppCategory extends Base.StatsFor {
            /** Provides access to bidding fields of this video mobile application category. */
            bidding(): VideoCriterionBidding;
            /** Returns the type of this entity as a String, in this case, "VideoMobileAppCategory". */
            getEntityType(): string;
            /** Returns the ID of the video mobile application category. */
            getId(): number;
            /** Returns the ID of the mobile application category. */
            getMobileAppCategoryId(): number;
            /** Returns the ad group to which this video mobile application category belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video mobile application category belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video mobile application category is enabled. */
            isEnabled(): boolean;
            /** Returns true if the mobile application category is managed. */
            isManaged(): boolean;
            /** Returns true if the video mobile application category is paused. */
            isPaused(): boolean;
            /** Removes the video mobile application category. */
            remove(): void;
        }

        /**
         * Builder for VideoMobileAppCategory objects.
         *
         * Example usage:
         *
         *      var videoMobileAppCategoryBuilder = videoAdGroup.videoTargeting().newMobileAppCategoryBuilder();
         *      var videoMobileAppCategoryOperation = videoMobileAppCategoryBuilder
         *        .withMobileAppCategoryId(60003)    // required
         *        .build();  // create the mobile application categories
         */
        interface VideoMobileAppCategoryBuilder extends Base.Builder<VideoMobileAppCategoryOperation> {
            /** Builds the excluded video mobile application category. */
            exclude(): ExcludedVideoMobileAppCategoryOperation;
            /** Sets the ID of the mobile application category. */
            withMobileAppCategoryId(categoryId: number): this;
        }

        /**
         * An iterator of video mobile application categories.
         *
         * Typical usage:
         *
         *      while (videoMobileAppCategoryIterator.hasNext()) {
         *        var videoMobileAppCategory = videoMobileAppCategoryIterator.next();
         *      }
         */
        interface VideoMobileAppCategoryIterator extends Base.Iterator<VideoMobileAppCategory> {}

        /** An operation representing creation of a new video mobile application category. */
        interface VideoMobileAppCategoryOperation extends Base.Operation<VideoMobileAppCategory> {}

        /**
         * Fetches video mobile application categories. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var mobileAppCategorySelector = AdsApp.videoTargeting()
         *          .mobileAppCategories()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var mobileAppCategoryIterator = mobileAppCategorySelector.get();
         *      while (mobileAppCategoryIterator.hasNext()) {
         *        var mobileAppCategory = mobileAppCategoryIterator.next();
         *      }
         */
        interface VideoMobileAppCategorySelector
            extends Base.Selector<VideoMobileAppCategoryIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
