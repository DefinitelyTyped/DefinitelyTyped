declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Represents a Google Ads negative keyword.
         *
         * Negative keywords can exist either at the ad group level or the campaign level.
         */
        interface NegativeKeyword {
            /** Returns the AdGroup to which the negative keyword belongs. */
            getAdGroup(): AdGroup;
            /** Returns the base AdGroup to which the negative keyword belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this negative keyword belongs or null if it does not belong to a search or display campaign. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this negative keyword belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the campaign type. */
            getCampaignType(): string;
            /** Returns the type of this entity as a String, in this case, "NegativeKeyword". */
            getEntityType(): string;
            /** Returns the match type of the negative keyword. */
            getMatchType(): string;
            /** Returns the ShoppingAdGroup to which the negative keyword belongs. */
            getShoppingAdGroup(): ShoppingAdGroup;
            /** Returns the shopping campaign to which this negative keyword belongs or null if it does not belong to a shopping campaign. */
            getShoppingCampaign(): ShoppingCampaign;
            /** Returns the text of the negative keyword. */
            getText(): string;
            /** Removes the negative keyword. */
            remove(): void;
        }

        /**
         * An iterator of negative keywords.
         *
         * Typical usage:
         *
         *  while (negativeKeywordIterator.hasNext()) {
         *    var negativeKeyword = negativeKeywordIterator.next();
         *  }
         */
        interface NegativeKeywordIterator extends Base.Iterator<NegativeKeyword> {}

        /**
         * Fetches negative keywords (except from shared libraries).
         *
         * Typical usage:
         *
         *      var adGroup = AdsApp.adGroups().get().next();
         *      var negativeKeywordSelector = adGroup.negativeKeywords();
         *
         *      var negativeKeywordIterator = negativeKeywordSelector.get();
         *      while (negativeKeywordIterator.hasNext()) {
         *        var negativeKeyword = negativeKeywordIterator.next();
         *      }
         */
        interface NegativeKeywordSelector
            extends Base.Selector<NegativeKeywordIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
