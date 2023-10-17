export = ParentPackageJson;

declare function ParentPackageJson(startPath?: string | null, ignore?: number): ParentPackageJson.ParentPackage | false;

declare namespace ParentPackageJson {
    interface ParentPackage {
        read(): string;
        path: string;
        parse(): { [key: string]: any };
    }
}
