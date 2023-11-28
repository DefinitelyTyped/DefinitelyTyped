export = DataVisualization;
declare function DataVisualization(definition: any): void;
declare class DataVisualization {
    constructor(definition: any);
    dataSourceQuery: DataSourceQuery;
    private dataSource_;
    help: any;
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
import VisualizationFilters = require('./VisualizationFilters.js');
