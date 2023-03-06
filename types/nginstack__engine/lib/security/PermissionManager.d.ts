export = PermissionManager;
declare function PermissionManager(): void;
declare class PermissionManager {
    private schema_;
    private classDefManager_;
    private logger_;
    private NON_PERMISSION_FIELDS_LIST_;
    private checkIfUserCanManagePermissions_;
    protected getTable_(tableName: string): DataSet;
    private smartCopyPermissions_;
    private hardCopyPermissions_;
    private mergePermissions_;
    private getPermissionsForUpdate_;
    private getPermissionValue_;
    private tableCacheForGetFieldValue_;
    private findPermission_;
    private findAllPermissions_;
    private replicateValuesToDescendants_;
    private replicateValuesToAscendants_;
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
    fixInheritance(options?: {
        transaction?: Transaction;
        resources?: number[];
        ignoredKeys?: number[];
    }): number | null;
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
    export { getInstance, Transaction };
}
import DataSet = require('../dataset/DataSet.js');
import PermissionAssignment = require('./PermissionAssignment.js');
type Transaction = import('../dataset/Transaction');
declare function getInstance(): PermissionManager;
