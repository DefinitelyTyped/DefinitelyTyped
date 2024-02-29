declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product channel. */
        interface ProductChannel extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product channel. */
            children(): ProductGroupSelector;
            /** Converts the product channel into a negative product channel. */
            exclude(): void;
            /** Returns the shopping ad group to which this product channel belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product channel belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the name of this product channel. */
            getChannel(): string;
            /** Returns the type of this entity as a String, in this case, "ProductChannel". */
            getEntityType(): string;
            /** Returns the ID of the product channel. */
            getId(): number;
            /** Returns the max cpc bid of the product channel, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the value of the product channel or null if this is the root product group. */
            getValue(): string;
            /** Converts the product channel into a positive product channel. */
            include(): void;
            /** Returns true if this is an excluded product channel. */
            isExcluded(): boolean;
            /** Returns true if the product channel is a catch-all product channel. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product channel is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product channel or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product channel. */
            remove(): void;
            /** Will remove all child product groups of this product channel. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product channel to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductChannel objects. */
        interface ProductChannelBuilder extends Base.Builder<ProductChannelOperation> {
            /** Specifies the bid of the product channel. */
            withBid(bid: number): this;
            /** Specifies the channel of the new product channel. */
            withChannel(channel: string): this;
            /** Specifies the value of the product channel. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product channel. */
        interface ProductChannelOperation extends Base.Operation<ProductChannel> {}
    }
}
