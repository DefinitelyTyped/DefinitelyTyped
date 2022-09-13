declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads Keyword in a Video Campaign. */
        interface VideoKeyword extends Base.StatsFor {
            /** Provides access to bidding fields of this video keyword. */
            bidding(): VideoKeywordBidding;
            /** Returns the type of this entity as a String, in this case, "VideoKeyword". */
            getEntityType(): string;
            /** Returns the ID of the video keyword. */
            getId(): number;
            /** Returns the text of the display keyword. */
            getText(): string;
            /** Returns the ad group to which this video keyword belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this video keyword belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Returns true if the video keyword is enabled. */
            isEnabled(): boolean;
            /** Returns true if the video keyword is paused. */
            isPaused(): boolean;
            /** Removes the video keyword. */
            remove(): void;
        }

        /** Provides access to a video criterion's bidding fields. */
        interface VideoKeywordBidding {
            /** Clears the max CPV bid for this video keyword. */
            clearCpv(): void;
            /** Returns the max CPV bid for this video keyword. */
            getCpv(): number;
            /**
             * Returns the bidding strategy source of this video criterion.
             *
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this video criterion. */
            getStrategyType(): string;
            /** Sets the max CPV bid for this video keyword. */
            setCpv(cpv: number): void;
        }

        /**
         * Builder for VideoKeyword objects.
         *
         * Example usage:
         *
         *  var videoKeywordBuilder = videoAdGroup.videoTargeting().newKeywordBuilder();
         *  var videoKeywordOperation = videoKeywordBuilder
         *    .withText('keyword')     // required
         *    .withCpv(0.11)           // optional
         *    .build();                // create the keyword
         */
        interface VideoKeywordBuilder extends Base.Builder<VideoKeywordOperation> {
            /** Builds the excluded video keyword. */
            exclude(): ExcludedVideoKeywordOperation;
            /** Sets the max CPV bid of the new video keyword to the specified value. */
            withCpv(cpv: number): this;
            /** Sets the text of the video keyword. */
            withText(text: string): this;
        }

        /**
         * An iterator of video keywords.
         *
         * Typical usage:
         *
         *      while (videoKeywordIterator.hasNext()) {
         *        var videoKeyword = videoKeywordIterator.next();
         *      }
         */
        interface VideoKeywordIterator extends Base.Iterator<VideoKeyword> {}

        /** An operation representing creation of a new video keyword. */
        interface VideoKeywordOperation extends Base.Operation<VideoKeyword> {}

        /**
         * Fetches video keywords. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var keywordSelector = AdsApp.videoTargeting()
         *          .keywords()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var keywordIterator = keywordSelector.get();
         *      while (keywordIterator.hasNext()) {
         *        var keyword = keywordIterator.next();
         *      }
         */
        interface VideoKeywordSelector
            extends Base.Selector<VideoKeywordIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
