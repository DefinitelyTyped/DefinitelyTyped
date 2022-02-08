declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignMessage extends Message {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignMessageIterator extends Base.Iterator<CampaignMessage> {}

        interface CampaignMessageSelector
            extends Base.Selector<CampaignMessageIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
