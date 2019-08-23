// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace UrlShortener {
    namespace Collection {
      export interface UrlCollection {
        // Expands a short URL or gets creation time and analytics.
        get(shortUrl: string): UrlShortener.Schema.Url;
        // Expands a short URL or gets creation time and analytics.
        get(shortUrl: string, optionalArgs: object): UrlShortener.Schema.Url;
        // Creates a new short URL.
        insert(resource: Schema.Url): UrlShortener.Schema.Url;
        // Retrieves a list of URLs shortened by a user.
        list(): UrlShortener.Schema.UrlHistory;
        // Retrieves a list of URLs shortened by a user.
        list(optionalArgs: object): UrlShortener.Schema.UrlHistory;
      }
    }
    namespace Schema {
      export interface AnalyticsSnapshot {
        browsers?: UrlShortener.Schema.StringCount[];
        countries?: UrlShortener.Schema.StringCount[];
        longUrlClicks?: string;
        platforms?: UrlShortener.Schema.StringCount[];
        referrers?: UrlShortener.Schema.StringCount[];
        shortUrlClicks?: string;
      }
      export interface AnalyticsSummary {
        allTime?: UrlShortener.Schema.AnalyticsSnapshot;
        day?: UrlShortener.Schema.AnalyticsSnapshot;
        month?: UrlShortener.Schema.AnalyticsSnapshot;
        twoHours?: UrlShortener.Schema.AnalyticsSnapshot;
        week?: UrlShortener.Schema.AnalyticsSnapshot;
      }
      export interface StringCount {
        count?: string;
        id?: string;
      }
      export interface Url {
        analytics?: UrlShortener.Schema.AnalyticsSummary;
        created?: string;
        id?: string;
        kind?: string;
        longUrl?: string;
        status?: string;
      }
      export interface UrlHistory {
        items?: UrlShortener.Schema.Url[];
        itemsPerPage?: number;
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
    }
  }
  export interface UrlShortener {
    Url?: UrlShortener.Collection.UrlCollection;
    // Create a new instance of AnalyticsSnapshot
    newAnalyticsSnapshot(): UrlShortener.Schema.AnalyticsSnapshot;
    // Create a new instance of AnalyticsSummary
    newAnalyticsSummary(): UrlShortener.Schema.AnalyticsSummary;
    // Create a new instance of StringCount
    newStringCount(): UrlShortener.Schema.StringCount;
    // Create a new instance of Url
    newUrl(): UrlShortener.Schema.Url;
  }
}

declare var UrlShortener: GoogleAppsScript.UrlShortener;
