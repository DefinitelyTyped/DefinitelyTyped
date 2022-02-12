export = PermissionSchema;
declare function PermissionSchema(): void;
declare class PermissionSchema {
    private fieldsByMimeType_;
    private fieldsByClass_;
    private declaredFieldsByClass_;
    private databaseFieldNames_;
    private classDefManager_;
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
    function getInstance(): PermissionSchema;
}
import DataSet = require('../dataset/DataSet.js');
