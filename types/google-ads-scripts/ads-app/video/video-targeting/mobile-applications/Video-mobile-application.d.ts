declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Mobile Application criterion in a Video Campaign. */
        interface VideoMobileApplication extends Base.StatsFor {
            /** Provides access to bidding fields of this video mobile application. */
            bidding(): VideoCriterionBidding;
            /** Returns the ID of the mobile application. */
            getAppId(): string;
            /** Returns the type of this entity as a String, in this case, "VideoMobileApplication". */
            getEntityType(): string;
            /** Returns the ID of the video mobile application. */
            getId(): number;
            /** Returns the mobile application name. */
            getName(): string;
            /** Returns the ad group to which this video mobile application belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video mobile application belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video mobile application is enabled. */
            isEnabled(): boolean;
            /** Returns true if the mobile application is managed. */
            isManaged(): boolean;
            /** Returns true if the video mobile application is paused. */
            isPaused(): boolean;
            /** Removes the video mobile application. */
            remove(): void;
        }

        /**
         * Builder for VideoMobileApplication objects.
         *
         * Example usage:
         *
         *      var videoMobileApplicationBuilder = videoAdGroup.videoTargeting().newMobileApplicationBuilder();
         *      var videoMobileApplicationOperation = videoMobileApplicationBuilder
         *        .withAppId('1-936971630')     // required
         *        .build();                     // create the mobile application
         */
        interface VideoMobileApplicationBuilder extends Base.Builder<VideoMobileApplicationOperation> {
            /** Builds the excluded video mobile application. */
            exclude(): ExcludedVideoMobileApplicationOperation;
            /** Sets the ID of the mobile application. */
            withAppId(appId: string): this;
        }

        /**
         * An iterator of video mobile applications.
         *
         * Typical usage:
         *
         *      while (videoMobileApplicationIterator.hasNext()) {
         *        var videoMobileApplication = videoMobileApplicationIterator.next();
         *      }
         */
        interface VideoMobileApplicationIterator extends Base.Iterator<VideoMobileApplication> {}

        /** An operation representing creation of a new video mobile application. */
        interface VideoMobileApplicationOperation extends Base.Operation<VideoMobileApplication> {}

        /**
         * Fetches video mobile applications. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var mobileApplicationSelector = AdsApp.videoTargeting()
         *          .mobileApplications()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var mobileApplicationIterator = mobileApplicationSelector.get();
         *      while (mobileApplicationIterator.hasNext()) {
         *        var mobileApplication = mobileApplicationIterator.next();
         *      }
         */
        interface VideoMobileApplicationSelector
            extends Base.Selector<VideoMobileApplicationIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
