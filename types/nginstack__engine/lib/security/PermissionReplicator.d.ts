export = PermissionReplicator;
declare function PermissionReplicator(): void;
declare class PermissionReplicator {
    _iPermission: DataSet;
    _classe: DataSet;
    _iVfs: DataSet;
    _iGroupUser: DataSet;
    _replicatedFieldNamesPerPermissionClass: {};
    iPermission: DataSet;
    modifiedRecords: {
        insertedKeys: number[];
        updatedKeys: number[];
        deletedKeys: number[];
    };
    automaticApplyUpdates: boolean;
    private _synchronize;
    _getReplicatedField(classKey: any, classPropertyName: any): any;
    private _replicatePermissionsToMother;
    private _replicatePermissions;
    private _adjustDeletedPermission;
    private _replicateToVfs;
    clearModifiedRecords(): void;
    copyGroupUser(
        fromGroupUser: number,
        toGroupUser: number,
        parents?: number[],
        fieldNames?: string[]
    ):
        | {}
        | {
              insertedKeys: number[];
              updatedKeys: number[];
              deletedKeys: number[];
          };
    replicateToChildren(
        parent: number,
        permissions: number[]
    ): {
        insertedKeys: number[];
        updatedKeys: number[];
        deletedKeys: number[];
    };
    replicate(permissions: number[]): {
        insertedKeys: number[];
        updatedKeys: number[];
        deletedKeys: number[];
    };
}
import DataSet = require('../dataset/DataSet.js');
