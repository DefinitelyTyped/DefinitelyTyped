export = Visualization;
declare function Visualization(definition: any): void;
declare class Visualization {
    constructor(definition: any);
    private viewDefs_;
    title: string;
    messageWhenEmpty: string;
    help: string;
    private canExport_;
    includes: Array<number | string>;
    extraExportFormats: Array<{
        name: string;
        processKey: number;
        useRawData: boolean;
    }>;
    onCreate: any;
    protected afterCreate_(): void;
    initialized: boolean;
    protected prepareHeaderFromDefinition_(): void;
    header: ReportHeader;
    protected prepareFooterFromDefinition_(): void;
    footer: ReportFooter;
    protected prepareSegmentFromDefinition_(
        segment: any,
        definition: any,
        properties: string[]
    ): void;
    canExport: boolean;
    protected dataSource_: any;
    mustIncludeCssFiles: boolean;
    protected ds_: any;
    filters: VisualizationFilters;
    path: string | null;
    getExportableData(): Array<{
        formats: Array<{
            name: string;
            processKey: number;
        }>;
        getExporter: () => DataExporter;
        getRawDataExporter: () => DataExporter;
        title: string;
    }>;
    getDataToExport(filterValues: Record<string, any>): never;
    hasData(): boolean;
    render(outputObj: any): never;
    queryData(filterValues: Record<string, any>): never;
    protected initFilters_(): never;
}
declare namespace Visualization {
    export { Event, DataSet, DataSource, VisualizationFilters, DataExporter };
}
import ReportHeader = require('../simple-layout/Header.js');
import ReportFooter = require('../simple-layout/Footer.js');
type VisualizationFilters = import('./VisualizationFilters');
type Event = any;
type DataSet = any;
type DataSource = any;
type DataExporter = import('../export/DataExporter');
