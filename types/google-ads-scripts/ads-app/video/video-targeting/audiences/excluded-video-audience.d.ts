declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Audience in a Video Campaign. */
        interface ExcludedVideoAudience {
            /** Returns the ID of the excluded audience. */
            getAudienceId(): number;
            /** Returns the type of the excluded audience. */
            getAudienceType(): string;
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoAudience". */
            getEntityType(): string;
            /** Returns the ID of the excluded video audience. */
            getId(): number;
            /** Returns the name of the excluded audience. */
            getName(): string;
            /** Returns the ad group to which this excluded video audience belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video audience belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video audience. */
            remove(): void;
        }

        /**
         * An iterator of excluded video audiences.
         *
         * Typical usage:
         *
         *      while (excludedVideoAudienceIterator.hasNext()) {
         *        var excludedVideoAudience = excludedVideoAudienceIterator.next();
         *      }
         */
        interface ExcludedVideoAudienceIterator extends Base.Iterator<ExcludedVideoAudience> {}

        /** An operation representing creation of a new excluded video audience. */
        interface ExcludedVideoAudienceOperation extends Base.Operation<ExcludedVideoAudience> {}

        /**
         * Fetches excluded video audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *
         *      var excludedVideoAudienceSelector = AdsApp.videoTargeting()
         *          .excludedVideoAudiences()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoAudienceIterator = excludedVideoAudienceSelector.get();
         *      while (excludedVideoAudienceIterator.hasNext()) {
         *        var excludedVideoAudience = excludedVideoAudienceIterator.next();
         *      }
         */
        interface ExcludedVideoAudienceSelector
            extends Base.Selector<ExcludedVideoAudienceIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
