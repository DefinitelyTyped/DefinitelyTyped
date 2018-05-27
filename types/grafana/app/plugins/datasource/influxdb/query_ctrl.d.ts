import InfluxQuery from './influx_query';
import { QueryCtrl } from 'grafana/app/plugins/sdk';

export class InfluxQueryCtrl extends QueryCtrl {
    private templateSrv;
    private $q;
    private uiSegmentSrv;
    static templateUrl: string;
    queryModel: InfluxQuery;
    queryBuilder: any;
    groupBySegment: any;
    resultFormats: any[];
    policySegment: any;
    tagSegments: any[];
    selectMenu: any;
    measurementSegment: any;
    removeTagFilterSegment: any;
    constructor($scope: any, $injector: any, templateSrv: any, $q: any, uiSegmentSrv: any);
    buildSelectMenu(): void;
    getGroupByOptions(): any;
    groupByAction(): void;
    addSelectPart(selectParts: any, cat: any, subitem: any): void;
    handleSelectPartEvent(selectParts: any, part: any, evt: any): any;
    handleGroupByPartEvent(part: any, index: any, evt: any): any;
    fixTagSegments(): void;
    measurementChanged(): void;
    getPolicySegments(): any;
    policyChanged(): void;
    toggleEditorMode(): void;
    getMeasurements(measurementFilter: any): any;
    handleQueryError(err: any): any[];
    transformToSegments(addTemplateVars: any): (results: any) => any;
    getTagsOrValues(segment: any, index: any): any;
    getFieldSegments(): any;
    tagSegmentUpdated(segment: any, index: any): void;
    rebuildTargetTagConditions(): void;
    getTagValueOperator(tagValue: any, tagOperator: any): "=" | "=~";
    getCollapsedText(): any;
}
