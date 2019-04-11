// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Adsense_v1_4 {
    namespace Collection {
      namespace Accounts {
        namespace Adunits {
          export interface CustomchannelsCollection {
            // List all custom channels which the specified ad unit belongs to.
            list(accountId: string, adClientId: string, adUnitId: string): Adsense_v1_4.Schema.CustomChannels;
            // List all custom channels which the specified ad unit belongs to.
            list(accountId: string, adClientId: string, adUnitId: string, optionalArgs: object): Adsense_v1_4.Schema.CustomChannels;
          }
        }
        namespace Customchannels {
          export interface AdunitsCollection {
            // List all ad units in the specified custom channel.
            list(accountId: string, adClientId: string, customChannelId: string): Adsense_v1_4.Schema.AdUnits;
            // List all ad units in the specified custom channel.
            list(accountId: string, adClientId: string, customChannelId: string, optionalArgs: object): Adsense_v1_4.Schema.AdUnits;
          }
        }
        namespace Reports {
          export interface SavedCollection {
            // Generate an AdSense report based on the saved report ID sent in the query parameters.
            generate(accountId: string, savedReportId: string): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
            // Generate an AdSense report based on the saved report ID sent in the query parameters.
            generate(accountId: string, savedReportId: string, optionalArgs: object): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
            // List all saved reports in the specified AdSense account.
            list(accountId: string): Adsense_v1_4.Schema.SavedReports;
            // List all saved reports in the specified AdSense account.
            list(accountId: string, optionalArgs: object): Adsense_v1_4.Schema.SavedReports;
          }
        }
        export interface AdclientsCollection {
          // Get Auto ad code for a given ad client.
          getAdCode(accountId: string, adClientId: string): Adsense_v1_4.Schema.AdCode;
          // List all ad clients in the specified account.
          list(accountId: string): Adsense_v1_4.Schema.AdClients;
          // List all ad clients in the specified account.
          list(accountId: string, optionalArgs: object): Adsense_v1_4.Schema.AdClients;
        }
        export interface AdunitsCollection {
          Customchannels?: Adsense_v1_4.Collection.Accounts.Adunits.CustomchannelsCollection;
          // Gets the specified ad unit in the specified ad client for the specified account.
          get(accountId: string, adClientId: string, adUnitId: string): Adsense_v1_4.Schema.AdUnit;
          // Get ad code for the specified ad unit.
          getAdCode(accountId: string, adClientId: string, adUnitId: string): Adsense_v1_4.Schema.AdCode;
          // List all ad units in the specified ad client for the specified account.
          list(accountId: string, adClientId: string): Adsense_v1_4.Schema.AdUnits;
          // List all ad units in the specified ad client for the specified account.
          list(accountId: string, adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.AdUnits;
        }
        export interface AlertsCollection {
          // List the alerts for the specified AdSense account.
          list(accountId: string): Adsense_v1_4.Schema.Alerts;
          // List the alerts for the specified AdSense account.
          list(accountId: string, optionalArgs: object): Adsense_v1_4.Schema.Alerts;
          // Dismiss (delete) the specified alert from the specified publisher AdSense account.
          remove(accountId: string, alertId: string): void;
        }
        export interface CustomchannelsCollection {
          Adunits?: Adsense_v1_4.Collection.Accounts.Customchannels.AdunitsCollection;
          // Get the specified custom channel from the specified ad client for the specified account.
          get(accountId: string, adClientId: string, customChannelId: string): Adsense_v1_4.Schema.CustomChannel;
          // List all custom channels in the specified ad client for the specified account.
          list(accountId: string, adClientId: string): Adsense_v1_4.Schema.CustomChannels;
          // List all custom channels in the specified ad client for the specified account.
          list(accountId: string, adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.CustomChannels;
        }
        export interface PaymentsCollection {
          // List the payments for the specified AdSense account.
          list(accountId: string): Adsense_v1_4.Schema.Payments;
        }
        export interface ReportsCollection {
          Saved?: Adsense_v1_4.Collection.Accounts.Reports.SavedCollection;
          // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
          generate(accountId: string, startDate: string, endDate: string): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
          // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
          generate(accountId: string, startDate: string, endDate: string, optionalArgs: object): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
        }
        export interface SavedadstylesCollection {
          // List a specific saved ad style for the specified account.
          get(accountId: string, savedAdStyleId: string): Adsense_v1_4.Schema.SavedAdStyle;
          // List all saved ad styles in the specified account.
          list(accountId: string): Adsense_v1_4.Schema.SavedAdStyles;
          // List all saved ad styles in the specified account.
          list(accountId: string, optionalArgs: object): Adsense_v1_4.Schema.SavedAdStyles;
        }
        export interface UrlchannelsCollection {
          // List all URL channels in the specified ad client for the specified account.
          list(accountId: string, adClientId: string): Adsense_v1_4.Schema.UrlChannels;
          // List all URL channels in the specified ad client for the specified account.
          list(accountId: string, adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.UrlChannels;
        }
      }
      namespace Adunits {
        export interface CustomchannelsCollection {
          // List all custom channels which the specified ad unit belongs to.
          list(adClientId: string, adUnitId: string): Adsense_v1_4.Schema.CustomChannels;
          // List all custom channels which the specified ad unit belongs to.
          list(adClientId: string, adUnitId: string, optionalArgs: object): Adsense_v1_4.Schema.CustomChannels;
        }
      }
      namespace Customchannels {
        export interface AdunitsCollection {
          // List all ad units in the specified custom channel.
          list(adClientId: string, customChannelId: string): Adsense_v1_4.Schema.AdUnits;
          // List all ad units in the specified custom channel.
          list(adClientId: string, customChannelId: string, optionalArgs: object): Adsense_v1_4.Schema.AdUnits;
        }
      }
      namespace Metadata {
        export interface DimensionsCollection {
          // List the metadata for the dimensions available to this AdSense account.
          list(): Adsense_v1_4.Schema.Metadata;
        }
        export interface MetricsCollection {
          // List the metadata for the metrics available to this AdSense account.
          list(): Adsense_v1_4.Schema.Metadata;
        }
      }
      namespace Reports {
        export interface SavedCollection {
          // Generate an AdSense report based on the saved report ID sent in the query parameters.
          generate(savedReportId: string): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
          // Generate an AdSense report based on the saved report ID sent in the query parameters.
          generate(savedReportId: string, optionalArgs: object): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
          // List all saved reports in this AdSense account.
          list(): Adsense_v1_4.Schema.SavedReports;
          // List all saved reports in this AdSense account.
          list(optionalArgs: object): Adsense_v1_4.Schema.SavedReports;
        }
      }
      export interface AccountsCollection {
        Adclients?: Adsense_v1_4.Collection.Accounts.AdclientsCollection;
        Adunits?: Adsense_v1_4.Collection.Accounts.AdunitsCollection;
        Alerts?: Adsense_v1_4.Collection.Accounts.AlertsCollection;
        Customchannels?: Adsense_v1_4.Collection.Accounts.CustomchannelsCollection;
        Payments?: Adsense_v1_4.Collection.Accounts.PaymentsCollection;
        Reports?: Adsense_v1_4.Collection.Accounts.ReportsCollection;
        Savedadstyles?: Adsense_v1_4.Collection.Accounts.SavedadstylesCollection;
        Urlchannels?: Adsense_v1_4.Collection.Accounts.UrlchannelsCollection;
        // Get information about the selected AdSense account.
        get(accountId: string): Adsense_v1_4.Schema.Account;
        // Get information about the selected AdSense account.
        get(accountId: string, optionalArgs: object): Adsense_v1_4.Schema.Account;
        // List all accounts available to this AdSense account.
        list(): Adsense_v1_4.Schema.Accounts;
        // List all accounts available to this AdSense account.
        list(optionalArgs: object): Adsense_v1_4.Schema.Accounts;
      }
      export interface AdclientsCollection {
        // List all ad clients in this AdSense account.
        list(): Adsense_v1_4.Schema.AdClients;
        // List all ad clients in this AdSense account.
        list(optionalArgs: object): Adsense_v1_4.Schema.AdClients;
      }
      export interface AdunitsCollection {
        Customchannels?: Adsense_v1_4.Collection.Adunits.CustomchannelsCollection;
        // Gets the specified ad unit in the specified ad client.
        get(adClientId: string, adUnitId: string): Adsense_v1_4.Schema.AdUnit;
        // Get ad code for the specified ad unit.
        getAdCode(adClientId: string, adUnitId: string): Adsense_v1_4.Schema.AdCode;
        // List all ad units in the specified ad client for this AdSense account.
        list(adClientId: string): Adsense_v1_4.Schema.AdUnits;
        // List all ad units in the specified ad client for this AdSense account.
        list(adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.AdUnits;
      }
      export interface AlertsCollection {
        // List the alerts for this AdSense account.
        list(): Adsense_v1_4.Schema.Alerts;
        // List the alerts for this AdSense account.
        list(optionalArgs: object): Adsense_v1_4.Schema.Alerts;
        // Dismiss (delete) the specified alert from the publisher's AdSense account.
        remove(alertId: string): void;
      }
      export interface CustomchannelsCollection {
        Adunits?: Adsense_v1_4.Collection.Customchannels.AdunitsCollection;
        // Get the specified custom channel from the specified ad client.
        get(adClientId: string, customChannelId: string): Adsense_v1_4.Schema.CustomChannel;
        // List all custom channels in the specified ad client for this AdSense account.
        list(adClientId: string): Adsense_v1_4.Schema.CustomChannels;
        // List all custom channels in the specified ad client for this AdSense account.
        list(adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.CustomChannels;
      }
      export interface MetadataCollection {
        Dimensions?: Adsense_v1_4.Collection.Metadata.DimensionsCollection;
        Metrics?: Adsense_v1_4.Collection.Metadata.MetricsCollection;
      }
      export interface PaymentsCollection {
        // List the payments for this AdSense account.
        list(): Adsense_v1_4.Schema.Payments;
      }
      export interface ReportsCollection {
        Saved?: Adsense_v1_4.Collection.Reports.SavedCollection;
        // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
        generate(startDate: string, endDate: string): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
        // Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
        generate(startDate: string, endDate: string, optionalArgs: object): Adsense_v1_4.Schema.AdsenseReportsGenerateResponse;
      }
      export interface SavedadstylesCollection {
        // Get a specific saved ad style from the user's account.
        get(savedAdStyleId: string): Adsense_v1_4.Schema.SavedAdStyle;
        // List all saved ad styles in the user's account.
        list(): Adsense_v1_4.Schema.SavedAdStyles;
        // List all saved ad styles in the user's account.
        list(optionalArgs: object): Adsense_v1_4.Schema.SavedAdStyles;
      }
      export interface UrlchannelsCollection {
        // List all URL channels in the specified ad client for this AdSense account.
        list(adClientId: string): Adsense_v1_4.Schema.UrlChannels;
        // List all URL channels in the specified ad client for this AdSense account.
        list(adClientId: string, optionalArgs: object): Adsense_v1_4.Schema.UrlChannels;
      }
    }
    namespace Schema {
      export interface Account {
        creation_time?: string;
        id?: string;
        kind?: string;
        name?: string;
        premium?: boolean;
        subAccounts?: Adsense_v1_4.Schema.Account[];
        timezone?: string;
      }
      export interface Accounts {
        etag?: string;
        items?: Adsense_v1_4.Schema.Account[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AdClient {
        arcOptIn?: boolean;
        id?: string;
        kind?: string;
        productCode?: string;
        supportsReporting?: boolean;
      }
      export interface AdClients {
        etag?: string;
        items?: Adsense_v1_4.Schema.AdClient[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AdCode {
        adCode?: string;
        ampBody?: string;
        ampHead?: string;
        kind?: string;
      }
      export interface AdStyle {
        colors?: Adsense_v1_4.Schema.AdStyleColors;
        corners?: string;
        font?: Adsense_v1_4.Schema.AdStyleFont;
        kind?: string;
      }
      export interface AdStyleColors {
        background?: string;
        border?: string;
        text?: string;
        title?: string;
        url?: string;
      }
      export interface AdStyleFont {
        family?: string;
        size?: string;
      }
      export interface AdUnit {
        code?: string;
        contentAdsSettings?: Adsense_v1_4.Schema.AdUnitContentAdsSettings;
        customStyle?: Adsense_v1_4.Schema.AdStyle;
        feedAdsSettings?: Adsense_v1_4.Schema.AdUnitFeedAdsSettings;
        id?: string;
        kind?: string;
        mobileContentAdsSettings?: Adsense_v1_4.Schema.AdUnitMobileContentAdsSettings;
        name?: string;
        savedStyleId?: string;
        status?: string;
      }
      export interface AdUnitContentAdsSettings {
        backupOption?: Adsense_v1_4.Schema.AdUnitContentAdsSettingsBackupOption;
        size?: string;
        type?: string;
      }
      export interface AdUnitContentAdsSettingsBackupOption {
        color?: string;
        type?: string;
        url?: string;
      }
      export interface AdUnitFeedAdsSettings {
        adPosition?: string;
        frequency?: number;
        minimumWordCount?: number;
        type?: string;
      }
      export interface AdUnitMobileContentAdsSettings {
        markupLanguage?: string;
        scriptingLanguage?: string;
        size?: string;
        type?: string;
      }
      export interface AdUnits {
        etag?: string;
        items?: Adsense_v1_4.Schema.AdUnit[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface AdsenseReportsGenerateResponse {
        averages?: string[];
        endDate?: string;
        headers?: Adsense_v1_4.Schema.AdsenseReportsGenerateResponseHeaders[];
        kind?: string;
        rows?: String[][];
        startDate?: string;
        totalMatchedRows?: string;
        totals?: string[];
        warnings?: string[];
      }
      export interface AdsenseReportsGenerateResponseHeaders {
        currency?: string;
        name?: string;
        type?: string;
      }
      export interface Alert {
        id?: string;
        isDismissible?: boolean;
        kind?: string;
        message?: string;
        severity?: string;
        type?: string;
      }
      export interface Alerts {
        items?: Adsense_v1_4.Schema.Alert[];
        kind?: string;
      }
      export interface CustomChannel {
        code?: string;
        id?: string;
        kind?: string;
        name?: string;
        targetingInfo?: Adsense_v1_4.Schema.CustomChannelTargetingInfo;
      }
      export interface CustomChannelTargetingInfo {
        adsAppearOn?: string;
        description?: string;
        location?: string;
        siteLanguage?: string;
      }
      export interface CustomChannels {
        etag?: string;
        items?: Adsense_v1_4.Schema.CustomChannel[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface Metadata {
        items?: Adsense_v1_4.Schema.ReportingMetadataEntry[];
        kind?: string;
      }
      export interface Payment {
        id?: string;
        kind?: string;
        paymentAmount?: string;
        paymentAmountCurrencyCode?: string;
        paymentDate?: string;
      }
      export interface Payments {
        items?: Adsense_v1_4.Schema.Payment[];
        kind?: string;
      }
      export interface ReportingMetadataEntry {
        compatibleDimensions?: string[];
        compatibleMetrics?: string[];
        id?: string;
        kind?: string;
        requiredDimensions?: string[];
        requiredMetrics?: string[];
        supportedProducts?: string[];
      }
      export interface SavedAdStyle {
        adStyle?: Adsense_v1_4.Schema.AdStyle;
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface SavedAdStyles {
        etag?: string;
        items?: Adsense_v1_4.Schema.SavedAdStyle[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface SavedReport {
        id?: string;
        kind?: string;
        name?: string;
      }
      export interface SavedReports {
        etag?: string;
        items?: Adsense_v1_4.Schema.SavedReport[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface UrlChannel {
        id?: string;
        kind?: string;
        urlPattern?: string;
      }
      export interface UrlChannels {
        etag?: string;
        items?: Adsense_v1_4.Schema.UrlChannel[];
        kind?: string;
        nextPageToken?: string;
      }
    }
  }
  export interface Adsense_v1_4 {
    Accounts?: Adsense_v1_4.Collection.AccountsCollection;
    Adclients?: Adsense_v1_4.Collection.AdclientsCollection;
    Adunits?: Adsense_v1_4.Collection.AdunitsCollection;
    Alerts?: Adsense_v1_4.Collection.AlertsCollection;
    Customchannels?: Adsense_v1_4.Collection.CustomchannelsCollection;
    Metadata?: Adsense_v1_4.Collection.MetadataCollection;
    Payments?: Adsense_v1_4.Collection.PaymentsCollection;
    Reports?: Adsense_v1_4.Collection.ReportsCollection;
    Savedadstyles?: Adsense_v1_4.Collection.SavedadstylesCollection;
    Urlchannels?: Adsense_v1_4.Collection.UrlchannelsCollection;
  }
}

declare var Adsense_v1_4: GoogleAppsScript.Adsense_v1_4;