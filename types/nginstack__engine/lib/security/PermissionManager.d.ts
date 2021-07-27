export = PermissionManager;
declare function PermissionManager(): void;
declare class PermissionManager {
    schema_: PermissionSchema;
    classDefManager_: ClassDefManager;
    private logger_;
    private NON_PERMISSION_FIELDS_LIST_;
    private checkIfUserCanManagePermissions_;
    protected getTable_(tableName: string): DataSet;
    private smartCopyPermissions_;
    private hardCopyPermissions_;
    mergePermissions_(source: any, target: any, field: any): any;
    private getPermissionsForUpdate_;
    private getPermissionValue_;
    tableCacheForGetFieldValue_: any;
    private findPermission_;
    private findAllPermissions_;
    private replicateValuesToDescendants_;
    replicateValuesToAscendants_(assignment: PermissionAssignment, table: DataSet): void;
    private removeInheritance_;
    private removeDependents_;
    private checkIfPermissionWasNotInherited_;
    private checkDuplicates_;
    private checkExtraFiltersUsageOnRolePermissions_;
    replicateToDescendants(key: number): number;
    insert(assignment: PermissionAssignment): number;
    update(key: number, assignment: PermissionAssignment): number;
    remove(key: number): number;
    removeOrphans(): number;
    fixClasses(): void;
    fixInheritance(
        opt_options?:
            | Record<any, any>
            | {
                  resources: number[];
                  transaction: any;
              }
    ): number | null;
    copyPermissions(
        source: number,
        target: number,
        opt_options?: {
            mergeAction?: string;
            copyMode?: string;
        }
    ): number;
    copyFromParent(keys: number[], opt_groupUsers?: number[]): DataSet;
    getOrphans(): DataSet;
}
declare namespace PermissionManager {
    const _instance: PermissionManager;
    function getInstance(): PermissionManager;
}
import PermissionSchema = require('./PermissionSchema.js');
import ClassDefManager = require('../classdef/ClassDefManager.js');
import DataSet = require('../dataset/DataSet.js');
import PermissionAssignment = require('./PermissionAssignment.js');
