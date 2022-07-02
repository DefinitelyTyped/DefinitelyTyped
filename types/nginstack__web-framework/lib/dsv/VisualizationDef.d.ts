export = VisualizationDef;
declare function VisualizationDef(): void;
declare class VisualizationDef {
    filters: any[];
    includes: Array<number | string>;
    extraExportFormats: Array<{
        name: string;
        processKey: number;
        useRawData: boolean;
    }>;
    header: VisualizationHeaderDef;
    footer: VisualizationFooterDef;
    canExport: boolean;
    help: string;
    messageWhenEmpty: string;
    onCreate: ((arg0: any) => any) | null;
    title: string;
    type: string;
}
import VisualizationHeaderDef = require('./VisualizationHeaderDef.js');
import VisualizationFooterDef = require('./VisualizationFooterDef.js');
