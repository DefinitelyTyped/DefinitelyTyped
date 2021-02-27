// Type definitions for Google Ads Scripts 2021-02-27
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./phone-number.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AdGroupPhoneNumber extends PhoneNumber {
            getAdGroup(): AdGroup;
            getBaseAdGroup(): AdGroup;
            getBaseCampaign(): Campaign;
            getCampaign(): Campaign;
        }
  
        interface AdGroupPhoneNumberIterator extends Base.Iterator<AdGroupPhoneNumber> {}
  
        interface AdGroupPhoneNumberSelector
            extends Base.Selector<AdGroupPhoneNumberIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
  }
  
