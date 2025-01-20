/// <reference types="gapi" />

declare namespace gapi.client.analytics {}
declare namespace gapi.client.analytics.provisioning {
    export function createAccountTicket(): Promise<any>;
}

interface DataQuery {
    "ids"?: string | undefined;
    "start-date"?: string | undefined;
    "30daysAgo"?: string | undefined;
    "end-date"?: string | undefined;
    "yesterday"?: string | undefined;
    "metrics"?: string | undefined;
    "dimensions"?: string | undefined;
    "sort"?: string | undefined;
    "filters"?: string | undefined;
    "segment"?: string | undefined;
    "samplingLevel"?: string | undefined;
    "include-empty-rows"?: string | undefined;
    "start-index"?: string | undefined;
    "max-results"?: string | undefined;
}
declare namespace gapi.client.analytics.data {}
declare namespace gapi.client.analytics.data.ga {
    export function get(data?: DataQuery): Promise<any>;
}
declare namespace gapi.client.analytics.data.mcf {
    export function get(data?: DataQuery): Promise<any>;
}
declare namespace gapi.client.analytics.data.realtime {
    export function get(data?: DataQuery): Promise<any>;
}

declare namespace gapi.client.analytics.kB {}
declare namespace gapi.client.analytics.kB.parameters {
    export interface AnalyticsParameter {
        "type"?: string | undefined;
        "description"?: string | undefined;
        "default"?: string | undefined;
        "enum"?: string[] | undefined;
        "enumDescriptions"?: string[] | undefined;
        "location"?: string | undefined;
    }
    export interface alt extends AnalyticsParameter {}
    export class alt {}
    export interface fields extends AnalyticsParameter {}
    export class fields {}
    export interface key extends AnalyticsParameter {}
    export class key {}
    export interface oauth_token extends AnalyticsParameter {}
    export class oauth_token {}
    export interface prettyPrint extends AnalyticsParameter {}
    export class prettyPrint {}
    export interface quotaUser extends AnalyticsParameter {}
    export class quotaUser {}
    export interface userIP extends AnalyticsParameter {}
    export class userIP {}
}

interface View {
    accountId?: string | undefined;
    webPropertyId?: string | undefined;
    webViewId?: string | undefined;
}
declare namespace gapi.client.analytics.management {}
declare namespace gapi.client.analytics.management.accountSummaries {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.accountUserLinks {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.accounts {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.customDataSources {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.customDimensions {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.customMetrics {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.experiments {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.filters {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.goals {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.profileFilterLinks {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.profileUserLinks {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.profiles {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.remarketingAudience {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.segments {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.unsampledReports {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.uploads {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.webPropertyAdWordsLinks {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.webproperties {
    export function list(view?: View): Promise<any>;
}
declare namespace gapi.client.analytics.management.webpropertyUserLinks {
    export function list(view?: View): Promise<any>;
}

declare namespace gapi.client.analytics.metadata {}
declare namespace gapi.client.analytics.metadata.column {
    export function list(): Promise<any>;
}
