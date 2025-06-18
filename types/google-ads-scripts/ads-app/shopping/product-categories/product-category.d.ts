declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product category. */
        interface ProductCategory extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product category. */
            children(): ProductGroupSelector;
            /** Converts the product category into a negative product category. */
            exclude(): void;
            /** Returns the shopping ad group to which this product category belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product category belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the name of the country of the product category or null if this is an other case. */
            getCountry(): string;
            /** Returns the type of this entity as a String, in this case, "ProductCategory". */
            getEntityType(): string;
            /** Returns the ID of the product category. */
            getId(): number;
            /** Returns the max cpc bid of the product category, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the name of the product category or null if this is an other case. */
            getName(): string;
            /** Returns the value of the product category or null if this is the root product group. */
            getValue(): string;
            /** Converts the product category into a positive product category. */
            include(): void;
            /** Returns true if this is an excluded product category. */
            isExcluded(): boolean;
            /** Returns true if the product category is a catch-all product category. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product category is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product category or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product category. */
            remove(): void;
            /** Will remove all child product groups of this product category. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product category to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductCategory objects. */
        interface ProductCategoryBuilder extends Base.Builder<ProductCategoryOperation> {
            /** Specifies the bid of the product category. */
            withBid(bid: number): this;
            /** Specifies the name of the new product category. */
            withName(productCategoryName: string): this;
            /** Specifies the value of the product category. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product category. */
        interface ProductCategoryOperation extends Base.Operation<ProductCategory> {}
    }
}
