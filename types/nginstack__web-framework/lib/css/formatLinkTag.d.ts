export = formatLinkTag;
declare function formatLinkTag(
    file: DBKey | string | number,
    options?: {
        attributes?: string;
    },
): string;
declare namespace formatLinkTag {
    export { DBKey };
}
type DBKey = import("@nginstack/engine/lib/dbkey/DBKey");
