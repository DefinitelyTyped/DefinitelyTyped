declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Shared Excluded Placement. */
        interface SharedExcludedPlacement {
            /** Returns the type of this entity as a String, in this case, "SharedExcludedPlacement". */
            getEntityType(): string;
            /** Returns the ExcludedPlacementList this placement is in. */
            getExcludedPlacementList(): ExcludedPlacementList;
            /** Returns the URL of the excluded placement. */
            getUrl(): string;
            /** Removes the shared excluded placement. */
            remove(): void;
        }

        /**
         * An iterator of shared excluded placements.
         *
         * Typical usage:
         *
         *      while (sharedExcludedPlacementIterator.hasNext()) {
         *        var sharedExcludedPlacement = sharedExcludedPlacementIterator.next();
         *      }
         */
        interface SharedExcludedPlacementIterator extends Base.Iterator<SharedExcludedPlacement> {}

        /**
         * Fetches shared excluded placements. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var sharedExcludedPlacementSelector = negativeKeywordList.negativeKeywords()
         *          .withCondition("PlacementUrl CONTAINS 'test'")
         *          .withLimit(1)
         *          .withIds([10,20])
         *          .orderBy("SharedSetId DESC");
         *
         *      var sharedExcludedPlacementIterator = sharedExcludedPlacementSelector.get();
         *
         *      while (sharedExcludedPlacementIterator.hasNext()) {
         *        var sharedExcludedPlacement = sharedExcludedPlacementIterator.next();
         *      }
         */
        interface SharedExcludedPlacementSelector
            extends Base.Selector<SharedExcludedPlacementIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
