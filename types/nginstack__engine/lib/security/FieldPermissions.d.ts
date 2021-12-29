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
    private allowNonClassFields_;
    private classKey_;
    private userKey_;
    private visibilityPermissions_;
    private changeabilityPermissions_;
    isVisible(fieldName: string): boolean;
    isChangeable(fieldName: string): boolean;
    private getFieldPermission_;
    private buildPermissionsMap_;
    protected getPermission_(fieldName: string): string;
    private load_;
}
