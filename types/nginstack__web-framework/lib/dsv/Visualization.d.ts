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
    onCreate: Event;
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
    protected ds_: DataSet;
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
    export { Event, DataSet, VisualizationFilters, DataExporter };
}
type Event = import('@nginstack/engine/lib/event/Event');
import ReportHeader = require('../simple-layout/Header.js');
import ReportFooter = require('../simple-layout/Footer.js');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
type VisualizationFilters = import('./VisualizationFilters');
type DataExporter = import('../export/DataExporter');
