// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a shared negative keyword. */
        interface SharedNegativeKeyword {
            /** Returns the type of this entity as a String, in this case, "SharedNegativeKeyword". */
            getEntityType(): string;
            /** Returns the match type of the negative keyword. */
            getMatchType(): string;
            /** Returns the NegativeKeywordList this keyword is in. */
            getNegativeKeywordList(): NegativeKeywordList;
            /** Returns the text of the negative keyword. */
            getText(): string;
            /** Removes the shared negative keyword. */
            remove(): void;
        }

        /**
         * An iterator of shared negative keyword.
         *
         * Typical usage:
         *
         *      while (sharedNegativeKeywordIterator.hasNext()) {
         *        var sharedNegativeKeyword = sharedNegativeKeywordIterator.next();
         *      }
         */
        interface SharedNegativeKeywordIterator extends Base.Iterator<SharedNegativeKeyword> {}

        /**
         * Fetches shared negative keyword. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var sharedNegativeKeywordSelector = negativeKeywordList.negativeKeywords()
         *          .withCondition("KeywordText STARTS_WITH 'test'")
         *          .withLimit(1)
         *          .withIds([10,20])
         *          .orderBy("SharedSetId DESC");
         *
         *      var sharedNegativeKeywordIterator = sharedNegativeKeywordSelector.get();
         *
         *      while (sharedNegativeKeywordIterator.hasNext()) {
         *        var sharedNegativeKeyword = sharedNegativeKeywordIterator.next();
         *      }
         */
        interface SharedNegativeKeywordSelector
            extends Base.Selector<SharedNegativeKeywordIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
