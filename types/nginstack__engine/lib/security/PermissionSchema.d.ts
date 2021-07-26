export = PermissionSchema;
declare function PermissionSchema(): void;
declare class PermissionSchema {
    fieldsByMimeType_: {
        [x: number]: string[];
    };
    fieldsByClass_: {
        [x: number]: string[];
    };
    declaredFieldsByClass_: {
        [x: number]: string[];
    };
    databaseFieldNames_: any;
    classDefManager_: ClassDefManager;
    private NON_PERMISSION_FIELDS_;
    private logger_;
    private tableCacheForGetFieldValue_;
    private initializeCaches_;
    private getFieldsForClass_;
    private isPermissionField_;
    private getFieldsByClass_;
    getFieldsForClass(
        classKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  includeNonDatabaseFields: boolean;
              }
    ): string[];
    getDeclaredFieldsInClass(
        classKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  includeNonDatabaseFields: boolean;
              }
    ): string[];
    getFieldsByClass(
        rootClass: number,
        opt_options?:
            | Record<any, any>
            | {
                  includeNonDatabaseFields: boolean;
              }
    ): any;
    getDeclaredFieldsByClass(
        rootClass: number,
        opt_options?:
            | Record<any, any>
            | {
                  includeNonDatabaseFields: boolean;
              }
    ): any;
    getFieldsForFile(
        fileKey: number,
        opt_options?:
            | Record<any, any>
            | {
                  includeNonDatabaseFields: boolean;
              }
    ): string[];
    mountTabularMap(
        permissionFields: string[],
        classKey: number,
        userKey: number,
        opt_filters?: {
            licenses: number[] | number;
            hideNotVisibleClasses: boolean;
            justProducts?: boolean;
        }
    ): DataSet;
    getParentReplicatedFieldNames(): string[];
    getChildrenReplicatedFieldNames(): string[];
    getExtraFiltersForClass(classKey: number): string[];
}
declare namespace PermissionSchema {
    const TARGET_FIELDS: string[];
    const PERIOD_FIELDS: string[];
    const INHERITANCE_FIELDS: string[];
    const _instance: PermissionSchema;
    function getInstance(): PermissionSchema;
}
import ClassDefManager = require('../classdef/ClassDefManager.js');
import DataSet = require('../dataset/DataSet.js');
