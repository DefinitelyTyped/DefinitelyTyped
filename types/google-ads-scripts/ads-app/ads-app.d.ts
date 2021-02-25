// Type definitions for Google Ads Scripts 2021-02-24
// Project: https://developers.google.com/google-ads/scripts
// Definitions by: JJPell <https://github.com/JJPell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAdsScripts {
    namespace AdsApp {
        interface AdsApp {
            /** Returns the Google Ads asset interface. */
            adAssets(): AdAssets;
            /** Returns the selector of all ad customizer data sources in the account. */
            adCustomizerSources(): AdCustomizerSourceSelector;
            /** Provides access to ad group-level targeting criteria, currently just audiences. */
            adGroupTargeting(): AccountAdGroupTargeting;
            /** Returns the selector of all ad groups in the account. */
            adGroups(): AdGroupSelector;
            /** Returns the Google Ads media interface. */
            adMedia(): AdMedia;
            /** Returns the selector of all ad params in the account. */
            adParams(): AdParamSelector;
            /** Returns the selector of all ads in the account. */
            ads(): AdSelector;
            /** Returns the selector of all flexible bidding strategies in the account. */
            biddingStrategies(): BiddingStrategySelector;
            /** Returns the selector of all budget orders in the account. */
            budgetOrders(): BudgetOrderSelector;
            /** Returns the selector of all budgets in the account. */
            budgets(): BudgetSelector;
            /** Provides access to bulk uploads: FileUpload, CsvUpload. */
            bulkUploads(): BulkUploads;
            /** Returns the selector of all campaigns in the account. */
            campaigns(): CampaignSelector;
            /** Creates a new Label. */
            createLabel(): void;
            /** Returns miscellaneous information about the Google Ads account in which the script is currently running. */
            currentAccount(): AdsApp.Account;
            /** Provides access to display criteria that have been added to this account: Audience, DisplayKeyword, Placement, Topic. */
            display(): Display;
            /** Returns the selector of all drafts in the account. */
            drafts(): DraftSelector;
            /** Returns a selector of all excluded placement lists in this account. */
            excludedPlacementLists(): ExcludedPlacementListSelector;
            /** Returns the selector of all experiments in the account. */
            experiments(): ExperimentSelector;
            /** Provides access to ad extensions that have been added to this account: Callout, Message, MobileApp, PhoneNumber, Sitelink, and Snippet. */
            extensions(): Extensions;
            /** Returns miscellaneous information about the current script execution. */
            getExecutionInfo(): ExecutionInfo;
            /** Returns the selector of all keywords in the account. */
            keywords(): KeywordSelector;
            /** Returns the selector of all labels in the account. */
            labels(): LabelSelector;
            /** Returns a selector of all negative keyword lists in this account. */
            negativeKeywordLists(): NegativeKeywordListSelector;
            /** Returns a new ad customizer source builder for this account. */
            newAdCustomizerSourceBuilder(): AdCustomizerSourceBuilder;
            /** Returns a new excluded placement list builder for this account. */
            newExcludedPlacementListBuilder(): ExcludedPlacementListBuilder;
            /** Returns a new negative keyword list builder for this account. */
            newNegativeKeywordListBuilder(): NegativeKeywordListBuilder;
            /** Returns the selector of all product ads in the account. */
            productAds(): ProductAdSelector;
            /** Returns the selector of all product groups in the account. */
            productGroups(): ProductGroupSelector;
            /** Fetches a Google Ads report. */
            report(): Report;
            /** Executes a Google Ads Search. */
            search(): SearchRowIterator;
            /** Provides access to shopping ad group-level targeting criteria, currently just audiences. */
            shoppingAdGroupTargeting(): AccountShoppingAdGroupTargeting;
            /** Returns the selector of all shopping ad groups in the account. */
            shoppingAdGroups(): ShoppingAdGroupSelector;
            /** Provides access to shopping campaign-level targeting criteria, currently just audiences. */
            shoppingCampaignTargeting(): AccountShoppingCampaignTargeting;
            /** Returns the selector of all shopping campaigns in the account. */
            shoppingCampaigns(): ShoppingCampaignSelector;
            /** Provides access to campaign-level targeting criteria: device targeting, ad scheduling, location targeting, and audiences. */
            targeting(): Targeting;
            /** Returns the selector of all user lists in the account. */
            userlists(): UserListSelector;
            /** Returns the selector of all video ad groups in the account. */
            videoAdGroups(): VideoAdGroupSelector;
            /** Returns the selector of all video ads in the account. */
            videoAds(): VideoAdSelector;
            /** Returns the selector of all video campaigns in the account. */
            videoCampaigns(): VideoCampaignSelector;
            /** Provides access to video criteria that have been added to this account: VideoAge, VideoAudience, VideoGender, VideoKeyword, VideoMobileAppCategory VideoMobileApplication, VideoParentalStatus, VideoPlacement, VideoTopic, VideoYouTubeChannel, VideoYouTubeVideo. */
            videoTargeting(): VideoTargeting;
        }
    }
}

declare var AdsApp: GoogleAdsScripts.AdsApp.AdsApp;
declare var AdWordsApp: GoogleAdsScripts.AdsApp.AdsApp;
