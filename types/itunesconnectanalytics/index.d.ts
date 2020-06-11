// Type definitions for itunesconnectanalytics 0.5
// Project: https://github.com/JanHalozan/iTunesConnectAnalytics#readme
// Definitions by: David Trotz <https://github.com/dctrotz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0
import * as moment from 'moment';

export class Itunes {
    constructor(username: string, password: string, options: ItunesOptions);
    executeRequest(task: RequestTask, callback: () => void): void;
    login(username: string, password: string): void;
    changeProvider(providerId: string, callback: (error?: any, paused?: boolean) => void): void;
    getApps(callback: (error: any, paused: boolean) => void): void;
    getSettings(callback: (error: any, paused: boolean) => void): void;
    getAPIURL(url: string, callback: (error: any, paused: boolean) => void): void;
    request(query: AnalyticsQuery, callback: (error: any, body: QueryResult) => void): void;
    getCookies(): string;
    getHeaders(): object;
}

export interface ItunesOptions {
    baseURL?: string;
    loginURL?: string;
    settingsURL?: string;
    appleWidgetKey?: string;
    concurrentRequests?: number;
    errorCallback: (error: any) => void;
    successCallback: (cookies: string) => void;
}

export  type QueryDateTypes = string | Date | moment.Moment;

export interface QueryResult {
    size: number;
    results: AnalyticsResult[];
}

export interface AnalyticsResult {
    adamId: string;
    meetsThreshold: boolean;
    group: AnalyticsGroup | null;
    data: AnalyticsDataPoint[];
    totals: AnalyticsTotals;
}

export interface AnalyticsDataPoint {
    date: Date;
    installs?: number;
    sessions?: number;
    pageViewCount?: number;
    activeDevices?: number;
    rollingActiveDevices?: number;
    crashes?: number;
    payingUsers?: number;
    units?: number;
    sales?: number;
    iap?: number;
    impressionsTotal?: number;
    impressionsTotalUnique?: number;
    pageViewUnique?: number;
}

export interface AnalyticsGroup {
    key: string;
    title: string;
}

export interface AnalyticsTotals {
    value: number;
    type: string;
    key: string;
}

export interface  RequestTask {
    query: string;
    completed: (error: Error, body: string) => void;
}

export interface QueryGroup {
    metric?: measures;
    dimension: dimension;
    rank?: string;
    limit?: number;
}

export interface DimensionFilters {
    dimensionKey: string;
    optionsKeys: string[];
}

export interface QueryConfig {
    measures?: measures | measures[];
    start?: QueryDateTypes;
    end?: QueryDateTypes;
    frequency?: frequency;
    group?: QueryGroup;
    dimensionFilters?: string[];
}

export class AnalyticsQuery {
    constructor(type: string, appId: string, config: QueryConfig);
    static metrics(appId: string, config: QueryConfig): AnalyticsQuery;
    static sources(appId: string, config: QueryConfig): AnalyticsQuery;
    date(start: QueryDateTypes, end: QueryDateTypes): AnalyticsQuery;
    time(value: number, unit: string): AnalyticsQuery;
    limit(limit: number): AnalyticsQuery;
}

export enum frequency {
    days = 'DAY',
    weeks = 'WEEK',
    months = 'MONTH'
}

export enum measures {
    installs = 'installs',
    sessions = 'sessions',
    pageViews = 'pageViewCount',
    activeDevices = 'activeDevices',
    activeLast30days = 'rollingActiveDevices',
    crashes = 'crashes',
    payingUsers = 'payingUsers',
    units = 'units',
    sales = 'sales',
    iap = 'iap',
    impressions = 'impressionsTotal',
    impressionsUnique = 'impressionsTotalUnique',
    pageViewUnique = 'pageViewUnique'
    }

    export enum dimension {
    appVersion = 'appVersion',
    campaigns = 'campaignId',
    device = 'platform',
    platformVersion = 'platformVersion',
    region = 'region',
    territory = 'storefront',
    websites = 'domainReferrer',
    apps = 'appReferrer',
    sourceType = 'source'
    }

    export enum dimensionFilterKey {
    appPurchaseWeek = 'apppurchaseWeek',
    apppurchaseDay = 'apppurchaseDay',
    apppurchaseMonth = 'apppurchaseMonth',
    appVersion = 'appVersion',
    campaigns = 'campaignId',
    device = 'platform',
    platformVersion = 'platformVersion',
    territory = 'storefront',
    region = 'region',
    websites = 'domainReferrer'
    }

    export enum platform {
    iPhone = 'iPhone',
    iPad = 'iPad',
    iPod = 'iPod',
    appleTV = 'AppleTV'
    }

    export enum queryType {
    sources = 'sources',
    metrics = 'metrics'
    }
