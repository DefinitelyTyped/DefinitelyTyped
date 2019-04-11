// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Urlshortener_v1 {
    namespace Collection {
      export interface UrlCollection {
        // Expands a short URL or gets creation time and analytics.
        get(shortUrl: string): Urlshortener_v1.Schema.Url;
        // Expands a short URL or gets creation time and analytics.
        get(shortUrl: string, optionalArgs: object): Urlshortener_v1.Schema.Url;
        // Creates a new short URL.
        insert(resource: Schema.Url): Urlshortener_v1.Schema.Url;
        // Retrieves a list of URLs shortened by a user.
        list(): Urlshortener_v1.Schema.UrlHistory;
        // Retrieves a list of URLs shortened by a user.
        list(optionalArgs: object): Urlshortener_v1.Schema.UrlHistory;
      }
    }
    namespace Schema {
      export interface AnalyticsSnapshot {
        browsers?: Urlshortener_v1.Schema.StringCount[];
        countries?: Urlshortener_v1.Schema.StringCount[];
        longUrlClicks?: string;
        platforms?: Urlshortener_v1.Schema.StringCount[];
        referrers?: Urlshortener_v1.Schema.StringCount[];
        shortUrlClicks?: string;
      }
      export interface AnalyticsSummary {
        allTime?: Urlshortener_v1.Schema.AnalyticsSnapshot;
        day?: Urlshortener_v1.Schema.AnalyticsSnapshot;
        month?: Urlshortener_v1.Schema.AnalyticsSnapshot;
        twoHours?: Urlshortener_v1.Schema.AnalyticsSnapshot;
        week?: Urlshortener_v1.Schema.AnalyticsSnapshot;
      }
      export interface StringCount {
        count?: string;
        id?: string;
      }
      export interface Url {
        analytics?: Urlshortener_v1.Schema.AnalyticsSummary;
        created?: string;
        id?: string;
        kind?: string;
        longUrl?: string;
        status?: string;
      }
      export interface UrlHistory {
        items?: Urlshortener_v1.Schema.Url[];
        itemsPerPage?: number;
        kind?: string;
        nextPageToken?: string;
        totalItems?: number;
      }
    }
  }
  export interface Urlshortener_v1 {
    Url?: Urlshortener_v1.Collection.UrlCollection;
    // Create a new instance of AnalyticsSnapshot
    newAnalyticsSnapshot(): Urlshortener_v1.Schema.AnalyticsSnapshot;
    // Create a new instance of AnalyticsSummary
    newAnalyticsSummary(): Urlshortener_v1.Schema.AnalyticsSummary;
    // Create a new instance of StringCount
    newStringCount(): Urlshortener_v1.Schema.StringCount;
    // Create a new instance of Url
    newUrl(): Urlshortener_v1.Schema.Url;
  }
}

declare var Urlshortener_v1: GoogleAppsScript.Urlshortener_v1;