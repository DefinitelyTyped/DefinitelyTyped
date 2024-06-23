export interface Report {
    body: {
        firstPage?: boolean;
        lastPage?: boolean;
        numberOfElements?: number;
        number?: number;
        totalElements?: number;
        message?: string;
        reportId?: string;
        rows?: Array<{
            itemId?: string;
            value?: string;
            rowId?: string;
            data?: number[];
            dataExpected?: number[];
            dataUpperBound?: number[];
            dataLowerBound?: number[];
            dataAnomalyDetected?: boolean[];
            percentChange?: number[];
            latitude?: number;
            longitude?: number;
        }>;
        summaryData?: Record<string, never>;
    };
}

export class AnalyticsCoreAPI {
    sdk: any;
    companyId: string | undefined;
    apiKey: string | undefined;
    token: string | undefined;

    getReport(body: {
        rsid: string;
        globalFilters: Array<{ type: "dateRange"; dateRange: string }>;
        metricContainer: {
            metrics: Array<{ id: string }>;
        };
        dimension: string;
        settings: {
            limit: number;
            page: number;
        };
    }): Promise<Report>;

    getCalculatedMetrics(body?: {
        calculatedMetricFilter: any;
        expansion: any;
        limit?: number;
        locale: any;
        name: any;
        ownerId: any;
        page?: number;
        rsids: string[];
        tagNames: any;
    }): Promise<unknown>;

    getCalculatedMetricById(
        id: any,
        body?: {
            expansion: any;
            locale: any;
        },
    ): Promise<unknown>;

    getCollections(body?: {
        expansion: any;
        limit?: number;
        page?: number;
        rsidContains: any;
        rsids: string[];
    }): Promise<unknown>;

    getCollectionById(
        rsid: any,
        {
            expansion,
        }?: {
            expansion: any;
        },
    ): Promise<unknown>;
    getDateRanges(body?: {
        expansion: any;
        filterByIds: any;
        limit?: number;
        locale: any;
        page?: number;
    }): Promise<unknown>;

    getDateRangeById(
        dateRangeId: any,
        body?: {
            expansion: any;
            locale: any;
        },
    ): Promise<unknown>;
    getDimensions(
        rsid: any,
        body?: {
            classifiable: any;
            expansion: any;
            locale: any;
            reportable: any;
            segmentable: any;
        },
    ): Promise<unknown>;

    getDimensionById(
        dimensionId: any,
        rsid: any,
        body?: {
            expansion: any;
            locale: any;
        },
    ): Promise<unknown>;

    getMetrics(
        rsid: any,
        body?: {
            expansion: any;
            locale: any;
            segmentable: any;
        },
    ): Promise<unknown>;

    getMetricById(
        id: any,
        rsid: any,
        body?: {
            expansion: any;
            locale: any;
        },
    ): Promise<unknown>;

    getSegments(body?: {
        expansion: any;
        includeType: any;
        limit?: number;
        locale: any;
        name: any;
        page?: number;
        rsids: string[];
        segmentFilter: any;
        tagNames: any;
    }): Promise<unknown>;

    validateSegment(rsid: any, body: any): Promise<unknown>;

    getUsers(body?: any): Promise<unknown>;

    getCurrentUser(): Promise<unknown>;

    getUsageLogs(startDate: any, endDate: any, options?: any): Promise<unknown>;
}

export function init(
    companyId: string,
    clientId: string,
    accessToken: string,
): Promise<AnalyticsCoreAPI>;
