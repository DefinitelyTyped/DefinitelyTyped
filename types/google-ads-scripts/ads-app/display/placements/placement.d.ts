declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads placement. */
        interface Placement extends Base.StatsFor {
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
            /** Returns the ID of the audience. */
            getId(): number;
            /** Returns the URL of the placement. */
            getUrl(): string;
            /** Returns true if the audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the placement is managed. */
            isManaged(): boolean;
            /** Returns true if the audience is paused. */
            isPaused(): boolean;
            /** Removes the audience. */
            remove(): void;
        }

        /**
         * Builder for Placement objects.
         *
         * Example usage:
         *
         *      var placementBuilder = adGroup.display().newKeywordBuilder();
         *      var placement = placementBuilder
         *        .withUrl("http://www.site.com")  // required
         *        .withCpc(0.50)                   // optional
         *        .build()                         // create the placement
         */
        interface PlacementBuilder extends Base.Builder<PlacementOperation> {
            /** Builds the excluded placement. */
            exclude(): ExcludedPlacementOperation;
            /** Sets the max CPC bid of the new placement to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the CPM bid of the new placement to the specified value. */
            withCpm(cpm: number): this;
            /** Sets the URL of the placement. */
            withUrl(url: string): this;
        }

        /**
         * An iterator of placements.
         *
         * Typical usage:
         *
         *      while (placementIterator.hasNext()) {
         *        var placement = placementIterator.next();
         *      }
         */
        interface PlacementIterator extends Base.Iterator<Placement> {}

        /** An operation representing creation of a new placement. */
        interface PlacementOperation extends Base.Operation<Placement> {}

        /**
         * Fetches placements. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var placementSelector = AdsApp.display()
         *          .placements()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var placementIterator = placementSelector.get();
         *      while (placementIterator.hasNext()) {
         *        var placement = placementIterator.next();
         *      }
         */
        interface PlacementSelector
            extends Base.Selector<PlacementIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
