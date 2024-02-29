export = PermissionFieldScope;
declare function PermissionFieldScope(): void;
declare class PermissionFieldScope {
    private classes_;
    private mimeTypes_;
    addClass(classKey: number): void;
    getClasses(): number[];
    getMimeTypes(): number[];
    addMimeType(typeKey: number): void;
}
