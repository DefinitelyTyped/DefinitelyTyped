export = LobStorage;
declare function LobStorage(classKey: number | DBKey): void;
declare class LobStorage {
    constructor(classKey: number | DBKey);
    classKey: number;
    private storageProviderKey_;
    private storageProvider_;
    private getStorageProvider;
    private batchChanges_;
    private transactionChanges_;
    private storageChanges_;
    logChanges: boolean;
    beginBatch(): void;
    endBatch(): DataSet;
    rollbackBatch(): void;
    startTransaction(): void;
    commitTransaction(): number;
    private beforeApplyUpdates_;
    private afterApplyUpdates_;
    rollbackTransaction(): void;
    private appendStorageChange_;
    private rollbackStorageChanges_;
    private compress_;
    private encode_;
    private tryCompress_;
    private prepareContent_;
    private getDataSetForUpdate_;
    private getDataSet_;
    private getContentSize_;
    addLob(
        fileName: string,
        content: string | Uint8Array | ArrayBuffer,
        options?: {
            mimeType?: number | DBKey;
            key?: number;
            extraAttributes?: any;
        },
        ...args: any[]
    ): number;
    updateLob(
        key: number,
        content: string | Uint8Array | ArrayBuffer,
        options?: {
            fileName?: string;
            mimeType?: number | DBKey;
            extraAttributes?: any;
        },
        ...args: any[]
    ): void;
    tryGetLob(key: number): LargeObject;
    getLob(key: number): LargeObject;
    deleteLob(key: number): boolean;
    setLobExtraAttributes(key: number, extraAttributes: any): void;
    getLobExtraAttributes(key: number): any;
    private getStorageProviderFromKey_;
}
declare namespace LobStorage {
    export { Object, LargeObject };
}
import DBKey = require('../dbkey/DBKey.js');
import DataSet = require('../dataset/DataSet.js');
interface Object {
    content: string;
    compression: number;
    encoding: number;
}
type LargeObject = import('./LargeObject');
