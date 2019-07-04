// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Analyticsreporting {
    namespace Collection {
      export interface ReportsCollection {
        // Returns the Analytics data.
        batchGet(resource: Schema.GetReportsRequest): Analyticsreporting.Schema.GetReportsResponse;
      }
      export interface UserActivityCollection {
        // Returns User Activity data.
        search(resource: Schema.SearchUserActivityRequest): Analyticsreporting.Schema.SearchUserActivityResponse;
      }
    }
    namespace Schema {
      export interface Activity {
        activityTime?: string;
        activityType?: string;
        appview?: Analyticsreporting.Schema.ScreenviewData;
        campaign?: string;
        channelGrouping?: string;
        customDimension?: Analyticsreporting.Schema.CustomDimension[];
        ecommerce?: Analyticsreporting.Schema.EcommerceData;
        event?: Analyticsreporting.Schema.EventData;
        goals?: Analyticsreporting.Schema.GoalSetData;
        hostname?: string;
        keyword?: string;
        landingPagePath?: string;
        medium?: string;
        pageview?: Analyticsreporting.Schema.PageviewData;
        source?: string;
      }
      export interface Cohort {
        dateRange?: Analyticsreporting.Schema.DateRange;
        name?: string;
        type?: string;
      }
      export interface CohortGroup {
        cohorts?: Analyticsreporting.Schema.Cohort[];
        lifetimeValue?: boolean;
      }
      export interface ColumnHeader {
        dimensions?: string[];
        metricHeader?: Analyticsreporting.Schema.MetricHeader;
      }
      export interface CustomDimension {
        index?: number;
        value?: string;
      }
      export interface DateRange {
        endDate?: string;
        startDate?: string;
      }
      export interface DateRangeValues {
        pivotValueRegions?: Analyticsreporting.Schema.PivotValueRegion[];
        values?: string[];
      }
      export interface Dimension {
        histogramBuckets?: string[];
        name?: string;
      }
      export interface DimensionFilter {
        caseSensitive?: boolean;
        dimensionName?: string;
        expressions?: string[];
        not?: boolean;
        operator?: string;
      }
      export interface DimensionFilterClause {
        filters?: Analyticsreporting.Schema.DimensionFilter[];
        operator?: string;
      }
      export interface DynamicSegment {
        name?: string;
        sessionSegment?: Analyticsreporting.Schema.SegmentDefinition;
        userSegment?: Analyticsreporting.Schema.SegmentDefinition;
      }
      export interface EcommerceData {
        actionType?: string;
        ecommerceType?: string;
        products?: Analyticsreporting.Schema.ProductData[];
        transaction?: Analyticsreporting.Schema.TransactionData;
      }
      export interface EventData {
        eventAction?: string;
        eventCategory?: string;
        eventCount?: string;
        eventLabel?: string;
        eventValue?: string;
      }
      export interface GetReportsRequest {
        reportRequests?: Analyticsreporting.Schema.ReportRequest[];
        useResourceQuotas?: boolean;
      }
      export interface GetReportsResponse {
        queryCost?: number;
        reports?: Analyticsreporting.Schema.Report[];
        resourceQuotasRemaining?: Analyticsreporting.Schema.ResourceQuotasRemaining;
      }
      export interface GoalData {
        goalCompletionLocation?: string;
        goalCompletions?: string;
        goalIndex?: number;
        goalName?: string;
        goalPreviousStep1?: string;
        goalPreviousStep2?: string;
        goalPreviousStep3?: string;
        goalValue?: number;
      }
      export interface GoalSetData {
        goals?: Analyticsreporting.Schema.GoalData[];
      }
      export interface Metric {
        alias?: string;
        expression?: string;
        formattingType?: string;
      }
      export interface MetricFilter {
        comparisonValue?: string;
        metricName?: string;
        not?: boolean;
        operator?: string;
      }
      export interface MetricFilterClause {
        filters?: Analyticsreporting.Schema.MetricFilter[];
        operator?: string;
      }
      export interface MetricHeader {
        metricHeaderEntries?: Analyticsreporting.Schema.MetricHeaderEntry[];
        pivotHeaders?: Analyticsreporting.Schema.PivotHeader[];
      }
      export interface MetricHeaderEntry {
        name?: string;
        type?: string;
      }
      export interface OrFiltersForSegment {
        segmentFilterClauses?: Analyticsreporting.Schema.SegmentFilterClause[];
      }
      export interface OrderBy {
        fieldName?: string;
        orderType?: string;
        sortOrder?: string;
      }
      export interface PageviewData {
        pagePath?: string;
        pageTitle?: string;
      }
      export interface Pivot {
        dimensionFilterClauses?: Analyticsreporting.Schema.DimensionFilterClause[];
        dimensions?: Analyticsreporting.Schema.Dimension[];
        maxGroupCount?: number;
        metrics?: Analyticsreporting.Schema.Metric[];
        startGroup?: number;
      }
      export interface PivotHeader {
        pivotHeaderEntries?: Analyticsreporting.Schema.PivotHeaderEntry[];
        totalPivotGroupsCount?: number;
      }
      export interface PivotHeaderEntry {
        dimensionNames?: string[];
        dimensionValues?: string[];
        metric?: Analyticsreporting.Schema.MetricHeaderEntry;
      }
      export interface PivotValueRegion {
        values?: string[];
      }
      export interface ProductData {
        itemRevenue?: number;
        productName?: string;
        productQuantity?: string;
        productSku?: string;
      }
      export interface Report {
        columnHeader?: Analyticsreporting.Schema.ColumnHeader;
        data?: Analyticsreporting.Schema.ReportData;
        nextPageToken?: string;
      }
      export interface ReportData {
        dataLastRefreshed?: string;
        isDataGolden?: boolean;
        maximums?: Analyticsreporting.Schema.DateRangeValues[];
        minimums?: Analyticsreporting.Schema.DateRangeValues[];
        rowCount?: number;
        rows?: Analyticsreporting.Schema.ReportRow[];
        samplesReadCounts?: string[];
        samplingSpaceSizes?: string[];
        totals?: Analyticsreporting.Schema.DateRangeValues[];
      }
      export interface ReportRequest {
        cohortGroup?: Analyticsreporting.Schema.CohortGroup;
        dateRanges?: Analyticsreporting.Schema.DateRange[];
        dimensionFilterClauses?: Analyticsreporting.Schema.DimensionFilterClause[];
        dimensions?: Analyticsreporting.Schema.Dimension[];
        filtersExpression?: string;
        hideTotals?: boolean;
        hideValueRanges?: boolean;
        includeEmptyRows?: boolean;
        metricFilterClauses?: Analyticsreporting.Schema.MetricFilterClause[];
        metrics?: Analyticsreporting.Schema.Metric[];
        orderBys?: Analyticsreporting.Schema.OrderBy[];
        pageSize?: number;
        pageToken?: string;
        pivots?: Analyticsreporting.Schema.Pivot[];
        samplingLevel?: string;
        segments?: Analyticsreporting.Schema.Segment[];
        viewId?: string;
      }
      export interface ReportRow {
        dimensions?: string[];
        metrics?: Analyticsreporting.Schema.DateRangeValues[];
      }
      export interface ResourceQuotasRemaining {
        dailyQuotaTokensRemaining?: number;
        hourlyQuotaTokensRemaining?: number;
      }
      export interface ScreenviewData {
        appName?: string;
        mobileDeviceBranding?: string;
        mobileDeviceModel?: string;
        screenName?: string;
      }
      export interface SearchUserActivityRequest {
        activityTypes?: string[];
        dateRange?: Analyticsreporting.Schema.DateRange;
        pageSize?: number;
        pageToken?: string;
        user?: Analyticsreporting.Schema.User;
        viewId?: string;
      }
      export interface SearchUserActivityResponse {
        nextPageToken?: string;
        sampleRate?: number;
        sessions?: Analyticsreporting.Schema.UserActivitySession[];
        totalRows?: number;
      }
      export interface Segment {
        dynamicSegment?: Analyticsreporting.Schema.DynamicSegment;
        segmentId?: string;
      }
      export interface SegmentDefinition {
        segmentFilters?: Analyticsreporting.Schema.SegmentFilter[];
      }
      export interface SegmentDimensionFilter {
        caseSensitive?: boolean;
        dimensionName?: string;
        expressions?: string[];
        maxComparisonValue?: string;
        minComparisonValue?: string;
        operator?: string;
      }
      export interface SegmentFilter {
        not?: boolean;
        sequenceSegment?: Analyticsreporting.Schema.SequenceSegment;
        simpleSegment?: Analyticsreporting.Schema.SimpleSegment;
      }
      export interface SegmentFilterClause {
        dimensionFilter?: Analyticsreporting.Schema.SegmentDimensionFilter;
        metricFilter?: Analyticsreporting.Schema.SegmentMetricFilter;
        not?: boolean;
      }
      export interface SegmentMetricFilter {
        comparisonValue?: string;
        maxComparisonValue?: string;
        metricName?: string;
        operator?: string;
        scope?: string;
      }
      export interface SegmentSequenceStep {
        matchType?: string;
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[];
      }
      export interface SequenceSegment {
        firstStepShouldMatchFirstHit?: boolean;
        segmentSequenceSteps?: Analyticsreporting.Schema.SegmentSequenceStep[];
      }
      export interface SimpleSegment {
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[];
      }
      export interface TransactionData {
        transactionId?: string;
        transactionRevenue?: number;
        transactionShipping?: number;
        transactionTax?: number;
      }
      export interface User {
        type?: string;
        userId?: string;
      }
      export interface UserActivitySession {
        activities?: Analyticsreporting.Schema.Activity[];
        dataSource?: string;
        deviceCategory?: string;
        platform?: string;
        sessionDate?: string;
        sessionId?: string;
      }
    }
  }
  export interface Analyticsreporting {
    Reports?: Analyticsreporting.Collection.ReportsCollection;
    UserActivity?: Analyticsreporting.Collection.UserActivityCollection;
    // Create a new instance of Cohort
    newCohort(): Analyticsreporting.Schema.Cohort;
    // Create a new instance of CohortGroup
    newCohortGroup(): Analyticsreporting.Schema.CohortGroup;
    // Create a new instance of DateRange
    newDateRange(): Analyticsreporting.Schema.DateRange;
    // Create a new instance of Dimension
    newDimension(): Analyticsreporting.Schema.Dimension;
    // Create a new instance of DimensionFilter
    newDimensionFilter(): Analyticsreporting.Schema.DimensionFilter;
    // Create a new instance of DimensionFilterClause
    newDimensionFilterClause(): Analyticsreporting.Schema.DimensionFilterClause;
    // Create a new instance of DynamicSegment
    newDynamicSegment(): Analyticsreporting.Schema.DynamicSegment;
    // Create a new instance of GetReportsRequest
    newGetReportsRequest(): Analyticsreporting.Schema.GetReportsRequest;
    // Create a new instance of Metric
    newMetric(): Analyticsreporting.Schema.Metric;
    // Create a new instance of MetricFilter
    newMetricFilter(): Analyticsreporting.Schema.MetricFilter;
    // Create a new instance of MetricFilterClause
    newMetricFilterClause(): Analyticsreporting.Schema.MetricFilterClause;
    // Create a new instance of OrFiltersForSegment
    newOrFiltersForSegment(): Analyticsreporting.Schema.OrFiltersForSegment;
    // Create a new instance of OrderBy
    newOrderBy(): Analyticsreporting.Schema.OrderBy;
    // Create a new instance of Pivot
    newPivot(): Analyticsreporting.Schema.Pivot;
    // Create a new instance of ReportRequest
    newReportRequest(): Analyticsreporting.Schema.ReportRequest;
    // Create a new instance of SearchUserActivityRequest
    newSearchUserActivityRequest(): Analyticsreporting.Schema.SearchUserActivityRequest;
    // Create a new instance of Segment
    newSegment(): Analyticsreporting.Schema.Segment;
    // Create a new instance of SegmentDefinition
    newSegmentDefinition(): Analyticsreporting.Schema.SegmentDefinition;
    // Create a new instance of SegmentDimensionFilter
    newSegmentDimensionFilter(): Analyticsreporting.Schema.SegmentDimensionFilter;
    // Create a new instance of SegmentFilter
    newSegmentFilter(): Analyticsreporting.Schema.SegmentFilter;
    // Create a new instance of SegmentFilterClause
    newSegmentFilterClause(): Analyticsreporting.Schema.SegmentFilterClause;
    // Create a new instance of SegmentMetricFilter
    newSegmentMetricFilter(): Analyticsreporting.Schema.SegmentMetricFilter;
    // Create a new instance of SegmentSequenceStep
    newSegmentSequenceStep(): Analyticsreporting.Schema.SegmentSequenceStep;
    // Create a new instance of SequenceSegment
    newSequenceSegment(): Analyticsreporting.Schema.SequenceSegment;
    // Create a new instance of SimpleSegment
    newSimpleSegment(): Analyticsreporting.Schema.SimpleSegment;
    // Create a new instance of User
    newUser(): Analyticsreporting.Schema.User;
  }
}

declare var Analyticsreporting: GoogleAppsScript.Analyticsreporting;
