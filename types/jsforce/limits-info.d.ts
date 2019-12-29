export interface Limit {
    Max: number;
    Remaining: number;
}

export interface PermissionSets extends Limit {
    CreateCustom: Limit;
}

export interface DailyApiRequests extends Limit {
    'Chatter Desktop': Limit;
    'Chatter Mobile for BlackBerry': Limit;
    'Salesforce Files': Limit;
    'Salesforce Marketing Cloud': Limit;
    'Salesforce for Android': Limit;
    'Salesforce for iOS': Limit;
    'SalesforceA': Limit;
}

export interface LimitsInfo {
    ConcurrentAsyncGetReportInstances: Limit;
    ConcurrentSyncReportRuns: Limit;
    DailyAnalyticsDataflowJobExecutions: Limit;
    DailyApiRequests: DailyApiRequests;
    DailyAsyncApexExecutions: Limit;
    DailyBulkApiRequests: DailyApiRequests;
    DailyDurableGenericStreamingApiEvents: Limit;
    DailyDurableStreamingApiEvents: Limit;
    DailyGenericStreamingApiEvents: DailyApiRequests;
    DailyStreamingApiEvents: DailyApiRequests;
    DailyWorkflowEmails: Limit;
    DataStorageMB: Limit;
    DurableStreamingApiConcurrentClients: Limit;
    FileStorageMB: Limit;
    HourlyAsyncReportRuns: Limit;
    HourlyDashboardRefreshes: Limit;
    HourlyDashboardResults: Limit;
    HourlyDashboardStatuses: Limit;
    HourlyODataCallout: Limit;
    HourlySyncReportRuns: Limit;
    HourlyTimeBasedWorkflow: Limit;
    MassEmail: Limit;
    MonthlyPlatformEvents: Limit;
    Package2VersionCreates: Limit;
    PermissionSets: PermissionSets;
    SingleEmail: Limit;
    StreamingApiConcurrentClients: Limit;
}
