declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product channel exclusivity. */
        interface ProductChannelExclusivity extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product channel exclusivity. */
            children(): ProductGroupSelector;
            /** Converts the product channel exclusivity into a negative product channel exclusivity. */
            exclude(): void;
            /** Returns the shopping ad group to which this product channel exclusivity belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product channel exclusivity belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the name of this product channel exclusivity. */
            getChannelExclusivity(): string;
            /** Returns the type of this entity as a String, in this case, "ProductChannelExclusivity". */
            getEntityType(): string;
            /** Returns the ID of the product channel exclusivity. */
            getId(): number;
            /** Returns the max cpc bid of the product channel exclusivity, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the value of the product channel exclusivity or null if this is the root product group. */
            getValue(): string;
            /** Converts the product channel exclusivity into a positive product channel exclusivity. */
            include(): void;
            /** Returns true if this is an excluded product channel exclusivity. */
            isExcluded(): boolean;
            /** Returns true if the product channel exclusivity is a catch-all product channel exclusivity. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product channel exclusivity is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product channel exclusivity or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product channel exclusivity. */
            remove(): void;
            /** Will remove all child product groups of this product channel exclusivity. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product channel exclusivity to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductChannelExclusivity objects. */
        interface ProductChannelExclusivityBuilder extends Base.Builder<ProductChannelExclusivityOperation> {
            /** Specifies the bid of the product channel exclusivity. */
            withBid(bid: number): this;
            /** Specifies the channel exclusivity of the new product channel exclusivity. */
            withChannelExclusivity(channelExclusivity: string): this;
            /** Specifies the value of the product channel exclusivity. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product channel exclusivity. */
        interface ProductChannelExclusivityOperation extends Base.Operation<ProductChannelExclusivity> {}
    }
}
