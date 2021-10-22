declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads keyword. */
        interface Keyword extends Base.StatsFor {
            /** Creates a selector of all ad params belonging to this keyword. */
            adParams(): AdParamSelector;
            /** Applies a label to the keyword. */
            applyLabel(name: string): void;
            /** Provides access to this keyword's bidding fields. */
            bidding(): KeywordBidding;
            /** Clears the destination URL of the keyword. */
            clearDestinationUrl(): void;
            /** Enables the keyword. */
            enable(): void;
            /** Returns the ad group to which this keyword belongs. */
            getAdGroup(): AdGroup;
            /** Returns the approval status of the keyword. */
            getApprovalStatus(): string;
            /** Returns the base ad group to which this keyword belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this keyword belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this keyword belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "Keyword". */
            getEntityType(): string;
            /** Returns the first page cpc for the keyword. */
            getFirstPageCpc(): number;
            /** Returns the ID of the keyword. */
            getId(): number;
            /** Returns the match type of the keyword. */
            getMatchType(): string;
            /** Returns the quality score of the keyword, in 1..10 range. */
            getQualityScore(): number;
            /** Returns the text of the keyword. */
            getText(): string;
            /** Returns the top of page cpc for the keyword. */
            getTopOfPageCpc(): number;
            /** Returns true if the keyword is enabled. */
            isEnabled(): boolean;
            /** Returns true if the keyword is paused. */
            isPaused(): boolean;
            /** Creates a selector of all labels applied to the keyword. */
            labels(): LabelSelector;
            /** Pauses the keyword. */
            pause(): void;
            /** Removes the keyword. */
            remove(): void;
            /** Removes a label from the keyword. */
            removeLabel(name: string): void;
            /** Creates an ad param for this keyword with the specified index and insertion text. */
            setAdParam(index: number, insertionText: string): void;
            /** Provides access to this keyword's URL fields. */
            urls(): KeywordUrls;
        }

        /** Provides access to a keyword's bidding fields. */
        interface KeywordBidding {
            /** Clears the max CPC bid for this keyword. */
            clearCpc(): void;
            /** Clears the CPM bid for this keyword. */
            clearCpm(): void;
            /** Returns the max CPC bid for this keyword. */
            getCpc(): number;
            /** Returns the CPM bid for this keyword. */
            getCpm(): number;
            /** Returns the flexible bidding strategy of the keyword. */
            getStrategy(): BiddingStrategy;
            /** Returns the bidding strategy source of this keyword. */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this keyword. */
            getStrategyType(): string;
            /** Sets the max CPC bid for this keyword. */
            setCpc(cpc: number): void;
            /** Sets the CPM bid for this keyword. */
            setCpm(cpm: number): void;
        }

        /**
         * Builder for a keyword under construction.
         *
         * Typical usage:
         *
         *      var keywordOperation = adGroup.newKeywordBuilder()
         *         .withText("text")
         *         .withCpc(1.5)
         *         .withFinalUrl("http://www.example.com")
         *         .build();
         *
         *      var keyword = keywordOperation.getResult();
         */
        interface KeywordBuilder extends Base.Builder<KeywordOperation> {
            /** Sets the max CPC bid of the new keyword to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new keyword to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the custom parameters of the new keyword to the specified value. */
            withCustomParameters(customParameters: Record<string, string>): this;
            /** Sets the final URL of the new keyword to the specified value. */
            withFinalUrl(finalUrl: string): this;
            /** Sets the final URL suffix of the new keyword to the specified value. */
            withFinalUrlSuffix(suffix: string): this;
            /** Sets the mobile final URL of the new keyword to the specified value. */
            withMobileFinalUrl(mobileFinalUrl: string): this;
            /** Sets the text of the new keyword to the specified value. */
            withText(text: string): this;
            /** Sets the tracking template of the new keyword to the specified value. */
            withTrackingTemplate(trackingTemplate: string): this;
        }

        /**
         * An iterator of keywords.
         *
         * Typical usage:
         *
         *      while (keywordIterator.hasNext()) {
         *        var keyword = keywordIterator.next();
         *      }
         */
        interface KeywordIterator extends Base.Iterator<Keyword> {}

        /**
         * An operation representing creation of a new keyword.
         */
        interface KeywordOperation extends Base.Operation<Keyword> {}

        /**
         * Fetches keywords. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var keywordSelector = AdsApp
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
        interface KeywordSelector
            extends Base.Selector<KeywordIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /** Provides access to keyword URLs. */
        interface KeywordUrls {
            /** Clears the final URL of the keyword. */
            clearFinalUrl(): void;
            /** Clears the final URL suffix of the keyword. */
            clearFinalUrlSuffix(): void;
            /** Clears the mobile final URL of the keyword. */
            clearMobileFinalUrl(): void;
            /** Clears the tracking template of the keyword. */
            clearTrackingTemplate(): void;
            /** Returns the custom parameters of the keyword. */
            getCustomParameters(): Record<string, string>;
            /** Returns the final URL of the keyword. */
            getFinalUrl(): string;
            /** Returns the final URL suffix of the keyword. */
            getFinalUrlSuffix(): string;
            /** Returns the mobile final URL of the keyword. */
            getMobileFinalUrl(): string;
            /** Returns the tracking template of the keyword. */
            getTrackingTemplate(): string;
            /** Sets the custom parameters of the keyword. */
            setCustomParameters(customParameters: Record<string, string>): void;
            /** Sets the final URL of the keyword. */
            setFinalUrl(finalUrl: string): void;
            /** Sets the final URL suffix of the keyword. */
            setFinalUrlSuffix(suffix: string): void;
            /** Sets the mobile final URL of the keyword. */
            setMobileFinalUrl(mobileFinalUrl: string): void;
            /** Sets the tracking template of the keyword. */
            setTrackingTemplate(trackingTemplate: string): void;
        }
    }
}
