export = ReportVisualizationColumn;
declare function ReportVisualizationColumn(name: string): void;
declare class ReportVisualizationColumn {
    constructor(name: string);
    name: string;
    private propertiesToAssignDirectly_;
    slColumnAssignMap: {
        displayFormat: string;
        groupName: string;
        label: string;
        name: string;
        totalAggregate: string;
        visible: string;
        classKey: string;
        lookupType: string;
        showGlobalActions: string;
        width: string;
        height: string;
        zoomMaxWidth: string;
        zoomMaxHeight: string;
        zoomOnHover: string;
        mergeDuplicatedValues: string;
        expression: string;
        prefix: string;
        type: string;
        negativeInRed: string;
    };
    type: string;
    aggregate: string | null;
    weight: string | null;
    alias: string;
    canonicalName: string;
    pathDepth: number;
    pathHeight: number;
    fieldName: string | null;
    displayFormat:
        | DateFormat
        | LatitudeFormat
        | LongitudeFormat
        | AngleFormat
        | string
        | number
        | null;
    private formatCanonicalName_;
    assignFrom(obj: Record<string, any>): void;
    totalAggregate: any;
    groupType: any;
    toString(): string;
}
declare namespace ReportVisualizationColumn {
    export { hasPathDimension, LatitudeFormat, LongitudeFormat, AngleFormat, DateFormat };
}
type DateFormat = typeof import('@nginstack/engine/lib/date/DateFormat');
type LatitudeFormat = typeof import('@nginstack/engine/lib/geo/LatitudeFormat');
type LongitudeFormat = typeof import('@nginstack/engine/lib/geo/LongitudeFormat');
type AngleFormat = typeof import('@nginstack/engine/lib/geo/AngleFormat');
declare function hasPathDimension(col: ReportVisualizationColumn): boolean;
