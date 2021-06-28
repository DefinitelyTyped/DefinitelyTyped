declare namespace GoogleAdsScripts {
    namespace AdsApp {
        /**
         * Root object of Google Ads scripts API. Exposes methods for
         *
         * * Fetching Google Ads entities
         * * Querying Google Ads reports
         * * Accessing information about the state of the current execution
         */
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
            /**
             * Creates a new Label. You must always specify a name, but description and color are optional.
             *
             * Note that you cannot create more than 100,000 labels per account.
             *
             * @param name The name of the new Label. Label names are case sensitive and must be unique. Max length is 100 characters.
             * Any leading or trailing white spaces will be trimmed.
             * @param description Optional. The description of the new label. If not specified, the description will be empty. Max length is 200 characters.
             * @param backgroundColor Optional. The background color of the new label. The color must be specified in either RGB form (`#RRGGBB` or `#RGB`),
             * or one of the [16 basic CSS color names](https://www.w3.org/TR/css-color-3/#html4). If not specified, the new label will assume an arbitrary background color.
             */
            createLabel(name: string, description?: string, backgroundColor?: string): void;
            /** Returns miscellaneous information about the Google Ads account in which the script is currently running. */
            currentAccount(): Account;
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
            /**
             * Fetches a Google Ads report.
             *
             * @param query AWQL or GAQL query specifying the report.
             * @param optArgs Optional arguments
             */
            report(query: string, optArgs?: ReportOptionalArguments): Report;
            /**
             * Executes a Google Ads Search.
             *
             * @param query GAQL search query.
             * @param optArgs Optional arguments
             */
            search(query: string, optArgs?: SearchOptionalArguments): SearchRowIterator;
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
            /**
             * Provides access to video criteria that have been added to this account: VideoAge, VideoAudience,VideoGender, VideoKeyword,
             * VideoMobileAppCategory VideoMobileApplication, VideoParentalStatus, VideoPlacement, VideoTopic, VideoYouTubeChannel, VideoYouTubeVideo.
             */
            videoTargeting(): VideoTargeting;
        }

        /** The following optional arguments are supported: */
        interface ReportOptionalArguments {
            /**
             * Whether or not to include entities that had zero impressions in the report.
             * This field is not allowed when the query uses GAQL. See here for details on how GAQL handles zero impressions.
             * Defaults to `true` for AWQL queries.
             */
            includeZeroImpressions?: boolean;
            /**
             * Whether or not to represent money in micros ('1370000') or in currency ('1.37').
             * This field is not allowed when the query uses GAQL.
             * In that case, all money values are represented in micros.
             * Defaults to `false` for AWQL queries.
             */
            returnMoneyInMicros?: boolean;
            /**
             * For AWQL queries, the AdWords API version to query.
             * Sunsetted versions are not allowed.
             * For GAQL queries, the Google Ads API version to query.
             * Sunsetted versions for GAQL queries are also not allowed.
             */
            apiVersion?: string;
            /**
             * Whether or not to convert Geo CriteriaIds (e.g. CountryCriteriaId and CityCriteriaId) into names (e.g. 'United States' and 'San Francisco').
             * Set to true if you want names. Set to `false` if you want numerical IDs. Defaults to `true`.
             */
            resolveGeoNames?: boolean;
        }

        interface SearchOptionalArguments {
            /** The AdWords API version to query. Sunsetted versions are not allowed. Defaults to the most recent supported version. */
            apiVersion?: string;
        }
    }
}

declare var AdsApp: GoogleAdsScripts.AdsApp.AdsApp;
declare var AdWordsApp: GoogleAdsScripts.AdsApp.AdsApp;
