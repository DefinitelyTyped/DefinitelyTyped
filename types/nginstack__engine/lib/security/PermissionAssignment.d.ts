export = PermissionAssignment;
declare function PermissionAssignment(): void;
declare class PermissionAssignment {
    values: any;
    extraFilters: any;
    private logger_;
    private schema_;
    assignee: number;
    private permissionFieldNames_;
    private extraFilterFieldNames_;
    private loadingFromDataSet_;
    resource: number;
    applyMode: number;
    private checkAssignee_;
    private checkResource_;
    saveToDataSet(data: DataSet): void;
    assign(assignment: PermissionAssignment | Record<any, any>): void;
    set(name: string, value: any): void;
    get(name: string): any;
}
declare namespace PermissionAssignment {
    function fromDataSet(data: DataSet): PermissionAssignment;
    function fromKey(key: number): PermissionAssignment;
}
import DataSet = require('../dataset/DataSet.js');
