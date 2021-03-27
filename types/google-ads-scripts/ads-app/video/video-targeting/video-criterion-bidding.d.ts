// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Provides access to a video criterion's bidding fields. */
        interface VideoCriterionBidding {
            /**
             * Returns the bidding strategy source of this video criterion.
             * 
             * @deprecated **Deprecated**. Google Ads does not support setting bidding strategies at different levels. As a result, 'CAMPAIGN' is the only possible source for bidding strategies.
             */
            getStrategySource(): string;
            /** Returns the bidding strategy type of this video criterion. */
            getStrategyType(): string;
        }
    }
}
