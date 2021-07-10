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
        activityTime?: string | undefined;
        activityType?: string | undefined;
        appview?: Analyticsreporting.Schema.ScreenviewData | undefined;
        campaign?: string | undefined;
        channelGrouping?: string | undefined;
        customDimension?: Analyticsreporting.Schema.CustomDimension[] | undefined;
        ecommerce?: Analyticsreporting.Schema.EcommerceData | undefined;
        event?: Analyticsreporting.Schema.EventData | undefined;
        goals?: Analyticsreporting.Schema.GoalSetData | undefined;
        hostname?: string | undefined;
        keyword?: string | undefined;
        landingPagePath?: string | undefined;
        medium?: string | undefined;
        pageview?: Analyticsreporting.Schema.PageviewData | undefined;
        source?: string | undefined;
      }
      interface Cohort {
        dateRange?: Analyticsreporting.Schema.DateRange | undefined;
        name?: string | undefined;
        type?: string | undefined;
      }
      interface CohortGroup {
        cohorts?: Analyticsreporting.Schema.Cohort[] | undefined;
        lifetimeValue?: boolean | undefined;
      }
      interface ColumnHeader {
        dimensions?: string[] | undefined;
        metricHeader?: Analyticsreporting.Schema.MetricHeader | undefined;
      }
      interface CustomDimension {
        index?: number | undefined;
        value?: string | undefined;
      }
      interface DateRange {
        endDate?: string | undefined;
        startDate?: string | undefined;
      }
      interface DateRangeValues {
        pivotValueRegions?: Analyticsreporting.Schema.PivotValueRegion[] | undefined;
        values?: string[] | undefined;
      }
      interface Dimension {
        histogramBuckets?: string[] | undefined;
        name?: string | undefined;
      }
      interface DimensionFilter {
        caseSensitive?: boolean | undefined;
        dimensionName?: string | undefined;
        expressions?: string[] | undefined;
        not?: boolean | undefined;
        operator?: string | undefined;
      }
      interface DimensionFilterClause {
        filters?: Analyticsreporting.Schema.DimensionFilter[] | undefined;
        operator?: string | undefined;
      }
      interface DynamicSegment {
        name?: string | undefined;
        sessionSegment?: Analyticsreporting.Schema.SegmentDefinition | undefined;
        userSegment?: Analyticsreporting.Schema.SegmentDefinition | undefined;
      }
      interface EcommerceData {
        actionType?: string | undefined;
        ecommerceType?: string | undefined;
        products?: Analyticsreporting.Schema.ProductData[] | undefined;
        transaction?: Analyticsreporting.Schema.TransactionData | undefined;
      }
      interface EventData {
        eventAction?: string | undefined;
        eventCategory?: string | undefined;
        eventCount?: string | undefined;
        eventLabel?: string | undefined;
        eventValue?: string | undefined;
      }
      interface GetReportsRequest {
        reportRequests?: Analyticsreporting.Schema.ReportRequest[] | undefined;
        useResourceQuotas?: boolean | undefined;
      }
      interface GetReportsResponse {
        queryCost?: number | undefined;
        reports?: Analyticsreporting.Schema.Report[] | undefined;
        resourceQuotasRemaining?: Analyticsreporting.Schema.ResourceQuotasRemaining | undefined;
      }
      interface GoalData {
        goalCompletionLocation?: string | undefined;
        goalCompletions?: string | undefined;
        goalIndex?: number | undefined;
        goalName?: string | undefined;
        goalPreviousStep1?: string | undefined;
        goalPreviousStep2?: string | undefined;
        goalPreviousStep3?: string | undefined;
        goalValue?: number | undefined;
      }
      interface GoalSetData {
        goals?: Analyticsreporting.Schema.GoalData[] | undefined;
      }
      interface Metric {
        alias?: string | undefined;
        expression?: string | undefined;
        formattingType?: string | undefined;
      }
      interface MetricFilter {
        comparisonValue?: string | undefined;
        metricName?: string | undefined;
        not?: boolean | undefined;
        operator?: string | undefined;
      }
      interface MetricFilterClause {
        filters?: Analyticsreporting.Schema.MetricFilter[] | undefined;
        operator?: string | undefined;
      }
      interface MetricHeader {
        metricHeaderEntries?: Analyticsreporting.Schema.MetricHeaderEntry[] | undefined;
        pivotHeaders?: Analyticsreporting.Schema.PivotHeader[] | undefined;
      }
      interface MetricHeaderEntry {
        name?: string | undefined;
        type?: string | undefined;
      }
      interface OrFiltersForSegment {
        segmentFilterClauses?: Analyticsreporting.Schema.SegmentFilterClause[] | undefined;
      }
      interface OrderBy {
        fieldName?: string | undefined;
        orderType?: string | undefined;
        sortOrder?: string | undefined;
      }
      interface PageviewData {
        pagePath?: string | undefined;
        pageTitle?: string | undefined;
      }
      interface Pivot {
        dimensionFilterClauses?: Analyticsreporting.Schema.DimensionFilterClause[] | undefined;
        dimensions?: Analyticsreporting.Schema.Dimension[] | undefined;
        maxGroupCount?: number | undefined;
        metrics?: Analyticsreporting.Schema.Metric[] | undefined;
        startGroup?: number | undefined;
      }
      interface PivotHeader {
        pivotHeaderEntries?: Analyticsreporting.Schema.PivotHeaderEntry[] | undefined;
        totalPivotGroupsCount?: number | undefined;
      }
      interface PivotHeaderEntry {
        dimensionNames?: string[] | undefined;
        dimensionValues?: string[] | undefined;
        metric?: Analyticsreporting.Schema.MetricHeaderEntry | undefined;
      }
      interface PivotValueRegion {
        values?: string[] | undefined;
      }
      interface ProductData {
        itemRevenue?: number | undefined;
        productName?: string | undefined;
        productQuantity?: string | undefined;
        productSku?: string | undefined;
      }
      interface Report {
        columnHeader?: Analyticsreporting.Schema.ColumnHeader | undefined;
        data?: Analyticsreporting.Schema.ReportData | undefined;
        nextPageToken?: string | undefined;
      }
      interface ReportData {
        dataLastRefreshed?: string | undefined;
        isDataGolden?: boolean | undefined;
        maximums?: Analyticsreporting.Schema.DateRangeValues[] | undefined;
        minimums?: Analyticsreporting.Schema.DateRangeValues[] | undefined;
        rowCount?: number | undefined;
        rows?: Analyticsreporting.Schema.ReportRow[] | undefined;
        samplesReadCounts?: string[] | undefined;
        samplingSpaceSizes?: string[] | undefined;
        totals?: Analyticsreporting.Schema.DateRangeValues[] | undefined;
      }
      interface ReportRequest {
        cohortGroup?: Analyticsreporting.Schema.CohortGroup | undefined;
        dateRanges?: Analyticsreporting.Schema.DateRange[] | undefined;
        dimensionFilterClauses?: Analyticsreporting.Schema.DimensionFilterClause[] | undefined;
        dimensions?: Analyticsreporting.Schema.Dimension[] | undefined;
        filtersExpression?: string | undefined;
        hideTotals?: boolean | undefined;
        hideValueRanges?: boolean | undefined;
        includeEmptyRows?: boolean | undefined;
        metricFilterClauses?: Analyticsreporting.Schema.MetricFilterClause[] | undefined;
        metrics?: Analyticsreporting.Schema.Metric[] | undefined;
        orderBys?: Analyticsreporting.Schema.OrderBy[] | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        pivots?: Analyticsreporting.Schema.Pivot[] | undefined;
        samplingLevel?: string | undefined;
        segments?: Analyticsreporting.Schema.Segment[] | undefined;
        viewId?: string | undefined;
      }
      interface ReportRow {
        dimensions?: string[] | undefined;
        metrics?: Analyticsreporting.Schema.DateRangeValues[] | undefined;
      }
      interface ResourceQuotasRemaining {
        dailyQuotaTokensRemaining?: number | undefined;
        hourlyQuotaTokensRemaining?: number | undefined;
      }
      interface ScreenviewData {
        appName?: string | undefined;
        mobileDeviceBranding?: string | undefined;
        mobileDeviceModel?: string | undefined;
        screenName?: string | undefined;
      }
      interface SearchUserActivityRequest {
        activityTypes?: string[] | undefined;
        dateRange?: Analyticsreporting.Schema.DateRange | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        user?: Analyticsreporting.Schema.User | undefined;
        viewId?: string | undefined;
      }
      interface SearchUserActivityResponse {
        nextPageToken?: string | undefined;
        sampleRate?: number | undefined;
        sessions?: Analyticsreporting.Schema.UserActivitySession[] | undefined;
        totalRows?: number | undefined;
      }
      interface Segment {
        dynamicSegment?: Analyticsreporting.Schema.DynamicSegment | undefined;
        segmentId?: string | undefined;
      }
      interface SegmentDefinition {
        segmentFilters?: Analyticsreporting.Schema.SegmentFilter[] | undefined;
      }
      interface SegmentDimensionFilter {
        caseSensitive?: boolean | undefined;
        dimensionName?: string | undefined;
        expressions?: string[] | undefined;
        maxComparisonValue?: string | undefined;
        minComparisonValue?: string | undefined;
        operator?: string | undefined;
      }
      interface SegmentFilter {
        not?: boolean | undefined;
        sequenceSegment?: Analyticsreporting.Schema.SequenceSegment | undefined;
        simpleSegment?: Analyticsreporting.Schema.SimpleSegment | undefined;
      }
      interface SegmentFilterClause {
        dimensionFilter?: Analyticsreporting.Schema.SegmentDimensionFilter | undefined;
        metricFilter?: Analyticsreporting.Schema.SegmentMetricFilter | undefined;
        not?: boolean | undefined;
      }
      interface SegmentMetricFilter {
        comparisonValue?: string | undefined;
        maxComparisonValue?: string | undefined;
        metricName?: string | undefined;
        operator?: string | undefined;
        scope?: string | undefined;
      }
      interface SegmentSequenceStep {
        matchType?: string | undefined;
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[] | undefined;
      }
      interface SequenceSegment {
        firstStepShouldMatchFirstHit?: boolean | undefined;
        segmentSequenceSteps?: Analyticsreporting.Schema.SegmentSequenceStep[] | undefined;
      }
      interface SimpleSegment {
        orFiltersForSegment?: Analyticsreporting.Schema.OrFiltersForSegment[] | undefined;
      }
      interface TransactionData {
        transactionId?: string | undefined;
        transactionRevenue?: number | undefined;
        transactionShipping?: number | undefined;
        transactionTax?: number | undefined;
      }
      interface User {
        type?: string | undefined;
        userId?: string | undefined;
      }
      interface UserActivitySession {
        activities?: Analyticsreporting.Schema.Activity[] | undefined;
        dataSource?: string | undefined;
        deviceCategory?: string | undefined;
        platform?: string | undefined;
        sessionDate?: string | undefined;
        sessionId?: string | undefined;
      }
    }
  }
  interface Analyticsreporting {
    Reports?: Analyticsreporting.Collection.ReportsCollection | undefined;
    UserActivity?: Analyticsreporting.Collection.UserActivityCollection | undefined;
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
