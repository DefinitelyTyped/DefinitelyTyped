export = CompositeVisualizationSlot;
declare function CompositeVisualizationSlot(item: any, width: number, height: number): void;
declare class CompositeVisualizationSlot {
    constructor(item: any, width: number, height: number);
    width: number;
    height: number;
    visualization: import("./Visualization");
    verticalAlignment: any;
}
declare namespace CompositeVisualizationSlot {
    export { DataExporter, Visualization };
}
type DataExporter = import("../export/DataExporter");
type Visualization = import("./Visualization");
