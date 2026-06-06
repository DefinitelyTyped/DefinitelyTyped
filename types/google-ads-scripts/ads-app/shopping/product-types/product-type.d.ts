declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface ProductType extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product type. */
            children(): ProductGroupSelector;
            /** Converts the product type into a negative product type. */
            exclude(): void;
            /** Returns the shopping ad group to which this product type belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product type belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ProductType". */
            getEntityType(): string;
            /** Returns the ID of the product type. */
            getId(): number;
            /** Returns the max cpc bid of the product type, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the name of the product type. */
            getType(): string;
            /** Returns the value of the product type or null if this is the root product group. */
            getValue(): string;
            /** Converts the product type into a positive product type. */
            include(): void;
            /** Returns true if this is an excluded product type. */
            isExcluded(): boolean;
            /** Returns true if the product type is a catch-all product type. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product type is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product type or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product type. */
            remove(): void;
            /** Will remove all child product groups of this product type. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product type to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductType objects. */
        interface ProductTypeBuilder extends Base.Builder<ProductTypeOperation> {
            /** Specifies the bid of the product type. */
            withBid(bid: number): this;
            /** Specifies the value of the product type. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product type. */
        interface ProductTypeOperation extends Base.Operation<ProductType> {}
    }
}
