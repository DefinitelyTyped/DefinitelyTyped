declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads ad param. */
        interface AdParam {
            /** Returns the ad group to which this ad param belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base ad group to which this ad param belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the type of this entity as a String, in this case, "AdParam". */
            getEntityType(): string;
            /** Returns the index of the ad param. */
            getIndex(): number;
            /** Returns the insertion text of the ad param. */
            getInsertionText(): string;
            /** Returns the Keyword the ad param belongs to. */
            getKeyword(): Keyword;
            /** Removes the ad param. */
            remove(): void;
            /** Sets the insertion text of the ad param to the specified value. */
            setInsertionText(insertionText: string): void;
        }

        /**
         * An iterator of ad params.
         *
         * Typical usage:
         *
         *      while (adParamIterator.hasNext()) {
         *        var adParam = adParamIterator.next();
         *      }
         */
        interface AdParamIterator extends Base.Iterator<AdParam> {}

        /**
         * Fetches ad params. Unlike other selectors, does not support filtering or sorting.
         */
        interface AdParamSelector extends Base.Selector<AdParamIterator> {}
    }
}
