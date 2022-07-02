declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Mobile App Category in a Video Campaign. */
        interface ExcludedVideoMobileAppCategory {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoMobileAppCategory". */
            getEntityType(): string;
            /** Returns the ID of the excluded video mobile application category. */
            getId(): number;
            /** Returns the ID of the excluded mobile application category. */
            getMobileAppCategoryId(): number;
            /** Returns the ad group to which this excluded video mobile application category belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video mobile application category belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video mobile application category. */
            remove(): void;
        }

        /**
         * An iterator of excluded video mobile application categories.
         *
         * Typical usage:
         *
         *      while (excludedVideoMobileAppCategoryIterator.hasNext()) {
         *        var excludedVideoMobileAppCategory = excludedVideoMobileAppCategoryIterator.next();
         *      }
         */
        interface ExcludedVideoMobileAppCategoryIterator extends Base.Iterator<ExcludedVideoMobileAppCategory> {}

        /** An operation representing creation of a new excluded video mobile application category. */
        interface ExcludedVideoMobileAppCategoryOperation extends Base.Operation<ExcludedVideoMobileAppCategory> {}

        /**
         * Fetches excluded video mobile application categories. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoMobileAppCategorySelector = AdsApp.videoTargeting()
         *          .excludedVideoMobileAppCategories()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoMobileAppCategoryIterator = excludedVideoMobileAppCategorySelector.get();
         *      while (excludedVideoMobileAppCategoryIterator.hasNext()) {
         *        var excludedVideoMobileAppCategory = excludedVideoMobileAppCategoryIterator.next();
         *      }
         */
        interface ExcludedVideoMobileAppCategorySelector
            extends Base.Selector<ExcludedVideoMobileAppCategoryIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
