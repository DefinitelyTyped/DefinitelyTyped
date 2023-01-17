export = LobStorage;
declare function LobStorage(classKey: number | DBKey): void;
declare class LobStorage {
    constructor(classKey: number | DBKey);
    classKey: number;
    private batchChanges_;
    beginBatch(): void;
    endBatch(): DataSet;
    private compress_;
    private decompress_;
    private encode_;
    private decode_;
    private tryCompress_;
    private prepareContent_;
    addLob(
        fileName: string,
        content: string,
        options?: {
            mimeType?: number | DBKey;
            key?: number;
            extraAttributes?: any;
        },
        ...args: any[]
    ): number;
    updateLob(
        key: number,
        content: string,
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
}
import DBKey = require('../dbkey/DBKey.js');
import DataSet = require('../dataset/DataSet.js');
import LargeObject = require('./LargeObject.js');
