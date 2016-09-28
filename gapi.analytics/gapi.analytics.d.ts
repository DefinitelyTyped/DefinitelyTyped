// Type definitions for Google Analytics API

/// <reference path="../gapi/gapi.d.ts" />

declare namespace gapi.client.analytics {}
declare namespace gapi.client.analytics.provisioning {
    export function createAccountTicket() : Promise<any>;
}

interface DataQuery {
    "ids"                   ?: string;
    "start-date"            ?: string;
    "30daysAgo"             ?: string;
    "end-date"              ?: string;
    "yesterday"             ?: string;
    "metrics"               ?: string;
    "dimensions"            ?: string;
    "sort"                  ?: string;
    "filters"               ?: string;
    "segment"               ?: string;
    "samplingLevel"         ?: string;
    "include-empty-rows"    ?: string;
    "start-index"           ?: string;
    "max-results"           ?: string;
}
declare namespace gapi.client.analytics.data {}
declare namespace gapi.client.analytics.data.ga {
    export function get(data ?: DataQuery) : Promise<any>;
}
declare namespace gapi.client.analytics.data.mcf {
    export function get(data ?: DataQuery) : Promise<any>;
}
declare namespace gapi.client.analytics.data.realtime {
    export function get(data ?: DataQuery) : Promise<any>;
}

interface AnalyticsParameter {
    "type"              ?: string;
    "description"       ?: string;
    "default"           ?: string;
    "enum"              ?: string[];
    "enumDescriptions"  ?: string[];
    "location"          ?: string;
} 
declare namespace gapi.client.analytics.kB {
    export class parameters {
        alt: AnalyticsParameter;
        fields: AnalyticsParameter;
        key: AnalyticsParameter;
        oauth_token: AnalyticsParameter;
        prettyPrint: AnalyticsParameter;
        quotaUser: AnalyticsParameter;
        userIP: AnalyticsParameter;
    }
}

interface View {
    accountId       ?: string;
    webPropertyId   ?: string;
    webViewId       ?: string;
}
declare namespace gapi.client.analytics.management {}
declare namespace gapi.client.analytics.managementaccountSummaries {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.managementaccountUserLinks {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.accounts {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.customDataSources {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.customDimensions {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.customMetrics {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.experiments {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.filters {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.goals {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.profileFilterLinks {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.profileUserLinks {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.profiles {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.remarketingAudience {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.segments {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.unsampledReports {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.uploads {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.webPropertyAdWordsLinks {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.webproperties {
    export function list(view ?: View) : Promise<any>;
}
declare namespace gapi.client.analytics.management.webpropertyUserLinks {
    export function list(view ?: View) : Promise<any>;
}

declare namespace gapi.client.analytics.metadata {}
declare namespace gapi.client.analytics.metadata.column {
    export function list() : Promise<any>;
}
