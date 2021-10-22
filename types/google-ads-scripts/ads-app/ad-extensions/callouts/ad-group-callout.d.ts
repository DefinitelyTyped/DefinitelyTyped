declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AdGroupCallout extends Callout {
            getAdGroup(): AdGroup;
            getBaseAdGroup(): AdGroup;
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface AdGroupCalloutIterator extends Base.Iterator<AdGroupCallout> {}

        interface AdGroupCalloutSelector
            extends Base.Selector<AdGroupCalloutIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
