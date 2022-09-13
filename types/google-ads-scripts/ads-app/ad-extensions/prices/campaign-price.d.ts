declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignPrice extends Price {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignPriceIterator extends Base.Iterator<CampaignPrice> {}

        interface CampaignPriceSelector
            extends Base.Selector<CampaignPriceIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
