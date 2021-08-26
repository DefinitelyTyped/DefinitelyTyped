export = GeneralSettings;
declare function GeneralSettings(): void;
declare class GeneralSettings {
    private data_;
    private database_;
    private logger_;
    private keyIsValid_;
    private normalizeValue_;
    private getRecordValue_;
    private updateRecordValue_;
    private update_;
    getSettingOptionsFromRecord(data: any): SettingOptions;
    get(id: string | number | DBKey): any;
    update(id: string | number | DBKey, value: any): number;
    validateSettingName(name: string, key?: DBKey | number): void;
    stringifyValue(value: any, options: SettingOptions): string;
    parseValue(text: string, options: SettingOptions): any;
    version: number;
}
declare namespace GeneralSettings {
    export { getInstance, SettingOptions };
}
interface SettingOptions {
    type: SettingType;
    multiple?: boolean;
    classKey?: DBKey | number;
    lookupType?: {
        NONE: number;
        RECORD: number;
        CLASS: number;
        FILE: number;
    };
}
import DBKey = require('../dbkey/DBKey.js');
declare function getInstance(): GeneralSettings;
import SettingType = require('./SettingType.js');
