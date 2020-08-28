// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Analyticsreporting {
    namespace Collection {
      interface ReportsCollection {
        // Returns the Analytics data.
        batchGet(resource: Schema.GetReportsRequest): Analyticsreporting.Schema.GetReportsResponse;
      }
      interface UserActivityCollection {
        // Returns User Activity data.
        search(resource: Schema.SearchUserActivityRequest): Analyticsreporting.Schema.SearchUserActivityResponse;
      }
    }
    namespace Schema {
      interface Activity {
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
      interface Cohort {
        dateRange?: Analyticsreporting.Schema.DateRange;
        name?: string;
        type?: string;
      }
      interface CohortGroup {
        cohorts?: Analyticsreporting.Schema.Cohort[];
        lifetimeValue?: boolean;
      }
      interface ColumnHeader {
        dimensions?: string[];
        metricHeader?: Analyticsreporting.Schema.MetricHeader;
      }
      interface CustomDimension {
        index?: number;
        value?: string;
      }
      interface DateRange {
        endDate?: string;
        startDate?: string;
      }
      interface DateRangeValues {
        pivotValueRegions?: Analyticsreporting.Schema.PivotValueRegion[];
        values?: string[];
      }
      interface Dimension {
        histogramBuckets?: string[];
        name?: string;
      }
      interface DimensionFilter {
        caseSensitive?: boolean;
        dimensionName?: string;
        expressions?: string[];
        not?: boolean;
        operator?: string;
      }
      interface DimensionFilterClause {
        filters?: Analyticsreporting.Schema.DimensionFilter[];
        operator?: string;
      }
      interface DynamicSegment {
        name?: string;
        sessionSegment?: Analyticsreporting.Schema.SegmentDefinition;
        userSegment?: Analyticsreporting.Schema.SegmentDefinition;
      }
      interface EcommerceData {
        actionType?: string;
        ecommerceType?: string;
        products?: Analyticsreporting.Schema.ProductData[];
        transaction?: Analyticsreporting.Schema.TransactionData;
      }
      interface EventData {
        eventAction?: string;
        eventCategory?: string;
        eventCount?: string;
        eventLabel?: string;
        eventValue?: string;
      }
      interface GetReportsRequest {
        reportRequests?: Analyticsreporting.Schema.ReportRequest[];
        useResourceQuotas?: boolean;
      }
      interface GetReportsResponse {
        queryCost?: number;
        reports?: Analyticsreporting.Schema.Report[];
        resourceQuotasRemaining?: Analyticsreporting.Schema.ResourceQuotasRemaining;
      }
      interface GoalData {
        goalCompletionLocation?: string;
        goalCompletions?: string;
        goalIndex?: number;
        goalName?: string;
        goalPreviousStep1?: string;
        goalPreviousStep2?: string;
        goalPreviousStep3?: string;
        goalValue?: number;
      }
      interface GoalSetData {
        goals?: Analyticsreporting.Schema.GoalData[];
      }
      interface Metric {
        alias?: string;
        expression?: string;
        formattingType?: string;
      }
      interface MetricFilter {
        comparisonValue?: string;
        metricName?: string;
        not?: boolean;
        operator?: string;
      }
      interface MetricFilterClause {
        filters?: Analyticsreporting.Schema.MetricFilter[];
        operator?: string;
      }
      interface MetricHeader {
        metricHeaderEntries?: Analyticsreporting.Schema.MetricHeaderEntry[];
        pivotHeaders?: Analyticsreporting.Schema.PivotHeader[];
      }
      interface MetricHeaderEntry {
        name?: string;
        type?: string;
      }
      interface OrFiltersForSegment {
        segmentFilterClauses?: Analyticsreporting.Schema.SegmentFilterClause[];
      }
      interface OrderBy {
        fieldName?: string;
        orderType?: string;
        sortOrder?: string;
      }
      interface PageviewData {
        pagePath?: string;
        pageTitle?: string;
      }
      interface Pivot {
        dimensionFilterClauses?: Analyticsreporting.Schema.DimensionFilterClause[];
        dimensions?: Analyticsreporting.Schema.Dimension[];
        maxGroupCount?: number;
        metrics?: Analyticsreporting.Schema.Metric[];
        startGroup?: number;
      }
      interface PivotHeader {
        pivotHeaderEntries?: Analyticsreporting.Schema.PivotHeaderEntry[];
        totalPivotGroupsCount?: number;
      }
      interface PivotHeaderEntry {
        dimensionNames?: string[];
        dimensionValues?: string[];
        metric?: Analyticsreporting.Schema.MetricHeaderEntry;
      }
      interface PivotValueRegion {
        values?: string[];
      }
      interface ProductData {
        itemRevenue?: number;
        productName?: string;
        productQuantity?: string;
        productSku?: string;
      }
      interface Report {
        columnHeader?: Analyticsreporting.Schema.ColumnHeader;
        data?: Analyticsreporting.Schema.ReportData;
        nextPageToken?: string;
      }
      interface ReportData {
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
      interface ReportRequest {
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
      interface ReportRow {
        dimensions?: string[];
        metrics?: Analyticsreporting.Schema.DateRangeValues[];
      }
      interface ResourceQuotasRemaining {
        dailyQuotaTokensRemaining?: number;
        hourlyQuotaTokensRemaining?: number;
      }
      interface ScreenviewData {
        appName?: string;
        mobileDeviceBranding?: string;
        mobileDeviceModel?: string;
        screenName?: string;
      }
      interface SearchUserActivityRequest {
        activityTypes?: string[];
        dateRange?: Analyticsreporting.Schema.DateRange;
        pageSize?: number;
        pageToken?: string;
        user?: Analyticsreporting.Schema.User;
        viewId?: string;
      }
      interface SearchUserActivityResponse {
        nextPageToken?: string;
        sampleRate?: number;
        sessions?: Analyticsreporting.Schema.UserActivitySession[];
        totalRows?: number;
      }
      interface Segment {
        dynamicSegment?: Analyticsreporting.Schema.DynamicSegment;
        segmentId?: string;
      }
      interface SegmentDefinition {
        segmentFilters?: Analyticsreporting.Schema.SegmentFilter[];
      }
      interface SegmentDimensionFilter {
        caseSensitive?: boolean;
        dimensionName?: string;
        expressions?: string[];
        maxComparisonValue?: string;
        minComparisonValue?: string;
        operator?: string;
      }
      interface SegmentFilter {
        not?: boolean;
        sequenceSegment?: Analyticsreporting.Schema.SequenceSegment;
        simpleSegment?: Analyticsreporting.Schema.SimpleSegment;
      }
      interface SegmentFilterClause {
        dimensionFilter?: Analyticsreporting.Schema.SegmentDimensionFilter;
        metricFilter?: Analyticsreporting.Schema.SegmentMetricFilter;
        not?: boolean;
      }
      interface SegmentMetricFilter {
        comparisonValue?: string;
        maxComparisonValue?: string;
        metricName?: string;
        operator?: string;
        scope?: string;
      }
      interface SegmentSequenceStep {
        matchType?: string;
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[];
      }
      interface SequenceSegment {
        firstStepShouldMatchFirstHit?: boolean;
        segmentSequenceSteps?: Analyticsreporting.Schema.SegmentSequenceStep[];
      }
      interface SimpleSegment {
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[];
      }
      interface TransactionData {
        transactionId?: string;
        transactionRevenue?: number;
        transactionShipping?: number;
        transactionTax?: number;
      }
      interface User {
        type?: string;
        userId?: string;
      }
      interface UserActivitySession {
        activities?: Analyticsreporting.Schema.Activity[];
        dataSource?: string;
        deviceCategory?: string;
        platform?: string;
        sessionDate?: string;
        sessionId?: string;
      }
    }
  }
  interface Analyticsreporting {
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
