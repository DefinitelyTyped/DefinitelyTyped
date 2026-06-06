export = HtmlSanitizer;
declare function HtmlSanitizer(): void;
declare class HtmlSanitizer {
    addAllowedTags(tags: string | string[]): void;
    addAllowedTagAttributes(tag: string, attributes: string | string[]): void;
    addAllowedUrlSchemes(schemes: string | string[]): void;
    removeAllowedTag(tag: string): boolean;
    removeAllowedTagAttribute(tag: string, opt_attrib?: string): boolean;
    removeAllowedUrlScheme(scheme: string): boolean;
    getAllowedTags(): string[];
    getAllowedTagAttributes(): any;
    getAllowedUrlSchemes(): string[];
    clean(content: string): string;
}
declare namespace HtmlSanitizer {
    function cleanHtml(content: string): string;
    function cleanText(content: string): string;
}
