declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface CampaignPhoneNumber extends PhoneNumber {
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }

        interface CampaignPhoneNumberIterator extends Base.Iterator<CampaignPhoneNumber> {}

        interface CampaignPhoneNumberSelector
            extends Base.Selector<CampaignPhoneNumberIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
