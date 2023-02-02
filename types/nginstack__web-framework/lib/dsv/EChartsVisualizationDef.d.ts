export = EChartsVisualizationDef;
declare function EChartsVisualizationDef(): void;
declare class EChartsVisualizationDef {
    canExport: boolean;
    width: string | number;
    height: string | number;
    theme: string;
    onGetOptions: (arg0: EChartsVisualization, arg1: DataSet) => any;
    type: string;
}
declare namespace EChartsVisualizationDef {
    export { DataSet, EChartsVisualization };
}
type EChartsVisualization = import('./EChartsVisualization');
type DataSet = import('@nginstack/engine/lib/dataset/DataSet');
