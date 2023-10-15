export = formatLinkTag;
declare function formatLinkTag(file: DBKey | string | number): string;
declare namespace formatLinkTag {
    export { DBKey };
}
type DBKey = import("@nginstack/engine/lib/dbkey/DBKey");
