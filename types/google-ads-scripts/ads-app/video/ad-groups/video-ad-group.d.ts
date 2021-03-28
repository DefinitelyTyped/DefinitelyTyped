declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads video ad group. */
        interface VideoAdGroup extends Base.StatsFor {
            /** Applies a label to the video ad group. */
            applyLabel(name: string): void;
            /** Provides access to this ad group's bidding fields. */
            bidding(): VideoAdGroupBidding;
            /** Clears the top content bid modifier for this ad group. */
            clearTopContentBidModifier(): void;
            /** Provides access to this ad group's device-specific configuration. */
            devices(): AdGroupDevices;
            /** Enables the video ad group. */
            enable(): void;
            /** Returns the video ad group type. */
            getAdGroupType(): string;
            /** Returns the type of this entity as a String, in this case, "VideoAdGroup". */
            getEntityType(): string;
            /** Returns the ID of the video ad group. */
            getId(): number;
            /** Returns the name of the ad group. */
            getName(): string;
            /** Returns the top content bid modifier for this ad group. */
            getTopContentBidModifier(): number;
            /** Returns the campaign to which this video ad group belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video ad group is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video ad group is paused. */
            isPaused(): boolean;
            /** Returns true if the ad group is removed. */
            isRemoved(): boolean;
            /** Creates a selector of all labels applied to the video ad group. */
            labels(): LabelSelector;
            /** Returns a new video ad builder space associated with this ad group. */
            newVideoAd(): VideoAdBuilderSpace;
            /** Pauses the video ad group. */
            pause(): void;
            /** Removes a label from the video ad group. */
            removeLabel(name: string): void;
            /** Sets the name of the ad group. */
            setName(name: string): void;
            /** Sets the top content bid modifier for this ad group to the specified value. */
            setTopContentBidModifier(modifier: number): void;
            /** Returns the selector of all ads in the video ad group. */
            videoAds(): VideoAdSelector;
            /** Provides access to this ad group's video targeting criteria. */
            videoTargeting(): AdGroupVideoTargeting;
        }

        /** Provides access to a video ad group's bidding fields. */
        interface VideoAdGroupBidding {
            /** Returns the Target CPA bid for this video ad group. */
            getCpa(): number;
            /** Returns the CPM bid for this video ad group. */
            getCpm(): number;
            /** Returns the max CPV bid for this video ad group. */
            getCpv(): number;
            /**
             * Returns the bidding strategy source of this video ad group.
             *
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this video ad group. */
            getStrategyType(): string;
            /** Returns the Target CPM bid for this video ad group. */
            getTargetCpm(): number;
            /** Sets the Target CPA bid for this video ad group. */
            setCpa(cpa: number): void;
            /** Sets the CPM bid for this video ad group. */
            setCpm(cpm: number): void;
            /** Sets the max CPV bid for this video ad group. */
            setCpv(cpv: number): void;
            /** Sets the Target CPM bid for this video ad group. */
            setTargetCpm(cpm: number): void;
        }

        /**
         * Builder for a video ad group under construction.
         *
         * Typical usage:
         *
         *  var videoAdGroupBuilder = videoCampaign.newVideoAdGroupBuilder();
         *  var videoAdGroupOperation = videoAdGroupBuilder
         *     .withName("ad group name")
         *     .withStatus("PAUSED")
         *     .withAdGroupType('TRUE_VIEW_IN_STREAM')
         *     .build();
         *  var videoAdGroup = videoAdGroupOperation.getResult()
         */
        interface VideoAdGroupBuilder extends Base.Builder<VideoAdGroupOperation> {
            /** Sets the video ad group type, either TRUE_VIEW_IN_STREAM, TRUE_VIEW_IN_DISPLAY, NON_SKIPPABLE_IN_STREAM or BUMPER. */
            withAdGroupType(adGroupType: string): this;
            /** Sets the Target CPA bid of the new video ad group to the specified value. */
            withCpa(cpa: number): this;
            /** Sets the CPM bid of the new video ad group to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the max CPV bid of the new video ad group to the specified value. */
            withCpv(cpv: number): this;
            /** Sets the name of the new ad group to the specified value. */
            withName(name: string): this;
            /** Sets the status of the new ad group to the specified value. */
            withStatus(status: string): this;
            /** Sets the Target CPM bid of the new video ad group to the specified value. */
            withTargetCpm(targetCpm: number): this;
        }

        /**
         * An iterator of video ad group.
         *
         * Typical usage:
         *
         *      while (videoAdGroupIterator.hasNext()) {
         *        var videoAdGroup = videoAdGroupIterator.next();
         *      }
         */
        interface VideoAdGroupIterator extends Base.Iterator<VideoAdGroup> {}

        /** An operation representing creation of a new video ad group.  */
        interface VideoAdGroupOperation extends Base.Operation<VideoAdGroup> {}

        /**
         * Fetches video ad groups. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var videoAdGroupSelector = AdsApp
         *          .videoAdGroups()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var videoAdGroupIterator = videoAdGroupSelector.get();
         *      while (videoAdGroupIterator.hasNext()) {
         *        var videoAdGroup = videoAdGroupIterator.next();
         *      }
         */
        interface VideoAdGroupSelector
            extends Base.Selector<VideoAdGroupIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
