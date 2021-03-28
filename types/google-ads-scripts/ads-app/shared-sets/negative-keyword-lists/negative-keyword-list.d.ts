declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a negative keyword list. */
        interface NegativeKeywordList {
            /** Adds a SharedNegativeKeyword to a negative keyword list. */
            addNegativeKeyword(keywordText: string): void;
            /** Adds a list of SharedNegativeKeyword objects to a negative keyword list. */
            addNegativeKeywords(keywordTexts: string[]): void;
            /** Returns a selector of all campaigns this negative keyword list has been applied to. */
            campaigns(): CampaignSelector;
            /** Returns the type of this entity as a String, in this case, "NegativeKeywordList". */
            getEntityType(): string;
            /** Returns the ID of the negative keyword list. */
            getId(): number;
            /** Returns the name of a negative keyword list. */
            getName(): string;
            /** Returns a selector of the shared negative keywords in a negative keyword list. */
            negativeKeywords(): SharedNegativeKeywordSelector;
            /** Sets the name of a negative keyword list. */
            setName(name: string): void;
        }

        /**
         * Builder for a negative keyword list under construction.
         *
         * Typical usage:
         *
         *      var negativeKeywordListOperation =
         *          AdsApp.newNegativeKeywordListBuilder()
         *              .withName("NegativeKeywordList")
         *              .build();
         *
         *      var negativeKeywordList = negativeKeywordListOperation.getResult();
         */
        interface NegativeKeywordListBuilder extends Base.Builder<NegativeKeywordListOperation> {
            /** Sets the name of the new negative keyword list to the specified value. */
            withName(name: string): this;
        }

        /**
         * An iterator of negative keyword lists.
         *
         * Typical usage:
         *
         *      while (negativeKeywordListIterator.hasNext()) {
         *        var negativeKeywordList = negativeKeywordListIterator.next();
         *      }
         */
        interface NegativeKeywordListIterator extends Base.Iterator<NegativeKeywordListIterator> {}

        /** An operation representing creation of a new negative keyword list. */
        interface NegativeKeywordListOperation extends Base.Operation<NegativeKeywordList> {}

        /**
         * Fetches negative keyword lists. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var negativeKeywordListSelector = AdsApp.negativeKeywordLists()
         *          .withCondition("Name CONTAINS 'test'")
         *          .withLimit(1)
         *          .withIds([10,20])
         *          .orderBy("SharedSetId DESC");
         *
         *      var negativeKeywordListIterator = negativeKeywordListSelector.get();
         *
         *      while (negativeKeywordListIterator.hasNext()) {
         *        var negativeKeywordList = negativeKeywordListIterator.next();
         *      }
         */
        interface NegativeKeywordListSelector
            extends Base.Selector<NegativeKeywordListIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
