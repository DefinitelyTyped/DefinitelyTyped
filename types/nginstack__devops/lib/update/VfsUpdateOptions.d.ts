export = VfsUpdateOptions;
declare function VfsUpdateOptions(): void;
declare class VfsUpdateOptions {
    updateType: number;
    files: Array<number | import("@nginstack/engine/lib/dbkey/DBKey")>;
    directories: Array<number | import("@nginstack/engine/lib/dbkey/DBKey")>;
}
declare namespace VfsUpdateOptions {
    export { DBKey };
}
type DBKey = import("@nginstack/engine/lib/dbkey/DBKey");
