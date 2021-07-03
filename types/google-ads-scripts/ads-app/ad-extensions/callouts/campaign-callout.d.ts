declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignCallout extends Callout {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignCalloutIterator extends Base.Iterator<CampaignCallout> {}

        interface CampaignCalloutSelector
            extends Base.Selector<CampaignCalloutIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
