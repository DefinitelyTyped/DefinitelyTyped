// Type definitions for Google Ads Scripts 2021-02-26
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./callouts/callout.d.ts" />
/// <reference path="./messages/message.d.ts" />
/// <reference path="./mobile-apps/mobile-app.d.ts" />
/// <reference path="./phone-numbers/phone-number.d.ts" />
/// <reference path="./prices/price.d.ts" />
/// <reference path="./sitelinks/sitelink.d.ts" />
/// <reference path="./snippets/snippet.d.ts" />

/// <reference path="./callouts/account-callout.d.ts" />
/// <reference path="./messages/account-message.d.ts" />
/// <reference path="./mobile-apps/account-mobile-app.d.ts" />
/// <reference path="./phone-numbers/account-phone-number.d.ts" />
/// <reference path="./prices/account-price.d.ts" />
/// <reference path="./sitelinks/account-sitelink.d.ts" />
/// <reference path="./snippets/account-snippet.d.ts" />

/// <reference path="./callouts/ad-group-callout.d.ts" />
/// <reference path="./messages/ad-group-message.d.ts" />
/// <reference path="./mobile-apps/ad-group-mobile-app.d.ts" />
/// <reference path="./phone-numbers/ad-group-phone-number.d.ts" />
/// <reference path="./prices/ad-group-price.d.ts" />
/// <reference path="./sitelinks/ad-group-sitelink.d.ts" />
/// <reference path="./snippets/ad-group-snippet.d.ts" />

/// <reference path="./callouts/campaign-callout.d.ts" />
/// <reference path="./messages/campaign-message.d.ts" />
/// <reference path="./mobile-apps/campaign-mobile-app.d.ts" />
/// <reference path="./phone-numbers/campaign-phone-number.d.ts" />
/// <reference path="./prices/campaign-price.d.ts" />
/// <reference path="./sitelinks/campaign-sitelink.d.ts" />
/// <reference path="./snippets/campaign-snippet.d.ts" />

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface Extensions {
            /** Returns the selector of all callouts in the account. */
            callouts(): CalloutSelector;
            /** Returns the selector of all messages in the account. */
            messages(): MessageSelector;
            /** Returns the selector of all mobile apps in the account. */
            mobileApps(): MobileAppSelector;
            /** Returns a new callout builder for this account. */
            newCalloutBuilder(): CalloutBuilder;
            /** Returns a new message builder for this account. */
            newMessageBuilder(): MessageBuilder;
            /** Returns a new mobile app builder for this account. */
            newMobileAppBuilder(): MobileAppBuilder;
            /** Returns a new phone number builder for this account. */
            newPhoneNumberBuilder(): PhoneNumberBuilder;
            /** Returns a new price builder for this account. */
            newPriceBuilder(): PriceBuilder;
            /** Returns a new price item builder for this account. */
            newPriceItemBuilder(): PriceItemBuilder;
            /** Returns a new sitelink builder for this account. */
            newSitelinkBuilder(): SitelinkBuilder;
            /** Returns a new snippet builder for this account. */
            newSnippetBuilder(): SnippetBuilder;
            /** Returns the selector of all phone numbers in the account. */
            phoneNumbers(): PhoneNumberSelector;
            /** Returns the selector of all prices in the account. */
            prices(): PriceSelector;
            /** Returns the selector of all sitelinks in the account. */
            sitelinks(): SitelinkSelector;
            /** Returns the selector of all snippets in the account. */
            snippets(): SnippetSelector;
        }

        interface AccountExtensions {
            /** Returns the selector of all callouts to the account. */
            callouts(): AccountCalloutSelector;
            /** Returns the selector of all messages to the account. */
            messages(): AccountMessageSelector;
            /** Returns the selector of all mobile apps to the account. */
            mobileApps(): AccountMobileAppSelector;
            /** Returns the selector of all phone numbers to the account. */
            phoneNumbers(): AccountPhoneNumberSelector;
            /** Returns the selector of all prices to the account. */
            prices(): AccountPriceSelector;
            /** Returns the selector of all sitelinks to the account. */
            sitelinks(): AccountSitelinkSelector;
            /** Returns the selector of all snippets to the account. */
            snippets(): AccountSnippetSelector;
        }

        interface AdGroupExtensions {
            /** Returns the selector of all callouts to the ad group. */
            callouts(): AdGroupCalloutSelector;
            /** Returns the selector of all messages to the ad group. */
            messages(): AdGroupMessageSelector;
            /** Returns the selector of all mobile apps to the ad group. */
            mobileApps(): AdGroupMobileAppSelector;
            /** Returns the selector of all phone numbers to the ad group. */
            phoneNumbers(): AdGroupPhoneNumberSelector;
            /** Returns the selector of all prices to the ad group. */
            prices(): AdGroupPriceSelector;
            /** Returns the selector of all sitelinks to the ad group. */
            sitelinks(): AdGroupSitelinkSelector;
            /** Returns the selector of all snippets to the ad group. */
            snippets(): AdGroupSnippetSelector;
        }

        interface CampaignExtensions {
            /** Returns the selector of all callouts to the campaign. */
            callouts(): CampaignCalloutSelector;
            /** Returns the selector of all messages to the campaign. */
            messages(): CampaignMessageSelector;
            /** Returns the selector of all mobile apps to the campaign. */
            mobileApps(): CampaignMobileAppSelector;
            /** Returns the selector of all phone numbers to the campaign. */
            phoneNumbers(): CampaignPhoneNumberSelector;
            /** Returns the selector of all prices to the campaign. */
            prices(): CampaignPriceSelector;
            /** Returns the selector of all sitelinks to the campaign. */
            sitelinks(): CampaignSitelinkSelector;
            /** Returns the selector of all snippets to the campaign. */
            snippets(): CampaignSnippetSelector;
        }
    }
}
