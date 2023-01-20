export = Classes;
declare function Classes(): void;
declare class Classes {
    private orphansVersion_;
    private orphansCache_;
    getTableName(classKey: number): string;
    getCachedDataSet(
        classKey: number,
        userKey?: number,
        securityExtraFilter?: string | string[][]
    ): DataSet;
    getHierarchyList(
        startClass: number,
        endClass: number,
        level?: number,
        concatenator?: string,
        returnClassesKey?: boolean
    ): string;
    getFieldValue(
        classKey: number,
        keyOrCode: number | string,
        fieldName: string
    ): number | string | Date;
    getHierarchicalProperty(
        classKey: number,
        propertyName: string
    ): string | number | Date | Record<any, any>;
    getChildren(
        classKeyOrClassKeys: number | string,
        userKey?: number,
        permissionFieldName?: string
    ): string;
    isChildOf(key: number, parent: number): boolean;
    getClassDefinitionSource(
        classKey: number,
        kind: any,
        vfs?: DataSet,
        classes?: DataSet,
        ignoredClassKeys?: number[]
    ): string;
    formatToMessage(classKey: number): string;
    hasCachedData(classKey: number): boolean;
    getLevel(classKey: number): number;
    checkClassPath(classKey: number): void;
    getOrphans(): number[];
    getTabularHierarchy(
        rootClassKey: number,
        opt_filters?: {
            licenses: number[] | number;
            justProducts: boolean;
            excludeOrphans: boolean;
        }
    ): DataSet;
    getCommonAncestor(classA: number, classB: number): number;
    getRemoteChildren(classKey: number, database: Database): string;
}
declare namespace Classes {
    export { getInstance, Database };
}
import DataSet = require('../dataset/DataSet.js');
type Database = import('./Database');
declare function getInstance(): Classes;
