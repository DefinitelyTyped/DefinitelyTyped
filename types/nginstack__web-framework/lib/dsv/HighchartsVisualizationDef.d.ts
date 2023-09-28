export = HighchartsVisualizationDef;
declare function HighchartsVisualizationDef(): void;
declare class HighchartsVisualizationDef {
    canExport: boolean;
    onGetOptions: (arg0: HighchartsVisualization, arg1: DataSet) => any;
    type: string;
}
declare namespace HighchartsVisualizationDef {
    export { DataSet, HighchartsVisualization };
}
type HighchartsVisualization = import("./HighchartsVisualization");
type DataSet = import("@nginstack/engine/lib/dataset/DataSet");
