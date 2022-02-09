declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a generic product group. */
        interface ProductGroup extends Base.StatsFor {
            /** Returns this product group represented as a product brand. */
            asBrand(): ProductBrand;
            /** Returns this product group represented as a product category. */
            asCategory(): ProductCategory;
            /** Returns this product group represented as a product channel. */
            asChannel(): ProductChannel;
            /** Returns this product group represented as a product channel exclusivity. */
            asChannelExclusivity(): ProductChannelExclusivity;
            /** Returns this product group represented as a product condition. */
            asCondition(): ProductCondition;
            /** Returns this product group represented as a product custom label. */
            asCustomLabel(): ProductCustomLabel;
            /** Returns this product group represented as a product item ID. */
            asItemId(): ProductItemId;
            /** Returns this product group represented as a product type. */
            asProductType(): ProductType;
            /** Returns a selector of the child product groups of this product group. */
            children(): ProductGroupSelector;
            /** Converts the product group into a negative product group. */
            exclude(): void;
            /** Returns the shopping ad group to which this product group belongs. */
            getAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this product group belongs. */
            getCampaign(): ShoppingCampaign;
            /** Returns the dimension of the product group. */
            getDimension(): string;
            /** Returns the type of this entity as a String, in this case, "ProductGroup". */
            getEntityType(): string;
            /** Returns the ID of the product group. */
            getId(): number;
            /** Returns the max cpc bid of the product group, in the currency of the account. */
            getMaxCpc(): number;
            /** Returns the value of the product group or null if this is the root product group. */
            getValue(): string;
            /** Converts the product group into a positive product group. */
            include(): void;
            /** Returns true if this is an excluded product group. */
            isExcluded(): boolean;
            /** Returns true if the product group is a catch-all product group. */
            isOtherCase(): boolean;
            /** Returns access to the product group builder space or null if the product group is excluded. */
            newChild(): ProductGroupBuilderSpace;
            /** Returns the parent product group of this product group or null if this is the root product group. */
            parent(): ProductGroup;
            /** Removes the product group. */
            remove(): void;
            /** Will remove all child product groups of this product group. */
            removeAllChildren(): void;
            /** Sets the max cpc bid of the product group to the specified value. */
            setMaxCpc(maxCpc: number): void;
        }

        /** Access to product group builders via the ProductGroup.newChild() method. */
        interface ProductGroupBuilderSpace {
            /** Returns a product brand builder. */
            brandBuilder(): ProductBrandBuilder;
            /** Returns a product category builder. */
            categoryBuilder(): ProductCategoryBuilder;
            /** Returns a product channel builder. */
            channelBuilder(): ProductChannelBuilder;
            /** Returns a product channel exclusivity builder. */
            channelExclusivityBuilder(): ProductChannelExclusivityBuilder;
            /** Returns a product condition builder. */
            conditionBuilder(): ProductConditionBuilder;
            /** Returns a product custom label builder. */
            customLabelBuilder(): ProductCustomLabelBuilder;
            /** Returns a product item ID builder. */
            itemIdBuilder(): ProductItemIdBuilder;
            /** Returns a product type builder. */
            productTypeBuilder(): ProductTypeBuilder;
        }

        /**
         * An iterator of product groups.
         *
         * Typical usage:
         *
         *      while (productGroupIterator.hasNext()) {
         *        var productGroup = productGroupIterator.next();
         *      }
         */
        interface ProductGroupIterator extends Base.Iterator<ProductGroup> {}

        /** An operation representing creation of a new product group. */
        interface ProductGroupOperation extends Base.Operation<ProductGroup> {}

        interface ProductGroupSelector
            extends Base.Selector<ProductGroupIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
