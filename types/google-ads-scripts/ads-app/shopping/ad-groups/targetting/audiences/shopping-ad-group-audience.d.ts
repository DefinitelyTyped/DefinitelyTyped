declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads audience, either USER_INTEREST or USER_LIST, configured for shopping ad groups. */
        interface ShoppingAdGroupAudience extends Base.StatsFor {
            /** Provides access to this audience's bidding fields. */
            bidding(): ShoppingAudienceBidding;
            /** Returns the ad group to which this audience belongs. */
            getAdGroup(): ShoppingAdGroup;
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
         * Builder for ShoppingAdGroupAudience objects.
         *
         * Example usage:
         *
         *  var shoppingAudienceBuilder = adGroup.targeting().newUserListBuilder();
         *  var shoppingAudience = shoppingAudienceBuilder
         *    .withAudienceId(3)              // required
         *    .withBidModifier(1)             // optional
         *    .build();                       // add the audience
         */
        interface ShoppingAdGroupAudienceBuilder extends Base.Builder<ShoppingAdGroupAudienceOperation> {
            /** Sets the audience ID of the audience. */
            withAudienceId(audienceId: number): this;
            /** Sets the bid modifier value for this audience to the specified value. */
            withBidModifier(modifier: number): this;
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
        interface ShoppingAdGroupAudienceIterator extends Base.Iterator<ShoppingAdGroupAudience> {}

        /**
         * An operation representing creation of a new shopping audience.
         */
        interface ShoppingAdGroupAudienceOperation extends Base.Operation<ShoppingAdGroupAudience> {}

        /**
         * Fetches shopping audiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var shoppingAudienceSelector = AdsApp.shoppingAdGroupTargeting()
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
        interface ShoppingAdGroupAudienceSelector
            extends Base.Selector<ShoppingAdGroupAudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
