export = ReportVisualizationDef;
declare function ReportVisualizationDef(): void;
declare class ReportVisualizationDef {
    columns: ReportVisualizationColumnDef[];
    dataSourceQuery: Record<any, any> | number;
    dataSourceQueryKey: number;
    footerComplement: string | null;
    groupExpansionLevel: number | null;
    headerComplement: string | null;
    orderBy: string | null;
    rankingColumnLabel: string;
    showDateTime: boolean;
    showEnterpriseName: boolean;
    showFooter: boolean;
    showHeader: boolean;
    showOnlyFilledVariables: boolean;
    showPath: boolean;
    showRankingColumn: boolean;
    showUserAndDataBaseName: boolean;
    showVariables: boolean;
    totalLabel: string;
    type: string;
}
declare namespace ReportVisualizationDef {
    export { ReportVisualizationColumnDef };
}
type ReportVisualizationColumnDef = import("./ReportVisualizationColumnDef");
