declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents a Google Ads excluded Keyword in a Video Campaign. */
        interface ExcludedVideoKeyword {
            /** Returns the type of this entity as a String, in this case, "ExcludedVideoKeyword". */
            getEntityType(): string;
            /** Returns the ID of the excluded video keyword. */
            getId(): number;
            /** Returns the text of the excluded video keyword. */
            getText(): string;
            /** Returns the ad group to which this excluded video keyword belongs. */
            getVideoAdGroup(): VideoAdGroup;
            /** Returns the campaign to which this excluded video keyword belongs. */
            getVideoCampaign(): VideoCampaign;
            /** Removes the excluded video keyword. */
            remove(): void;
        }

        /**
         * An iterator of excluded video keywords.
         *
         * Typical usage:
         *
         *  while (excludedVideoKeywordIterator.hasNext()) {
         *    var excludedVideoKeyword = excludedVideoKeywordIterator.next();
         *  }
         */
        interface ExcludedVideoKeywordIterator extends Base.Iterator<ExcludedVideoKeyword> {}

        /** An operation representing creation of a new excluded video keyword.  */
        interface ExcludedVideoKeywordOperation extends Base.Operation<ExcludedVideoKeyword> {}

        /**
         * Fetches excluded video keywords. Supports filtering and sorting.
         *
         * Typical usage:
         *
         *      var excludedVideoKeywordSelector = AdsApp.videoTargeting()
         *          .excludedVideoKeywords()
         *          .withCondition("AdGroupStatus = 'ENABLED'")
         *          .orderBy("AdGroupName DESC");
         *
         *      var excludedVideoKeywordIterator = excludedVideoKeywordSelector.get();
         *      while (excludedVideoKeywordIterator.hasNext()) {
         *        var excludedVideoKeyword = excludedVideoKeywordIterator.next();
         *      }
         */
        interface ExcludedVideoKeywordSelector
            extends Base.Selector<ExcludedVideoKeywordIterator>,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
