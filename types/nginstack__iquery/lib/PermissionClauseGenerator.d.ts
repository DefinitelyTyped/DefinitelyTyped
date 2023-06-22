export = PermissionClauseGenerator;
declare function PermissionClauseGenerator(): void;
declare class PermissionClauseGenerator {
    private extrafilterClassMap_;
    private classesWithoutExtrafilter_;
    private iGroupUser_;
    private classDefManager_;
    private insertClassPermission_;
    addClassPermission(classKey: any, userKey: any): void;
    generate(classFieldName: any): any;
}
