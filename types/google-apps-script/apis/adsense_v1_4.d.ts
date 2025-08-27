declare namespace GoogleAppsScript {
    namespace Adsense {
        namespace Collection {
            namespace Accounts {
                namespace Adunits {
                    interface CustomchannelsCollection {
                        // List all custom channels which the specified ad unit belongs to.
                        list(accountId: string, adClientId: string, adUnitId: string): Adsense.Schema.CustomChannels;
                        // List all custom channels which the specified ad unit belongs to.
                        list(
                            accountId: string,
                            adClientId: string,
                            adUnitId: string,
                            optionalArgs: object,
                        ): Adsense.Schema.CustomChannels;
                    }
                }
                namespace Customchannels {
                    interface AdunitsCollection {
                        // List all ad units in the specified custom channel.
                        list(accountId: string, adClientId: string, customChannelId: string): Adsense.Schema.AdUnits;
                        // List all ad units in the specified custom channel.
                        list(
                            accountId: string,
                            adClientId: string,
                            customChannelId: string,
                            optionalArgs: object,
                        ): Adsense.Schema.AdUnits;
                    }
                }
                namespace Reports {
                    interface SavedCollection {
                        // Generate an AdSense report based on the saved report ID sent in the query parameters.
                        generate(
                            accountId: string,
                            savedReportId: string,
                        ): Adsense.Schema.AdsenseReportsGenerateResponse;
                        // Generate an AdSense report based on the saved report ID sent in the query parameters.
                        generate(
                            accountId: string,
                            savedReportId: string,
                            optionalArgs: object,
                        ): Adsense.Schema.AdsenseReportsGenerateResponse;
                        // List all saved reports in the specified AdSense account.
                        list(accountId: string): Adsense.Schema.SavedReports;
                        // List all saved reports in the specified AdSense account.
                        list(accountId: string, optionalArgs: object): Adsense.Schema.SavedReports;
                    }
                }
                interface AdclientsCollection {
                    // Get Auto ad code for a given ad client.
                    getAdCode(accountId: string, adClientId: string): Adsense.Schema.AdCode;
                    // List all ad clients in the specified account.
                    list(accountId: string): Adsense.Schema.AdClients;
                    // List all ad clients in the specified account.
                    list(accountId: string, optionalArgs: object): Adsense.Schema.AdClients;
                }
                interface AdunitsCollection {
                    Customchannels?: Adsense.Collection.Accounts.Adunits.CustomchannelsCollection | undefined;
                    // Gets the specified ad unit in the specified ad client for the specified account.
                    get(accountId: string, adClientId: string, adUnitId: string): Adsense.Schema.AdUnit;
                    // Get ad code for the specified ad unit.
                    getAdCode(accountId: string, adClientId: string, adUnitId: string): Adsense.Schema.AdCode;
                    // List all ad units in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Adsense.Schema.AdUnits;
                    // List all ad units in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Adsense.Schema.AdUnits;
                }
                interface AlertsCollection {
                    // List the alerts for the specified AdSense account.
                    list(accountId: string): Adsense.Schema.Alerts;
                    // List the alerts for the specified AdSense account.
                    list(accountId: string, optionalArgs: object): Adsense.Schema.Alerts;
                    // Dismiss (delete) the specified alert from the specified publisher AdSense account.
                    remove(accountId: string, alertId: string): void;
                }
                interface CustomchannelsCollection {
                    Adunits?: Adsense.Collection.Accounts.Customchannels.AdunitsCollection | undefined;
                    // Get the specified custom channel from the specified ad client for the specified account.
                    get(accountId: string, adClientId: string, customChannelId: string): Adsense.Schema.CustomChannel;
                    // List all custom channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Adsense.Schema.CustomChannels;
                    // List all custom channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Adsense.Schema.CustomChannels;
                }
                interface PaymentsCollection {
                    // List the payments for the specified AdSense account.
                    list(accountId: string): Adsense.Schema.Payments;
                }
                interface ReportsCollection {
                    Saved?: Adsense.Collection.Accounts.Reports.SavedCollection | undefined;
                    // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                    generate(
                        accountId: string,
                        startDate: string,
                        endDate: string,
                    ): Adsense.Schema.AdsenseReportsGenerateResponse;
                    // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                    generate(
                        accountId: string,
                        startDate: string,
                        endDate: string,
                        optionalArgs: object,
                    ): Adsense.Schema.AdsenseReportsGenerateResponse;
                }
                interface SavedadstylesCollection {
                    // List a specific saved ad style for the specified account.
                    get(accountId: string, savedAdStyleId: string): Adsense.Schema.SavedAdStyle;
                    // List all saved ad styles in the specified account.
                    list(accountId: string): Adsense.Schema.SavedAdStyles;
                    // List all saved ad styles in the specified account.
                    list(accountId: string, optionalArgs: object): Adsense.Schema.SavedAdStyles;
                }
                interface UrlchannelsCollection {
                    // List all URL channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string): Adsense.Schema.UrlChannels;
                    // List all URL channels in the specified ad client for the specified account.
                    list(accountId: string, adClientId: string, optionalArgs: object): Adsense.Schema.UrlChannels;
                }
            }
            namespace Adunits {
                interface CustomchannelsCollection {
                    // List all custom channels which the specified ad unit belongs to.
                    list(adClientId: string, adUnitId: string): Adsense.Schema.CustomChannels;
                    // List all custom channels which the specified ad unit belongs to.
                    list(adClientId: string, adUnitId: string, optionalArgs: object): Adsense.Schema.CustomChannels;
                }
            }
            namespace Customchannels {
                interface AdunitsCollection {
                    // List all ad units in the specified custom channel.
                    list(adClientId: string, customChannelId: string): Adsense.Schema.AdUnits;
                    // List all ad units in the specified custom channel.
                    list(adClientId: string, customChannelId: string, optionalArgs: object): Adsense.Schema.AdUnits;
                }
            }
            namespace Metadata {
                interface DimensionsCollection {
                    // List the metadata for the dimensions available to this AdSense account.
                    list(): Adsense.Schema.Metadata;
                }
                interface MetricsCollection {
                    // List the metadata for the metrics available to this AdSense account.
                    list(): Adsense.Schema.Metadata;
                }
            }
            namespace Reports {
                interface SavedCollection {
                    // Generate an AdSense report based on the saved report ID sent in the query parameters.
                    generate(savedReportId: string): Adsense.Schema.AdsenseReportsGenerateResponse;
                    // Generate an AdSense report based on the saved report ID sent in the query parameters.
                    generate(
                        savedReportId: string,
                        optionalArgs: object,
                    ): Adsense.Schema.AdsenseReportsGenerateResponse;
                    // List all saved reports in this AdSense account.
                    list(): Adsense.Schema.SavedReports;
                    // List all saved reports in this AdSense account.
                    list(optionalArgs: object): Adsense.Schema.SavedReports;
                }
            }
            interface AccountsCollection {
                Adclients?: Adsense.Collection.Accounts.AdclientsCollection | undefined;
                Adunits?: Adsense.Collection.Accounts.AdunitsCollection | undefined;
                Alerts?: Adsense.Collection.Accounts.AlertsCollection | undefined;
                Customchannels?: Adsense.Collection.Accounts.CustomchannelsCollection | undefined;
                Payments?: Adsense.Collection.Accounts.PaymentsCollection | undefined;
                Reports?: Adsense.Collection.Accounts.ReportsCollection | undefined;
                Savedadstyles?: Adsense.Collection.Accounts.SavedadstylesCollection | undefined;
                Urlchannels?: Adsense.Collection.Accounts.UrlchannelsCollection | undefined;
                // Get information about the selected AdSense account.
                get(accountId: string): Adsense.Schema.Account;
                // Get information about the selected AdSense account.
                get(accountId: string, optionalArgs: object): Adsense.Schema.Account;
                // List all accounts available to this AdSense account.
                list(): Adsense.Schema.Accounts;
                // List all accounts available to this AdSense account.
                list(optionalArgs: object): Adsense.Schema.Accounts;
            }
            interface AdclientsCollection {
                // List all ad clients in this AdSense account.
                list(): Adsense.Schema.AdClients;
                // List all ad clients in this AdSense account.
                list(optionalArgs: object): Adsense.Schema.AdClients;
            }
            interface AdunitsCollection {
                Customchannels?: Adsense.Collection.Adunits.CustomchannelsCollection | undefined;
                // Gets the specified ad unit in the specified ad client.
                get(adClientId: string, adUnitId: string): Adsense.Schema.AdUnit;
                // Get ad code for the specified ad unit.
                getAdCode(adClientId: string, adUnitId: string): Adsense.Schema.AdCode;
                // List all ad units in the specified ad client for this AdSense account.
                list(adClientId: string): Adsense.Schema.AdUnits;
                // List all ad units in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Adsense.Schema.AdUnits;
            }
            interface AlertsCollection {
                // List the alerts for this AdSense account.
                list(): Adsense.Schema.Alerts;
                // List the alerts for this AdSense account.
                list(optionalArgs: object): Adsense.Schema.Alerts;
                // Dismiss (delete) the specified alert from the publisher's AdSense account.
                remove(alertId: string): void;
            }
            interface CustomchannelsCollection {
                Adunits?: Adsense.Collection.Customchannels.AdunitsCollection | undefined;
                // Get the specified custom channel from the specified ad client.
                get(adClientId: string, customChannelId: string): Adsense.Schema.CustomChannel;
                // List all custom channels in the specified ad client for this AdSense account.
                list(adClientId: string): Adsense.Schema.CustomChannels;
                // List all custom channels in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Adsense.Schema.CustomChannels;
            }
            interface MetadataCollection {
                Dimensions?: Adsense.Collection.Metadata.DimensionsCollection | undefined;
                Metrics?: Adsense.Collection.Metadata.MetricsCollection | undefined;
            }
            interface PaymentsCollection {
                // List the payments for this AdSense account.
                list(): Adsense.Schema.Payments;
            }
            interface ReportsCollection {
                Saved?: Adsense.Collection.Reports.SavedCollection | undefined;
                // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                generate(startDate: string, endDate: string): Adsense.Schema.AdsenseReportsGenerateResponse;
                // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
                generate(
                    startDate: string,
                    endDate: string,
                    optionalArgs: object,
                ): Adsense.Schema.AdsenseReportsGenerateResponse;
            }
            interface SavedadstylesCollection {
                // Get a specific saved ad style from the user's account.
                get(savedAdStyleId: string): Adsense.Schema.SavedAdStyle;
                // List all saved ad styles in the user's account.
                list(): Adsense.Schema.SavedAdStyles;
                // List all saved ad styles in the user's account.
                list(optionalArgs: object): Adsense.Schema.SavedAdStyles;
            }
            interface UrlchannelsCollection {
                // List all URL channels in the specified ad client for this AdSense account.
                list(adClientId: string): Adsense.Schema.UrlChannels;
                // List all URL channels in the specified ad client for this AdSense account.
                list(adClientId: string, optionalArgs: object): Adsense.Schema.UrlChannels;
            }
        }
        namespace Schema {
            interface Account {
                creation_time?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                premium?: boolean | undefined;
                subAccounts?: Adsense.Schema.Account[] | undefined;
                timezone?: string | undefined;
            }
            interface Accounts {
                etag?: string | undefined;
                items?: Adsense.Schema.Account[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AdClient {
                arcOptIn?: boolean | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                productCode?: string | undefined;
                supportsReporting?: boolean | undefined;
            }
            interface AdClients {
                etag?: string | undefined;
                items?: Adsense.Schema.AdClient[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AdCode {
                adCode?: string | undefined;
                ampBody?: string | undefined;
                ampHead?: string | undefined;
                kind?: string | undefined;
            }
            interface AdStyle {
                colors?: Adsense.Schema.AdStyleColors | undefined;
                corners?: string | undefined;
                font?: Adsense.Schema.AdStyleFont | undefined;
                kind?: string | undefined;
            }
            interface AdStyleColors {
                background?: string | undefined;
                border?: string | undefined;
                text?: string | undefined;
                title?: string | undefined;
                url?: string | undefined;
            }
            interface AdStyleFont {
                family?: string | undefined;
                size?: string | undefined;
            }
            interface AdUnit {
                code?: string | undefined;
                contentAdsSettings?: Adsense.Schema.AdUnitContentAdsSettings | undefined;
                customStyle?: Adsense.Schema.AdStyle | undefined;
                feedAdsSettings?: Adsense.Schema.AdUnitFeedAdsSettings | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                mobileContentAdsSettings?: Adsense.Schema.AdUnitMobileContentAdsSettings | undefined;
                name?: string | undefined;
                savedStyleId?: string | undefined;
                status?: string | undefined;
            }
            interface AdUnitContentAdsSettings {
                backupOption?: Adsense.Schema.AdUnitContentAdsSettingsBackupOption | undefined;
                size?: string | undefined;
                type?: string | undefined;
            }
            interface AdUnitContentAdsSettingsBackupOption {
                color?: string | undefined;
                type?: string | undefined;
                url?: string | undefined;
            }
            interface AdUnitFeedAdsSettings {
                adPosition?: string | undefined;
                frequency?: number | undefined;
                minimumWordCount?: number | undefined;
                type?: string | undefined;
            }
            interface AdUnitMobileContentAdsSettings {
                markupLanguage?: string | undefined;
                scriptingLanguage?: string | undefined;
                size?: string | undefined;
                type?: string | undefined;
            }
            interface AdUnits {
                etag?: string | undefined;
                items?: Adsense.Schema.AdUnit[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface AdsenseReportsGenerateResponse {
                averages?: string[] | undefined;
                endDate?: string | undefined;
                headers?: Adsense.Schema.AdsenseReportsGenerateResponseHeaders[] | undefined;
                kind?: string | undefined;
                rows?: string[][] | undefined;
                startDate?: string | undefined;
                totalMatchedRows?: string | undefined;
                totals?: string[] | undefined;
                warnings?: string[] | undefined;
            }
            interface AdsenseReportsGenerateResponseHeaders {
                currency?: string | undefined;
                name?: string | undefined;
                type?: string | undefined;
            }
            interface Alert {
                id?: string | undefined;
                isDismissible?: boolean | undefined;
                kind?: string | undefined;
                message?: string | undefined;
                severity?: string | undefined;
                type?: string | undefined;
            }
            interface Alerts {
                items?: Adsense.Schema.Alert[] | undefined;
                kind?: string | undefined;
            }
            interface CustomChannel {
                code?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
                targetingInfo?: Adsense.Schema.CustomChannelTargetingInfo | undefined;
            }
            interface CustomChannelTargetingInfo {
                adsAppearOn?: string | undefined;
                description?: string | undefined;
                location?: string | undefined;
                siteLanguage?: string | undefined;
            }
            interface CustomChannels {
                etag?: string | undefined;
                items?: Adsense.Schema.CustomChannel[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface Metadata {
                items?: Adsense.Schema.ReportingMetadataEntry[] | undefined;
                kind?: string | undefined;
            }
            interface Payment {
                id?: string | undefined;
                kind?: string | undefined;
                paymentAmount?: string | undefined;
                paymentAmountCurrencyCode?: string | undefined;
                paymentDate?: string | undefined;
            }
            interface Payments {
                items?: Adsense.Schema.Payment[] | undefined;
                kind?: string | undefined;
            }
            interface ReportingMetadataEntry {
                compatibleDimensions?: string[] | undefined;
                compatibleMetrics?: string[] | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                requiredDimensions?: string[] | undefined;
                requiredMetrics?: string[] | undefined;
                supportedProducts?: string[] | undefined;
            }
            interface SavedAdStyle {
                adStyle?: Adsense.Schema.AdStyle | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface SavedAdStyles {
                etag?: string | undefined;
                items?: Adsense.Schema.SavedAdStyle[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface SavedReport {
                id?: string | undefined;
                kind?: string | undefined;
                name?: string | undefined;
            }
            interface SavedReports {
                etag?: string | undefined;
                items?: Adsense.Schema.SavedReport[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface UrlChannel {
                id?: string | undefined;
                kind?: string | undefined;
                urlPattern?: string | undefined;
            }
            interface UrlChannels {
                etag?: string | undefined;
                items?: Adsense.Schema.UrlChannel[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
        }
    }
    interface Adsense {
        Accounts?: Adsense.Collection.AccountsCollection | undefined;
        Adclients?: Adsense.Collection.AdclientsCollection | undefined;
        Adunits?: Adsense.Collection.AdunitsCollection | undefined;
        Alerts?: Adsense.Collection.AlertsCollection | undefined;
        Customchannels?: Adsense.Collection.CustomchannelsCollection | undefined;
        Metadata?: Adsense.Collection.MetadataCollection | undefined;
        Payments?: Adsense.Collection.PaymentsCollection | undefined;
        Reports?: Adsense.Collection.ReportsCollection | undefined;
        Savedadstyles?: Adsense.Collection.SavedadstylesCollection | undefined;
        Urlchannels?: Adsense.Collection.UrlchannelsCollection | undefined;
    }
}

declare var Adsense: GoogleAppsScript.Adsense;
