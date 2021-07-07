declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a flexible bidding strategy.
         * Bidding strategies store shared bidding configuration data and are account-level objects.
         * For more information, refer to Using flexible bid strategies.
         */
        interface BiddingStrategy extends Base.StatsFor {
            /** Returns the selector of all ad groups that use this bidding strategy. */
            adGroups(): AdGroupSelector;
            /** Returns the selector of all campaigns that use this bidding strategy. */
            campaigns(): CampaignSelector;
            /** Returns the type of this entity as a String, in this case, "BiddingStrategy". */
            getEntityType(): string;
            /** Returns the ID of the bidding strategy. */
            getId(): number;
            /** Returns the name of the bidding strategy. */
            getName(): string;
            /** Returns the type of the bidding strategy. */
            getType(): string;
            /** Returns the selector of all keywords that use this bidding strategy. */
            keywords(): KeywordSelector;
            /** Returns the selector of all shopping ad groups that use this bidding strategy. */
            shoppingAdGroups(): ShoppingAdGroupSelector;
            /** Returns the selector of all shopping campaigns that use this bidding strategy. */
            shoppingCampaigns(): ShoppingCampaignSelector;
        }

        /**
         * An iterator of bidding strategies.
         *
         * Typical usage:
         *
         *      while (biddingStrategyIterator.hasNext()) {
         *        var biddingStrategy = biddingStrategyIterator.next();
         *      }
         */
        interface BiddingStrategyIterator extends Base.Iterator<BiddingStrategy> {}

        /**
         * Fetches bidding strategies. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var biddingStrategySelector = AdsApp
         *          .biddingStrategies()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var biddingStrategyIterator = biddingStrategySelector.get();
         *      while (biddingStrategyIterator.hasNext()) {
         *        var biddingStrategy = biddingStrategyIterator.next();
         *      }
         */
        interface BiddingStrategySelector
            extends Base.Selector<BiddingStrategyIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
