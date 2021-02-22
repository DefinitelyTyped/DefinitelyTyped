// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace AdSense {
        namespace Collection {
            namespace Accounts {
                namespace Adunits {
                    interface CustomchannelsCollection {
                        // List all custom channels which the specified ad unit belongs to.
                        list(accountId: string, adClientId: string, adUnitId: string): Schema.CustomChannels;
                        // List all custom channels which the specified ad unit belongs to.
                        list(accountId: string, adClientId: string, adUnitId: string, optionalArgs: object): Schema.CustomChannels;
                    }
                }
                namespace Customchannels {
                    interface AdunitsCollection {
                        // List all ad units in the specified custom channel.
                        list(accountId: string, adClientId: string, customChannelId: string): Schema.AdUnits;
                        // List all ad units in the specified custom channel.
                        list(accountId: string, adClientId: string, customChannelId: string, optionalArgs: object): Schema.AdUnits;
                    }
                }
                namespace Reports {
                    interface SavedCollection {
                        // Generate an AdSense report based on the saved report ID sent in the query parameters.
                        generate(accountId: string, savedReportId: string): Schema.AdsenseReportsGenerateResponse;
                        // Generate an AdSense report based on the saved report ID sent in the query parameters.
                        generate(accountId: string, savedReportId: string, optionalArgs: object): Schema.AdsenseReportsGenerateResponse;
                        // List all saved reports in the specified AdSense account.
                        list(accountId: string): Schema.SavedReports;
                        // List all saved reports in the specified AdSense account.
                        list(accountId: string, optionalArgs: object): Schema.SavedReports;
                    }
                }
                interface AdclientsCollection {
                    // Get Auto ad code for a given ad client.
                    getAdCode(accountId: string, adClientId: string): Schema.AdCode;
                    // Get Auto ad code for a given ad client.
                    getAdCode(accountId: string, adClientId: string, optionalArgs: object): Schema.AdCode;
                    // List all ad clients in the specified account.
                    list(accountId: string): Schema.AdClients;
                    // List all ad clients in the specified account.
                    list(accountId: string, optionalArgs: object): Schema.AdClients;
                }
                interface AdunitsCollection {
                    Customchannels?: Collection.Accounts.Adunits.CustomchannelsCollection;
                    // Gets the specified ad unit in the specified ad client for the specified account.
                    get(accountId: string, adClientId: string, adUnitId: string): Schema.AdUnit;
                    // Get ad code for the specified ad unit.
                    getAdCode(accountId: string, adClientId: string, adUnitId: string): Schema.AdCode;
                    // List all ad units in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Schema.AdUnits;
                    // List all ad units in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Schema.AdUnits;
                }
                interface AlertsCollection {
                    // List the alerts for the specified AdSense account.
                    list(accountId: string): Schema.Alerts;
                    // List the alerts for the specified AdSense account.
                    list(accountId: string, optionalArgs: object): Schema.Alerts;
                    // Dismiss (delete) the specified alert from the specified publisher AdSense account.
                    remove(accountId: string, alertId: string): void;
                }
                interface CustomchannelsCollection {
                    Adunits?: Collection.Accounts.Customchannels.AdunitsCollection;
                    // Get the specified custom channel from the specified ad client for the specified account.
                    get(accountId: string, adClientId: string, customChannelId: string): Schema.CustomChannel;
                    // List all custom channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Schema.CustomChannels;
                    // List all custom channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Schema.CustomChannels;
                }
                interface PaymentsCollection {
                    // List the payments for the specified AdSense account.
                    list(accountId: string): Schema.Payments;
                }
                interface ReportsCollection {
                    Saved?: Collection.Accounts.Reports.SavedCollection;
                    // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to
                    // retrieve output in CSV format specify "alt=csv" as a query parameter.
                    generate(accountId: string, startDate: string, endDate: string): Schema.AdsenseReportsGenerateResponse;
                    // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to
                    // retrieve output in CSV format specify "alt=csv" as a query parameter.
                    generate(accountId: string, startDate: string, endDate: string, optionalArgs: object): Schema.AdsenseReportsGenerateResponse;
                }
                interface SavedadstylesCollection {
                    // List a specific saved ad style for the specified account.
                    get(accountId: string, savedAdStyleId: string): Schema.SavedAdStyle;
                    // List all saved ad styles in the specified account.
                    list(accountId: string): Schema.SavedAdStyles;
                    // List all saved ad styles in the specified account.
                    list(accountId: string, optionalArgs: object): Schema.SavedAdStyles;
                }
                interface UrlchannelsCollection {
                    // List all URL channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Schema.UrlChannels;
                    // List all URL channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Schema.UrlChannels;
                }
            }
            namespace Adunits {
                interface CustomchannelsCollection {
                    // List all custom channels which the specified ad unit belongs to.
                    list(adClientId: string, adUnitId: string): Schema.CustomChannels;
                    // List all custom channels which the specified ad unit belongs to.
                    list(adClientId: string, adUnitId: string, optionalArgs: object): Schema.CustomChannels;
                }
            }
            namespace Customchannels {
                interface AdunitsCollection {
                    // List all ad units in the specified custom channel.
                    list(adClientId: string, customChannelId: string): Schema.AdUnits;
                    // List all ad units in the specified custom channel.
                    list(adClientId: string, customChannelId: string, optionalArgs: object): Schema.AdUnits;
                }
            }
            namespace Metadata {
                interface DimensionsCollection {
                    // List the metadata for the dimensions available to this AdSense account.
                    list(): Schema.Metadata;
                }
                interface MetricsCollection {
                    // List the metadata for the metrics available to this AdSense account.
                    list(): Schema.Metadata;
                }
            }
            namespace Reports {
                interface SavedCollection {
                    // Generate an AdSense report based on the saved report ID sent in the query parameters.
                    generate(savedReportId: string): Schema.AdsenseReportsGenerateResponse;
                    // Generate an AdSense report based on the saved report ID sent in the query parameters.
                    generate(savedReportId: string, optionalArgs: object): Schema.AdsenseReportsGenerateResponse;
                    // List all saved reports in this AdSense account.
                    list(): Schema.SavedReports;
                    // List all saved reports in this AdSense account.
                    list(optionalArgs: object): Schema.SavedReports;
                }
            }
            interface AccountsCollection {
                Adclients?: Collection.Accounts.AdclientsCollection;
                Adunits?: Collection.Accounts.AdunitsCollection;
                Alerts?: Collection.Accounts.AlertsCollection;
                Customchannels?: Collection.Accounts.CustomchannelsCollection;
                Payments?: Collection.Accounts.PaymentsCollection;
                Reports?: Collection.Accounts.ReportsCollection;
                Savedadstyles?: Collection.Accounts.SavedadstylesCollection;
                Urlchannels?: Collection.Accounts.UrlchannelsCollection;
                // Get information about the selected AdSense account.
                get(accountId: string): Schema.Account;
                // Get information about the selected AdSense account.
                get(accountId: string, optionalArgs: object): Schema.Account;
                // List all accounts available to this AdSense account.
                list(): Schema.Accounts;
                // List all accounts available to this AdSense account.
                list(optionalArgs: object): Schema.Accounts;
            }
            interface AdclientsCollection {
                // List all ad clients in this AdSense account.
                list(): Schema.AdClients;
                // List all ad clients in this AdSense account.
                list(optionalArgs: object): Schema.AdClients;
            }
            interface AdunitsCollection {
                Customchannels?: Collection.Adunits.CustomchannelsCollection;
                // Gets the specified ad unit in the specified ad client.
                get(adClientId: string, adUnitId: string): Schema.AdUnit;
                // Get ad code for the specified ad unit.
                getAdCode(adClientId: string, adUnitId: string): Schema.AdCode;
                // List all ad units in the specified ad client for this AdSense account.
                list(adClientId: string): Schema.AdUnits;
                // List all ad units in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Schema.AdUnits;
            }
            interface AlertsCollection {
                // List the alerts for this AdSense account.
                list(): Schema.Alerts;
                // List the alerts for this AdSense account.
                list(optionalArgs: object): Schema.Alerts;
                // Dismiss (delete) the specified alert from the publisher's AdSense account.
                remove(alertId: string): void;
            }
            interface CustomchannelsCollection {
                Adunits?: Collection.Customchannels.AdunitsCollection;
                // Get the specified custom channel from the specified ad client.
                get(adClientId: string, customChannelId: string): Schema.CustomChannel;
                // List all custom channels in the specified ad client for this AdSense account.
                list(adClientId: string): Schema.CustomChannels;
                // List all custom channels in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Schema.CustomChannels;
            }
            interface MetadataCollection {
                Dimensions?: Collection.Metadata.DimensionsCollection;
                Metrics?: Collection.Metadata.MetricsCollection;
            }
            interface PaymentsCollection {
                // List the payments for this AdSense account.
                list(): Schema.Payments;
            }
            interface ReportsCollection {
                Saved?: Collection.Reports.SavedCollection;
                // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to
                // retrieve output in CSV format specify "alt=csv" as a query parameter.
                generate(startDate: string, endDate: string): Schema.AdsenseReportsGenerateResponse;
                // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to
                // retrieve output in CSV format specify "alt=csv" as a query parameter.
                generate(startDate: string, endDate: string, optionalArgs: object): Schema.AdsenseReportsGenerateResponse;
            }
            interface SavedadstylesCollection {
                // Get a specific saved ad style from the user's account.
                get(savedAdStyleId: string): Schema.SavedAdStyle;
                // List all saved ad styles in the user's account.
                list(): Schema.SavedAdStyles;
                // List all saved ad styles in the user's account.
                list(optionalArgs: object): Schema.SavedAdStyles;
            }
            interface UrlchannelsCollection {
                // List all URL channels in the specified ad client for this AdSense account.
                list(adClientId: string): Schema.UrlChannels;
                // List all URL channels in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Schema.UrlChannels;
            }
        }
        namespace Schema {
            interface Account {
                creation_time?: string;
                // Unique identifier of this account.
                id?: string;
                // Kind of resource this is, in this case adsense#account.
                kind?: string;
                // Name of this account.
                name?: string;
                // Whether this account is premium.
                premium?: boolean;
                // Sub accounts of the this account.
                subAccounts?: Schema.Account[];
                // AdSense timezone of this account.
                timezone?: string;
            }
            interface Accounts {
                // ETag of this response for caching purposes.
                etag?: string;
                // The accounts returned in this list response.
                items?: Schema.Account[];
                // Kind of list this is, in this case adsense#accounts.
                kind?: string;
                // Continuation token used to page through accounts. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface AdClient {
                // Whether this ad client is opted in to ARC.
                arcOptIn?: boolean;
                // Unique identifier of this ad client.
                id?: string;
                // Kind of resource this is, in this case adsense#adClient.
                kind?: string;
                // This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
                productCode?: string;
                // Whether this ad client supports being reported on.
                supportsReporting?: boolean;
            }
            interface AdClients {
                // ETag of this response for caching purposes.
                etag?: string;
                // The ad clients returned in this list response.
                items?: Schema.AdClient[];
                // Kind of list this is, in this case adsense#adClients.
                kind?: string;
                // Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface AdCode {
                // The Auto ad code snippet. The ad code snippet.
                adCode?: string;
                // The AMP Auto ad code snippet that goes in the body of an AMP page.
                ampBody?: string;
                // The AMP Auto ad code snippet that goes in the head of an AMP page.
                ampHead?: string;
                // Kind this is, in this case adsense#adCode.
                kind?: string;
            }
            interface AdStyle {
                // The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color
                // codes, but without the leading hash.
                colors?: Schema.AdStyleColors;
                // The style of the corners in the ad (deprecated: never populated, ignored).
                corners?: string;
                // The font which is included in the style.
                font?: Schema.AdStyleFont;
                // Kind this is, in this case adsense#adStyle.
                kind?: string;
            }
            // The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color
            // codes, but without the leading hash.
            interface AdStyleColors {
                // The color of the ad background.
                background?: string;
                // The color of the ad border.
                border?: string;
                // The color of the ad text.
                text?: string;
                // The color of the ad title.
                title?: string;
                // The color of the ad url.
                url?: string;
            }
            // The font which is included in the style.
            interface AdStyleFont {
                // The family of the font.
                family?: string;
                // The size of the font.
                size?: string;
            }
            interface AdUnit {
                // Identity code of this ad unit, not necessarily unique across ad clients.
                code?: string;
                // Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
                contentAdsSettings?: Schema.AdUnitContentAdsSettings;
                // Custom style information specific to this ad unit.
                customStyle?: Schema.AdStyle;
                // Settings specific to feed ads (AFF) - deprecated.
                feedAdsSettings?: Schema.AdUnitFeedAdsSettings;
                // Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in
                // any particular format.
                id?: string;
                // Kind of resource this is, in this case adsense#adUnit.
                kind?: string;
                // Settings specific to WAP mobile content ads (AFMC) - deprecated.
                mobileContentAdsSettings?: Schema.AdUnitMobileContentAdsSettings;
                // Name of this ad unit.
                name?: string;
                // ID of the saved ad style which holds this ad unit's style information.
                savedStyleId?: string;
                // Status of this ad unit. Possible values are:
                // NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated
                // with it.
                //
                // ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
                //
                // INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
                status?: string;
            }
            // Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
            interface AdUnitContentAdsSettings {
                // The backup option to be used in instances where no ad is available.
                backupOption?: Schema.AdUnitContentAdsSettingsBackupOption;
                // Size of this ad unit.
                size?: string;
                // Type of this ad unit.
                type?: string;
            }
            // The backup option to be used in instances where no ad is available.
            interface AdUnitContentAdsSettingsBackupOption {
                // Color to use when type is set to COLOR.
                color?: string;
                // Type of the backup option. Possible values are BLANK, COLOR and URL.
                type?: string;
                // URL to use when type is set to URL.
                url?: string;
            }
            // Settings specific to feed ads (AFF) - deprecated.
            interface AdUnitFeedAdsSettings {
                // The position of the ads relative to the feed entries.
                adPosition?: string;
                // The frequency at which ads should appear in the feed (i.e. every N entries).
                frequency?: Integer;
                // The minimum length an entry should be in order to have attached ads.
                minimumWordCount?: Integer;
                // The type of ads which should appear.
                type?: string;
            }
            // Settings specific to WAP mobile content ads (AFMC) - deprecated.
            interface AdUnitMobileContentAdsSettings {
                // The markup language to use for this ad unit.
                markupLanguage?: string;
                // The scripting language to use for this ad unit.
                scriptingLanguage?: string;
                // Size of this ad unit.
                size?: string;
                // Type of this ad unit.
                type?: string;
            }
            interface AdUnits {
                // ETag of this response for caching purposes.
                etag?: string;
                // The ad units returned in this list response.
                items?: Schema.AdUnit[];
                // Kind of list this is, in this case adsense#adUnits.
                kind?: string;
                // Continuation token used to page through ad units. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface AdsenseReportsGenerateResponse {
                // The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension
                // columns are empty.
                averages?: string[];
                // The requested end date in yyyy-mm-dd format.
                endDate?: string;
                // The header information of the columns requested in the report. This is a list of headers; one for each dimension in the
                // request, followed by one for each metric in the request.
                headers?: Schema.AdsenseReportsGenerateResponseHeaders[];
                // Kind this is, in this case adsense#report.
                kind?: string;
                // The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for
                // each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
                rows?: string[][];
                // The requested start date in yyyy-mm-dd format.
                startDate?: string;
                // The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited
                // by the row count requested or the report row limit.
                totalMatchedRows?: string;
                // The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension
                // columns are empty.
                totals?: string[];
                // Any warnings associated with generation of the report.
                warnings?: string[];
            }
            interface AdsenseReportsGenerateResponseHeaders {
                // The currency of this column. Only present if the header type is METRIC_CURRENCY.
                currency?: string;
                // The name of the header.
                name?: string;
                // The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
                type?: string;
            }
            interface Alert {
                // Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in
                // any particular format.
                id?: string;
                // Whether this alert can be dismissed.
                isDismissible?: boolean;
                // Kind of resource this is, in this case adsense#alert.
                kind?: string;
                // The localized alert message.
                message?: string;
                // Severity of this alert. Possible values: INFO, WARNING, SEVERE.
                severity?: string;
                // Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION,
                // CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.
                type?: string;
            }
            interface Alerts {
                // The alerts returned in this list response.
                items?: Schema.Alert[];
                // Kind of list this is, in this case adsense#alerts.
                kind?: string;
            }
            interface CustomChannel {
                // Code of this custom channel, not necessarily unique across ad clients.
                code?: string;
                // Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it
                // being in any particular format.
                id?: string;
                // Kind of resource this is, in this case adsense#customChannel.
                kind?: string;
                // Name of this custom channel.
                name?: string;
                // The targeting information of this custom channel, if activated.
                targetingInfo?: Schema.CustomChannelTargetingInfo;
            }
            // The targeting information of this custom channel, if activated.
            interface CustomChannelTargetingInfo {
                // The name used to describe this channel externally.
                adsAppearOn?: string;
                // The external description of the channel.
                description?: string;
                // The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for
                // content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER,
                // BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM,
                // MULTIPLE_LOCATIONS.
                location?: string;
                // The language of the sites ads will be displayed on.
                siteLanguage?: string;
            }
            interface CustomChannels {
                // ETag of this response for caching purposes.
                etag?: string;
                // The custom channels returned in this list response.
                items?: Schema.CustomChannel[];
                // Kind of list this is, in this case adsense#customChannels.
                kind?: string;
                // Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface Metadata {
                items?: Schema.ReportingMetadataEntry[];
                // Kind of list this is, in this case adsense#metadata.
                kind?: string;
            }
            interface Payment {
                // Unique identifier of this Payment.
                id?: string;
                // Kind of resource this is, in this case adsense#payment.
                kind?: string;
                // The amount to be paid.
                paymentAmount?: string;
                // The currency code for the amount to be paid.
                paymentAmountCurrencyCode?: string;
                // The date this payment was/will be credited to the user, or none if the payment threshold has not been met.
                paymentDate?: string;
            }
            interface Payments {
                // The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming
                // payment.
                items?: Schema.Payment[];
                // Kind of list this is, in this case adsense#payments.
                kind?: string;
            }
            interface ReportingMetadataEntry {
                // For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of
                // compatibility groups the dimension belongs to.
                compatibleDimensions?: string[];
                // The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
                compatibleMetrics?: string[];
                // Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
                id?: string;
                // Kind of resource this is, in this case adsense#reportingMetadataEntry.
                kind?: string;
                // The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be
                // present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data
                // which cannot be correctly interpreted.
                requiredDimensions?: string[];
                // The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be
                // present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data
                // which cannot be correctly interpreted.
                requiredMetrics?: string[];
                // The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
                supportedProducts?: string[];
            }
            interface SavedAdStyle {
                // The AdStyle itself.
                adStyle?: Schema.AdStyle;
                // Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it
                // being in any particular format.
                id?: string;
                // Kind of resource this is, in this case adsense#savedAdStyle.
                kind?: string;
                // The user selected name of this SavedAdStyle.
                name?: string;
            }
            interface SavedAdStyles {
                // ETag of this response for caching purposes.
                etag?: string;
                // The saved ad styles returned in this list response.
                items?: Schema.SavedAdStyle[];
                // Kind of list this is, in this case adsense#savedAdStyles.
                kind?: string;
                // Continuation token used to page through ad units. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface SavedReport {
                // Unique identifier of this saved report.
                id?: string;
                // Kind of resource this is, in this case adsense#savedReport.
                kind?: string;
                // This saved report's name.
                name?: string;
            }
            interface SavedReports {
                // ETag of this response for caching purposes.
                etag?: string;
                // The saved reports returned in this list response.
                items?: Schema.SavedReport[];
                // Kind of list this is, in this case adsense#savedReports.
                kind?: string;
                // Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
            interface UrlChannel {
                // Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it
                // being in any particular format.
                id?: string;
                // Kind of resource this is, in this case adsense#urlChannel.
                kind?: string;
                // URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
                urlPattern?: string;
            }
            interface UrlChannels {
                // ETag of this response for caching purposes.
                etag?: string;
                // The URL channels returned in this list response.
                items?: Schema.UrlChannel[];
                // Kind of list this is, in this case adsense#urlChannels.
                kind?: string;
                // Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's
                // "pageToken" value to this.
                nextPageToken?: string;
            }
        }
    }
    // Accesses AdSense publishers' inventory and generates performance reports.
    interface AdSense {
        Accounts?: AdSense.Collection.AccountsCollection;
        Adclients?: AdSense.Collection.AdclientsCollection;
        Adunits?: AdSense.Collection.AdunitsCollection;
        Alerts?: AdSense.Collection.AlertsCollection;
        Customchannels?: AdSense.Collection.CustomchannelsCollection;
        Metadata?: AdSense.Collection.MetadataCollection;
        Payments?: AdSense.Collection.PaymentsCollection;
        Reports?: AdSense.Collection.ReportsCollection;
        Savedadstyles?: AdSense.Collection.SavedadstylesCollection;
        Urlchannels?: AdSense.Collection.UrlchannelsCollection;
    }
}
declare const AdSense: GoogleAppsScript.AdSense;
