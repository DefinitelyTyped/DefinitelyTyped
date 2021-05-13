declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excludedAudience. */
        interface ExcludedAudience {
            /** Returns the ad group to which this excludedAudience belongs. */
            getAdGroup(): AdGroup;
            /** Returns the excludedAudience ID of the excludedAudience. */
            getAudienceId(): number;
            /** Returns the type of the excludedAudience, either USER_INTEREST or USER_LIST. */
            getAudienceType(): AudienceTypeType;
            /** Returns the base ad group to which this excludedAudience belongs. */
            getBaseAdGroup(): AdGroup;
            /** Returns the base campaign to which this excludedAudience belongs. */
            getBaseCampaign(): Campaign;
            /** Returns the campaign to which this excludedAudience belongs or null if it does not belong to a search or display campaign. */
            getCampaign(): Campaign;
            /** Returns the ID of the excludedAudience. */
            getId(): number;
            /** Removes the excludedAudience. */
            remove(): void;
        }

        /**
         * An iterator of excludedAudiences.
         *
         * Typical usage:
         *
         *      while (excludedAudienceIterator.hasNext()) {
         *        var excludedAudience = excludedAudienceIterator.next();
         *      }
         */
        interface ExcludedAudienceIterator extends Base.Iterator<ExcludedAudience> {}

        /**
         * An operation representing creation of a new excludedAudience.
         */
        interface ExcludedAudienceOperation extends Base.Operation<ExcludedAudience> {}

        /**
         * Fetches excludedAudiences. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *  var excludedAudienceSelector = AdsApp.display()
         *      .excludedAudiences()
         *      .withCondition("Impressions > 100")
         *      .forDateRange("LAST_MONTH")
         *      .orderBy("Clicks DESC");
         *
         *  var excludedAudienceIterator = excludedAudienceSelector.get();
         *  while (excludedAudienceIterator.hasNext()) {
         *    var excludedAudience = excludedAudienceIterator.next();
         *  }
         */
        interface ExcludedAudienceSelector
            extends Base.Selector<AudienceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithIds,
                Base.SelectorWithLimit {}
    }
}
