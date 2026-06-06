export = KeysUtilities;
declare function KeysUtilities(): void;
declare class KeysUtilities {
    getKeysFromIncompleteCode(
        classKey: any,
        code: string,
        classesFilter?: string,
        ds?: DataSet
    ): string;
    getKeysFromMultipleCode(classKey: any, code: string, filter?: string, ds?: DataSet): string;
    getChildrenFromClassesKeys(keys: string, userKey?: number): string;
    getKeysFromCode(classKey: any, code: string, classesFilter?: string, ds?: DataSet): string;
    getKeysFromLocateKeys(classKey: any, fieldName: string, keys: string, filter?: string): string;
    getKeysFromLocate: any;
    getKeysCount(keys: string): number;
    copyKeys(keys: string, startPosition: number, count: number): string;
    getKeysFromField(dataSet: DataSet, fieldName: string, distinct: boolean): string;
    getIntersectKeys(keys1: string, keys2: string): string;
    getIntersectKeysFromKeyList(keys: any[]): any[];
    getNoIntersectKeys(keys1: string, keys2: string, returnArray: any): string;
    getUnionKeys(keys1: string, keys2: string): string;
    hierarchicalClass(startClass: number, endClass: number, level?: number): string;
    extract(keysForExtract: any, keys: any, separator?: string): string;
    keyInKeysList(key: any, keysList: any): boolean;
    getDistinctKeys(keys: string): string;
    getUrl(classKey: number, name: string): string;
}
declare namespace KeysUtilities {
    function getInstance(): KeysUtilities;
}
import DataSet = require('../dataset/DataSet.js');
