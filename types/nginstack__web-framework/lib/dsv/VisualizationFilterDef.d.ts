export = VisualizationFilterDef;
declare function VisualizationFilterDef(): void;
declare class VisualizationFilterDef {
    canonicalName: string | null;
    classKey: number | null;
    column: number | null;
    defaultValue: any;
    groupName: string | null;
    group: string | null;
    help: string;
    label: string;
    lookupType: number;
    name: string;
    options: any[][];
    order: number;
    required: boolean;
    size: number | null;
    targets: string[];
    type: string;
    readOnly: boolean;
}
