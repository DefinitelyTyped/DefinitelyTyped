declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product condition. */
        interface ProductCondition extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product condition. */
            children(): ProductGroupSelector;
            /** Converts the product condition into a negative product condition. */
            exclude(): void;
            /** Returns the shopping ad group to which this product condition belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product condition belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the name of the product condition. */
            getCondition(): string;
            /** Returns the type of this entity as a String, in this case, "ProductCondition". */
            getEntityType(): string;
            /** Returns the ID of the product condition. */
            getId(): number;
            /** Returns the max cpc bid of the product condition, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the value of the product condition or null if this is the root product group. */
            getValue(): string;
            /** Converts the product condition into a positive product condition. */
            include(): void;
            /** Returns true if this is an excluded product condition. */
            isExcluded(): boolean;
            /** Returns true if the product condition is a catch-all product condition. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product condition is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product condition or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product condition. */
            remove(): void;
            /** Will remove all child product groups of this product condition. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product condition to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductCondition objects. */
        interface ProductConditionBuilder extends Base.Builder<ProductConditionOperation> {
            /** Specifies the bid of the product condition. */
            withBid(bid: number): this;
            /** Specifies the condition of the new product condition. */
            withCondition(condition: string): this;
            /** Specifies the value of the product condition. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product condition. */
        interface ProductConditionOperation extends Base.Operation<ProductCondition> {}
    }
}
