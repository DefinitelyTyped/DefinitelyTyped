// Type definitions for insane 1.0.0

type AllowedSchemes = "http" | "https" | "mailto";

type AllowedTags =
    | "*"
    | "a"
    | "abbr"
    | "article"
    | "b"
    | "blockquote"
    | "br"
    | "caption"
    | "code"
    | "del"
    | "details"
    | "div"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "hr"
    | "i"
    | "img"
    | "ins"
    | "kbd"
    | "li"
    | "main"
    | "ol"
    | "p"
    | "pre"
    | "section"
    | "span"
    | "strong"
    | "sub"
    | "summary"
    | "sup"
    | "table"
    | "tbody"
    | "td"
    | "th"
    | "thead"
    | "tr"
    | "u"
    | "ul";

type EmptyObject = Record<string, never>;

type AllowedAttributes = Record<AllowedTags, string[]>;

type AllowedClasses = Record<AllowedTags, string[]> | EmptyObject;

interface Token {
    attrs: Record<string, string>;
    tag: AllowedTags;
}

type Filter = (token: Token) => boolean;

type TransformText = (text: string) => string;

interface SanitizeOptions {
    allowedAttributes?: Partial<AllowedAttributes>;
    allowedClasses?: Partial<AllowedClasses>;
    allowedSchemes?: AllowedSchemes[];
    allowedTags?: AllowedTags[];
    filter?: Filter;
    transformText?: TransformText;
}

declare const defaults: SanitizeOptions;

export = insane;
declare function insane(html: string, options?: SanitizeOptions, strict?: boolean): string;
declare namespace insane {
    export {
        type AllowedAttributes,
        type AllowedClasses,
        type AllowedSchemes,
        type AllowedTags,
        defaults,
        type Filter,
        type SanitizeOptions,
        type TransformText,
    };
}
