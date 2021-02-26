// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../../../base.d.ts" />
/// <reference path="./callout.d.ts" />

declare namespace GoogleAdsScripts {
    // TODO: Add doc comments
    namespace AdsApp {
        interface AccountCallout extends Callout {}

        interface AccountCalloutIterator extends Base.Iterator<AccountCallout> {}

        interface AcctountCalloutSelector
            extends Base.Selector<CalloutIterator>,
                Base.SelectorForDateRange,
                Base.SelectorOrderBy,
                Base.SelectorWithCondition,
                Base.SelectorWithLimit {}
    }
}
