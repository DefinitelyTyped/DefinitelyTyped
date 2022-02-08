declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a product custom label. */
        interface ProductCustomLabel extends Base.StatsFor {
            /** Returns a selector of the child product groups of this product custom label. */
            children(): ProductGroupSelector;
            /** Converts the product custom label into a negative product custom label. */
            exclude(): void;
            /** Returns the shopping ad group to which this product custom label belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product custom label belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the type of this entity as a String, in this case, "ProductCustomLabel". */
            getEntityType(): string;
            /** Returns the ID of the product custom label. */
            getId(): number;
            /** Returns the max cpc bid of the product custom label, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the type of the product custom label. */
            getType(): string;
            /** Returns the value of the product custom label or null if this is the root product group. */
            getValue(): string;
            /** Converts the product custom label into a positive product custom label. */
            include(): void;
            /** Returns true if this is an excluded product custom label. */
            isExcluded(): boolean;
            /** Returns true if the product custom label is a catch-all product custom label. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product custom label is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product custom label or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product custom label. */
            remove(): void;
            /** Will remove all child product groups of this product custom label. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product custom label to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Builder for ProductCustomLabel objects. */
        interface ProductCustomLabelBuilder extends Base.Builder<ProductCustomLabelOperation> {
            /** Specifies the bid of the product custom label. */
            withBid(bid: number): this;
            /** Specifies the type of custom label and return the product custom label builder. */
            withType(type: string): this;
            /** Specifies the value of the product custom label. */
            withValue(value: string): this;
        }

        /** An operation representing creation of a new product custom label. */
        interface ProductCustomLabelOperation extends Base.Operation<ProductCustomLabel> {}
    }
}
