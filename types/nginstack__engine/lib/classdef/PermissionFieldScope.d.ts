export = PermissionFieldScope;
declare function PermissionFieldScope(): void;
declare class PermissionFieldScope {
    classes_: number[];
    mimeTypes_: number[];
    addClass(classKey: number): void;
    getClasses(): number[];
    getMimeTypes(): number[];
    addMimeType(typeKey: number): void;
}
