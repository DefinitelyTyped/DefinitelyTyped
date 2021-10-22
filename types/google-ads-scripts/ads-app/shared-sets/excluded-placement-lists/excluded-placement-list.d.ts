declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface ExcludedPlacementList {
            /** Adds a SharedExcludedPlacement to an excluded placement list. */
            addExcludedPlacement(url: string): void;
            /** Adds a list of SharedExcludedPlacement objects to an excluded placement list. */
            addExcludedPlacements(urls: string[]): void;
            /** Returns a selector of all campaigns this excluded placement list has been applied to. */
            campaigns(): CampaignSelector;
            /** Returns a selector of the shared excluded placements in an excluded placement list. */
            excludedPlacements(): SharedExcludedPlacementSelector;
            /** Returns the type of this entity as a String, in this case, "ExcludedPlacementList". */
            getEntityType(): string;
            /** Returns the ID of the excluded placement list. */
            getId(): number;
            /** Returns the name of an excluded placement list. */
            getName(): string;
            /** Sets the name of an excluded placement list. */
            setName(name: string): void;
        }

        /**
         * Builder for an excluded placement list under construction.
         *
         * Typical usage:
         *
         *      var excludedPlacementListOperation =
         *          AdsApp.newExcludedPlacementListBuilder()
         *              .withName("ExcludedPlacementList")
         *              .build();
         *      var excludedPlacementList = excludedPlacementListOperation.getResult();
         */
        interface ExcludedPlacementListBuilder extends Base.Builder<ExcludedPlacementListOperation> {
            /** Sets the name of the new excluded placement list to the specified value. */
            withName(name: string): this;
        }

        /**
         * An iterator of excluded placement lists.
         *
         * Typical usage:
         *
         *      while (excludedPlacementListIterator.hasNext()) {
         *        var excludedPlacementList = excludedPlacementListIterator.next();
         *      }
         */
        interface ExcludedPlacementListIterator extends Base.Iterator<ExcludedPlacementList> {}

        /** An operation representing creation of a new excluded placement list.  */
        interface ExcludedPlacementListOperation extends Base.Operation<ExcludedPlacementList> {}

        /**
         * Fetches excluded placement lists. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var sharedExcludedPlacementSelector = AdsApp.excludedPlacementLists()
         *          .withCondition("Name CONTAINS 'test'")
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
        interface ExcludedPlacementListSelector
            extends Base.Selector<ExcludedPlacementListIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
