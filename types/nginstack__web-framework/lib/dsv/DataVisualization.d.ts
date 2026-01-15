export = DataVisualization;
declare function DataVisualization(definition: any): void;
declare class DataVisualization {
    constructor(definition: any);
    dataSourceQuery: DataSourceQuery;
    private dataSource_;
    help: string;
    protected dataSourceOptions_(): any;
    hasData(): boolean;
    protected createMap_(array: any[]): {
        [x: string]: any;
    };
    protected getFiltersForQuerying_(filterValues: any): Array<{
        name: string;
        operator: string;
        value: any;
        classKey: number;
        defaultValue: any;
    }>;
    protected initFilters_(): void;
    filters: VisualizationFilters;
}
import DataSourceQuery = require('@nginstack/datasource/lib/DataSourceQuery.js');
import VisualizationFilters = require('./VisualizationFilters.js');
