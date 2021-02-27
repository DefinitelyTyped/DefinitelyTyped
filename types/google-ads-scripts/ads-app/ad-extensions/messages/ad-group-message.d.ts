// Type definitions for Google Ads Scripts 2021-02-27
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./message.d.ts" />

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
  
