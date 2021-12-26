declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AdGroupMessage extends Message {
            getAdGroup(): AdGroup;
            getBaseAdGroup(): AdGroup;
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface AdGroupMessageIterator extends Base.Iterator<AdGroupMessage> {}

        interface AdGroupMessageSelector
            extends Base.Selector<AdGroupMessageIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
