export = PermissionMaintenance;
declare function PermissionMaintenance(): void;
declare class PermissionMaintenance {
    private _iPermission;
    private _classe;
    private _iVfs;
    private _iGroupUser;
    iPermissionChanged: DataSet;
    private logger_;
    private replicatedFieldNamesCache_;
    private _addPermissionChanged;
    private _getReplicatedFieldNames;
    private _replicatePermissionsToMother;
    private _replicatePermissions;
    private _createPermissionToInvisibleClasses;
    fixMissingPermissions(): void;
    fixPermissionsClasses(): void;
    fixReplicatedPermissions(): void;
    _iPermissionClone: DataSet;
    private _replicatedClass;
    fixInitialPermissions(): void;
    fixAll(): void;
    commit(): number;
}
import DataSet = require('../dataset/DataSet.js');
