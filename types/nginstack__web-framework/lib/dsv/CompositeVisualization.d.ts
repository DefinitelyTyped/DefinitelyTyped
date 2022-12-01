export = CompositeVisualization;
declare function CompositeVisualization(definition: any): void;
declare class CompositeVisualization {
    constructor(definition: any);
    private layout_;
    private items_;
    private autoCreateFilters_;
    adjustItemHeadersAndFooters: boolean;
    canExport: boolean;
    private cssExtractor_;
    private addSlot_;
    private handleItemHeadersAndFooters_;
    getExportableData(): Array<{
        formats: Array<{
            name: string;
            processKey: number;
        }>;
        getExporter: () => DataExporter;
        getRawDataExporter: () => DataExporter;
        title: string;
    }>;
    hasData(): boolean;
    setPath(value: any): void;
    private path_;
    protected initFilters_(): void;
    filters: VisualizationFilters;
    private createFiltersFromItems_;
    private populateSlots_;
    private prepareFilterValues_;
    queryData(filterValues: Record<string, any>): void;
    render(outputObj: any): void;
    private validateLayout_;
}
declare namespace CompositeVisualization {
    export { VisualizationDef, DataExporter };
}
type DataExporter = import('../export/DataExporter');
import VisualizationFilters = require('./VisualizationFilters.js');
type VisualizationDef = import('./VisualizationDef');
