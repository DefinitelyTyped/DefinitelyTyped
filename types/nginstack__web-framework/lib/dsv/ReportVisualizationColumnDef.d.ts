export = ReportVisualizationColumnDef;
declare function ReportVisualizationColumnDef(): void;
declare class ReportVisualizationColumnDef {
    columnGroup: string | null;
    displayFormat: string | number | null;
    groupType: string;
    groupName: string | null;
    help: string;
    label: string;
    links: ColumnLinkDef[];
    name: string;
    pivot: boolean;
    showOutOfTree: boolean | null;
    simpleLayoutAggregate: string | null;
    totalWeightColumn: string | null;
    simpleLayoutWeight: string | null;
    totalAggregate: string | null;
    useToGroup: boolean | null;
    visible: boolean;
    width: number | string | null;
    height: number | string | null;
    classKey: number | null;
    lookupType: number;
    showGlobalActions: boolean;
    renderContentAsHtml: boolean;
    renderAsImage: boolean;
    pathRoot: number | null;
    pathDepth: number;
    pathHeight: number;
    expression: string;
}
declare namespace ReportVisualizationColumnDef {
    export { mergeDuplicatedValues, DBKey, ColumnLinkDef };
}
interface ColumnLinkDef {
    label: string;
    process: DBKey | number;
    dsvKey: DBKey | number;
    newTab: boolean;
    target: string;
    params: any;
}
declare var mergeDuplicatedValues: boolean;
type DBKey = import('@nginstack/engine/lib/dbkey/DBKey');
