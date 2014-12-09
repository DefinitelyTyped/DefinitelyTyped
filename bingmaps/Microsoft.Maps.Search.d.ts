// Type definitions for Microsoft.Maps.Search 7.0
// Project: http://msdn.microsoft.com/en-us/library/hh868061.aspx
// Definitions by: Eric Todd <https://github.com/ericrtodd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="Microsoft.Maps.d.ts"/>

declare module Microsoft.Maps.Search {
     
     export interface Address {
         addressLine: string;
         adminDistrict: string;
         countryRegion: string;
         district: string;
         formattedAddress: string;
         locality: string;
         postalCode: string;
         postalTown:string;
     }

     export interface GeocodeLocation {
         location: Location;
         name: string;
         precision:LocationPrecision;
     }

     export interface GeocodeRequestOptions {
         bounds: LocationRect;
         callback: (result: GeocodeResult, userData: any) => any;
         count: number;
         errorCallback: (options: GeocodeRequestOptions) => any;
         timeout: number;
         userData: any;
         where:string;
     }

     export interface GeocodeResult {
         parsedAddress: Address;
         parsedKeyword: string;
         parsedSeparator: string;
         results:Array<PlaceResult>;
     }

     export enum LocationPrecision {
         interpolated,
         rooftop,
     }

     export enum MatchCode {
         none,
         good,
         ambiguous,
         upHierarchy,
         modified,
     }

     export enum MatchConfidence {
         high,
         medium,
         low,
         unknown,
     }

     export interface PlaceResult {
         bestView: LocationRect;
         location: GeocodeLocation;
         locations: Array<GeocodeLocation>;
         matchCode: MatchCode;
         matchConfidence: MatchConfidence;
         name:string;
     }

     export interface ReverseGeocodeRequestOptions {
         callback: (result: PlaceResult, userData: any) => any;
         errorCallback: (options: ReverseGeocodeRequestOptions) => any;
         location: Location;
         timeout: number;
         userData:any;
     }

     export class SearchManager {
         
         constructor(map: Map);

         geocode(request: GeocodeRequestOptions): void;
         reverseGeocode(request: ReverseGeocodeRequestOptions): void;
         search(request:SearchRequestOptions):void;
     }

     export interface SearchParseResult {
         keyword: string;
         location: GeocodeLocation;
         matchConfidence:MatchConfidence;
     }

     export interface SearchRegion {
         address: Address;
         geocodeLocations: Array<GeocodeLocation>;
         explicitLocation: GeocodeLocation;
         mapBounds: LocationRect;
         matchCode: MatchCode;
         matchConfidence: MatchConfidence;
         source:string;
     }

     export interface SearchRequestOptions {
         callback:(result: SearchResponse, userData: any)=>any;
         count: number;
         errorCallback:(options: SearchRequestOptions)=>any;
         query: string;
         startIndex: number;
         timeout: number;
         entityType: string;
         userData: any;
         what: string;
         where:string;
     }

     export interface SearchResponse {
         alternateSearchRegions: Array<SearchRegion>;
         hasMore: boolean;
         parseResults: Array<SearchParseResult>;
         responseSummary: SearchResponseSummary;
         searchRegion: SearchRegion;
         searchResults:Array<SearchResult>;
     }

     export interface SearchResponseSummary {
         authResultCode: number;
         copyright: string;
         errorMessage: string;
         statusCode: number;
         traceId:number;
     }

     export interface SearchResult {
         address: Address;
         city: string;
         country: string;
         entityType: string;
         hoursOfOperation: string;
         id: number;
         location: Location;
         name: string;
         phone: string;
         postalCode: string;
         reviewCount: number;
         userRating: number;
         website:string;
     }

 }