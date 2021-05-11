declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads product ad. */
        interface ProductAd extends Base.StatsFor {
            /** Applies a label to the product ad. */
            applyLabel(name: string): void;
            /** Enables the product ad. */
            enable(): void;
            /** Returns the shopping ad group to which this product ad belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product ad belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ProductAd". */
            getEntityType(): string;
            /** Returns the ID of the product ad. */
            getId(): number;
            /** Returns the type of the ad. */
            getType(): string;
            /** Returns true if the product ad is enabled. */
            isEnabled(): boolean;
            /** Returns true if the product ad specifies mobile device preference or false otherwise. */
            isMobilePreferred(): boolean;
            /** Returns true if the product ad is paused. */
            isPaused(): boolean;
            /** Creates a selector of all labels applied to the product ad. */
            labels(): LabelSelector;
            /** Pauses the product ad. */
            pause(): void;
            /** Removes the product ad. */
            remove(): void;
            /** Removes a label from the product ad. */
            removeLabel(name: string): void;
        }

        /** Builder for a product ad under construction. */
        interface ProductAdBuilder extends Base.Builder<ProductAdOperation> {
            /** Sets the new product ad's device preference to mobile or clears it. */
            withMobilePreferred(isMobilePreferred: boolean): ProductAdBuilder;
        }

        /**
         * An iterator of product ads.
         *
         * Typical usage:
         *
         *      while (productAdIterator.hasNext()) {
         *        var productAd = productAdIterator.next();
         *      }
         */
        interface ProductAdIterator extends Base.Iterator<ProductAd> {}

        /** An operation representing creation of a new product ad. */
        interface ProductAdOperation extends Base.Operation<ProductAd> {}

        /**
         * Fetches product ads. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var productAdSelector = AdsApp
         *          .productAds()
         *          .withCondition("Impressions > 100")
         *          .forDateRange("LAST_MONTH")
         *          .orderBy("Clicks DESC");
         *
         *      var productAdIterator = productAdSelector.get();
         *      while (productAdIterator.hasNext()) {
         *        var productAd = productAdIterator.next();
         *      }
         */
        interface ProductAdSelector
            extends Base.Selector<ProductAdIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
