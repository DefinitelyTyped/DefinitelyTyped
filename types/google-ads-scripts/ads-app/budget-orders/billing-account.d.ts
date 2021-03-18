// Type definitions for Google Ads Scripts
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Represents an account to which invoices are sent in consolidated billing. */
        interface BillingAccount {
            /** Returns the ID of the billing account. */
            getId(): number;
            /** Returns the name of the billing account. */
            getName(): string;
            /** Returns the primary billing ID. */
            getPrimaryBillingId(): string;
            /** Returns the secondary billing ID or null if there is no secondary billing account. */
            getSecondaryBillingId(): string;
        }
    }
}
