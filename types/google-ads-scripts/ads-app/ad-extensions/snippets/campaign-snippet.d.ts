declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignSnippet extends Snippet {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignSnippetIterator extends Base.Iterator<CampaignSnippet> {}

        interface CampaignSnippetSelector
            extends Base.Selector<CampaignSnippetIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
