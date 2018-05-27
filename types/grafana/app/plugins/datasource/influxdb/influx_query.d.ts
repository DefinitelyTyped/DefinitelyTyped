/// 
export default class InfluxQuery {
    target: any;
    selectModels: any[];
    queryBuilder: any;
    groupByParts: any;
    templateSrv: any;
    scopedVars: any;
    /** @ngInject */
    constructor(target: any, templateSrv?: any, scopedVars?: any);
    updateProjection(): void;
    updatePersistedParts(): void;
    hasGroupByTime(): any;
    hasFill(): any;
    addGroupBy(value: any): void;
    removeGroupByPart(part: any, index: any): void;
    removeSelect(index: number): void;
    removeSelectPart(selectParts: any, part: any): void;
    addSelectPart(selectParts: any, type: any): void;
    private renderTagCondition(tag, index, interpolate);
    getMeasurementAndPolicy(interpolate: any): any;
    interpolateQueryStr(value: any, variable: any, defaultFormatFn: any): any;
    render(interpolate?: any): any;
    renderAdhocFilters(filters: any): any;
}
