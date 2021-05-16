declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Provides access to shopping ad group-level targeting criteria (currently just audiences).
         *
         * For instance, to select all audiences targeted by shopping ad groups you might use:
         *
         *      var shoppingAudienceSelector = AdsApp.shoppingAdGroupTargeting()
         *       .audiences()
         *       .withCondition("Impressions > 100")
         *       .forDateRange("LAST_MONTH")
         *       .orderBy("Clicks DESC");
         *
         *      var shoppingAudienceIterator = shoppingAudienceSelector.get();
         *      while (shoppingAudienceIterator.hasNext()) {
         *        var shoppingAudience = shoppingAudienceIterator.next();
         *      }
         */
        interface AccountShoppingAdGroupTargeting {
            /** Specializes this selector to return ShoppingAdGroupAudience criteria. */
            audiences(): ShoppingAdGroupAudienceSelector;
        }

        /** Represents a shopping ad group. */
        interface ShoppingAdGroup extends Base.StatsFor {
            /** Returns the selector of all product ads in the shopping ad group. */
            ads(): ProductAdSelector;
            /** Applies a label to the shopping ad group. */
            applyLabel(name: string): void;
            /** Provides access to this shopping ad group's bidding fields. */
            bidding(): ShoppingAdGroupBidding;
            /** Creates a new negative keyword with the specified text. */
            createNegativeKeyword(): void;
            /** Creates the root product group of the shopping ad group (if one doesn't already exist). */
            createRootProductGroup(): ProductGroupOperation;
            /** Returns an AdGroupDevices instance associated with the shopping ad group. */
            devices(): AdGroupDevices;
            /** Enables the shopping ad group. */
            enable(): void;
            /** Returns the shopping campaign to which this shopping ad group belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ShoppingAdGroup". */
            getEntityType(): string;
            /** Returns the ID of the shopping ad group. */
            getId(): number;
            /** Returns the mobile bid modifier for this ad group. */
            getMobileBidModifier(): number;
            /** Returns the name of the shopping ad group. */
            getName(): string;
            /** Returns true if the shopping ad group is enabled. */
            isEnabled(): boolean;
            /** Returns true if the shopping ad group is paused. */
            isPaused(): boolean;
            /** Returns true if the shopping ad group is removed. */
            isRemoved(): boolean;
            /** Creates a selector of all labels applied to the shopping ad group. */
            labels(): LabelSelector;
            /** Returns a selector of all negative keywords in the ad group. */
            negativeKeywords(): NegativeKeywordSelector;
            /** Returns a product ad builder. */
            newAdBuilder(): ProductAdBuilder;
            /** Pauses the shopping ad group. */
            pause(): void;
            /** Returns the selector of all product groups in the shopping ad group. */
            productGroups(): ProductGroupSelector;
            /** Removes a label from the shopping ad group. */
            removeLabel(name: string): void;
            /** Returns the root product group of the shopping ad group or null if one does not exist. */
            rootProductGroup(): ProductGroup;
            /** Sets the mobile bid modifier for this ad group to the specified value. */
            setMobileBidModifier(modifier: number): void;
            /** Sets the name of the shopping ad group. */
            setName(name: string): void;
            /** Provides access to this shopping ad group's targeting criteria: audiences */
            targeting(): ShoppingAdGroupTargeting;
        }

        interface ShoppingAdGroupBidding {
            /** Returns the max CPC bid for this shopping ad group. */
            getCpc(): number;
            /** Returns the flexible bidding strategy of the shopping ad group. */
            getStrategy(): BiddingStrategy;
            /**
             * Returns the bidding strategy source of this shopping ad group.
             *
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this shopping ad group. */
            getStrategyType(): string;
            /** Sets the max CPC bid for this shopping ad group. */
            setCpc(cpc: number): void;
        }

        interface ShoppingAdGroupBuilder extends Base.Builder<ShoppingAdGroupOperation> {
            /** Sets the max CPC bid of the new shopping ad group to the specified value. */
            withCpc(cpc: number): this;
            /** Sets the name of the new shopping ad group to the specified value. */
            withName(name: string): this;
            /** Sets the status of the new shopping ad group to the specified value. */
            withStatus(status: string): this;
        }

        /**
         * An iterator of shopping ad groups.
         *
         * Typical usage:
         *
         *      while (shoppingAdGroupIterator.hasNext()) {
         *        var shoppingAdGroup = shoppingAdGroupIterator.next();
         *      }
         */
        interface ShoppingAdGroupIterator extends Base.Iterator<ShoppingAdGroup> {}

        /** An operation representing creation of a new shopping ad group. */
        interface ShoppingAdGroupOperation extends Base.Operation<ShoppingAdGroup> {}

        /**
         * Fetches shopping ad groups. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var shoppingAdGroupSelector = AdsApp
         *          .shoppingAdGroups()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var shoppingAdGroupIterator = shoppingAdGroupSelector.get();
         *      while (shoppingAdGroupIterator.hasNext()) {
         *        var shoppingAdGroup = shoppingAdGroupIterator.next();
         *      }
         */
        interface ShoppingAdGroupSelector
            extends Base.Selector<ShoppingAdGroupIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}

        /**
         * Access to ad group-level targeting criteria.
         *
         * For instance, to select all audiences targeted by an ad group you might use:
         *
         *      var adgroup = AdsApp.shoppingAdGroups().get().next();
         *      var audiences = adgroup.targeting().audiences().get();
         *      while (audiences.hasNext()) {
         *        var audience = audiences.next();
         *      }
         */
        interface ShoppingAdGroupTargeting {
            /** Specializes this selector to return ShoppingAdGroupAudience criteria. */
            audiences(): ShoppingAdGroupAudienceSelector;
            /** Returns the current targeting setting of the specified criterion type group for this shopping ad group. */
            getTargetingSetting(criterionTypeGroup: string): string;
            /** Returns a new user list audience builder for this ad group. */
            newUserListBuilder(): ShoppingAdGroupAudienceBuilder;
            /** Sets the targeting setting for this ad group. */
            setTargetingSetting(criterionTypeGroup: string, targetingSetting: string): void;
        }
    }
}
