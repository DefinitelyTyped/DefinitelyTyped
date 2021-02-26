// Type definitions for Google Ads Scripts 2021-02-25
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./google-ads-date.d.ts" />
/// <reference path="./stats.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /** Miscellaneous information about Google Ads Accounts. When accessed by `AdsApp.currentAccount()`, it will provide information about the account in which the script is currently running. */
        interface Account {
            /** Adds a callout extension to this account. */
            addCallout(calloutExtension: Callout): CalloutOperation;
            /** Adds a mobile app extension to this account. */
            addMobileApp(mobileAppExtension: MobileApp): MobileAppOperation;
            /** Adds a price extension to this account. */
            addPrice(priceExtension: Price): PriceOperation;
            /** Adds a sitelink extension to this account. */
            addSitelink(sitelinkExtension: Sitelink): SitelinkOperation;
            /** Adds a snippet extension to this account. */
            addSnippet(snippetExtension: Snippet): SnippetOperation;
            /** Provides access to account - level extensions: AccountCallout, AccountMessage, AccountMobileApp, AccountPhoneNumber, AccountSitelink, and AccountSnippet. */
            extensions(): AccountExtensions;
            /** Returns the currency code of the account. */
            getCurrencyCode(): string; // TODO: Add Currency Code Enum
            /** Returns the customer ID of the account. */
            getCustomerId(): string;
            /** Returns the type of this entity as a String, in this case, "Account". */
            getEntityType(): string;
            /** Returns the name of the account. */
            getName(): string;
            /** Returns stats for the specified date range. */
            getStatsFor(dateRange: Base.DateRange): Stats;
            /** Returns stats for the specified date range. */
            getStatsFor(dateFrom: string | GoogleAdsDate, dateTo: string | GoogleAdsDate): Stats;
            /** Returns the POSIX time zone of the account. */
            getTimeZone(): string; // TODO: Add Timezone Enum
            /** Removes a callout extension from this account. */
            removeCallout(calloutExtension: Callout): void;
            /** Removes a mobile app extension from this account. */
            removeMobileApp(mobileAppExtension: MobileApp): void;
            /** Removes a price extension from this account. */
            removePrice(priceExtension: Price): void;
            /** Removes a sitelink extension from this account. */
            removeSitelink(sitelinkExtension: Sitelink): void;
            /** Removes a snippet extension from this account. */
            removeSnippet(snippetExtension: Snippet): void;
        }
    }
}
