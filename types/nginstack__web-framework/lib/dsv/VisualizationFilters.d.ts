export = VisualizationFilters;
declare function VisualizationFilters(): void;
declare class VisualizationFilters {
    items_: Record<string, VisualizationFilter>;
    orderedNames_: string[];
    addFilter(filter: VisualizationFilter): void;
    forEach(f: (arg0: VisualizationFilter) => void, opt_obj?: any): void;
    orderedForEach(f: (arg0: VisualizationFilter) => void, opt_obj?: any): void;
    getFilter(name: string): VisualizationFilter;
    toArray(): VisualizationFilter[];
    tryGetFilter(name: string): VisualizationFilter;
    toLayoutHeader(): Array<{
        label: string;
        group: string;
        value: any;
    }>;
}
declare namespace VisualizationFilters {
    export {
        DATE_EXPRESSION_PREFIX,
        FILTER_FIELD_PREFIX_,
        createFilterFields,
        getFilterValuesFromGrid,
        updateFilterFields,
        evaluateFilterExpressions,
        VisualizationFilter,
    };
}
type VisualizationFilter = import('./VisualizationFilter');
declare var DATE_EXPRESSION_PREFIX: string;
declare var FILTER_FIELD_PREFIX_: string;
declare function createFilterFields(
    filtersGrid: any,
    dsv: any,
    opt_options?: {
        callback?: (arg0: any) => any;
        datesAsExpressions?: boolean;
    }
): void;
declare function getFilterValuesFromGrid(
    grid: any,
    dsv: any,
    opt_options?: {
        preserveExpressions?: boolean;
    }
): Record<string, any>;
declare function updateFilterFields(grid: any, filterValues: Record<string, any>): void;
declare function evaluateFilterExpressions(filterValues: Record<string, any>): any;
