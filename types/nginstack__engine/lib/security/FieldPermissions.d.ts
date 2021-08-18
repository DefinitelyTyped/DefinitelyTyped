export = FieldPermissions;
declare function FieldPermissions(
    classKey: number,
    userKey: number,
    opt_options?: {
        allowNonClassFields: boolean;
    }
): void;
declare class FieldPermissions {
    constructor(
        classKey: number,
        userKey: number,
        opt_options?: {
            allowNonClassFields: boolean;
        }
    );
    allowNonClassFields_: boolean;
    classKey_: number;
    userKey_: number;
    visibilityPermissions_: {
        [x: string]: string;
    };
    changeabilityPermissions_: {
        [x: string]: string;
    };
    isVisible(fieldName: string): boolean;
    isChangeable(fieldName: string): boolean;
    private getFieldPermission_;
    private buildPermissionsMap_;
    protected getPermission_(fieldName: string): string;
    private load_;
}
