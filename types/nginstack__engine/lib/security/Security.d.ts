export = Security;
declare function Security(): void;
declare class Security {
    createUser(userName: string, password: string, groups: number[]): number;
    findUser(userId: string, password: any, groups: any): number | null;
    deleteUser(userKey: number): void;
    createGroup(groupName: string, groups: any[]): number;
    deleteGroup(groupKey: number): void;
    setUserStatus(userKey: number | DBKey, status: DBKey): void;
    getUserStatus(userKey: number | DBKey): DBKey;
    changePassword(userKey: number, oldPassword: string, newPassword: string): void;
    setPassword(userKey: any, password: any): void;
    authenticateUser(userId: string, password: string): number;
    createAuthToken(
        userId: string,
        password: string,
        expiration: Date,
        data: string,
        localAuthentication: boolean
    ): string;
    isAdministrator(userKey: number): boolean;
    isDeveloper(userKey: number): boolean;
    authorizeToken(authToken: import('./AuthToken'), userId: string, password: string): string;
    restoreAuthToken(accessToken: string): import('./AuthToken');
    updateAuthToken(token: import('./AuthToken'), userId: string, password: string): void;
    revokeAuthToken(accessToken: string): void;
    revokeAuthTokenByKey(key: number, userId: string, password: string): void;
    getPermission(
        classKeyOrVfsKey: number,
        permissionFieldName: string,
        userKey: number,
        getMode?: string,
        extraFilter?: string | any[]
    ): void;
    getUserAndGroupsKeys(userKey: number): any[];
    getAuthPolicy(userKey: DBKey | number): number;
    getAuthPolicyClass(userKey: DBKey | number): DBKey;
    hasPermissionControl(key: number): boolean;
    suggestPermissionApplyMode(parent: number): number | null;
    getMimeTypesWithPermissionControl(): number[];
    private userCanModifyKeyUnsafe_;
    userCanModifyKey(key: number, classKey: number, userKey?: number): boolean;
    userCanModifyRecord(ds: DataSet, userKey?: number): boolean;
    getUserScopes(userKey: DBKey | number): string[];
    userHasScope(userKey: DBKey | number, scope: string | DBKey | number): boolean;
}
declare namespace Security {
    export { getInstance, DataSet };
}
import DBKey = require('../dbkey/DBKey.js');
type DataSet = import('../dataset/DataSet');
declare function getInstance(): Security;
