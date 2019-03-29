// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Analyticsreporting_v4 {
    namespace Collection {
      export interface ReportsCollection {
        // Returns the Analytics data.
        batchGet(resource: Schema.GetReportsRequest): Analyticsreporting_v4.Schema.GetReportsResponse;
      }
      export interface UserActivityCollection {
        // Returns User Activity data.
        search(resource: Schema.SearchUserActivityRequest): Analyticsreporting_v4.Schema.SearchUserActivityResponse;
      }
    }
    namespace Schema {
      export interface Activity {
        activityTime?: string;
        activityType?: string;
        appview?: Analyticsreporting_v4.Schema.ScreenviewData;
        campaign?: string;
        channelGrouping?: string;
        customDimension?: Analyticsreporting_v4.Schema.CustomDimension[];
        ecommerce?: Analyticsreporting_v4.Schema.EcommerceData;
        event?: Analyticsreporting_v4.Schema.EventData;
        goals?: Analyticsreporting_v4.Schema.GoalSetData;
        hostname?: string;
        keyword?: string;
        landingPagePath?: string;
        medium?: string;
        pageview?: Analyticsreporting_v4.Schema.PageviewData;
        source?: string;
      }
      export interface Cohort {
        dateRange?: Analyticsreporting_v4.Schema.DateRange;
        name?: string;
        type?: string;
      }
      export interface CohortGroup {
        cohorts?: Analyticsreporting_v4.Schema.Cohort[];
        lifetimeValue?: boolean;
      }
      export interface ColumnHeader {
        dimensions?: string[];
        metricHeader?: Analyticsreporting_v4.Schema.MetricHeader;
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
        pivotValueRegions?: Analyticsreporting_v4.Schema.PivotValueRegion[];
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
        filters?: Analyticsreporting_v4.Schema.DimensionFilter[];
        operator?: string;
      }
      export interface DynamicSegment {
        name?: string;
        sessionSegment?: Analyticsreporting_v4.Schema.SegmentDefinition;
        userSegment?: Analyticsreporting_v4.Schema.SegmentDefinition;
      }
      export interface EcommerceData {
        actionType?: string;
        ecommerceType?: string;
        products?: Analyticsreporting_v4.Schema.ProductData[];
        transaction?: Analyticsreporting_v4.Schema.TransactionData;
      }
      export interface EventData {
        eventAction?: string;
        eventCategory?: string;
        eventCount?: string;
        eventLabel?: string;
        eventValue?: string;
      }
      export interface GetReportsRequest {
        reportRequests?: Analyticsreporting_v4.Schema.ReportRequest[];
        useResourceQuotas?: boolean;
      }
      export interface GetReportsResponse {
        queryCost?: number;
        reports?: Analyticsreporting_v4.Schema.Report[];
        resourceQuotasRemaining?: Analyticsreporting_v4.Schema.ResourceQuotasRemaining;
      }
      export interface GoalData {
        goalCompletionLocation?: string;
        goalCompletions?: string;
        goalIndex?: number;
        goalName?: string;
        goalPreviousStep1?: string;
        goalPreviousStep2?: string;
        goalPreviousStep3?: string;
        goalValue?: Number;
      }
      export interface GoalSetData {
        goals?: Analyticsreporting_v4.Schema.GoalData[];
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
        filters?: Analyticsreporting_v4.Schema.MetricFilter[];
        operator?: string;
      }
      export interface MetricHeader {
        metricHeaderEntries?: Analyticsreporting_v4.Schema.MetricHeaderEntry[];
        pivotHeaders?: Analyticsreporting_v4.Schema.PivotHeader[];
      }
      export interface MetricHeaderEntry {
        name?: string;
        type?: string;
      }
      export interface OrFiltersForSegment {
        segmentFilterClauses?: Analyticsreporting_v4.Schema.SegmentFilterClause[];
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
        dimensionFilterClauses?: Analyticsreporting_v4.Schema.DimensionFilterClause[];
        dimensions?: Analyticsreporting_v4.Schema.Dimension[];
        maxGroupCount?: number;
        metrics?: Analyticsreporting_v4.Schema.Metric[];
        startGroup?: number;
      }
      export interface PivotHeader {
        pivotHeaderEntries?: Analyticsreporting_v4.Schema.PivotHeaderEntry[];
        totalPivotGroupsCount?: number;
      }
      export interface PivotHeaderEntry {
        dimensionNames?: string[];
        dimensionValues?: string[];
        metric?: Analyticsreporting_v4.Schema.MetricHeaderEntry;
      }
      export interface PivotValueRegion {
        values?: string[];
      }
      export interface ProductData {
        itemRevenue?: Number;
        productName?: string;
        productQuantity?: string;
        productSku?: string;
      }
      export interface Report {
        columnHeader?: Analyticsreporting_v4.Schema.ColumnHeader;
        data?: Analyticsreporting_v4.Schema.ReportData;
        nextPageToken?: string;
      }
      export interface ReportData {
        dataLastRefreshed?: string;
        isDataGolden?: boolean;
        maximums?: Analyticsreporting_v4.Schema.DateRangeValues[];
        minimums?: Analyticsreporting_v4.Schema.DateRangeValues[];
        rowCount?: number;
        rows?: Analyticsreporting_v4.Schema.ReportRow[];
        samplesReadCounts?: string[];
        samplingSpaceSizes?: string[];
        totals?: Analyticsreporting_v4.Schema.DateRangeValues[];
      }
      export interface ReportRequest {
        cohortGroup?: Analyticsreporting_v4.Schema.CohortGroup;
        dateRanges?: Analyticsreporting_v4.Schema.DateRange[];
        dimensionFilterClauses?: Analyticsreporting_v4.Schema.DimensionFilterClause[];
        dimensions?: Analyticsreporting_v4.Schema.Dimension[];
        filtersExpression?: string;
        hideTotals?: boolean;
        hideValueRanges?: boolean;
        includeEmptyRows?: boolean;
        metricFilterClauses?: Analyticsreporting_v4.Schema.MetricFilterClause[];
        metrics?: Analyticsreporting_v4.Schema.Metric[];
        orderBys?: Analyticsreporting_v4.Schema.OrderBy[];
        pageSize?: number;
        pageToken?: string;
        pivots?: Analyticsreporting_v4.Schema.Pivot[];
        samplingLevel?: string;
        segments?: Analyticsreporting_v4.Schema.Segment[];
        viewId?: string;
      }
      export interface ReportRow {
        dimensions?: string[];
        metrics?: Analyticsreporting_v4.Schema.DateRangeValues[];
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
        dateRange?: Analyticsreporting_v4.Schema.DateRange;
        pageSize?: number;
        pageToken?: string;
        user?: Analyticsreporting_v4.Schema.User;
        viewId?: string;
      }
      export interface SearchUserActivityResponse {
        nextPageToken?: string;
        sampleRate?: Number;
        sessions?: Analyticsreporting_v4.Schema.UserActivitySession[];
        totalRows?: number;
      }
      export interface Segment {
        dynamicSegment?: Analyticsreporting_v4.Schema.DynamicSegment;
        segmentId?: string;
      }
      export interface SegmentDefinition {
        segmentFilters?: Analyticsreporting_v4.Schema.SegmentFilter[];
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
        sequenceSegment?: Analyticsreporting_v4.Schema.SequenceSegment;
        simpleSegment?: Analyticsreporting_v4.Schema.SimpleSegment;
      }
      export interface SegmentFilterClause {
        dimensionFilter?: Analyticsreporting_v4.Schema.SegmentDimensionFilter;
        metricFilter?: Analyticsreporting_v4.Schema.SegmentMetricFilter;
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
        orFiltersForSegment?: Analyticsreporting_v4.Schema.OrFiltersForSegment[];
      }
      export interface SequenceSegment {
        firstStepShouldMatchFirstHit?: boolean;
        segmentSequenceSteps?: Analyticsreporting_v4.Schema.SegmentSequenceStep[];
      }
      export interface SimpleSegment {
        orFiltersForSegment?: Analyticsreporting_v4.Schema.OrFiltersForSegment[];
      }
      export interface TransactionData {
        transactionId?: string;
        transactionRevenue?: Number;
        transactionShipping?: Number;
        transactionTax?: Number;
      }
      export interface User {
        type?: string;
        userId?: string;
      }
      export interface UserActivitySession {
        activities?: Analyticsreporting_v4.Schema.Activity[];
        dataSource?: string;
        deviceCategory?: string;
        platform?: string;
        sessionDate?: string;
        sessionId?: string;
      }
    }
  }
  export interface Analyticsreporting_v4 {
    Reports?: Analyticsreporting_v4.Collection.ReportsCollection;
    UserActivity?: Analyticsreporting_v4.Collection.UserActivityCollection;
    // Create a new instance of Cohort
    newCohort(): Analyticsreporting_v4.Schema.Cohort;
    // Create a new instance of CohortGroup
    newCohortGroup(): Analyticsreporting_v4.Schema.CohortGroup;
    // Create a new instance of DateRange
    newDateRange(): Analyticsreporting_v4.Schema.DateRange;
    // Create a new instance of Dimension
    newDimension(): Analyticsreporting_v4.Schema.Dimension;
    // Create a new instance of DimensionFilter
    newDimensionFilter(): Analyticsreporting_v4.Schema.DimensionFilter;
    // Create a new instance of DimensionFilterClause
    newDimensionFilterClause(): Analyticsreporting_v4.Schema.DimensionFilterClause;
    // Create a new instance of DynamicSegment
    newDynamicSegment(): Analyticsreporting_v4.Schema.DynamicSegment;
    // Create a new instance of GetReportsRequest
    newGetReportsRequest(): Analyticsreporting_v4.Schema.GetReportsRequest;
    // Create a new instance of Metric
    newMetric(): Analyticsreporting_v4.Schema.Metric;
    // Create a new instance of MetricFilter
    newMetricFilter(): Analyticsreporting_v4.Schema.MetricFilter;
    // Create a new instance of MetricFilterClause
    newMetricFilterClause(): Analyticsreporting_v4.Schema.MetricFilterClause;
    // Create a new instance of OrFiltersForSegment
    newOrFiltersForSegment(): Analyticsreporting_v4.Schema.OrFiltersForSegment;
    // Create a new instance of OrderBy
    newOrderBy(): Analyticsreporting_v4.Schema.OrderBy;
    // Create a new instance of Pivot
    newPivot(): Analyticsreporting_v4.Schema.Pivot;
    // Create a new instance of ReportRequest
    newReportRequest(): Analyticsreporting_v4.Schema.ReportRequest;
    // Create a new instance of SearchUserActivityRequest
    newSearchUserActivityRequest(): Analyticsreporting_v4.Schema.SearchUserActivityRequest;
    // Create a new instance of Segment
    newSegment(): Analyticsreporting_v4.Schema.Segment;
    // Create a new instance of SegmentDefinition
    newSegmentDefinition(): Analyticsreporting_v4.Schema.SegmentDefinition;
    // Create a new instance of SegmentDimensionFilter
    newSegmentDimensionFilter(): Analyticsreporting_v4.Schema.SegmentDimensionFilter;
    // Create a new instance of SegmentFilter
    newSegmentFilter(): Analyticsreporting_v4.Schema.SegmentFilter;
    // Create a new instance of SegmentFilterClause
    newSegmentFilterClause(): Analyticsreporting_v4.Schema.SegmentFilterClause;
    // Create a new instance of SegmentMetricFilter
    newSegmentMetricFilter(): Analyticsreporting_v4.Schema.SegmentMetricFilter;
    // Create a new instance of SegmentSequenceStep
    newSegmentSequenceStep(): Analyticsreporting_v4.Schema.SegmentSequenceStep;
    // Create a new instance of SequenceSegment
    newSequenceSegment(): Analyticsreporting_v4.Schema.SequenceSegment;
    // Create a new instance of SimpleSegment
    newSimpleSegment(): Analyticsreporting_v4.Schema.SimpleSegment;
    // Create a new instance of User
    newUser(): Analyticsreporting_v4.Schema.User;
  }
}

declare var Analyticsreporting_v4: GoogleAppsScript.Analyticsreporting_v4;