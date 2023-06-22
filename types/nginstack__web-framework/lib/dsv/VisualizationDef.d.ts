export = VisualizationDef;
declare function VisualizationDef(): void;
declare class VisualizationDef {
    filters: VisualizationFilterDef[];
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
    onCreate: ((arg0: Visualization) => any) | null;
    title: string;
    type: string;
}
declare namespace VisualizationDef {
    export { Visualization, VisualizationFilterDef };
}
type VisualizationFilterDef = import('./VisualizationFilterDef');
import VisualizationHeaderDef = require('./VisualizationHeaderDef.js');
import VisualizationFooterDef = require('./VisualizationFooterDef.js');
type Visualization = import('./Visualization');
