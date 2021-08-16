export = VisualizationFilter;
declare function VisualizationFilter(name: string, type: string, size: number): void;
declare class VisualizationFilter {
    constructor(name: string, type: string, size: number);
    name: string;
    type: string;
    size: number;
    targets: any[];
    private propertiesToAssign_;
    assignFrom(obj: { [x: string]: any }): void;
    getVisibleValue(): any;
}
