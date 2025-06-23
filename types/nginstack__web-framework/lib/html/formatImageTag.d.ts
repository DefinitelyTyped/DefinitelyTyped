export = formatImageTag;
declare function formatImageTag(
    uri: number | string,
    options?: {
        style?: string;
        id?: string;
        cssClass?: string;
        mailObject?: Email;
    },
): string;
declare namespace formatImageTag {
    export { Email };
}
type Email = import("@nginstack/engine/lib/email/Email");
