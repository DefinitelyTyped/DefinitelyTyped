declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Mobile Application criterion in a Video Campaign. */
        interface ExcludedVideoMobileApplication {
            /** Returns the ID of the excluded mobile application. */
            getAppId(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoMobileApplication". */
            getEntityType(): string;
            /** Returns the ID of the excluded video mobile application. */
            getId(): number;
            /** Returns the mobile application name. */
            getName(): string;
            /** Returns the ad group to which this excluded video mobile application belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video mobile application belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video mobile application. */
            remove(): void;
        }

        /**
         * An iterator of excluded video mobile applications.
         *
         * Typical usage:
         *
         *      while (excludedVideoMobileApplicationIterator.hasNext()) {
         *        var excludedVideoMobileApplication = excludedVideoMobileApplicationIterator.next();
         *      }
         */
        interface ExcludedVideoMobileApplicationIterator extends Base.Iterator<ExcludedVideoMobileApplication> {}

        /** An operation representing creation of a new excluded video mobile applications. */
        interface ExcludedVideoMobileApplicationOperation extends Base.Operation<ExcludedVideoMobileApplication> {}

        /**
         * Fetches excluded video mobile applications. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoMobileApplicationSelector = AdsApp.videoTargeting()
         *          .excludedVideoMobileApplications()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoMobileApplicationIterator = excludedVideoMobileApplicationSelector.get();
         *      while (excludedVideoMobileApplicationIterator.hasNext()) {
         *        var excludedVideoMobileApplication = excludedVideoMobileApplicationIterator.next();
         *      }
         */
        interface ExcludedVideoMobileApplicationSelector
            extends Base.Selector<ExcludedVideoMobileApplicationIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
