// Type definitions for Google Ads Scripts 2021-02-24
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** A calendar date broken down into year, month, and day. */
        interface GoogleAdsDate {
            /** The day of month (1 to 31) for this date. */
            year: number;
            /** The month index for this date, where 1 corresponds to January, 2 to February, and so on. */
            month: number;
            /** The year for this date. */
            day: number;
        }
    }
}
