declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded display keyword. */
        interface ExcludedDisplayKeyword {
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this audience belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this audience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this audience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the audience. */
            getId(): number;
            /** Returns the text of the excluded display keyword. */
            getText(): string;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * An iterator of excluded display keywords.
         *
         * Typical usage:
         *
         *      while (excludedDisplayKeywordIterator.hasNext()) {
         *        var excludedDisplayKeyword = excludedDisplayKeywordIterator.next();
         *      }
         */
        interface ExcludedDisplayKeywordIterator extends Base.Iterator<ExcludedDisplayKeyword> {}

        /** An operation representing creation of a new excluded display keyword. */
        interface ExcludedDisplayKeywordOperation extends Base.Operation<ExcludedDisplayKeyword> {}

        /**
         * Fetches excluded display keywords. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedDisplayKeywordSelector = AdsApp.display()
         *          .keywords()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var excludedDisplayKeywordIterator = excludedDisplayKeywordSelector.get();
         *      while (excludedDisplayKeywordIterator.hasNext()) {
         *        var excludedDisplayKeyword = excludedDisplayKeywordIterator.next();
         *      }
         */
        interface ExcludedDisplayKeywordSelector
            extends Base.Selector<ExcludedDisplayKeywordIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
