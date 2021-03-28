declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Audience in a Video Campaign. */
        interface VideoAudience extends Base.StatsFor {
            /** Provides access to bidding fields of this video audience. */
            bidding(): VideoCriterionBidding;
            /** Returns the audience ID of the audience. */
            getAudienceId(): number;
            /** Returns the type of the audience. */
            getAudienceType(): string;
            /** Returns the type of this entity as a String, in this case, "VideoAudience". */
            getEntityType(): string;
            /** Returns the ID of the video audience. */
            getId(): number;
            /** Returns the name of the audience. */
            getName(): string;
            /** Returns the ad group to which this video audience belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video audience belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video audience is paused. */
            isPaused(): boolean;
            /** Removes the video audience. */
            remove(): void;
        }

        /**
         * Builder for VideoAudience objects. For details about video audiences, please see About targeting for video campaigns.
         *
         * Example usage:
         *
         *      var videoAudienceBuilder = videoAdGroup.videoTargeting().newAudienceBuilder();
         *      var videoAudienceOperation = videoAudienceBuilder
         *        .withAudienceType('USER_INTEREST')   // required
         *        .withAudienceId(80432)               // required
         *        .build();                            // create the audience
         */
        interface VideoAudienceBuilder extends Base.Builder<VideoAudienceOperation> {
            /** Builds the excluded video audience. */
            exclude(): ExcludedVideoAudienceOperation;
            /** Sets the ID of the excluded audience. */
            withAudienceId(audienceId: number): this;
            /** Sets the type of the audience. */
            withAudienceType(audienceType: string): this;
        }

        /**
         * An iterator of video audiences.
         *
         * Typical usage:
         *
         *  while (videoAudienceIterator.hasNext()) {
         *    var videoAudience = videoAudienceIterator.next();
         *  }
         */
        interface VideoAudienceIterator extends Base.Iterator<VideoAudience> {}

        /** An operation representing creation of a new video audience. */
        interface VideoAudienceOperation extends Base.Operation<VideoAudience> {}

        /**
         * Fetches video audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var audienceSelector = AdsApp.videoTargeting()
         *          .audiences()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var audienceIterator = audienceSelector.get();
         *      while (audienceIterator.hasNext()) {
         *        var audience = audienceIterator.next();
         *      }
         */
        interface VideoAudienceSelector
            extends Base.Selector<VideoAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
