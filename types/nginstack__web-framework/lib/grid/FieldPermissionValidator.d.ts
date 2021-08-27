export = FieldPermissionValidator;
declare function FieldPermissionValidator(
    manager: any,
    permField: string,
    classKey: number,
    userKey: number
): void;
declare class FieldPermissionValidator {
    constructor(manager: any, permField: string, classKey: number, userKey: number);
    private handlerFunc_;
    private makeDeprecatedHandler_;
    hasPermission(fieldName: string): boolean;
}
