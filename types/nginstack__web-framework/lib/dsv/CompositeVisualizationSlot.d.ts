export = CompositeVisualizationSlot;
declare function CompositeVisualizationSlot(item: any, width: number, height: number): void;
declare class CompositeVisualizationSlot {
    constructor(item: any, width: number, height: number);
    width: number;
    height: number;
    visualization: Visualization;
    verticalAlignment: any;
}
declare namespace CompositeVisualizationSlot {
    export { DataExporter, Visualization };
}
type Visualization = import('./Visualization');
type DataExporter = import('../export/DataExporter');
