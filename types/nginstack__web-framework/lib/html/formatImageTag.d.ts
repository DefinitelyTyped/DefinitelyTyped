export = formatImageTag;
declare function formatImageTag(
    uri: number | string,
    opt_options?: {
        style?: string;
        id?: string;
        cssClass?: string;
        mailObject?: Mail;
    }
): string;
declare namespace formatImageTag {
    export { Mail };
}
type Mail = import('@nginstack/engine/lib/mail/Mail');
