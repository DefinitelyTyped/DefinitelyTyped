declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Provides access to a shopping audience's bidding fields. */
        interface ShoppingAudienceBidding {
            /** Clears the bid modifier value. */
            clearBidModifier(): void;
            /** Returns the current bid modifier value. */
            getBidModifier(): number;
            /** Sets the bid modifier value for this audience to the specified value. */
            setBidModifier(modifier: string): void;
        }

        /** Represents a Google Ads audience, either `USER_INTEREST` or `USER_LIST`, configured for shopping campaigns. */
        interface ShoppingCampaignAudience extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): ShoppingAudienceBidding;
            /** Returns the audience ID of the audience. */
            getAudienceId(): number;
            /** Returns the type of the audience, either `USER_INTEREST` or `USER_LIST`. */
            getAudienceType(): string;
            /** Returns the campaign to which this audience belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the ID of the shopping audience. */
            getId(): number;
            /** Returns the name of the audience. */
            getName(): string;
            /** Returns true if the shopping audience is enabled. */
            isEnabled(): boolean;
            /** Returns true if the shopping audience is paused. */
            isPaused(): boolean;
            /** Removes the shopping audience. */
            remove(): void;
        }

        /**
         * Builder for ShoppingCampaignAudience objects.
         *
         * Example usage:
         *
         *  var audienceBuilder = shoppingCampaign.targeting().newUserListBuilder();
         *  var audienceOperation = audienceBuilder
         *      .withAudienceId(3)              // required
         *      .build();                       // add the audience
         *
         *  var audience = audienceOperation.getResult();
         */
        interface ShoppingCampaignAudienceBuilder extends Base.Builder<ShoppingCampaignAudienceOperation> {
            /** Sets the audience ID of the audience. */
            withAudienceId(audienceId: number): ShoppingCampaignAudienceBuilder;
            /** Sets the bid modifier value for this audience to the specified value. */
            withBidModifier(modifier: number): ShoppingCampaignAudienceBuilder;
        }

        /**
         * An iterator of shopping audiences.
         *
         * Typical usage:
         *
         *      while (shoppingAudienceIterator.hasNext()) {
         *        var shoppingAudience = shoppingAudienceIterator.next();
         *      }
         */
        interface ShoppingCampaignAudienceIterator extends Base.Iterator<ShoppingCampaignAudience> {}

        /** An operation representing creation of a new shopping audience. */
        interface ShoppingCampaignAudienceOperation extends Base.Operation<ShoppingCampaignAudience> {}

        /**
         * Fetches shopping audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var shoppingAudienceSelector = AdsApp.shoppingCampaignTargeting()
         *          .audiences()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var shoppingAudienceIterator = shoppingAudienceSelector.get();
         *      while (shoppingAudienceIterator.hasNext()) {
         *        var shoppingAudience = shoppingAudienceIterator.next();
         *      }
         */
        interface ShoppingCampaignAudienceSelector
            extends Base.Selector<ShoppingCampaignAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
