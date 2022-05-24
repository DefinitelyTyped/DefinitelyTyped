declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads display keyword. */
        interface DisplayKeyword extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): DisplayCriterionBidding;
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this audience belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the type of this entity as a String, in this case, "DisplayKeyword". */
            getEntityType(): string;
            /** Returns the ID of the audience. */
            getId(): number;
            /** Returns the text of the display keyword. */
            getText(): string;
            /** Returns true if the audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the audience is paused. */
            isPaused(): boolean;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * Builder for DisplayKeyword objects.
         *
         * Example usage:
         *
         *  var displayKeywordBuilder = adGroup.display().newKeywordBuilder();
         *  var displayKeyword = displayKeywordBuilder
         *    .withText("keyword text")     // required
         *    .withCpc(0.50)                // optional
         *    .build()                      // create the display keyword
         */
        interface DisplayKeywordBuilder extends Base.Builder<DisplayKeywordOperation> {
            /** Builds the excluded display keyword. */
            exclude(): ExcludedDisplayKeywordOperation;
            /** Sets the max CPC bid of the new display keyword to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new display keyword to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the text of the display keyword. */
            withText(text: string): this;
        }

        /**
         * An iterator of display keywords.
         *
         * Typical usage:
         *
         *      while (displayKeywordIterator.hasNext()) {
         *        var displayKeyword = displayKeywordIterator.next();
         *      }
         */
        interface DisplayKeywordIterator extends Base.Iterator<DisplayKeyword> {}

        /** An operation representing creation of a new display keyword. */
        interface DisplayKeywordOperation extends Base.Operation<DisplayKeyword> {}

        /**
         * Fetches display keywords. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var displayKeywordSelector = AdsApp.display()
         *          .keywords()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var displayKeywordIterator = displayKeywordSelector.get();
         *      while (displayKeywordIterator.hasNext()) {
         *        var displayKeyword = displayKeywordIterator.next();
         *      }
         */
        interface DisplayKeywordSelector
            extends Base.Selector<DisplayKeywordIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
