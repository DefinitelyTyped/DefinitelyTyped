// Type definitions for @adobe/aio-lib-analytics 2.1.0
// Project: https://github.com/adobe/aio-lib-analytics
// Definitions by: Samuel Bodin <https://github.com/bodinsamuel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.3

export interface Report {
  body: {
    rows: any[];
    lastPage: boolean;
  };
}

declare class AnalyticsCoreAPI {
  sdk: any;
  companyId: string | undefined;
  apiKey: string | undefined;
  token: string | undefined;

  getReport(body: {
    rsid: string;
    globalFilters: { type: 'dateRange'; dateRange: string }[];
    metricContainer: {
      metrics: { id: string }[];
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
    limit?: number | undefined;
    locale: any;
    name: any;
    ownerId: any;
    page?: number | undefined;
    rsids: string[];
    tagNames: any;
  }): Promise<unknown>;

  getCalculatedMetricById(
    id: any,
    body?: {
      expansion: any;
      locale: any;
    }
  ): Promise<unknown>;

  getCollections(body?: {
    expansion: any;
    limit?: number | undefined;
    page?: number | undefined;
    rsidContains: any;
    rsids: string[];
  }): Promise<unknown>;

  getCollectionById(
    rsid: any,
    {
      expansion,
    }?: {
      expansion: any;
    }
  ): Promise<unknown>;
  getDateRanges(body?: {
    expansion: any;
    filterByIds: any;
    limit?: number | undefined;
    locale: any;
    page?: number | undefined;
  }): Promise<unknown>;

  getDateRangeById(
    dateRangeId: any,
    body?: {
      expansion: any;
      locale: any;
    }
  ): Promise<unknown>;
  getDimensions(
    rsid: any,
    body?: {
      classifiable: any;
      expansion: any;
      locale: any;
      reportable: any;
      segmentable: any;
    }
  ): Promise<unknown>;

  getDimensionById(
    dimensionId: any,
    rsid: any,
    body?: {
      expansion: any;
      locale: any;
    }
  ): Promise<unknown>;

  getMetrics(
    rsid: any,
    body?: {
      expansion: any;
      locale: any;
      segmentable: any;
    }
  ): Promise<unknown>;

  getMetricById(
    id: any,
    rsid: any,
    body?: {
      expansion: any;
      locale: any;
    }
  ): Promise<unknown>;

  getSegments(body?: {
    expansion: any;
    includeType: any;
    limit?: number | undefined;
    locale: any;
    name: any;
    page?: number | undefined;
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
  accessToken: string
): Promise<AnalyticsCoreAPI>;
