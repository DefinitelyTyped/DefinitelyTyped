declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AdGroupSitelink extends Sitelink {
            getAdGroup(): AdGroup;
            getBaseAdGroup(): AdGroup;
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface AdGroupSitelinkIterator extends Base.Iterator<AdGroupSitelink> {}

        interface AdGroupSitelinkSelector
            extends Base.Selector<AdGroupSitelinkIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
