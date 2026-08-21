declare namespace GoogleAppsScript {
    namespace AnalyticsReporting {
        namespace Collection {
            interface ReportsCollection {
                // Returns the Analytics data.
                batchGet(resource: Schema.GetReportsRequest): AnalyticsReporting.Schema.GetReportsResponse;
            }
            interface UserActivityCollection {
                // Returns User Activity data.
                search(
                    resource: Schema.SearchUserActivityRequest,
                ): AnalyticsReporting.Schema.SearchUserActivityResponse;
            }
        }
        namespace Schema {
            interface Activity {
                activityTime?: string | undefined;
                activityType?: string | undefined;
                appview?: AnalyticsReporting.Schema.ScreenviewData | undefined;
                campaign?: string | undefined;
                channelGrouping?: string | undefined;
                customDimension?: AnalyticsReporting.Schema.CustomDimension[] | undefined;
                ecommerce?: AnalyticsReporting.Schema.EcommerceData | undefined;
                event?: AnalyticsReporting.Schema.EventData | undefined;
                goals?: AnalyticsReporting.Schema.GoalSetData | undefined;
                hostname?: string | undefined;
                keyword?: string | undefined;
                landingPagePath?: string | undefined;
                medium?: string | undefined;
                pageview?: AnalyticsReporting.Schema.PageviewData | undefined;
                source?: string | undefined;
            }
            interface Cohort {
                dateRange?: AnalyticsReporting.Schema.DateRange | undefined;
                name?: string | undefined;
                type?: string | undefined;
            }
            interface CohortGroup {
                cohorts?: AnalyticsReporting.Schema.Cohort[] | undefined;
                lifetimeValue?: boolean | undefined;
            }
            interface ColumnHeader {
                dimensions?: string[] | undefined;
                metricHeader?: AnalyticsReporting.Schema.MetricHeader | undefined;
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
                pivotValueRegions?: AnalyticsReporting.Schema.PivotValueRegion[] | undefined;
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
                filters?: AnalyticsReporting.Schema.DimensionFilter[] | undefined;
                operator?: string | undefined;
            }
            interface DynamicSegment {
                name?: string | undefined;
                sessionSegment?: AnalyticsReporting.Schema.SegmentDefinition | undefined;
                userSegment?: AnalyticsReporting.Schema.SegmentDefinition | undefined;
            }
            interface EcommerceData {
                actionType?: string | undefined;
                ecommerceType?: string | undefined;
                products?: AnalyticsReporting.Schema.ProductData[] | undefined;
                transaction?: AnalyticsReporting.Schema.TransactionData | undefined;
            }
            interface EventData {
                eventAction?: string | undefined;
                eventCategory?: string | undefined;
                eventCount?: string | undefined;
                eventLabel?: string | undefined;
                eventValue?: string | undefined;
            }
            interface GetReportsRequest {
                reportRequests?: AnalyticsReporting.Schema.ReportRequest[] | undefined;
                useResourceQuotas?: boolean | undefined;
            }
            interface GetReportsResponse {
                queryCost?: number | undefined;
                reports?: AnalyticsReporting.Schema.Report[] | undefined;
                resourceQuotasRemaining?: AnalyticsReporting.Schema.ResourceQuotasRemaining | undefined;
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
                goals?: AnalyticsReporting.Schema.GoalData[] | undefined;
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
                filters?: AnalyticsReporting.Schema.MetricFilter[] | undefined;
                operator?: string | undefined;
            }
            interface MetricHeader {
                metricHeaderEntries?: AnalyticsReporting.Schema.MetricHeaderEntry[] | undefined;
                pivotHeaders?: AnalyticsReporting.Schema.PivotHeader[] | undefined;
            }
            interface MetricHeaderEntry {
                name?: string | undefined;
                type?: string | undefined;
            }
            interface OrFiltersForSegment {
                segmentFilterClauses?: AnalyticsReporting.Schema.SegmentFilterClause[] | undefined;
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
                dimensionFilterClauses?: AnalyticsReporting.Schema.DimensionFilterClause[] | undefined;
                dimensions?: AnalyticsReporting.Schema.Dimension[] | undefined;
                maxGroupCount?: number | undefined;
                metrics?: AnalyticsReporting.Schema.Metric[] | undefined;
                startGroup?: number | undefined;
            }
            interface PivotHeader {
                pivotHeaderEntries?: AnalyticsReporting.Schema.PivotHeaderEntry[] | undefined;
                totalPivotGroupsCount?: number | undefined;
            }
            interface PivotHeaderEntry {
                dimensionNames?: string[] | undefined;
                dimensionValues?: string[] | undefined;
                metric?: AnalyticsReporting.Schema.MetricHeaderEntry | undefined;
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
                columnHeader?: AnalyticsReporting.Schema.ColumnHeader | undefined;
                data?: AnalyticsReporting.Schema.ReportData | undefined;
                nextPageToken?: string | undefined;
            }
            interface ReportData {
                dataLastRefreshed?: string | undefined;
                isDataGolden?: boolean | undefined;
                maximums?: AnalyticsReporting.Schema.DateRangeValues[] | undefined;
                minimums?: AnalyticsReporting.Schema.DateRangeValues[] | undefined;
                rowCount?: number | undefined;
                rows?: AnalyticsReporting.Schema.ReportRow[] | undefined;
                samplesReadCounts?: string[] | undefined;
                samplingSpaceSizes?: string[] | undefined;
                totals?: AnalyticsReporting.Schema.DateRangeValues[] | undefined;
            }
            interface ReportRequest {
                cohortGroup?: AnalyticsReporting.Schema.CohortGroup | undefined;
                dateRanges?: AnalyticsReporting.Schema.DateRange[] | undefined;
                dimensionFilterClauses?: AnalyticsReporting.Schema.DimensionFilterClause[] | undefined;
                dimensions?: AnalyticsReporting.Schema.Dimension[] | undefined;
                filtersExpression?: string | undefined;
                hideTotals?: boolean | undefined;
                hideValueRanges?: boolean | undefined;
                includeEmptyRows?: boolean | undefined;
                metricFilterClauses?: AnalyticsReporting.Schema.MetricFilterClause[] | undefined;
                metrics?: AnalyticsReporting.Schema.Metric[] | undefined;
                orderBys?: AnalyticsReporting.Schema.OrderBy[] | undefined;
                pageSize?: number | undefined;
                pageToken?: string | undefined;
                pivots?: AnalyticsReporting.Schema.Pivot[] | undefined;
                samplingLevel?: string | undefined;
                segments?: AnalyticsReporting.Schema.Segment[] | undefined;
                viewId?: string | undefined;
            }
            interface ReportRow {
                dimensions?: string[] | undefined;
                metrics?: AnalyticsReporting.Schema.DateRangeValues[] | undefined;
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
                dateRange?: AnalyticsReporting.Schema.DateRange | undefined;
                pageSize?: number | undefined;
                pageToken?: string | undefined;
                user?: AnalyticsReporting.Schema.User | undefined;
                viewId?: string | undefined;
            }
            interface SearchUserActivityResponse {
                nextPageToken?: string | undefined;
                sampleRate?: number | undefined;
                sessions?: AnalyticsReporting.Schema.UserActivitySession[] | undefined;
                totalRows?: number | undefined;
            }
            interface Segment {
                dynamicSegment?: AnalyticsReporting.Schema.DynamicSegment | undefined;
                segmentId?: string | undefined;
            }
            interface SegmentDefinition {
                segmentFilters?: AnalyticsReporting.Schema.SegmentFilter[] | undefined;
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
                sequenceSegment?: AnalyticsReporting.Schema.SequenceSegment | undefined;
                simpleSegment?: AnalyticsReporting.Schema.SimpleSegment | undefined;
            }
            interface SegmentFilterClause {
                dimensionFilter?: AnalyticsReporting.Schema.SegmentDimensionFilter | undefined;
                metricFilter?: AnalyticsReporting.Schema.SegmentMetricFilter | undefined;
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
                orFiltersForSegment?: AnalyticsReporting.Schema.OrFiltersForSegment[] | undefined;
            }
            interface SequenceSegment {
                firstStepShouldMatchFirstHit?: boolean | undefined;
                segmentSequenceSteps?: AnalyticsReporting.Schema.SegmentSequenceStep[] | undefined;
            }
            interface SimpleSegment {
                orFiltersForSegment?: AnalyticsReporting.Schema.OrFiltersForSegment[] | undefined;
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
                activities?: AnalyticsReporting.Schema.Activity[] | undefined;
                dataSource?: string | undefined;
                deviceCategory?: string | undefined;
                platform?: string | undefined;
                sessionDate?: string | undefined;
                sessionId?: string | undefined;
            }
        }
    }
    interface AnalyticsReporting {
        Reports: AnalyticsReporting.Collection.ReportsCollection;
        UserActivity: AnalyticsReporting.Collection.UserActivityCollection;
        // Create a new instance of Cohort
        newCohort(): AnalyticsReporting.Schema.Cohort;
        // Create a new instance of CohortGroup
        newCohortGroup(): AnalyticsReporting.Schema.CohortGroup;
        // Create a new instance of DateRange
        newDateRange(): AnalyticsReporting.Schema.DateRange;
        // Create a new instance of Dimension
        newDimension(): AnalyticsReporting.Schema.Dimension;
        // Create a new instance of DimensionFilter
        newDimensionFilter(): AnalyticsReporting.Schema.DimensionFilter;
        // Create a new instance of DimensionFilterClause
        newDimensionFilterClause(): AnalyticsReporting.Schema.DimensionFilterClause;
        // Create a new instance of DynamicSegment
        newDynamicSegment(): AnalyticsReporting.Schema.DynamicSegment;
        // Create a new instance of GetReportsRequest
        newGetReportsRequest(): AnalyticsReporting.Schema.GetReportsRequest;
        // Create a new instance of Metric
        newMetric(): AnalyticsReporting.Schema.Metric;
        // Create a new instance of MetricFilter
        newMetricFilter(): AnalyticsReporting.Schema.MetricFilter;
        // Create a new instance of MetricFilterClause
        newMetricFilterClause(): AnalyticsReporting.Schema.MetricFilterClause;
        // Create a new instance of OrFiltersForSegment
        newOrFiltersForSegment(): AnalyticsReporting.Schema.OrFiltersForSegment;
        // Create a new instance of OrderBy
        newOrderBy(): AnalyticsReporting.Schema.OrderBy;
        // Create a new instance of Pivot
        newPivot(): AnalyticsReporting.Schema.Pivot;
        // Create a new instance of ReportRequest
        newReportRequest(): AnalyticsReporting.Schema.ReportRequest;
        // Create a new instance of SearchUserActivityRequest
        newSearchUserActivityRequest(): AnalyticsReporting.Schema.SearchUserActivityRequest;
        // Create a new instance of Segment
        newSegment(): AnalyticsReporting.Schema.Segment;
        // Create a new instance of SegmentDefinition
        newSegmentDefinition(): AnalyticsReporting.Schema.SegmentDefinition;
        // Create a new instance of SegmentDimensionFilter
        newSegmentDimensionFilter(): AnalyticsReporting.Schema.SegmentDimensionFilter;
        // Create a new instance of SegmentFilter
        newSegmentFilter(): AnalyticsReporting.Schema.SegmentFilter;
        // Create a new instance of SegmentFilterClause
        newSegmentFilterClause(): AnalyticsReporting.Schema.SegmentFilterClause;
        // Create a new instance of SegmentMetricFilter
        newSegmentMetricFilter(): AnalyticsReporting.Schema.SegmentMetricFilter;
        // Create a new instance of SegmentSequenceStep
        newSegmentSequenceStep(): AnalyticsReporting.Schema.SegmentSequenceStep;
        // Create a new instance of SequenceSegment
        newSequenceSegment(): AnalyticsReporting.Schema.SequenceSegment;
        // Create a new instance of SimpleSegment
        newSimpleSegment(): AnalyticsReporting.Schema.SimpleSegment;
        // Create a new instance of User
        newUser(): AnalyticsReporting.Schema.User;
    }
}

/**
 * The `AnalyticsReporting` advanced service must be enabled.
 */
declare var AnalyticsReporting: GoogleAppsScript.AnalyticsReporting | undefined;
