declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents an ad customizer data source as seen in the Business Data section of the Shared Library.
         * Each ad customizer source has a unique name and a set of attributes.
         * The attributes are defined by an attribute name, which must be unique across attributes within the data source, and a type,
         * which must be one of the following: text, number, price, date.
         * An ad customizer source can have many AdCustomizerItems in it, or it can have none. Refer to the feature guide for more information.
         */
        interface AdCustomizerSource {
            /** Returns a builder for a new item in this data source. */
            adCustomizerItemBuilder(): AdCustomizerItemBuilder;
            /**
             * Returns a map from attribute name to attribute type.
             * Contains all of the attributes in this ad customizer data source.
             * For instance, a data source that contains the item attributes `item` (of type `text`), `numLeft` (of type `number`), and `lowCost` (of type `price`)
             * would return `{item: 'text', numLeft: 'number', lowCost: 'price'}`.
             */
            getAttributes(): Record<string, string | number | null>;
            /** Returns the type of this entity as a String, in this case, "AdCustomizerSource". */
            getEntityType(): string;
            /** Returns the name of the ad customizer source. */
            getName(): string;
            /** Returns the selector of all items in this ad customizer data source. */
            items(): AdCustomizerItemSelector;
        }

        /**
         * Builder for AdCustomizerSource objects. For example, to create an ad customizer source with name "Inventory", and attributes "item" (of type text),
         * "numLeft" (of type number), and "lowCost" (of type price):
         *
         *      var adCustomizerSourceBuilder = AdsApp.newAdCustomizerSourceBuilder();
         *      var adCustomizerSourceOperation = adCustomizerSourceBuilder
         *        .withName("Inventory")                                 // required
         *        .addAttribute("item", "text")                          // at least one attribute is required
         *        .addAttributes({numLeft: "number", lowCost: "price"})
         *        .build();                                              // create the ad customizer source
         */
        interface AdCustomizerSourceBuilder extends Base.Builder<AdCustomizerSourceOperation> {
            /**
             * Adds an attribute of the given name and type to the new ad customizer source. Existing attributes are not modified.
             *
             * Valid types are text, number, price, date.
             *
             * An error will be thrown if the additional attribute's name is one of start date, end date, device preference, scheduling, target campaign,
             * target ad group, keyword text, match type, keyword, id, case insensitive.
             *
             * An attribute named custom id (case insensitive) will be interpreted as a special attribute, which has the additional requirement of each item
             * in the data source having unique value for that attribute.
             */
            addAttribute(name: string, type: string): this;
            /**
             * Adds a set of attributes to the new ad customizer source. Existing attributes are not modified. The set of new attributes are specified by an object
             * where the keys are the names and the values are the respective types of the attributes. For instance,
             *
             *      var attributes = {item: "text", numLeft: "number", lowCost: "price"};
             *      var builder = AdsApp.newAdCustomizerSourceBuilder();
             *      var adCustomizerSource = builder
             *        .withName("Inventory")
             *        .addAttributes(attributes)
             *        .build();
             *
             * adds the attributes `item` (of type `text`), `numLeft` (of type `number`), and `lowCost` (of type `price`) to the new ad customizer data source named `"Inventory"`.
             * Valid attribute types are text, number, price, date.
             *
             * An error will be thrown if an additional attribute's name is one of start date, end date, device preference, scheduling, target campaign, target ad group,
             * keyword text, match type, keyword, id, case insensitive.
             */
            addAttributes(attributes: Record<string, string | number | null>): this;
            /** Sets the name of the new ad customizer source to the specified value. This field is required. */
            withName(name: string): this;
        }

        /**
         * An iterator of ad customizer sources.
         * Typical usage:
         *
         *      while (adCustomizerSourceIterator.hasNext()) {
         *        var adCustomizerSource = adCustomizerSourceIterator.next();
         *      }
         */
        interface AdCustomizerSourceIterator extends Base.Iterator<AdCustomizerSource> {}

        /**
         * An operation representing creation of a new ad customizer source.
         * Calling any method (`getErrors`, `getResult`, or `isSuccessful`) will cause the operation to execute and create the ad customizer source.
         * To make the script more efficient, it's recommended that you store the operations in an array and only call these methods once you've constructed
         * all the operations you want.
         */
        interface AdCustomizerSourceOperation extends Base.Operation<AdCustomizerSource> {}

        /**
         * Fetches ad customizer sources. Does not support filtering or sorting.
         * Typical usage:
         *
         *      var adCustomizerSourceSelector = AdsApp.adCustomizerSources();
         *
         *      var adCustomizerSourceIterator = adCustomizerSourceSelector.withLimit(5).get();
         *      while (adCustomizerSourceIterator.hasNext()) {
         *        var adCustomizerSource = adCustomizerSourceIterator.next();
         *      }
         */
        interface AdCustomizerSourceSelector
            extends Base.Selector<AdCustomizerSourceIterator>,
                Base.SelectorWithLimit {}
    }
}
