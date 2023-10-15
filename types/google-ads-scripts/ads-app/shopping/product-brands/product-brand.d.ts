declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product brand. */
        interface ProductBrand extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product brand. */
            children(): ProductGroupSelector;
            /** Converts the product brand into a negative product brand. */
            exclude(): void;
            /** Returns the shopping ad group to which this product brand belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product brand belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ProductBrand". */
            getEntityType(): string;
            /** Returns the ID of the product brand. */
            getId(): number;
            /** Returns the max cpc bid of the product brand, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the name of the product brand. */
            getName(): string;
            /** Returns the value of the product brand or null if this is the root product group. */
            getValue(): string;
            /** Converts the product brand into a positive product brand. */
            include(): void;
            /** Returns true if this is an excluded product brand. */
            isExcluded(): boolean;
            /** Returns true if the product brand is a catch-all product brand. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product brand is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product brand or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product brand. */
            remove(): void;
            /** Will remove all child product groups of this product brand. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product brand to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductBrand objects. */
        interface ProductBrandBuilder extends Base.Builder<ProductBrandOperation> {
            /** Specifies the bid of the product brand. */
            withBid(bid: number): this;
            /** Specifies the name of the new product brand. */
            withName(productBrandName: string): this;
            /** Specifies the value of the product brand. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product brand. */
        interface ProductBrandOperation extends Base.Operation<ProductBrand> {}
    }
}
