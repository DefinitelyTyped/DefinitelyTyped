declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignMobileApp extends MobileApp {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignMobileAppIterator extends Base.Iterator<CampaignMobileApp> {}

        interface CampaignMobileAppSelector
            extends Base.Selector<CampaignMobileAppIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
