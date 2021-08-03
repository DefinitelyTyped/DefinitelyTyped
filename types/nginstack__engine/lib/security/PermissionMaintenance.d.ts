export = PermissionMaintenance;
declare function PermissionMaintenance(): void;
declare class PermissionMaintenance {
    _iPermission: DataSet;
    _classe: DataSet;
    _iVfs: DataSet;
    _iGroupUser: DataSet;
    iPermissionChanged: DataSet;
    logger_: Logger;
    private replicatedFieldNamesCache_;
    _addPermissionChanged(change: any, onlyUpdate: any): void;
    private _getReplicatedFieldNames;
    _replicatePermissionsToMother(mother: any, groupUser: any, iPermission: any): void;
    private _replicatePermissions;
    private _createPermissionToInvisibleClasses;
    fixMissingPermissions(): void;
    fixPermissionsClasses(): void;
    fixReplicatedPermissions(): void;
    _iPermissionClone: DataSet;
    _replicatedClass: {};
    fixInitialPermissions(): void;
    fixAll(): void;
    commit(): number;
}
import DataSet = require('../dataset/DataSet.js');
import Logger = require('../log/Logger.js');
