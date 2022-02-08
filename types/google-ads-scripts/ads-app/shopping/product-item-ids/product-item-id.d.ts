declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product item ID. */
        interface ProductItemId extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product item id. */
            children(): ProductGroupSelector;
            /** Converts the product item id into a negative product item id. */
            exclude(): void;
            /** Returns the shopping ad group to which this product item id belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product item id belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ProductItemId". */
            getEntityType(): string;
            /** Returns the ID of the product item id. */
            getId(): number;
            /** Returns the max cpc bid of the product item id, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the value of the product item id or null if this is the root product group. */
            getValue(): string;
            /** Converts the product item id into a positive product item id. */
            include(): void;
            /** Returns true if this is an excluded product item id. */
            isExcluded(): boolean;
            /** Returns true if the product item id is a catch-all product item id. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product item id is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product item id or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product item id. */
            remove(): void;
            /** Will remove all child product groups of this product item id. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product item id to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductItemId objects. */
        interface ProductItemIdBuilder extends Base.Builder<ProductItemIdOperation> {
            /** Specifies the bid of the product item id. */
            withBid(bid: number): this;
            /** Specifies the value of the product item id. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product item id. */
        interface ProductItemIdOperation extends Base.Operation<ProductItemId> {}
    }
}
