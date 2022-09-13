declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignSitelink extends Sitelink {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignSitelinkIterator extends Base.Iterator<CampaignSitelink> {}

        interface CampaignSitelinkSelector
            extends Base.Selector<CampaignSitelinkIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
