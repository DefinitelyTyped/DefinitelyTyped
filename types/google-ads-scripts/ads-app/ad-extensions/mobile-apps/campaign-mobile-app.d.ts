// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./mobile-app.d.ts" />

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
